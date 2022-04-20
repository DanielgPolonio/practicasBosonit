import {Component,Input,OnInit} from '@angular/core';
import { InputConfig } from '../input-parent/input.config';



@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],

})
export class InputTextComponent implements OnInit {

  @Input() config: InputConfig;
  model: any;
  property: string;
  pattern = /[a-zA-Zñá-úä-ü\s]/;
  char: string;
  constructor() {}

  ngOnInit(): void {
    this.model= this.config.modelProperty.model;
    this.property= this.config.modelProperty.property;
  }

  onlyLetters(event: KeyboardEvent) {
    this.char = event.key;
    if (!this.pattern.test(this.char)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
