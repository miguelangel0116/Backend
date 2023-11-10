import GetConnection from "../conexion/connection";
import { Asignatura } from "../model/Asignatura";

export const ListarAsignaturas = async (): Promise<Asignatura[]> => {
    try {
        const tsql = "SELECT * FROM Asignatura";
        const pool = await GetConnection();
        const result = await pool.query<Asignatura>(tsql);

        if (result != undefined) {
            return result.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const CrearAsignatura = async (asignatura: Asignatura): Promise<boolean> => {
    try {
        const sql = `
            INSERT INTO Asignatura (Nombre, Codigo, Horario, Sede)
            VALUES('${asignatura.Nombre}', ${asignatura.Codigo}, '${asignatura.Horario}', ${asignatura.Sede})
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
