import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgMaterialModule } from './ng-material.module';
import { DeviceCardComponent } from './device-card/device-card.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DialogboxComponent } from './dialogbox/dialogbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DeviceCardComponent,
    DialogboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [DialogboxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
