
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';// IMPORTANT
import { registerLocaleData } from '@angular/common';// IMPORTANT
import localePt from '@angular/common/locales/pt';// IMPORTANT
registerLocaleData(localePt); // IMPORTANT
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { SelecaoCategoriaComponent } from './selecao-categoria/selecao-categoria.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormaPagamentoComponent } from './forma-pagamento/forma-pagamento.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { InicioComponent } from './inicio/inicio.component';
import { DestaquesPrincipaisComponent } from './destaques-principais/destaques-principais.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ComponenteLojaFarmaciaComponent } from './componente-loja-farmacia/componente-loja-farmacia.component';
import { ContatoComponent } from './contato/contato.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';

import { ServicosGeraisComponent } from './servicos-gerais/servicos-gerais.component';
import { MerceariasComponent } from './mercearias/mercearias.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { PadariasComponent } from './padarias/padarias.component';
import { CosturaComponent } from './costura/costura.component';
import { PetshopComponent } from './petshop/petshop.component';
import { SacolaoComponent } from './sacolao/sacolao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastroUsuarioComponent,
    SelecaoCategoriaComponent,
    FormaPagamentoComponent,
    CadastroEmpresaComponent,
    CarrinhoComponent,
    CadastroProdutoComponent,
    InicioComponent,
    DestaquesPrincipaisComponent,
    ComponenteLojaFarmaciaComponent,
    ContatoComponent,
    MeuPerfilComponent,

    ServicosGeraisComponent,
    MerceariasComponent,
    RestaurantesComponent,
    PadariasComponent,
    CosturaComponent,
    PetshopComponent,
    SacolaoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
      //
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    // provide: LOCALE_ID, useValue: "pt-BR" tem que ver como fazer isso aqui funcionar
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
