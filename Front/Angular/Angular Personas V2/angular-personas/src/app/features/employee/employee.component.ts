import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/core/interfaces/employee.interface';
import { ITableColumn } from 'src/app/shared/components/table/ITableColumns';
import employeeColumn from './employeeColumn.json';
import { EmployeeService } from './services/employee.service';
import button from './button.json';
import createButton from './createButton.json'
import editButton from './editButton.json'
import { ButtonConfig } from 'src/app/shared/components/button/button.config';
import input from './input.json';
import { SharedService } from 'src/app/shared/services/shared.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  columns: ITableColumn[] = employeeColumn;
  tableJson: Employee[];
  buttonJson: ButtonConfig = button;
  createButtonJson: ButtonConfig = createButton;
  editButtonJson: ButtonConfig = editButton;
  inputJson = input;
  newEmployeeDialog: boolean;
  editEmployee: boolean = false;
  headerEmployee: string;
  employee: Employee = new Employee();



  constructor(private employeeService: EmployeeService, private sharedService: SharedService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.fillEmployee();
  }
  
  handleActionEmployee(event: any) {
    if (event.action === 'edit') {
      this.updateEmployee(event.data);
    } else {
      this.deleteEmployee(event.data);
    }
  }

  newEmployee() {
    this.fillInput(this.inputJson, this.employee);
    this.editEmployee = false;
    this.headerEmployee = "Crear nuevo empleado";
    this.newEmployeeDialog = true;
  }

  createEmployee() {
    this.employee.id=this.tableJson.length+1;
    this.employeeService.addEmployee(this.employee);
    this.newEmployeeDialog = false;
    this.employee= new Employee();
  }

  updateEmployee(id: number) {
    this.fillInput(this.inputJson, this.tableJson[id - 1]);
    this.editEmployee = true;
    this.headerEmployee = "Modificando empleado " + this.tableJson[id - 1].name + " " + this.tableJson[id - 1].surname+":";
    this.newEmployeeDialog = true;

  }

  deleteEmployee(id: number) {
    this.confirmationService.confirm({
      header: "Borrar Empleado",
      acceptLabel: "Confirmar",
      rejectLabel: "Cancelar",
      message: 'Está a punto de borrar al usuario ' + this.tableJson[id-1].name + " " + this.tableJson[id-1].surname + " ¿Está seguro? "+" ",
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tableJson.splice(id-1,1);
      }
    });
  }

  fillEmployee() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.tableJson = employees;
      this.fillInput(this.inputJson, this.employee);
    });
  }

  fillInput(inputs: any[], model: any) {
    inputs.forEach(input => {
      if (input.modelProperty) {
        input.modelProperty = {
          property: input.props.name,
          model
        }
      }
      if (input.props.name === "ac") {
        this.sharedService.getAC().subscribe((ac: string[]) => {
          input.props.options = ac;
        });
      }
      if (input.props.name === "province") {
        this.sharedService.getProvinces().subscribe((provinces: string[]) => {
          input.props.options = provinces;
        });
      }
    })
  }
}
