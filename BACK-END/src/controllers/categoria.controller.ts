import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";
import { error } from "node:console";

export class CategoriaController {
    constructor(private _service = new CategoriaService()) { }

    selecionaOrdemASC = async (req: Request, res: Response) => {
        try {
            const categorias = await this._service.selecionaOrdemASC();
            res.status(200).json({ categorias });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    criar = async (req: Request, res: Response) => {
        try {
            const { nome } = req.body;

            if (!nome || !isNaN(nome)) {
                return res.status(200).json({ message: 'Valor invalido!' })
            }

            const novo = await this._service.criar(nome);
            res.status(201).json({ novo, message: "Categoria Criada Com Sucesso" }); // criar é status 201

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    deletar = async (req: Request, res: Response) => {
        try {
            const id = Number(req.query.id)
            const deletado = await this._service.deletar(id);
            if (deletado.affectedRows === 0) {
                res.status(200).json({ message: `Registro ID: ${id} não existe` });
            }
            res.status(200).json({ message: 'Excluido com sucesso!', deletado });

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
}