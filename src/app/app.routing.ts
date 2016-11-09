import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { NgifDirectiveComponent } from './components/ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './components/ngswitch-directive/ngswitch-directive.component';
import { NgstyleDirectiveComponent } from './components/ngstyle-directive/ngstyle-directive.component';
import { NgforDirectiveComponent } from './components/ngfor-directive/ngfor-directive.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'weatherservice', component: WeatherDetailsComponent },
    { path: 'ngifdirective', component: NgifDirectiveComponent },
    { path: 'ngfordirective', component: NgforDirectiveComponent },
    { path: 'ngswitchdirective', component: NgswitchDirectiveComponent },
    { path: 'ngstyledirective', component: NgstyleDirectiveComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);