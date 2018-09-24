import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AaFaInputComponent } from './lib/aa-fa-input/aa-fa-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AaFaInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
