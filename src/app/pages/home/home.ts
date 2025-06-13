import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  nomeDoProjeto: string = "O Único Caminho";
  anoDeFundacao: number = 2023;
  cidade: string = 'Catolé do Rocha - PB'
  msg: string = 'Contribua com essa causa'
  imagemContribuicao: string = 'assets/img/contribua.png';
  imgVisivel: boolean = true;
  msgBoasVindas = 'Seja Bem Vindo(a)! Este é o nosso site oficial'

  constructor(){} //Isso é executado quando o componente é criado

  //podemos adicionar metódos aqui tbm
  getDescricaoCompleta(): string{
    return `${this.msgBoasVindas}, fundado em ${this.anoDeFundacao}, tem como area de atuação a cidade de 
    ${this.cidade}, mas com desejo de servir de inspiração para o Brasil`;
  }  

  alterarBanner() : void{
    this.imgVisivel = !this.imgVisivel
  }

}
