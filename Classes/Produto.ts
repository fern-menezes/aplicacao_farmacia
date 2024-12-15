//SUPER CLASSE ABSTRATA

export abstract class Produto{
    
    private _id: number;
    private _nome: string;
	private _valor: number;
    private _categoria: number;
    private _estoque: number;


	constructor(id: number, nome: string, valor: number, categoria: number, estoque: number) {
		this._id = id;
		this._nome = nome;
		this._categoria = categoria;
		this._valor = valor;
		this._estoque = estoque;
	}

	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get categoria(): number {
		return this._categoria;
	}

	public get valor(): number {
		return this._valor;
	}

	public get estoque(): number {
		return this._estoque;
	}


    public visualizar(): void{
		let categoria: string;
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
		
    //usar os métodos get e set para gerar as informações no console
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