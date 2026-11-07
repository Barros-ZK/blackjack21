import Entity from "./entity.js";

export default class RodadaEntity extends Entity {
    #rod_id;
    #rod_codigobaralho;
    #rod_dtinicio;
    #rod_dtfim;
    #sal_id;

    constructor(rod_id, rod_codigobaralho, rod_dtinicio, rod_dtfim, sal_id) {
        super();
        this.#rod_id = rod_id;
        this.#rod_codigobaralho = rod_codigobaralho;
        this.#rod_dtinicio = rod_dtinicio;
        this.#rod_dtfim = rod_dtfim;
        this.#sal_id = sal_id;
    }

    static toMap(row) {
        return new SalaEntity(row["rod_id"], row["rod_codigobaralho"], row["rod_dtinicio"], row["rod_dtfim"], row["sal_id"]);
    }
}