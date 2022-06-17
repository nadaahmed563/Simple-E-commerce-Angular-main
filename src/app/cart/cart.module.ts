import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
