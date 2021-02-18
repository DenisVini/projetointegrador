import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent implements OnInit {

  nome = environment.nome
  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }


  
}
