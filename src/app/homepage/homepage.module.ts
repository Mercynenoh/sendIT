import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomepageRoutingModule } from './homepage-routing/homepage-routing.module';
import { LottieModule } from 'ngx-lottie';


export function playerFactory(): any {
  return import('lottie-web');
}
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomepageRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),

  ]
})
export class HomepageModule { }
