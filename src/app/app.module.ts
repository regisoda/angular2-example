import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppRootComponent } from './components/approot/approot.component';
import { HomeComponent } from './components/home/home.component';
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { NgifDirectiveComponent } from './components/ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './components/ngswitch-directive/ngswitch-directive.component';

@NgModule({
  declarations: [
    AppRootComponent,
    HomeComponent,
    HeadbarComponent,
    WeatherDetailsComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppRootComponent]
})
export class AppModule { }
