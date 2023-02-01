import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   
    if(this.getLogin() == true) {
      return true;
    } else {
      Swal.fire({
        icon:'info',
        title:'Debes iniciar sesión para poder acceder',
        heightAuto:false
      })
      return false
    }

}

getLogin():boolean {
  var isLog = localStorage.getItem('estado');
  
  if (isLog == "activo"){
    return true;
  } else {
    return false;
  }
}
  
}
