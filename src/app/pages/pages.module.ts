import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Router, RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
  ]
})
export class PagesModule { }
