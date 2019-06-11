import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MochilaService } from 'src/app/services/mochila/mochila.service';
import { DadosOperacaoMochila, ModeloMochila } from 'src/app/model/modelo-mochila.class';
import { Iten } from 'src/app/model/iten.interface';
import { FuncaoIten } from 'src/app/model/funcao-iten.interface';
import { Variaveis } from 'src/app/model/variavel.interface';

@Component({
  selector: 'app-mochila',
  templateUrl: './mochila.component.html',
  styleUrls: ['./mochila.component.css']
})
export class MochilaComponent implements OnInit {

  @ViewChild('mochilaForm') public mochilaForm: NgForm;

  constructor(private mochilaService: MochilaService, private httpClient: HttpClient) { }

  ngOnInit(): void { }

  public gerarMochila = () => {
    var dadosOperacao = new DadosOperacaoMochila(
      this.mochilaService.capacidade
    )
    var itens = new Array<Iten>();
    itens.push(this.getFuncaoIten(this.mochilaService.funcaoIten));
    this.mochilaService.itens.map((iten: Iten) => { itens.push(iten) });
    var mochila = new ModeloMochila(dadosOperacao, itens);

    this.httpClient.request("POST", "localhost:2001/api/simplex", { body: mochila, responseType: "json" })
      .subscribe(retorno => {
        console.log("RETORNO API", retorno)
      },
        err => {
          console.log(err);
        })
  }

  private getFuncaoIten(funcaoIten: FuncaoIten): Iten {
    let variaveis: Variaveis = [];
    funcaoIten.variaveis.map(variavel => { variaveis.push(variavel) });

    return { variaveis, peso: 0, valor: 0 };
  }
}
