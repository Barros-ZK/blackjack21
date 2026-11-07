import Entity from "./entity.js";

export default class UsuarioEntity extends Entity {
    #usu_id;
    #usu_nome;
    #usu_email;
    #usu_senha;

    constructor(usu_id, usu_nome, usu_email, usu_senha) {
        super();
        this.#usu_id = usu_id;
        this.#usu_nome = usu_nome;
        this.#usu_email = usu_email;
        this.#usu_senha = usu_senha;
    }

    static toMap(row) {
        return new SalaEntity(row["usu_id"], row["usu_nome"], row["usu_email"], row["usu_senha"]);
    }
}