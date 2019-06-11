import { Variaveis } from './variavel.interface';

export interface Iten {
    variaveis: Variaveis,
    peso: number,
    valor: number
};

export type Itens = Iten[];