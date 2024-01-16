import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produto} from "./produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  private produtoUrl: string;

  constructor(private http: HttpClient) {
    this.produtoUrl = 'http://localhost:8080/produtos';
  }

  public listarTodos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtoUrl);
  }

  public listarPalavra(word: string): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtoUrl + "/busca/" + word);
  }

  public listarId(id: number): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtoUrl + "/id/" + id);
  }

  public adicionar(produto: Produto) {
    return this.http.post<Produto>(this.produtoUrl, produto);
  }

  public excluir(id: number) {
    return this.http.delete(this.produtoUrl + "/" + id);
  }

  public editar(produto: Produto) {
    return this.http.put<Produto>(this.produtoUrl, produto);
  }
}
