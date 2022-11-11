import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductformComponent } from './productform/productform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductformComponent
   

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

   
  ],
  providers: [],
  bootstrap: [AppComponent,ProductformComponent]
})
export class AppModule { }
