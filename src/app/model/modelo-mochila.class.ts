import { Iten } from './iten.interface';

export class ModeloMochila {
    public DadosOperacao: DadosOperacaoMochila;
    public Itens: Array<Iten>;

    constructor(
        dadosOperacao: DadosOperacaoMochila,
        itens: Array<Iten>
    ) {
        this.DadosOperacao = dadosOperacao || new DadosOperacaoMochila()
        this.Itens = itens || new Array<Iten>()
    }
}

export class ItensMochila {
    public Pesos: Array<Number>;
    public Valores: Array<Number>;
}

export class DadosOperacaoMochila {
    public capacidade: Number;
    public numPeso: Number;
    public numValor: Number;

    constructor(
        capacidade?: Number,
        numPeso?: Number,
        numValor?: Number,
    ) {
        this.capacidade = capacidade || 0,
            this.numPeso = numPeso || 0,
            this.numValor = numValor || 0
    }
}