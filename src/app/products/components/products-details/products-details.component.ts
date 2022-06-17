import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any;
  loading:boolean = false

  constructor(private route: ActivatedRoute, private _ProductsService: ProductsService) { 
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id);
    
  }

  ngOnInit(): void {
    this.getProductId()
  }
  getProductId(){
    this.loading = true
    this._ProductsService.getProductsById(this.id).subscribe((res:any)=>{
      this.data = res
      this.loading = false
    } , error =>{
      this.loading = false
      alert("error")
    })
  }

}
