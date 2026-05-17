import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Receita, ReceitaTransferencia } from '../models/receita.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReceitaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/receitas';

  listar(): Observable<Receita[]> {
    return this.http.get<Receita[]>(this.apiUrl);
  }

  buscarPorID(id: number): Observable<Receita> {
    return this.http.get<Receita>(`${this.apiUrl}/${id}`);
  }

  filtarPorTitulo(filtro: string): Observable<Receita[]> {
    return this.http.get<Receita[]>(`${this.apiUrl}?filtro=${filtro}`);
  }

  criar(receita: ReceitaTransferencia): Observable<Receita> {
    return this.http.post<Receita>(this.apiUrl, receita);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
