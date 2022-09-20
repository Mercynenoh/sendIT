import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';
import { NewparcelComponent } from '../newparcel/newparcel.component';
import { AuthGuard } from 'src/app/Guards/auth.guard';


const routes: Routes = [
  {path:'', canActivateChild:[AuthGuard],children:[
    {path:'', component:AdminComponent},
    {path:'admindetails/:id', component:AdminDetailsComponent},
    {path:'addnew', component:NewparcelComponent},
    {path:'addnew/:id', component:NewparcelComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
