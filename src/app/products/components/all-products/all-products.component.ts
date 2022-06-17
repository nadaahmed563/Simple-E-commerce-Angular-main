import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products:any[]=[];
  categories:any[]=[];
  cartProducts:any[] = []
  loading:boolean = false

  constructor(private _ProductsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProduct()
    this.getCategories()
  }
  getAllProduct(){
    this.loading = true
    this._ProductsService.getAllProducts().subscribe((res:any)=>{
      this.products = res
      this.loading = false
    }, error => {
      alert('error')
    }) 
  }
  getCategories(){
    this.loading = true   
    this._ProductsService.getAllCategories().subscribe((res:any)=>{   
      this.categories = res
      this.loading = false
    }, error => {
      alert('error')
    }) 
  }
  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    if(value == 'all'){
      this.getAllProduct()
    }else{
      this.getProductsCategory(value)
    }
  }
  getProductsCategory(category:any){
    this.loading = true
    this._ProductsService.getProductsByCategory(category).subscribe((res:any)=>{
        console.log(res);
        this.products = res
      this.loading = false
    })
  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts.push(event)
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      this.itemExist(event)
    }else{
      this.cartProducts.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
  // Check If item Exist In Cart
  itemExist(itemData:any){
    let exist = this.cartProducts.find(item=>item.data.id == itemData.data.id)
    if(exist){
      alert("Product is already in your Cart")
    }else{
      this.cartProducts.push(itemData)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
}
