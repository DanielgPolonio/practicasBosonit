import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { PersonModalComponent } from '../components/person-modal/person-modal.component';
import { PersonService } from '../person.service';
import { Persona } from '../persona';

@Injectable({
  providedIn: 'root'
})
export class CheckDetailsGuard implements CanActivate {
  personas: Persona [] = [];
    constructor(private dialog: MatDialog, private personService: PersonService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var personId = route.paramMap.get('id'); //Array de la persona
    var index = personId?.indexOf(",");
    var id= personId?.substring(0,index); //ID de la persona
    var name=personId?.substring(personId?.indexOf(",")+1,personId?.indexOf(",",personId?.indexOf(",")+1));//Nombre de la persona
    var city=personId?.substring(personId?.indexOf(",",3)+1,personId?.length);//Ciudad de la persona
    var check =<HTMLInputElement> document.getElementById('checkDetalle'+id); //ID personalizada para cada persona.
    var verDetalle =check.checked;
    if (verDetalle){
      this.openDialog(id, name, city);
      return true;
    }
    else{
      let errorMessage =document.getElementById('errorDetalle'+id) as HTMLInputElement;
      errorMessage.innerHTML="Pulse el check para ver detalle";
      setTimeout(function(){
        errorMessage.innerHTML="";
        },5000);
      return false;
    }
  }

  openDialog(personsId:any, personsName:any, personsCity:any) {
    const dialogRef = this.dialog.open(PersonModalComponent,{
      data: {id: personsId, name: personsName, city: personsCity},
      width:'300px'});
    dialogRef.afterClosed().subscribe();
    };

    getPersonas(): void {
      this.personService.getPersonas().subscribe(personas => this.personas = personas);
    }

  }
