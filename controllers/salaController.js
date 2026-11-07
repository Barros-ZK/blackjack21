import AutenticacaoMiddleware from "../middlewares/autenticacaoMiddleware.js";
import SalaRepository from "../repositories/salaRepository.js"

export default class SalaController {
    #repoSala;

    constructor() {
        this.#repoSala = new SalaRepository();
    }

    async listar(req, res) {
        try {
            const lista = await this.#repoSala.listar();
            if(lista.length == 0) 
                return res.status(204).json({msg: "Nenhuma sala encontrada!"});

            return res.status(200).json(lista);
        } catch(ex) {
            console.log(ex);
            return res.status(500).json({msg: "Erro interno no servidor!"});
        }
    }
}