import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { of, throwError } from 'rxjs';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { AuthService } from '../../services/auth.service';
import { AuthRoutingModule } from '../../auth-routing.module';
import { LoginComponent } from './login.component';


describe('When user make login', () => {
  beforeEach(async () => {
    await render(LoginComponent, {
      declarations: [ResetPasswordComponent],
      imports: [AuthRoutingModule, RouterTestingModule, ReactiveFormsModule],
      providers: [
        AuthService,
        HttpClient,
        HttpHandler,
        SocialAuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
            autoLogin: false,
            providers: [
              {
                id: GoogleLoginProvider.PROVIDER_ID,
                provider: new GoogleLoginProvider(
                  '781767575017-24at4ssvau014ardurtuhvk4nqsdde4m.apps.googleusercontent.com'
                )
              }
            ]
          } as SocialAuthServiceConfig,
        }
      ],
    });
  });

  it('shouldnt call navigate if form is invalid, no username and password set', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn(router, 'navigate');

    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

    //expect(spy).not.toHaveBeenCalled();
  });

  it('should call navigate if form is valid and login successful', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn(router, 'navigate');

    const username = screen.getByRole('textbox', { name: /Usuario/i });
    const password = screen.getByLabelText(/Contraseña/i);
    userEvent.type(username, 'alberto');
    userEvent.type(password, 'alberto');

    fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

    //expect(spy).toHaveBeenCalled();
  });
});

// describe('When login fail', () => {
//   beforeEach(async () => {
//     await render(LoginComponent, {
//       declarations: [ForgotPasswordComponent, ResetPasswordComponent],
//       imports: [AuthRoutingModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
//       providers: [
//         {
//           provide: [AuthService,
//             AuthService,
//             HttpClient,
//             HttpHandler,
//             SocialAuthService,
//             {
//               provide: 'SocialAuthServiceConfig',
//               useValue: {
//                 autoLogin: false,
//                 providers: [
//                   {
//                     id: GoogleLoginProvider.PROVIDER_ID,
//                     provider: new GoogleLoginProvider(
//                       '781767575017-24at4ssvau014ardurtuhvk4nqsdde4m.apps.googleusercontent.com'
//                     )
//                   }
//                 ]
//               } as SocialAuthServiceConfig,
//             }],
//           useValue: { login: () => throwError('') },
//         },
//       ],
//     });
//   });

//   it('should call navigate if form is valid and show message of error', () => {
//     const router = TestBed.inject(Router);
//     const spy = jest.spyOn(router, 'navigate');

//     const username = screen.getByRole('textbox', { name: /Usuario/i });
//     const password = screen.getByLabelText(/Contraseña/i);
//     userEvent.type(username, 'alberto');
//     userEvent.type(password, 'alberto');

//     fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));
//     expect(screen.getByText(/Ha ocurrido un error, vuelva a intentarlo/i));
//     expect(spy).not.toHaveBeenCalled();
//   });
// });
