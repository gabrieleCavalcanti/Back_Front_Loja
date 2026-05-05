import { db } from "../database/connection.database";
import { ICategoria } from "../models/categoria.model";
import { ResultSetHeader } from "mysql2";

export class CategoriaRepository {
    async findOrderASC(): Promise<ICategoria[]> {
        const [rows] = await db.execute<ICategoria[]>(
            'SELECT * FROM categorias ORDER BY nome;'
        );
        return rows;
    }

    // Omit => Omite os campos discriminados
    async create(dados: Omit<ICategoria, 'id'>): Promise<ResultSetHeader> {
        const sql = 'INSERT INTO categorias (nome) VALUES (?);';
        const values = [dados._nome];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }

    async delete(id: number): Promise<ResultSetHeader> {
        const sql = 'DELETE FROM categorias WHERE id=?;';
        const values = [id];
        const [rows] = await db.execute<ResultSetHeader>(sql, values);
        return rows;
    }
}