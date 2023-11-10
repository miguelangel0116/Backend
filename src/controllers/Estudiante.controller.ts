import { Estudiante } from "../model/Estudiante";
import * as DaoEstudiante from '../dao/Estudiante.dao';

export const GetEstudiantes = async (): Promise<Estudiante[]> => {
    try {
        let estudiantes: Estudiante[] = await DaoEstudiante.ListarEstudiantes();
        return estudiantes;
    } catch (error) {
        throw error;
    }
}

export const PostEstudiante = async (estudiante: Estudiante): Promise<boolean> => {
    try {
        return DaoEstudiante.CrearEstudiante(estudiante);
    } catch (error) {
        throw error;
    }
}
