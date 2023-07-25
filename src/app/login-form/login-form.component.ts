import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from './login-modal/login-modal.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  userkey = 'user123'
  passkey = 'user123'
  inputValue = ''
  showValue = ''
  hide = true

  floatLabelControl = new FormControl('always' as FloatLabelType);

  openloginDialog(){
    this._dialog.open(LoginModalComponent,{
      position:{top: '50px', right:'20px'} 
    })
  }

  loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  requiredForm = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  login(form: any){
    console.log(form)
    if(form.username == this.userkey && form.password == this.passkey){
      this._router.navigate(['Resp'])
    }else{
      console.log("Mali!")
    }
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'always';
  }

}
