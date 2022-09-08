import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminDetailsComponent } from './admin-details/admin-details.component';
import { NewparcelComponent } from './newparcel/newparcel.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { getParcels, ParcelReducer } from './admin/Redux/Reducers/ParcelReducer';
import { AppModule } from '../app.module';
import { SearchPipe } from './Pipes/search.pipe';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { ParcelEffectsService } from './admin/Redux/Parcels/parcelEffects';



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
    EffectsModule.forFeature([ParcelEffectsService])
    // StoreModule.forRoot({'parcels', ParcelReducer}),
    //
    // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ]
})
export class AdmindashboardModule { }
