import readlinesync = require("readline-sync");
//import { Medicamento } from './Medicamento';
//import { Cosmetico } from './Cosmetico';
import { Produto } from "./Produto";
import { colors } from './src/Colors';
import { Medicamento } from "./Medicamento";
import { Cosmetico } from "./Cosmetico";

export function main(){
    let opcao, id, valor, estoque: number;
    let nome: string;
    const categoria = ['Medicamentos', 'Cosmeticos'];

   /**  const produto: Produto = new Produto(1, "Band-Aid", 2, 12.00, 10);
    produto.visualizar()

    const produto2: Produto = new Produto(2, "Nimesulida", 1, 8.00, 6);
    produto2.visualizar()
    
    const produto3: Produto = new Medicamento(3, "Dipirona", 1, 16.00, 6, "Gotas", "30ml", false);
    produto3.visualizar()

    const produto4: Produto = new Cosmetico(4, "Sabonete Líquido", 2, 15.00, 6, "Dove", "Higiêne Pessoal", "Não testado em Animais");
    produto4.visualizar()
*/

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
            //Produto.visualizar("");
            break;
        case 2:
            console.log("📝 Listar todos os produtos");
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
}