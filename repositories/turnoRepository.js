import Database from "../db/database.js";
import TurnoEntity from "../entities/turnoEntity.js";

export default class SalaRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async criar(turno) {
        const sql = "insert into tb_turno (tur_somacartas, tur_status, par_id, rod_id) values (?, ?, ?, ?)";
        const valores = [turno.tur_somacartas, turno.tur_status, turno.par_id, turno.rod_id];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            sala.sal_id = idGerado;
            return true;
        }

        return false;
    }

    async obterPorParticipanteRodada(participante, rodada) {
        const sql = "select * from tb_turno where par_id = ? and rod_id = ?";
        const valores = [participante, rodada];

        const rows = await this.#banco.ExecutaComando(sql, valores);
        if(rows.length > 0) {
            return TurnoEntity.toMap(rows[0]);
        }

        return null;
    }

    async atualizarSoma(id, soma) {
        const sql = "update tb_turno set tur_somacartas = ? where tur_id = ?";
        const valores = [soma, id];

        const result = this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async atualizarStatus(id, status) {
        const sql = "update tb_turno set tur_status = ? where tur_id = ?";
        const valores = [status, id];

        const result = this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}