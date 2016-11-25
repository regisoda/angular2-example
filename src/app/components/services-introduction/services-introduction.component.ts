import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-introduction',
  templateUrl: './services-introduction.component.html'
})
export class ServicesIntroductionComponent implements OnInit {

  explanationService: string = `
   import { <b>Injectable</b> } from '@angular/core';<br>
   <br>
   <b>@Injectable()</b><br>
   export class ExampleService {<br>
   <br>
   &nbsp;&nbsp;&nbsp;private lst: string[] = ['Angular 1', 'Angular 2', 'CSS'];<br>
   <br>
   &nbsp;&nbsp;&nbsp;getList() {<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return this.lst;<br>
   &nbsp;&nbsp;&nbsp;}<br>
   }<br>
  `;


  explanationModule: string = `
   import { BrowserModule } from '@angular/platform-browser';<br>
   ...<br>
   ...<br>
   <b>import { ExampleService } from './components/example.service';</b><br>
   <br>
   @NgModule({<br>
   &nbsp;&nbsp;&nbsp;declarations: [<br>
   &nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;],<br>
   &nbsp;&nbsp;&nbsp;imports: [<br>
   &nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;],<br>
   &nbsp;&nbsp;&nbsp;providers: [<b>ExampleService</b>],<br>
   &nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;})<br>
   &nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;...<br>
  `;

  explanationUsingService: string = `
   import { Component, OnInit } from '@angular/core';<br>
   <b>import { ExampleService } from './example.service';</b><br>
   <br>
   @Component({<br>
   &nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;...<br>
   })<br>
   export class CouseListComponent implements OnInit {<br>
   <br>
   &nbsp;&nbsp;&nbsp;courses: string[] = [];<br>
   &nbsp;&nbsp;&nbsp;constructor(<b>private exampleService: ExampleService</b>) {<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;}<br> 
   <br>
   &nbsp;&nbsp;&nbsp;ngOnInit() {<br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.courses = <b>this.exampleService.getList();</b><br>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...<br>
   &nbsp;&nbsp;&nbsp;}<br>
   }<br>
  `;

  constructor() { }

  ngOnInit() {
  }

}
