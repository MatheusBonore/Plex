import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { padraoRoutes } from './padrao.routing';

import { PadraoComponent } from './padrao.component';
import { IniciandoComponent } from './iniciando/iniciando.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ResolucoesComponent } from './resolucoes/resolucoes.component';

@NgModule({
    declarations: [
        PadraoComponent,
        IniciandoComponent,
        AjudaComponent,
        ResolucoesComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(padraoRoutes)
    ],
    providers: [

    ]
})
export class PadraoModule { }