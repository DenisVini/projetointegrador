import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from '../model/carrinho';
import { CategoriaProduto } from '../model/categoriaProduto';
import { Produto } from '../model/produto';
import { CarrinhoService } from '../service/carrinho.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  categoria: CategoriaProduto= new CategoriaProduto()
  idCategoria: number

  listaProdutos:Produto[];
  carrinho:Carrinho = new Carrinho();

  produtinho:Produto = new Produto;
  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private produtoService:ProdutoService,
    private carrinhoService:CarrinhoService
  ){ }

  ngOnInit() {

    this.idCategoria= this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  findByIdProduto(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.produtinho = resp
      console.log('teste')
    })
  }


  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: CategoriaProduto ) =>{
      this.categoria = resp

    })
  }


  addCarrinho(id:number){
    this.produtoService.getByIdProduto(id).subscribe((resp:Produto)=>{
      this.carrinho = new Carrinho()
      this.carrinho.produto = resp
      this.postCarrinho(this.carrinho)
      console.log(this.carrinho.produto)
      alert("Produto adicionado ao carrinho")
    })
  }

  postCarrinho(carrinho:Carrinho){
    this.carrinhoService.postCarrinho(carrinho).subscribe((resp:Carrinho)=>{
      this.carrinho = resp
    })
  }
}
