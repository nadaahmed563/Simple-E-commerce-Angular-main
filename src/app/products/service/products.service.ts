import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  item:any

  constructor(public http:HttpClient) { }

  getAllProducts(){
    return this.http.get(environment.BaseUrl+'/products')
  }
  getAllCategories() {
    return this.http.get(environment.BaseUrl + '/products/categories')
  }
  getProductsByCategory(category:any) {
    return this.http.get(environment.BaseUrl+'/products/category/'+category)
  }
  getProductsById(id:any) {
    return this.http.get(environment.BaseUrl+'/products/'+id)
  }
}
