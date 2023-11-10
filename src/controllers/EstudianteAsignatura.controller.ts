import { EstudianteAsignatura } from "../model/EstudianteAsignatura";
import * as DaoEstudianteAsignatura from '../dao/EstudianteAsignatura.dao';


export const GetEstudianteAsignatura = async (): Promise<EstudianteAsignatura[]> => {
    try {
        let estudianteasig: EstudianteAsignatura[] = await DaoEstudianteAsignatura.ListarEstudianteAsignatura();
        return estudianteasig;
    } catch (error) {
        throw error;
    }
}

export const PostEstudianteAsignatura = async (estudianteA: EstudianteAsignatura): Promise<boolean> => {
    try {
        return DaoEstudianteAsignatura.CrearEstudianteAsignatura(estudianteA);
    } catch (error) {
        throw error;
    }
}
