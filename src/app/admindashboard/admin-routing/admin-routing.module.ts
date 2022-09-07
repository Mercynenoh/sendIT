import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminDetailsComponent } from '../admin-details/admin-details.component';
import { NewparcelComponent } from '../newparcel/newparcel.component';


const routes: Routes = [
  {path:'', children:[
    {path:'', component:AdminComponent},
    {path:'admindetails', component:AdminDetailsComponent},
    {path:'addnew', component:NewparcelComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
