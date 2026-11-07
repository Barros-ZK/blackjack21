import Database from "../db/database.js";
import SalaEntity from "../entities/salaEntity.js";

export default class SalaRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async listar() {
        const sql = "select s.sal_id, s.sal_nome, u.usu_nome from tb_sala s inner join tb_usuario u on s.usu_id = u.usu_id";
        const rows = await this.#banco.ExecutaComando(sql);
        let lista = [];
        if(rows.length > 0) {
            for(let row of rows) {
                lista.push(SalaEntity.toMap(row));
            }
        }

        return lista;
    }

    async criar(sala) {
        const sql = "insert into tb_sala (sal_nome, usu_id) values (?, ?)";
        const valores = [sala.sal_nome, sala.usu_id];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            sala.sal_id = idGerado;
            return true;
        }

        return false;
    }

    async encerrar(id) {
        const sql = "delete from tb_sala where sal_id = ?";
        const valores = [id];

        const result = await this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}