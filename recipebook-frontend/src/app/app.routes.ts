import { Routes } from '@angular/router';
import { ReceitaLista } from './pages/lista/receita-lista/receita-lista';
import { ReceitaCadastro } from './pages/form/receita-cadastro/receita-cadastro';
import { ReceitaIntro } from './pages/intro/receita-intro/receita-intro';

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: ReceitaIntro},
  {path: 'receitas', component: ReceitaLista},
  {path: 'receitas/criar', component: ReceitaCadastro},
];
