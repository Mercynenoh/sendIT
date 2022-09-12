import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { NewparcelComponent } from './newparcel/newparcel.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { getParcels, ParcelReducer } from './Redux/Reducers/ParcelReducers';
import { AppModule } from '../app.module';
import { SearchPipe } from './Pipes/search.pipe';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { ParcelEffectsService } from './Redux/Effects/ParcelEffects';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AdminComponent,
    AdminDetailsComponent,
    NewparcelComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('parcels', ParcelReducer),
    EffectsModule.forFeature([ParcelEffectsService]),
    NgxPaginationModule
  ]
})
export class AdmindashboardModule { }
