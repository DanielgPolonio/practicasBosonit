import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { PersonService } from "../person.service";

@Injectable({
    providedIn: 'root'
})

export class PersonResolver implements Resolve<Observable<any>>{

    constructor(private _api: PersonService){}

    resolve(route: ActivatedRouteSnapshot){
        let id=this._api.getPersona(Number(route.paramMap.get('id')));
        return id;
    }
}