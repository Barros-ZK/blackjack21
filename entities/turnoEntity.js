import Entity from "./entity.js";

export default class TurnoEntity extends Entity {
    #tur_id;
    #tur_somacartas;
    #tur_status;
    #par_id;
    #rod_id;

    constructor(tur_id, tur_somacartas, tur_status, par_id, rod_id) {
        super();
        this.#tur_id = tur_id;
        this.#tur_somacartas = tur_somacartas;
        this.#tur_status = tur_status;
        this.#par_id = par_id;
        this.#rod_id = rod_id;
    }

    static toMap(row) {
        return new TurnoEntity(row["tur_id"], row["tur_somacartas"], row["tur_status"], row["par_id"], row["rod_id"]);
    }
}