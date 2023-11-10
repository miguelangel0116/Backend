import { Asignatura } from "../model/Asignatura";
import * as DaoAsignatura from '../dao/Asignatura.dao';


export const GetAsignaturas = async (): Promise<Asignatura[]> => {
    try {
        let asignaturas: Asignatura[] = await DaoAsignatura.ListarAsignaturas();
        return asignaturas;
    } catch (error) {
        throw error;
    }
}

export const PostAsignatura = async (asignatura: Asignatura): Promise<boolean> => {
    try {
        return DaoAsignatura.CrearAsignatura(asignatura);
    } catch (error) {
        throw error;
    }
}





