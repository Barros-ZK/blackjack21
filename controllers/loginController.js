import AutenticacaoMiddleware from "../middlewares/autenticacaoMiddleware.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class LoginController {
    #repoUsua;

    constructor() {
        this.#repoUsua = new UsuarioRepository();
    }

    async validar(req, res) {
        try {
            const {email, senha} = req.body;
            if(email && senha) {
                let usuario = await this.#repoUsua.obterPorEmailSenha(email, senha);
                if(usuario) {
                    let middleware = new AutenticacaoMiddleware();
                    let token = middleware.gerarJWT(usuario.id);
                    res.cookie("token-blackjack", token, { httpOnly: true });
                    return res.status(200).json({token: token});
                } else {
                    return res.status(404).json({msg: "Usuário não encontrado!"});
                }
            } else {
                return res.status(400).json({msg: "Email e senha não informados corretamente!"});
            }
        } catch(ex) {
            console.log(ex);
            return res.status(500)
        }
    }
}