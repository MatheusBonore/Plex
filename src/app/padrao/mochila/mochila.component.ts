import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MochilaService } from 'src/app/services/mochila/mochila.service';
import { DadosOperacaoMochila, ModeloMochila } from 'src/app/model/modelo-mochila.class';
import { Iten } from 'src/app/model/iten.interface';
import { FuncaoIten } from 'src/app/model/funcao-iten.interface';
import { Variaveis } from 'src/app/model/variavel.interface';
import { Mochila } from 'src/app/model/mochila.interface';

@Component({
  selector: 'app-mochila',
  templateUrl: './mochila.component.html',
  styleUrls: ['./mochila.component.css']
})
export class MochilaComponent implements OnInit {

  public mochilaForm: Mochila = {
    capacidade: 10,
    itens: [
      { peso: 0, valor: 0 }
    ]
  };

  // @ViewChild('mochilaForm') public mochilaForm : ngForm;

  constructor(private mochilaService: MochilaService, private httpClient: HttpClient) { }

  ngOnInit(): void { }

  // public gerarMochila = () => {
  //   var dadosOperacao = new DadosOperacaoMochila(
  //     this.mochilaService.capacidade
  //   )
  //   var itens = new Array<Iten>();
  //   itens.push(this.getFuncaoIten(this.mochilaService.funcaoIten));
  //   this.mochilaService.itens.map((iten: Iten) => { itens.push(iten) });
  //   var mochila = new ModeloMochila(dadosOperacao, itens);

  //   this.httpClient.request("POST", "https://gist.github.com/lqt0223/21f033450a9d762ce8aee4da336363b1", { body: mochila, responseType: "json" })
  //     .subscribe(retorno => {
  //       console.log("RETORNO API", retorno)
  //     },
  //       err => {
  //         console.log(err);
  //       })
  // }

  private getFuncaoIten(funcaoIten: FuncaoIten): Iten {
    let variaveis: Variaveis = [];
    funcaoIten.variaveis.map(variavel => { variaveis.push(variavel) });

    return { peso: 0, valor: 0 };
  }

  public Adicionar(): void {
    console.log(this.mochilaForm.capacidade);
    // this.mochilaForm.itens.push({ peso: 0, valor: 0 });
  }

  public Remover(): void {
    if (this.mochilaForm.itens.length > 1)
      this.mochilaForm.itens.pop();
  }

  public ResolverProblema(): void {
    
  }
}
