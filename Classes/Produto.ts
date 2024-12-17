//SUPER CLASSE ABSTRATA


// Classe abstrata que define a estrutura básica para todos os produtos
export abstract class Produto{
    
	// Propriedades privadas da classe Produto
    private _id: number;
    private _nome: string;
	private _valor: number;
    private _categoria: number;
    private _estoque: number;


	// Construtor da classe Produto que inicializa as propriedades
	constructor(id: number, nome: string, valor: number, categoria: number, estoque: number) {
		this._id = id;
		this._nome = nome;
		this._categoria = categoria;
		this._valor = valor;
		this._estoque = estoque;
	}

	// Métodos getter para acessar as propriedades privadas
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get valor(): number {
		return this._valor;
	}

	public get categoria(): number {
		return this._categoria;
	}

	public get estoque(): number {
		return this._estoque;
	}

	// Métodos setter para modificar as propriedades privadas
	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set valor(value: number) {
		this._valor = value;
	}

	public set categoria(value: number) {
		this._categoria = value;
	}

	public set estoque(value: number) {
		this._estoque = value;
	}
	
	// Método para visualizar as informações do produto
    public visualizar(): void{
		// Declaração de uma variável para armazenar a categoria como string
		let categoria: string;

		// Switch case para determinar a categoria do produto com base no número
		switch(this._categoria){
			case 1:
				categoria = "Medicamento";
				break;
			case 2:
				categoria = "Cosmetico";
				break;
			default:
				categoria = "Tipo Inválido ⚠️";
		}
		
    //usar os métodos get e set para gerar as informações no console, Imprime as informações do produto no console
        console.log("\n----------------------------------------------");
        console.log("              CADASTRO DO PRODUTO             ");
        console.log("----------------------------------------------");
        console.log(`Código do Produto: ${this._id}`);
        console.log(`Produto: ${this._nome}`);
        console.log(`Valor: ${this._valor.toFixed(2)}`);
		console.log(`Categoria: ${categoria}`);
        console.log(`Estoque: ${this._estoque}`);
	}

}