import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthGuard } from 'src/app/Guards/auth.guard';
import { UserGuard } from 'src/app/Guards/user.guard';



const routes: Routes = [
  {path:'', canActivateChild:[UserGuard],children:[
    {path: '', component: UserComponent},
    {path: 'view/:id', component: UserdetailComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class UserRouterModule { }
