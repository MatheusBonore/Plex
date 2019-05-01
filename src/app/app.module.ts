import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadraoComponent } from './padrao/padrao.component';
import { IniciarComponent } from './iniciar/iniciar.component';
import { IniciandoComponent } from './iniciando/iniciando.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ResolucoesComponent } from './resolucoes/resolucoes.component';

@NgModule({
  declarations: [
    AppComponent,
    PadraoComponent,
    IniciarComponent,
    IniciandoComponent,
    AjudaComponent,
    ResolucoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
