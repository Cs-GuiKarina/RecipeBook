import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from "primeng/button";
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { Tooltip } from "primeng/tooltip";

@Component({
  selector: 'app-receita-menu',
  imports: [
    MenubarModule,
    InputTextModule,
    RippleModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    ButtonModule,
    RouterLink,
    Tooltip
],
  templateUrl: './receita-menu.html',
  styleUrl: './receita-menu.scss',
})
export class ReceitaMenu implements OnInit {
  private router = inject(Router);
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Listar',
        icon: 'pi pi-list',
        tooltip: 'Listar todas as receitas',
        command: () => this.navegarParaLista(),
      },
      {
        label: 'Cadastrar',
        icon: 'pi pi-plus',
        tooltip: 'Cadastrar nova receita',
        command: () => this.navegarParaCadastro(),
      },
    ];
  }

  navegarParaLista() {
    this.router.navigate(['/receitas']);
  }

  navegarParaCadastro() {
    this.router.navigate(['/receitas/criar']);
  }
}
