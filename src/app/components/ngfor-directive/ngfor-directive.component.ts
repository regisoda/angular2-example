import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-directive',
  templateUrl: './ngfor-directive.component.html',
  styleUrls: ['./ngfor-directive.component.css']
})
export class NgforDirectiveComponent implements OnInit {

  nomes: string[] = ['João', 'Maria', 'Pedro', 'Antonio'];
  idades: number[] = [];
  responsavel: any = {
    nome: 'Marcos Teixeira',
    cpf: '598.789.457-12',
    profissao: {
      descricao: 'Torneiro',
      cargo: null,
      admissao: 2006,
      // ferias:{
      //   proxima: '05/2017',
      //   ultima: '10/2015'
      // },
      salario: 1500.45623
    }
  };

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.nomes.length; i++) {
       this.idades[i] = (i + 1) * 20;
    }
  }
}
