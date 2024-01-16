export class Produto {

  constructor(
    public id: number,
    public nome: string | null,
    public marca: string | null,
    public categoria: string | null,
    public preco: number | null
  ) {  }
}
