import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DonorComponent } from './donor/donor.component';
import { ReqBloodComponent } from './req-blood/req-blood.component';
import { UniversalGuardService } from './universal-guard.service';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'donor', component:DonorComponent},
  {path:'donor/:id', component:DonorComponent},
  {path:'details/:msg', component:LoginComponent},
  {path:'reqBlood', component:ReqBloodComponent, canActivate:[UniversalGuardService]},
  {path:'**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
