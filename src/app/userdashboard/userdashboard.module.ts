import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { UserRouterModule } from './user-router/user-router.module';

@NgModule({
  declarations: [
    UserComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    SharedModule,
    UserRouterModule

  ]
})
export class UserdashboardModule { }
