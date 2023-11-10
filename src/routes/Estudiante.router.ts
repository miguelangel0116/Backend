import express from 'express';
import * as EstudianteController from '../controllers/Estudiante.controller';
import { Estudiante } from '../model/Estudiante';

const router = express.Router();

router.get('/', (_, res) => {
    EstudianteController.GetEstudiantes()
        .then((estudiantes) => {
            res.json(estudiantes);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    EstudianteController.PostEstudiante(req.body as Estudiante)
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
