import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { NewparcelComponent } from './newparcel/newparcel.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    AdminDetailsComponent,
    NewparcelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdmindashboardModule { }
