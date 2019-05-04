import { Routes } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

import { PadraoComponent } from './padrao/padrao.component';
import { IniciarComponent } from './padrao/iniciar/iniciar.component';
import { IniciandoComponent } from './padrao/iniciando/iniciando.component';
import { AjudaComponent } from './padrao/ajuda/ajuda.component';
import { ResolucoesComponent } from './padrao/resolucoes/resolucoes.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/iniciar'
  }, {
    path: '',
    component: PadraoComponent,
    children: [
      {
        path: 'iniciar',
        component: IniciarComponent
      }, {
        path: 'iniciando',
        component: IniciandoComponent
      }, {
        path: 'ajuda',
        component: AjudaComponent
      }, {
        path: 'resolucoes',
        component: ResolucoesComponent
      }
    ]   
  }, {
    path: 'autenticacao',
    loadChildren: './autenticacao/autenticacao.module#AutenticacaoModule'
  }, {
    path: '**',
    pathMatch: 'full',
    component: NaoEncontradoComponent
  }
];