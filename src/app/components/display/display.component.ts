import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

users:any = []; //almacenamiento del api

page_actual = 1;

constructor(private userservice:UserService){}

ngOnInit(): void {
  console.log("Display de data");
  this.getdatos();
}

//leer api
getdatos(){
  this.userservice.getData().subscribe(
    res => {
      this.users = res;

    }, err => {
      console.log(err);
    }
  )
};

}
