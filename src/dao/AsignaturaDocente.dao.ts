import GetConnection from "../conexion/connection";
import { AsignaturaDocente } from "../model/AsignaturaDocente";

export const ListarAsignaturaDocente = async (): Promise<AsignaturaDocente[]> => {
    try {
        const tsql = "SELECT * FROM Asignatura_Docente";
        const pool = await GetConnection();
        const result = await pool.query<AsignaturaDocente>(tsql);

        if (result != undefined) {
            return result.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const CrearAsignaturaDocente = async (asignaturadocente: AsignaturaDocente): Promise<boolean> => {
    try {
        const sql = `
            INSERT INTO Asignatura_Docente (idAsignatura,idDocente)
            VALUES(${asignaturadocente.IdAsignatura}, ${asignaturadocente.IdDocente})
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

