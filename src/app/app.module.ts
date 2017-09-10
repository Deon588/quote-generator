import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpModule } from '@angular/http';


import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	ReactiveFormsModule,
    HttpModule,
	BrowserAnimationsModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
