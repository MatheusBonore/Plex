import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {

  public naoMostrarNovamente: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public iniciarResolucao(): void {
    this.verificarNaoMostrarIntroducao();
    this.router.navigateByUrl('/iniciando');
  }

  private verificarNaoMostrarIntroducao(): void {
    if (this.naoMostrarNovamente) {
      localStorage.setItem('nao-mostrar-introducao', 'true');
      // localStorage.removeItem('nao-mostrar-introducao');
    }
  }
}
