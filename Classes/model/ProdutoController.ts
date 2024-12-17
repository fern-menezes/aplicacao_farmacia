/**
 * O ProdutoController é responsável por gerenciar a lista de produtos, incluindo operações de cadastro, listagem, consulta, atualização e deleção de produtos. 
 * Ele implementa a interface ProdutoRepository, garantindo que todos os métodos definidos na interface sejam implementados. 
 * Além disso, fornece uma implementação concreta para a lógica de negócio associada a essas operações.
 */

import { Produto } from "../Produto";
import { ProdutoRepository } from "./ProdutoReposirory";


// Classe ProdutoController que implementa a interface ProdutoRepository
export class ProdutoController implements ProdutoRepository{


    /** Lista privada para armazenar os produtos
     * 
     * Tipo: Array<Produto>
     * Descrição: Armazena a lista de produtos cadastrados.
     * */ 
    private listaProdutos: Array<Produto> = new Array<Produto>();
    

    // Variável para gerar IDs incrementais, Armazena o próximo ID a ser atribuído aos produtos. É incrementado sempre que um novo produto é adicionado.
    id: number = 0;


    /** 
     * Descrição: Adiciona um novo produto à lista de produtos e exibe uma mensagem de sucesso.
     * Parâmetro: produto (tipo Produto) – O produto a ser cadastrado.
     * */
    cadastrar(produto: Produto): void { 
        this.listaProdutos.push(produto); 
        console.log(`O produto ${produto.id} foi criado com sucesso! ✅`); }


    /**
     * Descrição: Lista todos os produtos cadastrados, chamando o método visualizar de cada produto.
     * Parâmetro: Nenhum
     */
    listarProdutos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar()
        }
    }

    /**
     * Descrição: Consulta um produto pelo ID, chamando o método visualizar se encontrado, ou exibindo uma mensagem de erro se não encontrado.
     * Parâmetro: numero (tipo number) – O ID do produto a ser consultado.
     */
    consultarId(numero: number): void {
        const buscaProduto = this.buscarNoArray(numero);

        if(buscaProduto !== null)
            buscaProduto.visualizar();
        else{
            console.log("\nProduto Não Cadastrado!")
        }
    }


    /**
     * Descrição: Atualiza um produto existente na lista. Se o produto não for encontrado, exibe uma mensagem de erro.
     * Parâmetro: produto (tipo Produto) – O produto com as novas informações.
     */
    atualizar(produto: Produto): void {
        const buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nO cadastro do produto foi atualizad com sucesso!✔️")
        } else
            console.log("\nProduto Não Encontrado!")
    }


    /**
     * Descrição: Deleta um produto pelo ID. Se o produto não for encontrado, exibe uma mensagem de erro.
     * Parâmetro: numero (tipo number) – O ID do produto a ser deletado.
     */
    deletar(numero: number): void {
        const buscaProduto = this.buscarNoArray(numero);

        if(buscaProduto !== null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nProduto deletado com sucesso!✔️")
        } else
            console.log("\nProduto Não Encontrado!")
    }

    //Gera um número único de identificação incrementando a variável id || incrementar o id ao adicionar um novo produto
    public gerarNumero(): number {
        return ++this.id;
    }

    /**
     *  Descrição: Método auxiliar que busca um produto na lista pelo ID. Retorna o produto se encontrado, caso contrário retorna null.
     * Parâmetro: numero (tipo number) – O ID do produto a ser buscado.
     * Retorno: Produto | null – O produto encontrado ou null se não encontrado
     */
    public buscarNoArray(numero: number): Produto | null{
        for (let produto of this.listaProdutos){
            if(produto.id === numero)
                return produto;
        }
        return null;
    }
}
