import Entity from "./entity.js";

export default class CartaEntity extends Entity {
    #car_id;
    #car_codigo;
    #car_imagem;
    #car_ordem;
    #car_visivel;
    #car_valor;
    #car_naipe;
    #par_id;
    #rod_id;

    constructor(car_id, car_codigo, car_imagem, car_ordem, car_visivel, car_valor, car_naipe, par_id, rod_id) {
        super();
        this.car_id = car_id;
        this.car_codigo = car_codigo;
        this.car_imagem = car_imagem;
        this.car_ordem = car_ordem;
        this.car_visivel = car_visivel;
        this.car_valor = car_valor;
        this.car_naipe = car_naipe;
        this.par_id = par_id;
        this.rod_id = rod_id;
    }
    
    static toMap(row) {
        return new CartaEntity(row["car_id"], row["car_codigo"], row["car_imagem"], row["car_ordem"], row["car_visivel"], row["car_valor"], row["car_naipe"], row["par_id"], row["rod_id"]);
    }
}