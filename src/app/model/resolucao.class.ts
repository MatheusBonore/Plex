import { Funcao } from './funcao.class';

export class Resolucao {
	constructor(
		public quantas_decisao: Number,
		public quantas_restricao: Number,
		public qual_objetivo: boolean,
		public funcao: Funcao[]
	) { }
}