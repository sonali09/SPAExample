import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DonorComponent } from './donor/donor.component';
import { ReqBloodComponent } from './req-blood/req-blood.component';
import { MasterComponent } from './master/master.component';
import { DobbyComponent } from './dobby/dobby.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DonorComponent,
    ReqBloodComponent,
    MasterComponent,
    DobbyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MasterComponent]
})
export class AppModule { }
