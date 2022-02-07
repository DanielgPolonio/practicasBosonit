// import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { PersonService } from "../person.service";
// import { Persona } from "../persona";

// @Injectable({
//     providedIn: 'root'
// })

// export class PeopleResolver implements Resolve<Observable<any>>{
//     personas: Persona [] = [];

//     constructor(private _api: PersonService){}

//     resolve(route: ActivatedRouteSnapshot){
//         let people =  this._api.getPersonas().subscribe(personas => this.personas = personas);
//         // let people="";
//         return people;
//     }
// }