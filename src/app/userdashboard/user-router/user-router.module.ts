import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { UserdetailComponent } from '../userdetail/userdetail.component';
import { SharedModule } from 'src/app/shared/shared.module';



const routes: Routes = [
  {path:'', children:[
    {path: '', component: UserComponent},
    {path: 'view', component: UserdetailComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes),SharedModule],
  exports: [RouterModule]
})
export class UserRouterModule { }
