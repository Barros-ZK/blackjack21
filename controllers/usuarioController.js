import UsuarioRepository from "../repositories/usuarioRepository.js";
import UsuarioEntity from "../entities/usuarioEntity.js";

export default class UsuarioController {
    #repoUsua;

    constructor() {
        this.#repoUsua = new UsuarioRepository();
    }
    
    async cadastrar(req, res) {
        try {
            const {nome, email, senha} = req.body;
            if(nome && email && senha) {
                const usuario = new UsuarioEntity(0, nome, email, senha);
                const result = await this.#repoUsua.cadastrar(usuario);
                if(result) {
                    return res.status(201).json({msg: "Usuário criado com sucesso"});
                }

                throw new Error("Erro ao cadastrar usuário");
            } else {
                return res.status(400).json({msg: "Por favor preencha os campos corretamente"});
            }
        } catch(ex) {
            console.log(ex);
            return res.status(500).json({msg: "Erro interno no servidor!"});
        }
    }
}