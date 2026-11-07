'use client'
import Link from "next/link";
import { useRef } from "react";


export default function FormSignin() {
    const email = useRef("");
    const senha = useRef("");
    const senha2 = useRef("");

    async function entrar() {
        const obj = {
            email: email.current.value,
            senha: senha.current.value,
            senha2: senha2.current.value
        }
        if(obj.email && obj.senha && obj.senha2) {
            if(obj.senha == obj.senha2) {
                let response = await fetch("http://localhost:5000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(obj)
                });
                console.log(response);
                if(response.ok) {
                    alert("Bem-vindo");
                    window.location.href = "http://localhost:3000";
                }
                else {
                    alert("Erro ao entrar, tente novamente");
                }
            } else {
                alert("As senhas informadas são diferentes");
            }
        } else {
            alert("Todos os campos devem estar preenchidos");
        }
    }

    return (
        <div>
            <div className="form-group">
                <label>Email:</label>
                <input ref={email} className="form-control" type="email"></input>
            </div>
            <div className="form-group">
                <label>Senha:</label>
                <input ref={senha} className="form-control" type="password"></input>
            </div>
            <div className="form-group">
                <label>Confirmar senha:</label>
                <input ref={senha2} className="form-control" type="password"></input>
            </div>

            <button onClick={entrar}>Entrar</button>
        </div>
    )
}