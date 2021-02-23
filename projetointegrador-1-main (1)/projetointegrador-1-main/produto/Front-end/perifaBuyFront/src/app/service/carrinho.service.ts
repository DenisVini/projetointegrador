import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Carrinho } from '../model/carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization',environment.token)
  }

  getAllCarrinho():Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>('http://localhost:8080/carrinho/getAll')
  }

  getByIdCarrinho():Observable<Carrinho[]>{
    return this.http.get<Carrinho[]>('http://localhost:8080/carrinho/meu_carrinho/{id}', this.token)
  }

  postCarrinho(carrinho:Carrinho):Observable<Carrinho>{
    return this.http.post<Carrinho>('http://localhost:8080/carrinho/post', carrinho, this.token)
  }

  deleteByIdCarrinho(id:number){
    return this.http.delete(`http://localhost:8080/carrinho/delete/${id}`,this.token)
  }

  deleteAllCarrinho(){
    return this.http.delete(`http://localhost:8080/carrinho/delete`,this.token)
  }


}
