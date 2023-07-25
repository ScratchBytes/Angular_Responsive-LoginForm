import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginModalComponent } from './login-form/login-modal/login-modal.component';

const routes: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'}, //defaultPage
  {path: 'Login', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
