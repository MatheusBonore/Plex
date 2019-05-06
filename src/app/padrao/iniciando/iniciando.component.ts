import { Component, OnInit, ViewChild } from '@angular/core';
import { Resolucao } from 'src/app/model/resolucao.class';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  @ViewChild('formIniciando') public formIniciando :NgForm;

  public resolucaoModel :Resolucao = new Resolucao(null,null);

  constructor(
    private router :Router
  ) { }

  ngOnInit():void { }

  public proximoPasso() :void {

    this.router.navigateByUrl('resolucoes');
  }
}
