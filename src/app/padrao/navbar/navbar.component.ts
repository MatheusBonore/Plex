import { AfterViewInit, Component, OnInit, QueryList, ViewChildren, ViewChild, ElementRef, TemplateRef, } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

declare interface Link {
  nome: string;
  path: string;
}

declare type Links = Link[];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public linkSelecionado: any;

  public links: Links = [
    {
      nome: 'Iniciar',
      path: '/iniciar'
    }, {
      nome: 'Ajuda',
      path: '/ajuda'
    }, {
      nome: 'Resolução',
      path: '/resolucoes'
    }
  ];

  constructor(private router: Router, private location: Location) {
    console.log();
   }

  ngOnInit(): void {}

  public seEncontraNoLink(link: Link): boolean {
    return this.location.path() === link.path;
  }

}
