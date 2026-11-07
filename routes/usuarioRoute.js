import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();
const controladora = new UsuarioController();
router.post("/", (req, res) => {
    // #swagger.tags = ['Usuario']
    // #swagger.summary = "Criar novo usuário"
    controladora.cadastrar(req, res);
})

export default router;