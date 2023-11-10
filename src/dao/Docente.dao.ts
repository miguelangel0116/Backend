import GetConnection from "../conexion/connection";
import { Docente } from "../model/Docente";

export const ListarDocentes = async (): Promise<Docente[]> => {
    try {
        const tsql = "SELECT * FROM Docente";
        const pool = await GetConnection();
        const result = await pool.query<Docente>(tsql);

        if (result != undefined) {
            return result.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const CrearDocente = async (docente: Docente): Promise<boolean> => {
    try {
        const sql = `
            INSERT INTO Docente (Usuario,contraseña,nombre)
            VALUES('${docente.Usuario}', ${docente.Contraseña}, '${docente.Nombre}')
        `;
        const pool = await GetConnection();
        const result = await pool.query(sql);

        if (result != undefined) {
            return result.rowsAffected.length === 1;
        }
        return false;
    } catch (error) {
        throw error;
    }
}
