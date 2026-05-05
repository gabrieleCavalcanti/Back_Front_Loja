import { db } from "../database/connection.database";
import { IProduto } from "../models/produto.model";
import { ResultSetHeader } from "mysql2";

export class ProdutoRepository {
    async findAll(): Promise<IProduto[]> {
        const [rows] = await db.execute<IProduto[]>(
            `SELECT 
            p.id,
            p.nome AS nome_produto,
            p.valor,
            c.nome AS categoria
        FROM produtos p
        INNER JOIN categorias c 
            ON p.idCategoria = c.id;`
        );

        return rows;
    }

    // Omit => Omite os campos discriminados
    async create(dados: Omit<IProduto, 'id'>): Promise<ResultSetHeader> {
        const sql = 'INSERT INTO produtos (nome, valor, idCategoria) VALUES (?,?,?);';
        const values = [dados._nome, dados._valor, dados._idCategoria];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }

    async update(id: number, dados: Omit<IProduto, 'id'>): Promise<ResultSetHeader> {
        const sql = 'UPDATE produtos SET nome=?, valor=? , idCategoria=? WHERE id=?;';
        const values = [dados._nome, dados._valor, dados._idCategoria, id];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }

    async delete(id: number): Promise<ResultSetHeader> {
        const sql = 'DELETE FROM produtos WHERE id=?;';
        const values = [id];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }
}