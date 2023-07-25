import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {}

  userkey = 'user123'
  passkey = 'user123'
  inputValue = ''
  showValue = ''
  hide = true

  floatLabelControl = new FormControl('always' as FloatLabelType);

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
