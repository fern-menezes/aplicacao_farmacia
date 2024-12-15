import readlinesync = require("readline-sync");

export function main(){
    let opcao: number;

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