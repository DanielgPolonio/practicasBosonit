import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-checkbox-table',
  templateUrl: './checkbox-table.component.html',
  styleUrls: ['./checkbox-table.component.scss']
})
export class CheckboxTableComponent implements OnChanges {
  @Input() title: string;
  @Input() fields: any;
  @Input() checked: any[];
  @Output() sendIdSelected = new EventEmitter<number[]>();

  fieldsSelected: any[];

  balanceFrozen: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.checked && !changes?.checked?.firstChange) {
      this.fieldsSelected = changes.checked.currentValue;
    }
  }
  guardar() {
    this.sendIdSelected.emit(this.fieldsSelected);
  }


}
