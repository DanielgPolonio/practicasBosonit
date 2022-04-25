import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginDto } from '../dtos/login.dto';
import { LoginResponseDto } from '../dtos/login.response.dto';
import { ForgotPasswordDto } from '../dtos/forgot-password.dto';
import { ResetPasswordDto } from '../dtos/reset-password.dto';
import { Subject } from 'rxjs';
import { TokenGoogleDto } from '../dtos/token-google.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  isLogged():Observable<boolean>{
    return this.checkToken(localStorage.getItem('_t') || '');
    }

  login(login: LoginDto): Observable<LoginResponseDto> {
    return this.http.post<LoginResponseDto>(
      `${environment.apiUrl}/auth/login`,
      login
    );
  }

  forgotPassword(forgotPassword: ForgotPasswordDto): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/auth/forgot-password`, forgotPassword);
  }

  resetPassword(resetPassword: ResetPasswordDto): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/auth/reset-password`, resetPassword);
  }

  checkToken(token: string): Observable<boolean> {
    return this.http.get<boolean>(`${environment.apiUrl}/auth/check-token?token=${token}`);
  }

  loginGoogle(token: TokenGoogleDto): Observable<any> {
    const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Set-Cookie': 'promo_shown=1; Max-Age=2600000; Secure' }) };
    return this.http.post<any>(`${environment.apiUrl}/auth/google`, token, cabecera);
    // return this.http.get<any>(`${environment.apiUrl}/auth/google?token` + token.value, cabecera);
  }

}
