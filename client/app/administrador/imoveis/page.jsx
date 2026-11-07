'use client'
import { useEffect, useState } from "react";

export default function HomeImoveis() {

    const [imoveis, setImoveis] = useState([]);
    async function carregarImoveis() {

        //consome o endpoint no backend
        let response = await fetch("http://localhost:5000/imovel", {
            method: "GET"
        })
        //desserializa o corpo
        let corpo = await response.json();
        //força a renderização
        console.log(corpo);
        setImoveis(corpo);
    }

    useEffect(() => {
        carregarImoveis();
    }, [])

    return (

        <div>
            <h1>
                Imoveis
            </h1>

            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Bairro</th>
                            <th>CEP</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            imoveis.map(function(value, index) {
                                return <tr key={value.id}>
                                            <td>{value.id}</td>
                                            <td>{value.descricao}</td>
                                            <td>{value.bairro}</td>
                                            <td>{value.cep}</td>
                                            <td>{value.valor}</td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}