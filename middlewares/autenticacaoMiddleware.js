import jwt from 'jsonwebtoken';
import UsuarioRepository from '../repositories/usuarioRepository.js';
const SEGREDO = "jackpot"
export default class AutenticacaoMiddleware {

    gerarJWT(id) {
        const token = jwt.sign({id}, SEGREDO);
        return token;
    }

    async validar(req, res, next) {
        const token = req.cookies['token-blackjack'];
        if(token) {
            const payload = jwt.verify(token, SEGREDO);
            const idUsuario = payload.id;
            const repo = new UsuarioRepository();
            const usuarioEncontrado = await repo.obterPorId(idUsuario);
            if(usuarioEncontrado) {
                req.usuario = usuarioEncontrado;
                next();
            } else {
                return res.status(404).json({msg: "Usuário não encontrado!"});
            }
        } else {
            return res.status(401).json({msg: "Token inexistente!"});
        }
    }
}