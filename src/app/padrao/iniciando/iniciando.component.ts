import { Component, OnInit } from '@angular/core';
import { Resolucao } from 'src/app/model/resolucao.class';

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  resolucaoModel = new Resolucao(null,null);

  constructor() { }

  ngOnInit():void { }

}
