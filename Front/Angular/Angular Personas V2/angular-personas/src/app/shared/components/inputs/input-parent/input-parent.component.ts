import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-input-parent',
  templateUrl: './input-parent.component.html',
  styleUrls: ['./input-parent.component.scss']
})
export class InputParentComponent implements OnInit {

  @Input() inputs:object;

  inputJson:any;
  constructor() { }

  ngOnInit(): void {
    this.inputJson=this.inputs;
}
}