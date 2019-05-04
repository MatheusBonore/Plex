import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'src/app/model/usuario.interface';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['../autenticacao.component.css']
})
export class CadastrarComponent implements OnInit {

  public formLogin: Usuario = {
    email: '',
    senha: ''
  }
  constructor() { }

  ngOnInit():void { }

  public efetuarLogin(form: NgForm): void {
    console.log(form.valid)
    if (form.valid) { }
  }
}
