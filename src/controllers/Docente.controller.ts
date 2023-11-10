import { Docente } from "../model/Docente";
import * as DaoDocente from '../dao/Docente.dao';

export const GetDocentes = async (): Promise<Docente[]> => {
    try {
        let docentes: Docente[] = await DaoDocente.ListarDocentes();
        return docentes;
    } catch (error) {
        throw error;
    }
}

export const PostDocente = async (docente: Docente): Promise<boolean> => {
    try {
        return DaoDocente.CrearDocente(docente);
    } catch (error) {
        throw error;
    }
}
