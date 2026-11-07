import Entity from "./entity.js";

export default class ApostaEntity extends Entity {
    #apo_id;
    #apo_valor;
    #par_id;
    #rod_id;

    constructor(apo_id, apo_valor, par_id, rod_id) {
        super();
        this.#apo_id = apo_id;
        this.#apo_valor = apo_valor;
        this.#par_id = par_id;
        this.#rod_id = rod_id;
    }

    static toMap(row) {
        return new ApostaEntity(row["apo_id"], row["apo_valor"], row["par_id"], row["rod_id"]);
    }
}