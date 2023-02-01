import { Component} from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

constructor(
  private router:Router,){

  }


  Logout(){

    Swal.fire({
      title: 'Estás seguro que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Vuelve Pronto!',
          'Se ha cerrado sesión.',
          'success'
        );
        this.router.navigate(['/']);
        localStorage.setItem('estado','inactivo');
      }
    })

  }
}
