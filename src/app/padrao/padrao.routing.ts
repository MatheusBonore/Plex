import { Routes } from '@angular/router';

import { PadraoComponent } from './padrao.component';
import { IniciandoComponent } from './iniciando/iniciando.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ResolucoesComponent } from './resolucoes/resolucoes.component';

export const padraoRoutes: Routes = [
    {
        path: '',
        component: PadraoComponent,
        children: [
            {
                path: 'iniciar',
                component: IniciandoComponent
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
    }
];