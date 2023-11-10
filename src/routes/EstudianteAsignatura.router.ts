import express from 'express';
import * as EstudianteAsignaturaController from '../controllers/EstudianteAsignatura.controller';
import { EstudianteAsignatura} from '../model/EstudianteAsignatura';


const router = express.Router();

router.get('/', (_, res) => {
    EstudianteAsignaturaController.GetEstudianteAsignatura()
        .then((estudianteasig) => {
            res.json(estudianteasig);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
});

router.post('/', (req: express.Request, res: express.Response) => {
    EstudianteAsignaturaController.PostEstudianteAsignatura(req.body as EstudianteAsignatura)
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
