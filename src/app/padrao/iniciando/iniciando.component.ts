import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { PlexService } from 'src/app/services/plex/plex.service';
import { ModeloSimplex, DadosOperacaoSimplex } from 'src/app/model/modelo-simplex.class';
import { Restricao } from 'src/app/model/restricao.interface';
import { FuncaoObjetivo } from 'src/app/model/funcao-objetivo.interface';
import { Variaveis } from 'src/app/model/variavel.interface';

@Component({
  selector: 'app-iniciando',
  templateUrl: './iniciando.component.html',
  styleUrls: ['./iniciando.component.css']
})
export class IniciandoComponent implements OnInit {

  @ViewChild('resolucaoForm') public resolucaoForm: NgForm;

  constructor(private plexService: PlexService, private httpClient: HttpClient) { }

  ngOnInit(): void { }

  public gerarSimplex = () => {
    var dadosOperacao = new DadosOperacaoSimplex(
      this.plexService.quantas_decisao,
      this.plexService.quantas_restricao,
      this.plexService.quantas_interacao,
      this.plexService.qual_objetivo
    )
    var restricoes = new Array<Restricao>();
    restricoes.push(this.getFuncaoObjetiva(this.plexService.funcaoObjetivo));
    this.plexService.restricoes.map((restricao: Restricao) => { restricoes.push(restricao) });
    var simplex = new ModeloSimplex(dadosOperacao, restricoes);

    this.httpClient.request("POST", "localhost:2001/api/simplex", { body: simplex, responseType: "json" })
      .subscribe(retorno => {
        console.log("RETORNO API", retorno)
      },
        err => {
          console.log(err);
        })
  }

  private getFuncaoObjetiva(funcaoObjetivo: FuncaoObjetivo): Restricao {
    let variaveis: Variaveis = [];
    funcaoObjetivo.variaveis.map(variavel => { variaveis.push(variavel) });

    return { variaveis, valorOperacao: 0, operador: ">=" };
  }
}
