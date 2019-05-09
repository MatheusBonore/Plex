import { Variaveis } from './variavel.interface';

export interface Restricao {
    variaveis: Variaveis,
    valorRestricao: number
};

export type Restricoes = Restricao[];