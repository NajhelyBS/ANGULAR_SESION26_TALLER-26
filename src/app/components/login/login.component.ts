import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  datos:any = [];

  public Login!:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userservice:UserService,
    private router:Router,
  )
  
  {
    this.Login= new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(2)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),

  });
  }

  ngOnInit(): void {
    localStorage.setItem('estado','inactivo');
    this.userservice.getData().subscribe(res => {
    this.datos = res;
    });
  }


  Datos() {

    const user = this.Login.controls['username'].value;
    const pass = this.Login.controls['password'].value;

    let found = false;

    for (const data of this.datos) {

      //buscando si existe dentro del json
      if (data.username === user && data.email === pass) {
          found = true;
          break;
        }
      }
      if (found) {
        console.log("encontrado");
        localStorage.setItem('estado','activo');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/home'])

      } else {
        console.log("no encontrado");
        localStorage.setItem('estado','inactivo')
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Datos incorrectos',
          showConfirmButton: false,
          timer: 1500
        });
      }
    
    
}


}