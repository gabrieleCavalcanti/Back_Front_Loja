import { Request, Response } from "express";
import { ProdutoService } from "../services/produto.service";
import { error } from "node:console";

export class ProdutoController {
    constructor(private _service = new ProdutoService()) { }

    selecionaTodos = async (req: Request, res: Response) => {
        try {
            const produtos = await this._service.selecionaTodos();
            console.log(produtos)
            res.status(200).json({ produtos });

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
            const { nome, valor, idCategoria } = req.body;

            if (!nome || !isNaN(nome) || !valor || isNaN(valor) || !idCategoria || isNaN(idCategoria)) {
                return res.status(200).json({ message: 'Valor invalido!' })
            }

            const novo = await this._service.criar(nome, valor, idCategoria);
            res.status(201).json({ novo, message: "Produto Criado Com Sucesso" }); // criar é status 201

        } catch (error: unknown) {
            console.error(error);
            if (error instanceof Error) {
                res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
            }
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: 'Erro Desconhecido' });
        }
    }
    editar = async (req: Request, res: Response) => {
        try {
            const { nome, valor, idCategoria } = req.body;

            if (!nome || !isNaN(nome) || !valor || isNaN(valor) || !idCategoria || isNaN(idCategoria)) {
                return res.status(200).json({ message: 'Valor invalido!' })
            }

            const id = Number(req.query.id)
            const alterado = await this._service.editar(id, nome, valor, idCategoria);
            res.status(200).json({ alterado, message: "Produto Alterado Com Sucesso" });

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