import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { autenticacaoRoutes } from './autenticacao.routing';

import { AutenticacaoComponent } from './autenticacao.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AutenticacaoComponent,
    EntrarComponent,
    CadastrarComponent
  ],
  imports: [
    RouterModule.forChild(autenticacaoRoutes)
  ],
  providers: []
})
export class AutenticacaoModule { }
