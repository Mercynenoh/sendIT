import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./homepage/homepage.module').then(mod=>mod.HomepageModule)},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'user', loadChildren:()=> import('./userdashboard/userdashboard.module').then(mod=>mod.UserdashboardModule)},
  {path:'admin', loadChildren:()=> import('./admindashboard/admindashboard.module').then(mod=>mod.AdmindashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
