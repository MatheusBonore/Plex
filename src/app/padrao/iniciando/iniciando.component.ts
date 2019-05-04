import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Teste } from 'src/app/model/teste.interface';

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  public formTeste: Teste = {
    a: 0,
    b: 0
  }

  constructor() { }

  ngOnInit() :void { }

  public avancar(form: NgForm): void {
    console.log(form.valid)
    if (form.valid) { }
  }
}
