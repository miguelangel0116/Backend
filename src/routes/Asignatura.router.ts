import express from 'express';
import * as AsignaturaController from '../controllers/Asignatura.controller';
import { Asignatura } from '../model/Asignatura';


const router = express.Router();

router.get('/', (_, res) => {
    AsignaturaController.GetAsignaturas()
        .then((asignaturas) => {
            res.json(asignaturas);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    AsignaturaController.PostAsignatura(req.body as Asignatura)
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


