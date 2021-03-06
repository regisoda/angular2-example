import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
// import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { NgifDirectiveComponent } from './components/ngif-directive/ngif-directive.component';
import { NgswitchDirectiveComponent } from './components/ngswitch-directive/ngswitch-directive.component';
import { NgclassDirectiveComponent } from './components/ngclass-directive/ngclass-directive.component';
import { NgstyleDirectiveComponent } from './components/ngstyle-directive/ngstyle-directive.component';
import { NgforDirectiveComponent } from './components/ngfor-directive/ngfor-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { ClassStyleBindingComponent } from './components/class-style-binding/class-style-binding.component';
import { InputPropertyExampleComponent } from './components/input-property-example/input-property-example.component';
import { OutputPropertyExampleComponent } from './components/output-property-example/output-property-example.component';
import { LifeCycleExampleComponent } from './components/life-cycle-example/life-cycle-example.component';
import { AttributeDirectiveExampleComponent } from './components/custom-directives-example/attribute-directive-example.component';
import { HostlistenerHostbindingExampleComponent } from './components/custom-directives-example/hostlistener-hostbinding-example.component';
import { InputPropertyBindingExampleComponent } from './components/custom-directives-example/input-property-binding-example.component';
import { StructuralDirectiveExampleComponent } from './components/custom-directives-example/structural-directive-example.component';
import { ServicesIntroductionComponent } from './components/services-introduction/services-introduction.component';
import { SampleModuleExampleComponent } from './components/sample-module-example/sample-module-example.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { PipeAsyncExampleComponent } from './components/pipe-async-example/pipe-async-example.component';


const appRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'databinding', component: DataBindingComponent },
    { path: 'twowaybinding', component: TwoWayBindingComponent },
    { path: 'eventbinding', component: EventBindingComponent },
    { path: 'classstylebinding', component: ClassStyleBindingComponent },
    { path: 'ngifdirective', component: NgifDirectiveComponent },
    { path: 'ngfordirective', component: NgforDirectiveComponent },
    { path: 'ngswitchdirective', component: NgswitchDirectiveComponent },
    { path: 'ngclassdirective', component: NgclassDirectiveComponent },
    { path: 'ngstyledirective', component: NgstyleDirectiveComponent },
    { path: 'inputpropertyexample', component: InputPropertyExampleComponent },
    { path: 'outputpropertyexample', component: OutputPropertyExampleComponent },
    { path: 'lifecycleexample', component: LifeCycleExampleComponent },
    { path: 'attributedirectiveexample', component: AttributeDirectiveExampleComponent },
    { path: 'hostlistenerhostbindingexample', component: HostlistenerHostbindingExampleComponent },
    { path: 'inputpropertybindingexample', component: InputPropertyBindingExampleComponent },
    { path: 'structuraldirectiveexample', component: StructuralDirectiveExampleComponent },
    { path: 'serviceintroduction', component: ServicesIntroductionComponent },
    { path: 'samplemoduleexample', component: SampleModuleExampleComponent },
    { path: 'pipesexample', component: PipeExampleComponent },
    { path: 'pipesasyncexample', component: PipeAsyncExampleComponent },
    // { path: 'weatherservice', component: WeatherDetailsComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
