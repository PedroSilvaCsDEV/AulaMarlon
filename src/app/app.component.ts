import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // atributos -> variáveis
  // metódos -> funções
  
  // Interpolação
  title = 'aulaMarlon';
  nome:string = 'Marlon';
  idade = 35;
  url = "https://www.pensamentoverde.com.br/wp-content/uploads/2018/02/Depositphotos_16902961_original_a393978551.jpg"
  // Property Binding
  cor ='3px 3px 3px rgb(100,0,120)'
  constructor(){
    
  }
  imprime(){
    return 'Oi';
  }
  corTexto = ''
  muda(){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    this.corTexto = `rgb(${r},${g},${b})`
  }
  texto = ""
  escreve(value:string){
    this.texto=value;
  }
  tema = 'light'
  mudaTema(value:string){
    console.log(value);
    this.tema = value;
  }
  guardaCor = ""
  mudaCor(value:string){
    this.guardaCor = value;
  }
  guardaFonte = ""
  mudaFonte(value:string){
    this.guardaFonte = value;
  }
  guardaTamanho = ""
  mudaTamanho(value:string){
    this.guardaTamanho = value;
  }
  //Objeto de evento

  enxerga(value:any){
    console.log(value.target.value);
  }
}