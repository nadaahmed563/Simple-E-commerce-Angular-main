import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() item!:any;
  @Output() data = new EventEmitter();
  addButton:boolean = false
  amount:number = 1

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.data.emit({data:this.item , quantity:this.amount})
  }

}
