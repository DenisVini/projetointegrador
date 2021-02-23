import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComponenteLojaFarmaciaComponent } from './componente-loja-farmacia/componente-loja-farmacia.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';

import { ServicosGeraisComponent } from './servicos-gerais/servicos-gerais.component';
import { MerceariasComponent } from './mercearias/mercearias.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PadariasComponent } from './padarias/padarias.component';
import { CosturaComponent } from './costura/costura.component';
import { PetshopComponent } from './petshop/petshop.component';
import { SacolaoComponent } from './sacolao/sacolao.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';


const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastro-empresa', component: CadastroEmpresaComponent},
  {path:'cadastro-usuario', component: CadastroUsuarioComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'cadastro-produto', component: CadastroProdutoComponent},
  {path:'forma-pagamento', component: FormaPagamentoComponent},
  {path:'inicio', component: InicioComponent},
  {path:'farmacia/:id', component: ComponenteLojaFarmaciaComponent}, //levando da pagina home até a pagina farmacia - colocar para as próximas paginas ex: ferramentas/:id
  
  {path:'servicos-gerais/:id', component: ServicosGeraisComponent},
  {path:'mercearias/:id', component: MerceariasComponent},
  {path:'restaurantes/:id', component: RestaurantesComponent},
  {path:'padarias/:id', component: PadariasComponent},
  {path:'costura/:id', component: CosturaComponent},
  {path:'petshop/:id', component: PetshopComponent},
  {path:'sacolao/:id', component: SacolaoComponent},
  {path:'meu-perfil', component: MeuPerfilComponent},
  {path:'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
