import express from 'express';
import cors from 'cors';
import asignaturaRouter from './routes/Asignatura.router';
import DocenteRouter from './routes/Docente.router';
import EstudianteRouter from './routes/Estudiante.router';
import AsignaturaDocenteRouter from './routes/AsignaturaDocente.router';
import EstudianteAsignaturaRouter from './routes/EstudianteAsignatura.router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/api/Asignatura', asignaturaRouter);
app.use('/api/Docente', DocenteRouter);
app.use('/api/Estudiante', EstudianteRouter);
app.use('/api/AsignaturaDocente', AsignaturaDocenteRouter);
app.use('/api/EstudianteAsignatura', EstudianteAsignaturaRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando puerto ${PORT}`)
});