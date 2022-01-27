import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, concatMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from "@angular/material/dialog";
import { ModalErrorComponent } from "./components/modal-error/modal-error.component";
 
@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
 
    constructor(public router: Router, public dialog: MatDialog) {
  }
 
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return this.dialog.open(ModalErrorComponent).afterClosed().pipe(
        concatMap(() => next.handle(req))
        )}
}