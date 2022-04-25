import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableInput } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environments/environment';
import { AssignPermissionDto } from '../../permission/dtos/assign-permission.dto';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  constructor(private readonly http: HttpClient) { }

  getAllSections(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/permission/sections`);
  }

  getAllPermissions(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/permission/permissions`);
  }

  getPermissionsByIdUser(id: string): Observable<any> {
    const params = new HttpParams().append('id', id);
    return this.http.get<any>(`${environment.apiUrl}/permission/permissionsByUser`, { params });
  }

  getPermissionsBySection(section: string): Observable<any> {
    const params = new HttpParams().append('section', section);
    return this.http.get<any>(`${environment.apiUrl}/permission/permissionsBySection`, { params: params });
  }

  setPermissionByIdUser(assignPermission: AssignPermissionDto): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/permission/assign-permissions`, assignPermission);
  }
}
