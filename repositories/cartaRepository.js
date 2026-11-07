import Database from "../db/database.js";
import CartaEntity from "../entities/cartaEntity.js";

export default class CartaRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async criar(carta) {
        const sql = "insert into tb_carta (car_codigo, car_imagem, car_ordem, car_visivel, car_valor, car_naipe, par_id, rod_id)";
        const valores = [carta.car_codigo, carta.car_imagem, carta.car_ordem, carta.car_visivel, carta.car_valor, carta.car_naipe, carta.par_id, carta.rod_id];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            rodada.rod_id = idGerado;
            return true;
        }

        return false;
    }

    async obterPorParticipanteRodada(participante, rodada) {
        const sql = "select * from tb_carta where par_id = ? and rod_id = ?";
        const valores = [participante, rodada];

        const rows = await this.#banco.ExecutaComando(sql, valores);
        let lista = [];
        if(rows.length > 0) {
            for(let row of rows) {
                lista.push(CartaEntity.toMap(row));
            }
            return lista;
        }

        return null;
    }
}