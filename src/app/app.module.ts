import { Details } from './services/details';
import { ApiService } from './services/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


//enables us to use angular forms
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LandingComponent, ProfileComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  
  ],
  providers: [ApiService, Details],
  bootstrap: [AppComponent],
})
export class AppModule {}
