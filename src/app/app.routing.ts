import { Routes } from '@angular/router';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/iniciar'
  }, {
    path: '',
    loadChildren: './padrao/padrao.module#PadraoComponent'    
  }, {
    path: 'autenticacao',
    loadChildren: './autenticacao/autenticacao.module#AutenticacaoModule'
  }, {
    path: '**',
    pathMatch: 'full',
    component: NaoEncontradoComponent
  }
];