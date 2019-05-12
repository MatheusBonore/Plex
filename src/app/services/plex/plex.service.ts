import { Injectable } from '@angular/core';
import { FuncaoObjetivo } from 'src/app/model/funcao-objetivo.interface';
import { Restricoes } from 'src/app/model/restricao.interface';
import { Variavel, Variaveis } from 'src/app/model/variavel.interface';
import { Restricao } from 'src/app/model/restricao.interface';

@Injectable({
  providedIn: 'root'
})
export class PlexService {

  public restricoes: Restricoes = [];
  private _quantas_decisao: number = null;
  private _quantas_restricao: number = null;
  private _quantas_interacao: number = 1000;
  private _qual_objetivo: boolean = true;
  public funcaoObjetivo: FuncaoObjetivo = { variaveis: [] };

constructor() { }

  public set quantas_decisao(numDecisoes: number) {
  this._quantas_decisao = numDecisoes;
  this._aplicarNumVariaveisFuncaoObjetivo(numDecisoes);
  this._aplicarNumVariaveisRestricao(numDecisoes);
}

  public set quantas_restricao(numRestricoes: number) {
  this._quantas_restricao = numRestricoes;
  this._aplicarNumRestricoes(numRestricoes);
}

  public set quantas_interacao(numInteracoes: number) {
  this._quantas_interacao = numInteracoes;
}

  public set qual_objetivo(booObjetivo: boolean) {
  this._qual_objetivo = booObjetivo;
}

  public get quantas_decisao(): number {
  return this._quantas_decisao;
}

  public get quantas_restricao(): number {
  return this._quantas_restricao;
}

  public get quantas_interacao(): number {
  return this._quantas_interacao;
}

  public get qual_objetivo(): boolean {
  return this._qual_objetivo;
}

  private get _novaVariavel(): Variavel {
  return { valor: null };
}

  private get _novaRestricao(): Restricao {
  let variaveis: Variaveis = [];
  let i: number = 0;
  while (i < this.quantas_decisao) {
    variaveis.push(this._novaVariavel);
    i++;
  }
  return { variaveis, valorRestricao: 0, qualRestricao: 'maior' };
}

  private _aplicarNumVariaveisFuncaoObjetivo(numVariaveis: number): void {
  let diferenca = this.funcaoObjetivo.variaveis.length - numVariaveis;
  if(diferenca > 0) {
  this.funcaoObjetivo.variaveis = this.funcaoObjetivo.variaveis.slice(0, numVariaveis);
} else if (diferenca < 0) {
  while (this.funcaoObjetivo.variaveis.length < numVariaveis) {
    this.funcaoObjetivo.variaveis.push(this._novaVariavel);
  }
}
  }

  private _aplicarNumVariaveisRestricao(numVariaveis: number): void {
  let diferenca = this.restricoes.length - numVariaveis;
  if(diferenca > 0) {
  this.restricoes = this.restricoes.map(
    (restricao: Restricao): Restricao => {
      return {
        ...restricao,
        variaveis: restricao.variaveis.slice(0, numVariaveis)
      }
    }
  );
} else if (diferenca < 0) {
  this.restricoes = this.restricoes.map(
    (restricao: Restricao): Restricao => {
      while (restricao.variaveis.length < numVariaveis) {
        restricao.variaveis.push(this._novaVariavel);
      }
      return restricao;
    }
  );
}
  }

  public _aplicarNumRestricoes(numRestricoes: number): void {
  let diferenca = this.restricoes.length - numRestricoes;
  if(diferenca > 0) {
  this.restricoes = this.restricoes.slice(0, numRestricoes);
} else if (diferenca < 0) {
  while (this.restricoes.length < numRestricoes) {
    this.restricoes.push(this._novaRestricao);
  }
}
  }
}
