import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetalleComponent } from './detalle/detalle.component';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [
    LoginComponent,
    DisplayComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    DisplayComponent,
    LoginComponent,
    DetalleComponent,
  ]
})
export class ComponentsModule { }
