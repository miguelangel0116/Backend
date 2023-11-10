import express from 'express';
import * as AsignaturaDocenteController from '../controllers/AsignaturaDocente.controller';
import { AsignaturaDocente } from '../model/AsignaturaDocente';


const router = express.Router();

router.get('/', (_, res) => {
    AsignaturaDocenteController.GetAsignaturaDocente()
        .then((asignaturaDocente) => {
            res.json(asignaturaDocente);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    AsignaturaDocenteController.PostAsignaturaDocente(req.body as AsignaturaDocente)
        .then((result) => {
            if (result) {
                res.status(201).send();
            } else {
                res.status(500).send();
            }
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

export default router;


