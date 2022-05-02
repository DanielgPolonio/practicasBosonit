import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input-parent/input.config';

@Component({
  selector: 'app-input-time',
  templateUrl: './input-time.component.html',
  styleUrls: ['./input-time.component.scss']
})
export class InputTimeComponent implements OnInit {

  @Input() config: InputConfig;
  model: any;
  property: string;

  constructor() { }

  ngOnInit(): void {
    this.model= this.config.modelProperty.model;
    this.property= this.config.modelProperty.property;
  }

}
