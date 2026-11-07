'use client'
import Link from "next/link";
import { useRef } from "react";


export default function FormSignin() {
    const nome = useRef("");
    const email = useRef("");
    const senha = useRef("");

    async function criar() {
        const obj = {
            nome: nome.current.value,
            email: email.current.value,
            senha: senha.current.value
        }
        if(obj.nome && obj.email && obj.senha) {
            let response = await fetch("http://localhost:5000/usuario", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            console.log(response);
            if(response.ok) {
                alert("Usuário criado");
                window.location.href = "http://localhost:3000/login";
            }
            else {
                alert("Erro ao criar usuário, tente novamente");
            }
        } else {
            alert("Todos os campos devem estar preenchidos");
        }
    }

    return (
        <div>
            <div className="form-group">
                <label>Nome:</label>
                <input ref={nome} className="form-control" type="text"></input>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input ref={email} className="form-control" type="email"></input>
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input ref={senha} className="form-control" type="password"></input>
            </div>

            <button onClick={criar}>Criar</button>
            <Link href="/login" className="btn btn-default">Voltar</Link>
        </div>
    )
}