import { Dummy } from './../../interfaces/dummy.interface';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-item-dummy',
  templateUrl: './create-item-dummy.component.html',
  styleUrls: ['./create-item-dummy.component.scss'],
})
export class CreateItemDummyComponent implements OnInit {
  constructor(private readonly dummyService: DummyService) {}

  ngOnInit(): void {}

  onSubmit(newDummyItem: Dummy): void {
    this.dummyService.create(newDummyItem).subscribe((res: boolean) => {
      console.log(res);
    });
  }
}
