import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})



export class DataBindingComponent {

  url : string = "http://curso-angular.com";
  cursoAngular: boolean = true;
  urlImagem : string =  "http://lorempixel.com.br/largura/400/200?1";

  getValor() {
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  constructor () { }  

}
