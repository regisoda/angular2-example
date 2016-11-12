import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppRootComponent } from './root/root.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeadbarComponent } from './pages/shared/headbar-page/headbar.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { NgifDirectiveComponent } from './components/ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './components/ngswitch-directive/ngswitch-directive.component';
import { NgclassDirectiveComponent } from './components/ngclass-directive/ngclass-directive.component';
import { NgstyleDirectiveComponent } from './components/ngstyle-directive/ngstyle-directive.component';
import { NgforDirectiveComponent } from './components/ngfor-directive/ngfor-directive.component';
import { NgcontentDirectiveComponent } from './components/ngcontent-directive/ngcontent-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';

@NgModule({
  declarations: [
    AppRootComponent,
    HomePageComponent,
    HeadbarComponent,
    WeatherDetailsComponent,
    NgifDirectiveComponent,
    NgswitchDirectiveComponent,
    NgclassDirectiveComponent,
    NgstyleDirectiveComponent,
    NgforDirectiveComponent,
    NgcontentDirectiveComponent,
    DataBindingComponent,
    ClassStyleBindingComponent,
    TwoWayBindingComponent,
    EventBindingComponent,
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
