import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ErrorComponent } from './error/error.component';
import { CustomDirective } from './Directives/custom.directive'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleMapsComponent,
    ErrorComponent,
    CustomDirective,

  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
 exports:[
  HeaderComponent,
  FooterComponent,
  GoogleMapsComponent,
  ErrorComponent,
  CustomDirective
 ]
})
export class SharedModule { }
