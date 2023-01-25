import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    LoginComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DisplayComponent,
    LoginComponent,
  ]
})
export class ComponentsModule { }
