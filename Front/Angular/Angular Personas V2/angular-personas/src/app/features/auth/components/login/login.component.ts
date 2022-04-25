import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Message } from 'primeng/api';
import { StorageService } from '../../../../core/services/storage.service';
import { Authority } from '../../dtos/authority.response.dto';
import { LoginResponseDto } from '../../dtos/login.response.dto';
import { TokenGoogleDto, TOKEN_GOOGLE_BLANK } from '../../dtos/token-google.dto';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  year: number = new Date().getFullYear();
  forgorPassForm: FormGroup;
  forgorPassError: boolean;
  loginError: boolean;
  forgotPassword: boolean = false;
  rememberUser: boolean = false;
  language:boolean = true;

  welcomeMessage: Message[];
  welcomeMessageText:string;
  forgotMessage: Message[];
  forgotMessageText:string;



  constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _storageService: StorageService,
    private _socialAuthService: SocialAuthService,
    private _translate: TranslateService
  ) {
    this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.forgorPassForm = this._fb.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.changeInfoText();
  }

   login(): void {
    this._authService.login(this.loginForm.value).subscribe(
      (res: LoginResponseDto) => {
        this._router.navigate(['/']);
        this._storageService.set("_t", res.token);
        const authorities = this.objectToString(res.authorities)
        this._storageService.set("roles", JSON.stringify(authorities))
      },
      (err) => {
        this.loginError = true;
      }
    );
  }

  objectToString(authorities: Authority[]): string[] {
    let arr: string[] = [];
    authorities.map((authority) => {

      arr.push(authority['authority'])
    })
    return arr;
  }

  loginWithGoogle(): void {
    this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res => {
      let tokenGoogleDto: TokenGoogleDto = TOKEN_GOOGLE_BLANK();
      tokenGoogleDto.value = res.idToken;
      tokenGoogleDto.access_token = res.response.access_token;
      this._authService.loginGoogle(tokenGoogleDto).subscribe(res => {
        console.log(res)

        this._router.navigate(['/']);
        this._storageService.set("_t", res.token);
        const authorities = this.objectToString(res.authorities)
        this._storageService.set("roles", JSON.stringify(authorities))
      });
    });
  }
  forgorPassword(): void {
    this._authService.forgotPassword(this.forgorPassForm.value).subscribe(
      (res: any) => {
        this._router.navigate(['']);
      },
      (err) => {
        this.forgorPassError = true;
      }
    );
  }

  useLanguageOnClick(lang:string): void {
    this._translate.use(lang);
    this.changeInfoText();
    }

changeInfoText():void{
  this._translate.get(['login.infoText', 'forgot.infoText']).subscribe(translations=>{
    this.welcomeMessageText=translations['login.infoText'];
    this.forgotMessageText=translations['forgot.infoText'];
    this.welcomeMessage = [
      { severity: 'info', detail: this.welcomeMessageText }
    ];
    this.forgotMessage = [
      { severity: 'info', detail: this.forgotMessageText }
    ];
  });
}
}
