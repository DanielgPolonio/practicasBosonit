import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { fireEvent, render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AuthRoutingModule } from '../../auth-routing.module';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { ResetPasswordComponent } from './reset-password.component';


describe('When user make reset', () => {
  beforeEach(async () => {
    await render(ResetPasswordComponent, {
      declarations: [ForgotPasswordComponent, LoginComponent],
      imports: [AuthRoutingModule, RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
    });
  });

  it('should call navigate if form is valid and reset successful', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn(router, 'navigate');

    const password = screen.getByLabelText('Contraseña');
    const passwordVerify = screen.getByLabelText('Repita contraseña');
    userEvent.type(password, '123456789');
    userEvent.type(passwordVerify, '123456789');

    expect(screen.getByText(/CONFIRMAR CONTRASEÑA/i).getAttribute("disabled")).toBe(null)
  });

  it('shouldnt call navigate if form is valid and reset error', () => {
    const router = TestBed.inject(Router);
    const spy = jest.spyOn(router, 'navigate');

    const password = screen.getByLabelText('Contraseña');
    const passwordVerify = screen.getByLabelText('Repita contraseña');
    userEvent.type(password, '123456');
    userEvent.type(passwordVerify, '1234');

    expect(screen.getByText(/CONFIRMAR CONTRASEÑA/i).getAttribute("disabled")).toBe("")
  });
});

