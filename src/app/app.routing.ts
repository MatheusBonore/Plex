import { Routes } from '@angular/router';

import { PadraoComponent } from './padrao/padrao.component';

import { IniciarComponent } from './iniciar/iniciar.component';
import { IniciandoComponent } from './iniciando/iniciando.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ResolucoesComponent } from './resolucoes/resolucoes.component';

import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/iniciar',
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
    path: '**',
    pathMatch: 'full',
    component: NaoEncontradoComponent
  }
];