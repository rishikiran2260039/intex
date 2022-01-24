// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { emailValidator } from '../../theme/utils/app-validators';
// import { AppSettings } from '../../app.settings';
// import { Settings } from '../../app.settings.model';
// import { AlertService } from '../../shared/services/alert.service';
// import { LoginService } from '../login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html'
// })
// export class LoginComponent {
//   // public myform: FormGroup;
//   // public settings: Settings;
//   // public TypeString:string="password";
//   // public isPassword:boolean=true;
//   // loginData = {
//   //   Type: 1,
//   //   Email: '',
//   //   Password: ''
//   // };
//   // public form: FormGroup;
//   // constructor(public alertService:AlertService,public appSettings: AppSettings, public fb: FormBuilder, public router: Router,
//   //   public _loginService: LoginService) {
//   //   this.settings = this.appSettings.settings;
//   //   this.myform = this.fb.group({
//   //     'email': [null, Validators.compose([Validators.required, emailValidator])],
//   //     'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
//   //   });
//   // }
  
//   // ngOnInit() {
//   // }
  
//   // public onSubmit(values) {
//     // if (this.form.valid) {
//     //   if (this.form.valid && values.email == "admin@cpm.com" && values.password == 'uZ4$gV8?j') {
//     //     this.router.navigate(['/radar']);
//     //     this.alertService.createAlert("Login successful",1);
//     //   }
//     //   else {
//     //     this.alertService.createAlert("Invalid Credentials",0);
//     //   }
//     // }

//     // if (this.form.valid) {
//     //   this.loginData.Email = values['email'];
//     //   this.loginData.Password = values['password'];
//     //   this._loginService.validateLogin(this.loginData).subscribe(data => {
//     //     if (data != null) {
//     //       if (data['Success']) {
//     //         if(true) {
//     //         if (true) {
//     //           this.router.navigate(['/radar']);
//     //         } 
//     //         else {
//     //           this.router.navigate(['/radar']);
//     //         }
//     //       } 
//     //         this.alertService.createAlert(data['Message'], 1);
//     //       } else {
//     //         this.alertService.createAlert(data['Message'], 0);
//     //       }
//     //     }
//     //   });
//     // }

//     // if (this.myform.valid) {
//     //   this.loginData.Email = values['email'];
//     //   this.loginData.Password = values['password'];
//     //   this._loginService.validateLogin(this.loginData).subscribe(data => {
//     //     if (data != null) {
//     //       if (data['Success']) {
//     //         localStorage.removeItem('userSession');
//     //         console.log(data['Data']);
//     //         localStorage.setItem('userSession', JSON.stringify(data['Data']));
//     //         if(data['Data'].length > 0 || data['Data']['IsAdmin']) {
//     //         if (data['Data']['UserType'] === 'User') {
//     //           this.router.navigate(['/radar']);
//     //         } else {
//     //           this.router.navigate(['/radar']);
//     //         }
//     //       } else {
//     //         this.router.navigate(['/radar']);
//     //       }
//     //           this.alertService.createAlert(data['Message'], 1);
//     //       } else {
//     //           this.alertService.createAlert(data['Message'], 0);
//     //       }
//     //     }
//     //   });
//     // }

//   // }

//   // public ChangetextType(isPassword){
//   //   if(isPassword){
//   //     this.TypeString="password"
//   //   }else{
//   //     this.TypeString="text"
//   //   }
//   // }  
  
//   // ngAfterViewInit() {
//   //   this.settings.loadingSpinner = false;
//   //   localStorage.setItem('userType', '');
//   //   setInterval(() => {
//   //     this.settings.loadingSpinner = false; 
//   //   },500)
//   // }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../../theme/utils/app-validators';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public form: FormGroup;
  public settings: Settings;
  passwordShown: any;
  passwordType: string;
  constructor(public alertService:AlertService,public appSettings: AppSettings, public fb: FormBuilder, public router: Router) {
    this.settings = this.appSettings.settings;
    this.passwordType = 'password';
    this.form = this.fb.group({
      'email': [null, Validators.compose([Validators.required, emailValidator])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }
  
  ngOnInit() {
  }
  
  public togglePassword() {
    if(this.passwordShown) {
      this.passwordShown = false;
      this.passwordType = 'text';
    } else {
      this.passwordShown = true;
      this.passwordType = 'password';
    }
  }
  
  
  public onSubmit(values) {
    if (this.form.valid) {
      if (this.form.valid && values.email == "admin@intex.com" && values.password == 'intex123$') {
        this.router.navigate(['/dashboard']);
        this.alertService.createAlert("Login successful",1);
      }
      else {
        this.alertService.createAlert("Invalid Credentials",0);
      }
    }
  }
  
  
  ngAfterViewInit() {
    this.settings.loadingSpinner = false;
    localStorage.setItem('userType', '');
  }
}