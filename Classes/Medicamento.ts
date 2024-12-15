//SUBCLASSE === HERANÇA

import { Produto } from "./Produto";

export class Medicamento extends Produto{

    private _formula: string;
    private _dosagem: string;
    private _receita: string;


	constructor(id: number, nome: string, categoria: number, valor: number, estoque: number, formula: string, dosagem: string, receita: string) {
		super(id,nome,categoria,valor,estoque);
        this._formula = formula;
		this._dosagem = dosagem;
		this._receita = receita;
	}

	public get formula(): string {
		return this._formula;
	}


	public get dosagem(): string {
		return this._dosagem;
	}

   
	public get receita(): string{
		return this._receita;
	}

    public visualizar(): void{
        super.visualizar();
        console.log(`Forma Farmacêutica(Xarope, Comprimido, Injeção, etc): ${this._formula}`);
        console.log(`Dosagem: ${this._dosagem}`);
        console.log(`Necessita Receita: ${this._receita}`);

    }


}