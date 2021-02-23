import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/usuario';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  user: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string
  constructor(
    private authService: AuthService,
    private rota:Router
  ) { }
  ngOnInit() {
    window.scroll(0,0)
  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }
  tipoUser(event:any){
    this.tipoUsuario = event.target.value
  }
  cadastrar(){
    this.user.tipo = this.tipoUsuario
    if(this.user.senha != this.confirmarSenha){
      alert('As senhas estão incompativeis.')
    }else{
      this.authService.cadastrar(this.user).subscribe((resp: Usuario)=>{
        this.user = resp
        this.rota.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })
    }
  }
}