import GetConnection from "../conexion/connection";
import { EstudianteAsignatura } from "../model/EstudianteAsignatura";

export const ListarEstudianteAsignatura = async (): Promise<EstudianteAsignatura[]> => {
    try {
        const tsql = "SELECT * FROM Estudiante_Asignatura";
        const pool = await GetConnection();
        const result = await pool.query<EstudianteAsignatura>(tsql);

        if (result != undefined) {
            return result.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const CrearEstudianteAsignatura = async (estasig: EstudianteAsignatura): Promise<boolean> => {
    try {
        const sql = `
            INSERT INTO Estudiante_Asignatura(idEstudiante,idAsignatura,nota)
            VALUES('${estasig.IdEstudiante}', ${estasig.IdAsignatura},${estasig.Nota})
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
