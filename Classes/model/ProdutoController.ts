import { Produto } from "../Produto";
import { ProdutoRepository } from "./ProdutoReposirory";

export class ProdutoController implements ProdutoRepository{


    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    cadastrar(produto: Produto): void { 
        this.listaProdutos.push(produto); 
        console.log(`O produto ${produto.id} foi criado com sucesso! ✅`); }


    listarProdutos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar()
        }
    }
    consultarId(numero: number): void {
        throw new Error("Method not implemented.");
    }
    atualizar(produto: Produto): void {
        throw new Error("Method not implemented.");
    }
    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    //incrementar o id ao adicionar um novo produto
    public gerarNumero(): number {
        return ++this.id;
    }
}
