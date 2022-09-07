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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GoogleMapsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
