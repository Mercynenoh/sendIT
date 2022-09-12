import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admindashboard/admin-routing/admin-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing/auth-routing.module';
import { AuthModule } from './auth/auth.module';
import { HomepageRoutingModule } from './homepage/homepage-routing/homepage-routing.module';
import { SharedModule } from './shared/shared.module';
import { UserRouterModule } from './userdashboard/user-router/user-router.module';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function playerFactory(): any {
  return player
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
   [ LottieModule.forRoot({ player: playerFactory }),]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
