import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObservableInput } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private readonly http: HttpClient) { }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(`${environment.apiUrl}/user/users`);
    }

}