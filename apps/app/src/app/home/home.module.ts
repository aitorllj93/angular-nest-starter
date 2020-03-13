
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UIModule } from '../ui/ui.module';

import { HomeComponent } from './components/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
