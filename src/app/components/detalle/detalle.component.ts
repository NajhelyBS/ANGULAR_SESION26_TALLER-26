import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: any;
  userID: any = [];


  constructor(
    private userservice:UserService,
    private route:ActivatedRoute,
  ){}

ngOnInit(): void {
  
  this.id = this.route.snapshot.paramMap.get('id');
  this.userservice.getData().subscribe(res => {
    this.userID = res
  });
}
 
  
}
