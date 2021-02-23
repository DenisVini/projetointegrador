import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }



  entrar(userLogin:UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
    //TEM QUE COLOCAR O ENDPOINT CORRETO
  }

  cadastrar(user:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
    //TEM QUE COLOCAR O ENDPOINT CORRETO
  }


  logado(){
    let ok = false
    if (environment.token != ''){
      ok = true
    }
    return ok
  }

  atualizar(user:Usuario) {
    return this.http.put<Usuario>('http://localhost:8080/usuarios/atualizar', user)
  }
}
