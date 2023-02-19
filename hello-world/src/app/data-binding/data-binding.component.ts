import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})


export class DataBindingComponent {

  url : string = "http://curso-angular.com";
  cursoAngular: boolean = true;
  urlImagem : string =  "http://lorempixel.com.br/largura/400/200?1";
  valorAtual: string = '';
  valorSalvo: string = '';
  
  nome: string = 'Teste';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';
  

  pessoa : any = {
    nome: 'Carlos',
    idade: 22
  }

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado() {
    return alert("Botão clicado");
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual += (<HTMLInputElement>event?.target).value;
  }

  salvarValor(valor: string){          
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor () { }  

}
