import { Routes } from '@angular/router';

import { PadraoComponent } from './padrao/padrao.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'iniciar',
    }, {
        path: '',
        component: PadraoComponent,
        children: [

        ]
    }, {
        path: '**',
        pathMatch: 'full',
        component: NaoEncontradoComponent
    }
];