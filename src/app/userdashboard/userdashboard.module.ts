import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { SharedModule } from '../shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { UserRouterModule } from './user-router/user-router.module';
import { StoreModule } from '@ngrx/store';
import { ParcelReducer } from '../admindashboard/Redux/Reducers/ParcelReducers';
import { EffectsModule } from '@ngrx/effects';
import { ParcelEffectsService } from '../admindashboard/Redux/Effects/ParcelEffects';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UserComponent,
    UserdetailComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    SharedModule,
    UserRouterModule,
    StoreModule.forFeature('parcels', ParcelReducer),
    EffectsModule.forFeature([ParcelEffectsService]),
    NgxPaginationModule

  ]
})
export class UserdashboardModule { }
