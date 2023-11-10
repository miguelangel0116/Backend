import GetConnection from "../conexion/connection";
import { Estudiante } from "../model/Estudiante";

export const ListarEstudiantes = async (): Promise<Estudiante[]> => {
    try {
        const tsql = "SELECT * FROM Estudiante";
        const pool = await GetConnection();
        const result = await pool.query<Estudiante>(tsql);

        if (result != undefined) {
            return result.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

export const CrearEstudiante = async (estudiante: Estudiante): Promise<boolean> => {
    try {
        const sql = `
            INSERT INTO Estudiante (usuario,grado,contraseña,nombre,apellido)
            VALUES('${estudiante.Usuario}', ${estudiante.Grado}, '${estudiante.Contraseña}', '${estudiante.Nombre}','${estudiante.Apellido}')
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
