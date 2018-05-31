import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {
constructor(private _router: Router) {

}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const id = next.url[1].path; // Recupere le secon argument de l'URL et le convertir en entier

    if ( isNaN(+id) || (+id < 1)) {
    alert(`Attention , le ID ${id} doit etre num, on vous redigera vers Home Page`);
    this._router.navigate(['/welcome']);
    return false;
  }


    return true;
  }
}
