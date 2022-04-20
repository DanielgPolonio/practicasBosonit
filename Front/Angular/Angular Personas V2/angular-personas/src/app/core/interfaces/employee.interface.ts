import { BaseModel, BaseModelId } from "../models/baseModel";

export interface EmployeeInterface{
    name?: string;
    lastName?: string;
    age?: number;
    birthDate?: Date | string;
}

export class Employee extends BaseModelId implements EmployeeInterface{
    name?: string = '';
    lastName?: string = '';
    age?: number = 0;
    birthDate?: Date | string = '';

    public createEmployee(params:EmployeeInterface): Employee{
        const employee = new Employee();
        employee.populate(params);

        return employee;
    }
}