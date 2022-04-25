import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import  input from './input.json';
import button from './button.json';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],

})
export class FirstComponent implements OnInit {

  inputJson = input;
  buttonJson = button;
  employee: Employee = new Employee();
  constructor() {}

  ngOnInit(): void {
    this.fillInput(this.inputJson, this.employee);
  }

  public fillInput(inputs: any[], model: any) {
    inputs.forEach(input => {
      if (input.modelProperty) {
        input.modelProperty = {
          property: input.props.name,
          model
        }
      }
    })
  }
  populateForm() {
    console.log(this.employee);
  }
}
   
