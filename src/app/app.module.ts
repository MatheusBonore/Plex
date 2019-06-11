import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { appRoutes } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

import { PadraoComponent } from './padrao/padrao.component';
import { NavbarComponent } from './padrao/navbar/navbar.component';

import { IniciarComponent } from './padrao/iniciar/iniciar.component';

import { IniciandoComponent } from './padrao/iniciando/iniciando.component';
import { NaoMostrarIntroducaoGuard } from './guards/nao-mostrar-introducao/nao-mostrar-introducao.guard';

import { AjudaComponent } from './padrao/ajuda/ajuda.component';
import { ResolucoesComponent } from './padrao/resolucoes/resolucoes.component';
import { PlexService } from './services/plex/plex.service';
import { ResultadoComponent } from './padrao/resultado/resultado.component';
import { MochilaComponent } from './padrao/mochila/mochila.component';

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
    ResultadoComponent,
    MochilaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    NaoMostrarIntroducaoGuard,
    PlexService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }