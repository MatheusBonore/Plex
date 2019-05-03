import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacaoComponent } from './autenticacao.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { autenticacaoRoutes } from './autenticacao.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AutenticacaoComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(autenticacaoRoutes)
  ],
  providers: [],
})
export class AutenticacaoModule { }
