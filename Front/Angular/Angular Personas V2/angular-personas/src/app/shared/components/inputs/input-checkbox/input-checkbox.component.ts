import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from '../input-parent/input.config';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {
  @Input() config:InputConfig;
  model: any;
  property: string;

  constructor() { }

  ngOnInit(): void {
    this.model= this.config.modelProperty.model;
    this.property= this.config.modelProperty.property;
  }

}
