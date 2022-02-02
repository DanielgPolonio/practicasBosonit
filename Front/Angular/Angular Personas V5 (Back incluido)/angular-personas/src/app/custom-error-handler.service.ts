import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    throw new Error('Method not implemented.');
  }
}
