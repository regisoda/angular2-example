import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { NgifDirectiveComponent } from './components/ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './components/ngswitch-directive/ngswitch-directive.component';
import { NgclassDirectiveComponent } from './components/ngclass-directive/ngclass-directive.component';
import { NgstyleDirectiveComponent } from './components/ngstyle-directive/ngstyle-directive.component';
import { NgforDirectiveComponent } from './components/ngfor-directive/ngfor-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';

const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'databinding', component: DataBindingComponent }, 
    { path: 'classstylebinding', component: ClassStyleBindingComponent },
    { path: 'ngifdirective', component: NgifDirectiveComponent },
    { path: 'ngfordirective', component: NgforDirectiveComponent },
    { path: 'ngswitchdirective', component: NgswitchDirectiveComponent },
    { path: 'ngclassdirective', component: NgclassDirectiveComponent },
    { path: 'ngstyledirective', component: NgstyleDirectiveComponent },
    { path: 'weatherservice', component: WeatherDetailsComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);