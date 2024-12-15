//SUBCLASSE === HERANÇA

import { Produto } from "./Produto";

export class Cosmetico extends Produto{

    private _marca: string;
    private _tipoUso: string;
    private _infoLabel: string;


	constructor(id: number, nome: string, categoria: number, valor: number, estoque: number, marca: string, tipoUso: string, infoLabel: string) {
        super(id,nome,categoria,valor,estoque);
		this._marca = marca;
		this._tipoUso = tipoUso;
		this._infoLabel = infoLabel;
	}

	public get marca(): string {
		return this._marca;
	}


	public get tipoUso(): string {
		return this._tipoUso;
	}


	public get infoLabel(): string {
		return this._infoLabel;
	}

   
    public visualizar(): void{
        super.visualizar();
        console.log(`Marca/Fabricante ${this._marca}`);
        console.log(`Categoria de Uso: ${this._tipoUso}`);
        console.log(`Certificações: ${this._infoLabel}`);

    }


}