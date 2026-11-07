import ParticipanteRepository from "../repositories/participanteRepository.js";
import ParticipanteEntity from "../entities/participanteEntity.js";

export default class ParticipanteController {
    #repoPart;

    constructor() {
        this.#repoPart = new ParticipanteRepository();
    }
    
    async entrar(req, res) {
        try {
            const token = req.cookies['token-blackjack'];
            const {sala} = req.body;
            if(token) {
                const payload = jwt.verify(token, "jackpot");
                const idUsuario = payload.id;
                const participante = new ParticipanteEntity(0, 0, 0, 0, 1000, sala, idUsuario);
                const result = await this.#repoPart.criar(participante);
                if(result) {
                    return res.status(201).json({sala: sala});
                }
    
                throw new Error("Erro ao criar participante");
            }
        } catch(ex) {
            console.log(ex);
            return res.status(500).json({msg: "Erro interno no servidor!"});
        }
    }
}