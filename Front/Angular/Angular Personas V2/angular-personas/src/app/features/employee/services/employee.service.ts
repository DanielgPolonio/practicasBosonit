import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import employeeJson from 'src/app/features/employee/employee.json'; 
import { ApiService } from 'src/app/core/services/api.service';
import { Employee } from 'src/app/core/interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private employeeUrl: string = '/employee';
  constructor(private api:ApiService) { }

  getEmployees(): Observable<any> {
    // return this.api.get(this.employeeUrl);
    return of(employeeJson);
  }
  // addEmployee(employee:Employee): Observable<Employee>{
    addEmployee(employee:Employee): Observable<any>{
    employeeJson.push(employee);  
    console.log(employeeJson);
    return of(employeeJson);

    // return this.api.post(this.employeeUrl, employee);
  }
}
