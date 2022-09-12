import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', loadChildren:()=> import('./homepage/homepage.module').then(mod=>mod.HomepageModule)},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'user', loadChildren:()=> import('./userdashboard/userdashboard.module').then(mod=>mod.UserdashboardModule)},
  {path:'admin', loadChildren:()=> import('./admindashboard/admindashboard.module').then(mod=>mod.AdmindashboardModule)},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
