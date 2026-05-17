import { Component, inject, OnInit } from '@angular/core';
import { ReceitaService } from '../../../services/receita.service';
import { Receita } from '../../../models/receita.model';
import { CardModule } from 'primeng/card';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-receita-lista',
  imports: [CardModule, AsyncPipe, PanelModule, ButtonModule],
  templateUrl: './receita-lista.html',
  styleUrl: './receita-lista.scss',
})
export class ReceitaLista implements OnInit{
  private receitaService: ReceitaService = inject(ReceitaService);

  receitas: Observable<Receita[]> = this.receitaService.listar();

  ngOnInit() {

  }
}
