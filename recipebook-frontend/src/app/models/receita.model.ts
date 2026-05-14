export enum Categoria {
  DOCE,
  SALGADO,
  BEBIDA,
  SOBREMESA
}

export class Receita {
  id: number;
  nome: string;
  categoria: Categoria;
  tempoPreparo: number; // em minutos, inteiro
  porcoes: number; // inteiro
  ingredientes: string[];
  modoPreparo: string;
  dataCadastro: Date;

  constructor(
    id: number,
    nome: string,
    categoria: Categoria,
    tempoPreparo: number,
    porcoes: number,
    ingredientes: string[],
    modoPreparo: string,
    dataCadastro: Date
  ) {
    this.id = id;
    this.nome = nome;
    this.categoria = categoria;
    this.tempoPreparo = tempoPreparo;
    this.porcoes = porcoes;
    this.ingredientes = ingredientes;
    this.modoPreparo = modoPreparo;
    this.dataCadastro = dataCadastro;
  }

  static receitaVazia(): Receita {
    return new Receita(
      -1,
      '',
      Categoria.DOCE,
      0,
      0,
      [],
      '',
      new Date()
    );
  }
}
