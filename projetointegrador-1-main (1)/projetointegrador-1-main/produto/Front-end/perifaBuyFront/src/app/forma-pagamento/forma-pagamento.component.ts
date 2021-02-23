import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Carrinho } from '../model/carrinho';
import { CarrinhoService } from '../service/carrinho.service';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.component.html',
  styleUrls: ['./forma-pagamento.component.css']
})
export class FormaPagamentoComponent implements OnInit {

  listaCarrinho: Carrinho[];
  nome = environment.nome
  constructor( private carrinhoService: CarrinhoService) { }

  ngOnInit(){
    window.scroll(0,0)
    this.findAllCarrinho()
  }


  findAllCarrinho() {
    this.carrinhoService.getAllCarrinho().subscribe((resp: Carrinho[]) => {
      this.listaCarrinho = resp
      console.log(this.listaCarrinho)
    })
  }

  total(){
    var totalValor = 0

    for(let produtos of this.listaCarrinho){
      totalValor += produtos.produto.precoUnitario

    }
    return totalValor
  }

  delete() {
    console.log();
    this.carrinhoService.deleteAllCarrinho().subscribe(() => {});
    this.findAllCarrinho();
  }
  
}
