
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layout/components/main-layout.component';
import { CleanLayoutComponent } from './layout/components/clean-layout.component';

import { IsLoggedInGuard } from './security/guards/is-logged-in.guard';
import { IsLoggedOutGuard } from './security/guards/is-logged-out.guard';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'auth',
    component: CleanLayoutComponent,
    loadChildren: () => import('./security/security.module').then(m => m.SecurityModule),
    canActivate: [IsLoggedOutGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
