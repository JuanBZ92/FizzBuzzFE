import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api-service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FizzBuzzModule } from './components/fizz-buzz/fizz-buzz.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FizzBuzzModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
