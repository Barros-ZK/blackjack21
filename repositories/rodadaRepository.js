import Database from "../db/database.js";
import RodadaEntity from "../entities/rodadaEntity.js";

export default class RodadaRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async criar(rodada) {
        const sql = "insert into tb_rodada (rod_codigobaralho, rod_dtinicio, rod_dtfim, sal_id) values (?, sysdate, null, ?)";
        const valores = [rodada.rod_codigobaralho, rodada.sal_id];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            rodada.rod_id = idGerado;
            return true;
        }

        return false;
    }

    async terminar(id) {
        const sql = "update tb_rodada set rod_dtfim = systime where rod_id = ?";
        const valores = [id];

        const result = this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async obterPorId(id) {
        const sql = "select * from tb_rodada where rod_id = ?";
        const valores = [id];

        const rows = await this.#banco.ExecutaComando(sql, valores);
        if(rows.length > 0) {
            return RodadaEntity.toMap(rows[0]);
        }

        return null;
    }
}