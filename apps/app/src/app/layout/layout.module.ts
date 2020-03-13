
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { MainLayoutComponent } from './components/main-layout.component';
import { CleanLayoutComponent } from './components/clean-layout.component';

@NgModule({
  imports: [
    RouterModule,
    UIModule,
  ],
  exports: [
    MainLayoutComponent,
    CleanLayoutComponent,
  ],
  declarations: [
    MainLayoutComponent,
    CleanLayoutComponent,
  ],
  providers: [],
})
export class LayoutModule { }
