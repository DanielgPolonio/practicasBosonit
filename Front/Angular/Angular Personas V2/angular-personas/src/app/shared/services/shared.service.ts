import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  ac: string[] = ["Andalucía", "Aragón", "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha", "Cataluña", 
  "Ceuta", "Comunidad Valenciana", "Comunidad de Madrid", "Extremadura", "Galicia", "Islas Baleares", "La Rioja", "Melilla", 
  "Navarra", "País Vasco", "Principado de Asturias", "Región de Murcia"];

  provinces: string[] = ["Álava","Albacete","Alicante","Almería","Asturias","Ávila","Badajoz","Barcelona","Burgos","Cáceres",
  "Cádiz","Cantabria","Castellón","Ciudad Real","Córdoba","La Coruña","Cuenca","Gerona","Granada","Guadalajara",
  "Guipúzcoa","Huelva","Huesca","Islas Baleares","Jaén","León","Lérida","Lugo","Madrid","Málaga","Murcia","Navarra",
  "Orense","Palencia","Las Palmas","Pontevedra","La Rioja","Salamanca","Segovia","Sevilla","Soria","Tarragona",
  "Santa Cruz de Tenerife","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza"];

  constructor() { 

  }
  getAC(): Observable<string[]>{
    return of (this.ac);
  }

  getProvinces(): Observable<string[]>{
    return of (this.provinces);
  }
}
