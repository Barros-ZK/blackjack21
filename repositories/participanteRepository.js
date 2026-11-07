import Database from "../db/database.js";
import ParticipanteEntity from "../entities/participanteEntity.js";

export default class ParticipanteRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async criar(participante) {
        const sql = "insert into tb_participante (par_dtentrada, par_dtsaida, par_ordem, par_saldo, sal_id, usu_id) values (sysdate, null, (select coalesce(max(par_ordem), 0) + 1 as ordem from tb_participante where sal_id = ?), ?, ?, ?)";
        const valores = [participante.sal_id, participante.par_saldo, participante.sal_id, participante.usu_id];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            participante.par_id = idGerado;
            return true;
        }

        return false;
    }

    async sair(id) {
        const sql = "update tb_participante set par_dtsaida = systime where par_id = ?";
        const valores = [id];

        const result = this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async obterPorId(id) {
        const sql = "select * from tb_participante where par_id = ?";
        const valores = [id];

        const rows = this.#banco.ExecutaComando(sql, valores);
        if(rows.length > 0) {
            return ParticipanteEntity.toMap(rows[0]);
        }

        return null;
    }

    async mudarSaldo(id, diferenca) {
        const sql = "update tb_participante set par_saldo = par_saldo + ? where par_id = ?";
        const valores = [diferenca, id];

        const result = this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}