import { Component  } from '@angular/core';

@Component({
  selector: 'app-sample-component',
  templateUrl: './sample.component.html'
})
export class SampleComponent  {

  explanationCreate: string = `
        <b>import { CommonModule } from '@angular/common';</b><br>
        <b>import { NgModule } from '@angular/core';</b><br>
        <br>
        import { SampleComponent } from './sample.component';<br>
        <br>&nbsp;
        <b>@NgModule</b>({<br>
        &nbsp;&nbsp;declarations: [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;SampleComponent<br>
        &nbsp;&nbsp;],<br>
        &nbsp;&nbsp;imports: [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;CommonModule<br>
        &nbsp;&nbsp;],<br>
        &nbsp;&nbsp;exports: [<br>
        &nbsp;&nbsp;&nbsp;&nbsp;SampleComponent<br>
        &nbsp;&nbsp;],<br>
        })<br>
        <b>export class SampleModule { }</b><br>
  `;

  explanationModule: string = `
   import { BrowserModule } from '@angular/platform-browser';<br>
   ...<br>
   ...<br>
   <b>import { SampleModule } from './modules/sample.module';</b><br>
   <br>
   @NgModule({<br>
   &nbsp;declarations: [<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
   &nbsp;],<br>
   &nbsp;imports: [<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>SampleModule,</b><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
   &nbsp;],<br>
   &nbsp;providers: [<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
   &nbsp;],<br>
   &nbsp;...<br>
   &nbsp;...<br>
   })<br>
   &nbsp;&nbsp;&nbsp;...<br>
  `;


  constructor() { }


}
