import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  @Input()title!:any
  @Input()data:any[] =[]
  @Output() selectedValue = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  detectChanges(event:any){
    this.selectedValue.emit(event)
  }

}
