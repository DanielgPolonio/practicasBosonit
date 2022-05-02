import { BaseModelId } from "../models/baseModel";

export interface EmployeeInterface{
    ac: string;
    car: string;
    checkinTimePreference: string;
    checkoutTimePreference: string;
    city: string;
    email: string;
    formation: string;
    internshipEndDate?: string;
    name: string;
    position: string;
    province: string;
    remote: boolean;
    surname: string;
    tech: string;
}

export class Employee extends BaseModelId implements EmployeeInterface{
    ac: string;
    car: string;
    checkinTimePreference: string;
    checkoutTimePreference: string;
    city: string;
    email: string;
    formation: string;
    internshipEndDate?: string;
    name: string;
    position: string;
    province: string;
    remote: boolean;
    surname: string;
    tech: string;

    public createEmployee(params:EmployeeInterface): Employee{
        const employee = new Employee();
        employee.populate(params);

        return employee;
    }
}