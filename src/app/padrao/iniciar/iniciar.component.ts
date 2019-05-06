import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit():void { }

  public iniciarResolucao(): void {
    this.router.navigateByUrl('/iniciando');
  }
}
