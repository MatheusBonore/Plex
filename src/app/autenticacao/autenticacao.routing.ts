import { Route } from "@angular/router";
import { AutenticacaoComponent } from './autenticacao.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

export const autenticacaoRoutes :Route[] = [
    {
        path: '',        
        component: AutenticacaoComponent,
            children: [
              {
                path: '',
                pathMatch: 'full',
                redirectTo: 'entrar'
              }, {
                path: 'entrar',
                component: EntrarComponent
              }, {
                path: 'cadastrar',
                component: CadastrarComponent
              }
            ]
    }
]
