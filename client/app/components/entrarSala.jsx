'use client'
import { useEffect, useState } from "react";

export default function EntrarSala() {
    const [salas, setSalas] = useState([]);
    async function carregarSalas() {
        const response = await fetch("http://localhost:5000/salas", {
            method: "GET"
        })
        const corpo = await response.json();
        setSalas(corpo);
    }

    useEffect(() => {
        carregarSalas();
    }, [])

    async function entrar() {
        const obj = {sala: event.currentTarget.dataset.sala}
        if(obj.sala) {
            let response = await fetch("http://localhost:5000/participante", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            });
            console.log(response);
            if(response.ok) {
                alert("Você entrou na sala");
                window.location.href = `http://localhost:3000/sala/${data.sala}`;
            }
            else {
                alert("Erro ao entrar, tente novamente")
            }
        }
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome da sala</th>
                        <th>Criador da sala</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        salas.map(function(value, index) {
                            return <tr key={value.sal_id}>
                                <td>{value.sal_id}</td>
                                <td>{value.sal_nome}</td>
                                <td>{value.usu_id}</td>
                                <td><button onClick={entrar} data-sala={value.sal_id}>Entrar</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}