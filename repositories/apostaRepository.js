import Database from "../db/database.js";
import ApostaEntity from "../entities/apostaEntity.js";

export default class ApostaRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async criar(aposta) {
        const sql = "insert into tb_aposta (apo_valor, par_id, rod_id) values (?, ?, ?)";
        const valores = [aposta.apo_valor, aposta.par_id, aposta.rod_id];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            aposta.apo_id = idGerado;
            return true;
        }

        return false;
    }

    async obterPorParticipanteRodada(participante, rodada) {
        const sql = "select * from tb_aposta where par_id = ? and rod_id = ?";
        const valores = [participante, rodada];

        const rows = await this.#banco.ExecutaComando(sql, valores);
        if(rows.length > 0) {
            return ApostaEntity.toMap(rows[0]);
        }

        return null;
    }
}