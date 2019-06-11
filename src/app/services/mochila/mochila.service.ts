import { Injectable } from '@angular/core';
import { FuncaoIten } from 'src/app/model/funcao-iten.interface';
import { Itens } from 'src/app/model/iten.interface';
import { Variavel, Variaveis } from 'src/app/model/variavel.interface';

@Injectable({
  providedIn: 'root'
})
export class MochilaService {

  private _capacidade: number = null;
  public itens: Itens = [];
  public funcaoIten: FuncaoIten = { variaveis: [] };

  constructor() { }

  public set capacidade(numCapacidade: number) {
    this._capacidade = numCapacidade;
  }

  public get capacidade(): number {
    return this._capacidade;
  }
}
