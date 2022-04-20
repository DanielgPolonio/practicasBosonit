import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonJson:any;
  @Output() isClickedButton:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {    
  }
  onClick(event : Event){
   this.isClickedButton.emit(event);
  }
}
