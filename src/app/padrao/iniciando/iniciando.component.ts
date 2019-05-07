import { Component, OnInit, ViewChild } from '@angular/core';
import { Resolucao } from 'src/app/model/resolucao.class';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare interface Opcao {
  nome: string;
  value: boolean;
}

declare type Opcoes = Opcao[];

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  @ViewChild('resolucaoForm') public resolucaoForm :NgForm;

  public resolucaoModel :Resolucao = new Resolucao(null,null,true);
  public opcoes: Opcoes = [
    {
      nome: 'Maximizar',
      value: true
    }, {
      nome: 'Minimizar',
      value: false,
    }
  ];

  constructor(private router :Router) { }

  ngOnInit():void { }

  public proximoPasso() :void {
    console.log(this.resolucaoForm.value)
    // this.router.navigateByUrl('resolucoes');
  }
}
