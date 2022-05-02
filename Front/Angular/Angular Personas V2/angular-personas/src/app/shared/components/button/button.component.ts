import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonConfig } from './button.config';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() buttonJson:ButtonConfig;
  @Output() isClickedButton:EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {    
  }
  onClick(event : MouseEvent){
   this.isClickedButton.emit(event);
  }
}
