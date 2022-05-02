import { Component, Input, OnInit } from '@angular/core';
import { InputConfig } from './input.config';
@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.scss']
})
export class InputParentComponent implements OnInit {

  @Input() inputs: any;
  constructor() { }

  ngOnInit(): void {
}
}