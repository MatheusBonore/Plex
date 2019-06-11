import { Iten } from './iten.interface';

export class Mochila {
    constructor(
        public capacidade: Number,
        public itens: Iten[] 
    ) { }
}