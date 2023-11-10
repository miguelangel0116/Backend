import { AsignaturaDocente } from "../model/AsignaturaDocente";
import * as DaoAsignaturaDocente from '../dao/AsignaturaDocente.dao';


export const GetAsignaturaDocente = async (): Promise<AsignaturaDocente[]> => {
    try {
        let asignaturaDocente: AsignaturaDocente[] = await DaoAsignaturaDocente.ListarAsignaturaDocente();
        return asignaturaDocente;
    } catch (error) {
        throw error;
    }
}

export const PostAsignaturaDocente = async (asigDocente: AsignaturaDocente): Promise<boolean> => {
    try {
        return DaoAsignaturaDocente.CrearAsignaturaDocente(asigDocente);
    } catch (error) {
        throw error;
    }
}

