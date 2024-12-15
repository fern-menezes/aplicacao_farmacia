import readlinesync = require("readline-sync");
//import { Medicamento } from './Medicamento';
//import { Cosmetico } from './Cosmetico';
import { Produto } from "./Produto";
import { colors } from './src/Colors';
import { Medicamento } from "./Medicamento";
import { Cosmetico } from "./Cosmetico";
import { ProdutoController } from "./model/ProdutoController";

export function main(){

    let produtos: ProdutoController = new ProdutoController();

    let opcao, id, valor: number, categoria: number, estoque: number;
    let nome, marca, tipoUso, infoLabel, formula, dosagem, receita: string;
    const categoriaTipo = ['Medicamentos', 'Cosmeticos'];

    produtos.cadastrar(new Medicamento(produtos.gerarNumero(), "Damin", 12.00,1, 15, "Comprimidos", "50mg", "Não"));
    produtos.cadastrar(new Medicamento(produtos.gerarNumero(), "Nimesulida", 8.00, 1, 15, "Comprimidos", "20mg", "Não"));
    produtos.cadastrar(new Cosmetico(produtos.gerarNumero(), "Desodorante", 20.00,2, 150, "Dove", "Higiene Pessoal", "100% Reciclável"));
    produtos.cadastrar(new Cosmetico(produtos.gerarNumero(), "Sabonete Líquido", 20.00, 2, 150, "Momange", "Higiene Pessoal", "Não testado em animais"));


    while(true){
             
        //console.log(colors);
        console.log("\n------------------------------------------");
        console.log("             FARMÁCIA CURA TUDO           ");
        console.log("------------------------------------------");
        console.log("                                          ");
        console.log("       1 - CRIAR PRODUTO                  ");
        console.log("       2 - LISTAR TODOS OS PRODUTOS       ");
        console.log("       3 - CONSULTAR PRODUTO POR ID       ");
        console.log("       4 - ATUALIZAR PRODUTO              ");
        console.log("       5 - DELETAR PRODUTO                ");
        console.log("       0 - SAIR                           ");
        console.log("                                          ");
        //console.log(colors.reset);
   

    opcao = readlinesync.questionInt('Digite a opcao desejada: ')

    if(opcao === 0){
        console.log("\n------------------------------------------");
        console.log("Obrigado por usar o nosso sistema 💊");
        sobre();
        process.exit(0);
    }
    switch(opcao){
        case 1:
            console.log("➕ Criar Produto");
            nome = readlinesync.question('Informe o produto: \n')

            console.log("Informe o valor do produto: ");
            valor = readlinesync.questionFloat('');

            console.log("Escolha a categoria do produto ");
            categoria = readlinesync.keyInSelect(categoriaTipo, "", {cancel: false}) + 1;


            console.log("Informe a quantidade do estoque: ");
            estoque = readlinesync.questionInt('');

            switch(categoria){
                case 1:
                    console.log("Informe o formato de consumo: ");
                    formula = readlinesync.question('');

                    console.log("Informe a dosagem: ");
                    dosagem = readlinesync.question('');

                    console.log("Necessita Receita: ");
                    receita = readlinesync.question('');

                    produtos.cadastrar(new Medicamento(produtos.gerarNumero(), nome, valor, categoria, estoque, formula, dosagem, receita))
                break;
                case 2:
                    console.log("Informe a Marca ou Fabricante: ");
                    marca = readlinesync.question('');

                    console.log("Informe a categoria de uso: ");
                    tipoUso = readlinesync.question('');

                    console.log("Informe as certificações: ");
                    infoLabel = readlinesync.question('');

                    produtos.cadastrar(new Cosmetico(produtos.gerarNumero(), nome, valor, categoria, estoque, marca, tipoUso, infoLabel))
                    break;
            }

            break;
        case 2:
            console.log("📝 Listar todos os produtos");
            produtos.listarProdutos();
            break;
        case 3:
            console.log("📖 Consultar produto por ID");
            break;
        case 4:
            console.log("🔄 Atualizar Produto");
            break;
        case 5:
            console.log("🗑️ Deletar Produto");
            break;
        default:
            console.log("Opção Inválida! ❌");
            break;
        }
    }
    
}
main();

export function sobre(){
    console.log("Desenvolvido por: Fern🌿 | github: fern-menezes");
    console.log("--------------------------------------------------");
};