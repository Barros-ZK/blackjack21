import Database from "../db/database.js";
import UsuarioEntity from "../entities/usuarioEntity.js";

export default class UsuarioRepository {
    #banco;

    constructor() {
        this.#banco = new Database();
    }

    async obterPorEmailSenha(email, senha) {
        const sql = "select * from tb_usuario where usu_email = ? and usu_senha = ?";
        const valores = [email, senha];

        const rows = await this.#banco.ExecutaComando(sql, valores);
        if(rows.length > 0) {
            return UsuarioEntity.toMap(rows[0]);
        }

        return null;
    }

    async obterPorId(id) {
        const sql = "select * from tb_usuario where usu_id = ?";
        const valores = [id];

        const rows = await this.#banco.ExecutaComando(sql, valores);
        if(rows.length > 0) {
            return UsuarioEntity.toMap(rows[0]);
        }

        return null;
    }

    async cadastrar(usuario) {
        const sql = "insert into tb_usuario (usu_nome, usu_email, usu_senha) values (?, ?, ?)";
        const valores = [usuario.usu_nome, usuario.usu_email, usuario.usu_senha];

        const idGerado = await this.#banco.ExecutaComandoLastInserted(sql, valores);
        if(idGerado) {
            usuario.usu_id = idGerado;
            return true;
        }

        return false;
    }
}