import Entity from "./entity.js";

export default class SalaEntity extends Entity {
    #sal_id;
    #sal_nome;
    #usu_id;

    constructor(sal_id, sal_nome, usu_id) {
        super();
        this.#sal_id = sal_id;
        this.#sal_nome = sal_nome;
        this.#usu_id = usu_id;
    }

    static toMap(row) {
        return new SalaEntity(row["sal_id"], row["sal_nome"], row["usu_id"]);
    }
}