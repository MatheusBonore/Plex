import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PlexService } from 'src/app/services/plex/plex.service';

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

  @ViewChild('resolucaoForm') public resolucaoForm: NgForm;

  public opcoes: Opcoes = [
    {
      nome: 'Maximizar',
      value: true
    }, {
      nome: 'Minimizar',
      value: false,
    }
  ];

  constructor(
    private router: Router,
    private plexService: PlexService
  ) { }

  ngOnInit(): void { }

  public proximoPasso(r: NgForm): void {
    // this.router.navigateByUrl('resolucoes');
  }
}
