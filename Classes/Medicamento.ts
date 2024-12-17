//SUBCLASSE === HERANÇA

// Importação da superclasse Produto
import { Produto } from "./Produto";

// Classe Medicamento que estende a classe abstrata Produto
export class Medicamento extends Produto{

	// Propriedades específicas da classe Medicamento
    private _formula: string;
    private _dosagem: string;
    private _receita: string;


	// Construtor da classe Medicamento que inicializa as propriedades
	constructor(id: number, nome: string, categoria: number, valor: number, estoque: number, formula: string, dosagem: string, receita: string) {
		super(id,nome,categoria,valor,estoque);
        this._formula = formula;
		this._dosagem = dosagem;
		this._receita = receita;
	}


	// Métodos getter para acessar as propriedades privadas
	public get formula(): string {
		return this._formula;
	}

	public get dosagem(): string {
		return this._dosagem;
	}


	public get receita(): string {
		return this._receita;
	}

	// Métodos setter para modificar as propriedades privadas
	public set formula(value: string) {
		this._formula = value;
	}

	public set dosagem(value: string) {
		this._dosagem = value;
	}

	public set receita(value: string) {
		this._receita = value;
	}
	
	// Método para visualizar as informações do medicamento
    public visualizar(): void{
		// Chama o método visualizar da superclasse para exibir as informações básicas do produto
        super.visualizar();
		// Adiciona informações específicas do medicamento
        console.log(`Forma Farmacêutica(Xarope, Comprimido, Injeção, etc): ${this._formula}`);
        console.log(`Dosagem: ${this._dosagem}`);
        console.log(`Necessita Receita: ${this._receita}`);

    }


}