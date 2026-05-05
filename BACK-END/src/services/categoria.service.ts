import { CategoriaRepository } from "../repository/categoria.repository";
import { Categoria } from "../models/categoria.model";

export class CategoriaService {
    constructor(private _repository = new CategoriaRepository()) { }

    async selecionaOrdemASC(){
        return await this._repository.findOrderASC();
    }

    async criar(nome: string) {
        const categoria = Categoria.criar(nome);
        return await this._repository.create(categoria);
    }

    async deletar(id: number) {
        return await this._repository.delete(id);
    }
}