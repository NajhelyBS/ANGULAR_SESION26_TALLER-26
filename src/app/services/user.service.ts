import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  urlJSON = "https://jsonplaceholder.typicode.com/users";


  constructor(private http:HttpClient) { 
    console.log("Conneción correcta con el servidor")
  }

  ngOnInit(): void {
    this.getData();
  }

  //consume del API
  getData(){
    return this.http.get<any>(this.urlJSON);
  }
}
