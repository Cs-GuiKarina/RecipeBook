import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DividerModule } from 'primeng/divider';
import { DrawerModule } from 'primeng/drawer';
import { MessageModule } from 'primeng/message';
import { PanelModule } from 'primeng/panel';
import { Observable } from 'rxjs';
import { Receita } from '../../../models/receita.model';
import { ReceitaService } from '../../../services/receita.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-receita-lista',
  imports: [
    CardModule,
    AsyncPipe,
    PanelModule,
    ButtonModule,
    DrawerModule,
    DividerModule,
    DatePipe,
    MessageModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './receita-lista.html',
  styleUrl: './receita-lista.scss',
})
export class ReceitaLista implements OnInit {
  private receitaService: ReceitaService = inject(ReceitaService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);
  sucessoAoCriar: boolean = false;
  mostrandoDrawer: boolean = false;
  idAmostra: number = -1;
  deixarVisivel(id: number) {
    this.idAmostra = id;
    this.mostrandoDrawer = true;
  }
  removerQuery() {
    this.router.navigate([], {
      queryParams: { cadastroSucesso: null },
      queryParamsHandling: 'merge',
    });
  }
  deletarReceita(id: number) {
    this.receitaService.deletar(id);
    this.idAmostra = -1;
    this.mostrandoDrawer = false;
  }

  confirmacao(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Você tem certeza que deseja deletar esta receita?',
      header: 'Deletar Receita',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Deletar',
        severity: 'danger',
      },

      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Receita deletada',
        });
        this.deletarReceita(this.idAmostra);
      },
      reject: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Cancelado',
          detail: 'Receita não foi deletada',
        });
      },
    });
  }

  receitas: Observable<Receita[]> = this.receitaService.listar();

  ngOnInit() {
    const sucesso = this.activatedRoute.snapshot.queryParamMap.get('cadastroSucesso');
    if (sucesso === 'true') {
      this.sucessoAoCriar = true;
    }
  }
}
