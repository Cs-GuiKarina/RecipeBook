import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceitaMenu } from './pages/menu/receita-menu/receita-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReceitaMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
