
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { MainLayoutComponent } from './components/main-layout.component';
import { HeaderComponent } from './components/header.component';
import { LeftMenuComponent } from './components/left-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    UIModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MainLayoutComponent,
    HeaderComponent,
    LeftMenuComponent,
  ],
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    LeftMenuComponent,
  ],
  providers: [],
})
export class CoreModule { }
