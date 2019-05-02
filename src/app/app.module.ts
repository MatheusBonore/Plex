import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { appRoutes } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

import { PadraoComponent } from './padrao/padrao.component';
import { NavbarComponent } from './padrao/navbar/navbar.component';

import { IniciarComponent } from './padrao/iniciar/iniciar.component';
import { IniciandoComponent } from './padrao/iniciando/iniciando.component';
import { AjudaComponent } from './padrao/ajuda/ajuda.component';
import { ResolucoesComponent } from './padrao/resolucoes/resolucoes.component';

import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { CadastrarComponent } from './autenticacao/cadastrar/cadastrar.component';
import { EntrarComponent } from './autenticacao/entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    NaoEncontradoComponent,
    PadraoComponent,
    NavbarComponent,
    IniciarComponent,
    IniciandoComponent,
    AjudaComponent,
    ResolucoesComponent,
    AutenticacaoComponent,
    CadastrarComponent,
    EntrarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
