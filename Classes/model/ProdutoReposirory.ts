import { Produto } from "../Produto";

export interface ProdutoRepository{
    //criar as assinaturas dos métodos

    cadastrar(produto: Produto): void;
    listarProdutos(): void;
    consultarId(numero: number): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;
}
