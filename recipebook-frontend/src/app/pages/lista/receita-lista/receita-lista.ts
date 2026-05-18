import { Component, inject, OnInit } from '@angular/core';
import { ReceitaService } from '../../../services/receita.service';
import { Receita } from '../../../models/receita.model';
import { CardModule } from 'primeng/card';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { DividerModule } from 'primeng/divider';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageModule } from 'primeng/message';

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
  ],
  templateUrl: './receita-lista.html',
  styleUrl: './receita-lista.scss',
})
export class ReceitaLista implements OnInit {
  private receitaService: ReceitaService = inject(ReceitaService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
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


  receitas: Observable<Receita[]> = this.receitaService.listar();

  ngOnInit() {
    const sucesso = this.activatedRoute.snapshot.queryParamMap.get('cadastroSucesso');
    if (sucesso === 'true') {
      this.sucessoAoCriar = true;
    }
  }
}
