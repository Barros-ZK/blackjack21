import Entity from "./entity.js";

export default class ParticipanteEntity extends Entity {
    #par_id;
    #par_dtentrada;
    #par_dtsaida;
    #par_ordem;
    #par_saldo;
    #sal_id;
    #usu_id;

    constructor(par_id, par_dtentrada, par_dtsaida, par_ordem, par_saldo, sal_id, usu_id) {
        super();
        this.#par_id = par_id;
        this.#par_dtentrada = par_dtentrada;
        this.#par_dtsaida = par_dtsaida;
        this.#par_ordem = par_ordem;
        this.#par_saldo = par_saldo;
        this.#sal_id = sal_id;
        this.#usu_id = usu_id;
    }

    static toMap(row) {
        return new SalaEntity(row["par_id"], row["par_dtentrada"], row["par_dtsaida"], row["par_ordem"], row["par_saldo"], row["sal_id"], row["usu_id"]);
    }
}