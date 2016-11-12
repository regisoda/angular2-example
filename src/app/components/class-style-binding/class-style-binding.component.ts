import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style-binding',
  templateUrl: './class-style-binding.component.html',
  styleUrls: ['./class-style-binding.component.css']
})
export class ClassStyleBindingComponent implements OnInit {

  explanation1: string = `
     <div class="alert" role="alert" [class.alert-success]="classe.value == 'success' ">
        Success  
     </div>
  `;

  explanation2: string = `<div [style.display]="b ? 'block' : 'none' "> Lourem adieu </div>`;

  constructor() { }

  ngOnInit() {
  }

}
