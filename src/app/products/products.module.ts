import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsService } from './service/products.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent,
    AllProductsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SharedModule,
    RouterModule
    
  ],
  exports: [
    ProductsDetailsComponent,
    AllProductsComponent
  ],
})
export class ProductsModule { }
