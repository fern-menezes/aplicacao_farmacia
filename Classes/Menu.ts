//importação do módulo readline, pata interação do usuário via console
import readlinesync = require("readline-sync");
import { Produto } from "./Produto";
import { colors } from './src/Colors';
import { Medicamento } from "./Medicamento";
import { Cosmetico } from "./Cosmetico";
import { ProdutoController } from "./model/ProdutoController";
import { ProdutoRepository } from "./model/ProdutoReposirory";


//função principal que inicializa o sistema
export function main(){

    // Criação do controlador de produtos e pré-cadastro de alguns produtos
    let produtos: ProdutoController = new ProdutoController()
    //função de de produtos pré cadastrados
    preCadastrarProdutos(produtos);;

    //váriaveis usadas no menu
    let opcao, id, valor: number, categoria: number, estoque: number;
    let nome, marca, tipoUso, infoLabel, formula, dosagem, numero, receita: string;
    const categoriaTipo = ['Medicamentos', 'Cosmeticos'];

    
    while(true){
        // Exibição do menu e leitura da opção escolhida pelo usuário, função no fim do código
        menu();
        opcao = readlinesync.questionInt('Digite a opcao desejada: ');

    // condição para encerrar o sistema
    if(opcao === 0){
        console.log("\n------------------------------------------");
        console.log("Obrigado por usar o nosso sistema 💊");
        sobre();
        process.exit(0);
    }

    // Tratamento das opções do menu usando switch-case
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

            console.log("Digite o id do produto: ");
                numero = readlinesync.questionInt('');
                produtos.consultarId(numero);

            break;
        case 4:
            console.log("🔄 Atualizar Produto");

                
           
            break;
        case 5:
            console.log("🗑️ Deletar Produto");

            console.log("Digite o produto: ");
                id = readlinesync.questionInt('');
                produtos.deletar(id);
            break;
        default:
            console.log("Opção Inválida! ❌");
            break;
        }
    }
    
}
main();

// Função que exibe informações sobre o sistema
export function sobre(){
    console.log("Desenvolvido por: Fern🌿 | github: fern-menezes");
    console.log("--------------------------------------------------");
};

// Função que exibe o menu
export function menu(){

    console.log(colors.bg.white, colors.fg.red);
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
    console.log(colors.reset);
};

// Função que exibe informações sobre os itens já cadastrados
function preCadastrarProdutos(produtos: ProdutoRepository): void {
    // Medicamentos
    produtos.cadastrar(new Medicamento(
        produtos.gerarNumero(),
        "Paracetamol",
        10.99,
        1,
        50,
        "C8H9NO2",
        "500mg",
        "sim"
    ));
    
    produtos.cadastrar(new Medicamento(
        produtos.gerarNumero(),
        "Ibuprofeno",
        15.49,
        1,
        30,
        "C13H18O2",
        "600mg",
        "não"
    ));

    // Cosméticos
    produtos.cadastrar(new Cosmetico(
        produtos.gerarNumero(),
        "Creme Hidratante",
        25.99,
        2,
        20,
        "Nivea",
        "Uso Externo",
        "Hidratação por 24h"
    ));
    
    produtos.cadastrar(new Cosmetico(
        produtos.gerarNumero(),
        "Shampoo Anticaspa",
        19.99,
        2,
        35,
        "Head & Shoulders",
        "Uso Diário",
        "Combate à Caspa"
    ));
}
