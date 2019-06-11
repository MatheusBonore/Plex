import { Restricao } from './restricao.interface';

export class ModeloSimplex {
    public DadosOperacao: DadosOperacaoSimplex;
    public Restricoes: Array<Restricao>;

    constructor(
        dadosOperacao: DadosOperacaoSimplex,
        restricoes: Array<Restricao>
    ) {
        this.DadosOperacao = dadosOperacao || new DadosOperacaoSimplex()
        this.Restricoes = restricoes || new Array<Restricao>()
    }
}

export class RestricoesSimplex {
    public Operadores: Array<String>;
    public Variaveis: Array<Number>;

}

export class DadosOperacaoSimplex {
    public numVariaveis: Number;
    public numRestricoes: Number;
    public numMaxIteracoes: Number;
    public metodoOperacao: boolean;

    constructor(
        numVariaveis?: Number,
        numRestricoes?: Number,
        numMaxIteracoes?: Number,
        metodoOperacao?: boolean,
    ) {
        this.numVariaveis = numVariaveis || 0,
            this.numRestricoes = numRestricoes || 0,
            this.numMaxIteracoes = numMaxIteracoes || 0,
            this.metodoOperacao = metodoOperacao || false
    }
}