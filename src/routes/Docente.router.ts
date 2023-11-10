import express from 'express';
import * as DocenteController from '../controllers/Docente.controller';
import {Docente} from '../model/Docente';

const router = express.Router();

router.get('/', (_, res) => {
    DocenteController.GetDocentes()
        .then((docentes) => {
            res.json(docentes);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    DocenteController.PostDocente(req.body as Docente)
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
