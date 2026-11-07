import express from 'express';
import ParticipanteController from '../controllers/participanteController.js';

const router = express.Router();
const controladora = new ParticipanteController();
router.post("/", (req, res) => {
    // #swagger.tags = ['Participante']
    // #swagger.summary = "Criar novo participante"
    controladora.entrar(req, res);
})

export default router;