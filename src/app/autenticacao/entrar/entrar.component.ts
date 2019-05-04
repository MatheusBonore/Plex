import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Usuario } from 'src/app/model/usuario.interface';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['../autenticacao.component.css']
})
export class EntrarComponent implements OnInit {

  public formLogin: Usuario = {
    email: '',
    senha: ''
  }

  constructor() { }

  ngOnInit(): void {}

  public efetuarLogin(form: NgForm): void {
    console.log(form.valid)
    if (form.valid) { }
  }
}
