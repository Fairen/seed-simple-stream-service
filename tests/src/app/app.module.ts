import { SimpleStreamService } from 'app/shared/services/simple-stream.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SimpleStreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
