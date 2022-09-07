import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps'



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleMapsComponent,

  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
 exports:[
  HeaderComponent,
  FooterComponent,
  GoogleMapsComponent
 ]
})
export class SharedModule { }
