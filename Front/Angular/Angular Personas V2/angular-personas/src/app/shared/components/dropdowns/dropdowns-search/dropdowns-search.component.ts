import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdowns-search',
  templateUrl: './dropdowns-search.component.html',
  styleUrls: ['./dropdowns-search.component.scss']
})
export class DropdownsSearchComponent implements OnInit {
  @Input() items: any;
  @Input() placeholder: string;
  @Input() filterByAndLabel: string;
  @Output() selection = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.selection.emit(event.value)
  }

}
