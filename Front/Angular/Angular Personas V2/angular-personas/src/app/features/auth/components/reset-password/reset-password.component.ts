import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchPasswordValidator } from '../../../../core/validators/match-password.validator';
import { ResetPasswordDto } from '../../dtos/reset-password.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  token: string

  resetPassForm: FormGroup;
  resetPassError: boolean;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute
  ) {
    this.getParam();
    this.resetPassForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordVerify: ['', [Validators.required, Validators.minLength(8)]]
    },
      { validators: MatchPasswordValidator.validate }
    );
  }

  ngOnInit(): void { }

  resetPassword(): void {
    const resetPasswordDto: ResetPasswordDto = {
      token: this.token,
      password: this.resetPassForm.controls.password.value
    };

    this.authService.resetPassword(resetPasswordDto).subscribe(
      (res: any) => {
        this.router.navigate(['/']);
      },
      (err) => {
        this.resetPassError = true;
      }
    );
  }
  private getParam() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
  }
}
