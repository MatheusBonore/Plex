import { Variaveis } from './variavel.interface';

export interface Restricao {
    variaveis: Variaveis,
    valorOperacao: number,
    operador: String
};

export type Restricoes = Restricao[];