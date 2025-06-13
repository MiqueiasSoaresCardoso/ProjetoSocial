import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RecursosGratuito{
  id:number;
  titulo: string;
  descricao: string;
  imagemUrl?: string; //? Indica que pode ser opcional
  arquivoPdf: string;
  nomeArquivoBaixado: string;

}

@Component({
  selector: 'app-recursos-gratuitos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursos-gratuitos.html',
  styleUrl: './recursos-gratuitos.css'
})


export class RecursosGratuitos {

  listaDeRecursos: RecursosGratuito[] =[
    {
      id: 1,
      titulo: "Amarelinha da Salvação",
      descricao: "Um guia completo com dicas e melhores práticas para quem deseja iniciar no voluntariado e fazer a diferença de forma impactante.",
      imagemUrl: 'assets/img/AmarelinhaSalvacao.jpg',
      arquivoPdf: "https://drive.google.com/uc?export=download&id=1FsQc6OBSRYSpf-AlrfeC2xd3XYOfX5rB",
      nomeArquivoBaixado: "guia-voluntariado-eficaz.pdf"
    },
    {
      id: 2,
      titulo: "E-book: Introdução ao Impacto Social",
      descricao: "Entenda os conceitos fundamentais do impacto social e como pequenas ações podem gerar grandes transformações.",
      imagemUrl: "assets/img/ebook_impacto_social.png", // Crie esta imagem
      arquivoPdf: "assets/pdfs/ebook_impacto_social.pdf", // Crie este PDF
      nomeArquivoBaixado: "ebook-introducao-impacto-social.pdf"
    },
    {
      id: 3,
      titulo: "Planilha de Orçamento para Projetos Comunitários",
      descricao: "Uma planilha modelo para ajudar no planejamento financeiro de seus projetos e iniciativas sociais.",
      // imagemUrl: "assets/img/planilha_orcamento.png", // Pode omitir se não tiver
      arquivoPdf: "assets/pdfs/planilha_orcamento_projetos.pdf", // Crie este PDF
      nomeArquivoBaixado: "planilha-orcamento-projetos-comunitarios.pdf"
    }
  ];
  

}
