import { RowDataPacket } from "mysql2"; 
// RowDataPacket é o tipo base retornado pelo MySQL (mysql2).
// Ao estender ele, garantimos que a interface represente uma linha vinda do banco.

// interface não usa recurso, então devemos usar
export interface ICategoria extends RowDataPacket {
    id?: number;
    nome?: string;
}

//? - dispensavel na criação do objeto
export class Categoria {
    private _id?: number;
    private _nome: string = '';

    //Construtor
    constructor(nome: string, id?: number) {
        this.Nome = nome;
        this._id = id;
    }

    //GETTERS
    public get Id(): number | undefined {
        return this._id;
    }

    public get Nome(): string {
        return this._nome;
    }


    //SETTERS
    public set Nome(value: string) {
        this._validarNome(value);
        this._nome = value;
    }

    // DP => FACTORY
    public static criar(nome: string): Categoria {
        return new Categoria(nome);
    }

    private _validarNome(value: string): void {
        if (!value || value.trim().length < 3) {
            throw new Error('Nome da categoria deve ter pelo menos 3 caracteres')
        }
        if(value.trim().length>45){
            throw new Error('Nome deve ter no maximo 45 caracteres')
        }
    }
}