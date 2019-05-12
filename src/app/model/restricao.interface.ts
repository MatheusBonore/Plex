import { Variaveis } from './variavel.interface';

export interface Restricao {
    variaveis: Variaveis,
    valorRestricao: number,
    qualRestricao: String
};

export type Restricoes = Restricao[];