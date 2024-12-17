//interface que define um contrato para classes que vão implementar essas funções.

import { Produto } from "../Produto";

export interface ProdutoRepository{
    gerarNumero(): number;
    //criar as assinaturas dos métodos


    /**
     * Explicando o método: 
     * Propósito: Adicionar um novo produto ao repositório
     * 
     * Parâmetros:
     * produto: Este é o parâmetro que representa o produto que será adicionado. Ele é do tipo Produto, que pode ser uma instância de uma subclasse como Medicamento ou Cosmetico.
     * Tipo de Retorno:
     * void: Isso indica que o método não retorna nenhum valor.
     */
    cadastrar(produto: Produto): void;
    listarProdutos(): void;
    consultarId(numero: number): void;
    atualizar(produto: Produto): void;
    deletar(numero: number): void;
}
