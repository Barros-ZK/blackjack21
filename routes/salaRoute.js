import express from 'express';
import SalaController from '../controllers/salaController.js';

const router = express.Router();
const controladora = new SalaController();
router.post("/", (req, res) => {
    // #swagger.tags = ['Sala']
    // #swagger.summary = "Listar salas disponíveis"
    controladora.listar(req, res);
})

export default router;