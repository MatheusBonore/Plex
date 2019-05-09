import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaoMostrarIntroducaoGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let naoMostrarIntroducao: boolean = !!localStorage.getItem('nao-mostrar-introducao');
    if (naoMostrarIntroducao) this.router.navigateByUrl('/iniciando');

    return !naoMostrarIntroducao;
  }
}
