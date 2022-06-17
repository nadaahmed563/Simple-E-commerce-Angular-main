import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    SharedComponent,
    HeaderComponent,
    SpinnerComponent,
    SelectBoxComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectBoxComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
