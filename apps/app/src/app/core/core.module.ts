
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [],
})
export class CoreModule { }
