import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { Location } from "@angular/common";

@Injectable()
export class CustomHttpInterceptorService implements HttpInterceptor {
  constructor(private router: Router, private location: Location) {}



  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    return next.handle(req).pipe(
      catchError(this.manejarError)
    )
  }
  manejarError(error: HttpErrorResponse) {
    if (error.status === 0) {
      Swal.fire({
        title: '<strong>Lo sentimos, ha habido un error en el servidor, pruebe más tarde.</strong>',
        icon: 'error',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Volver',
      }).then(function () {
        window.location.href = "localhost:4200"
      });
    }



    console.warn(error)
    return throwError(error)
  }
}
