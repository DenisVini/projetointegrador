import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-meu-perfil',
  templateUrl: './meu-perfil.component.html',
  styleUrls: ['./meu-perfil.component.css']
})
export class MeuPerfilComponent implements OnInit {
  
  user: Usuario = new Usuario()
  tipoUsuario: string
  
  
  constructor(
    private rota: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    //instancie o usuario logado no objeto user no componente de meu perfil
    //user = this.authService.getUser(environment.id)
  }
  editar() {
    this.authService.atualizar(this.user).subscribe((resp: Usuario) => {
      this.user = resp
      console.log(resp)
      alert('Usuário atualizado!')
      this.rota.navigate(['/inicio'])
    });
  }
  confirmarSenha(event: any) {
  }
  logado(){
    let ok = false
    if (environment.token != ''){
      ok = true
    }
    return ok
  }
}