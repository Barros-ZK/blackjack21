import Link from "next/link";

export default function Regras() {
  return (
    <div className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 84px)" }}
    >
        <div className="text-center text-light mb-4" style={{ maxWidth: "650px" }}>
        <h2>Regras do Jogo</h2>

        <p>
            Ao entrar na sala, o jogo será iniciado. Cada participante começa
            com 1000 de saldo. Quem entrar durante uma partida começará a jogar
            na próxima rodada. Apenas jogadores com saldo superior a 10 podem
            participar.
        </p>

        <p>
            O jogo é composto por N rodadas, seguindo as regras do Blackjack (21).
            O objetivo é alcançar uma pontuação maior que a do dealer, sem
            ultrapassar 21 pontos.
        </p>

        <h5>Valores das Cartas</h5>
        <p>
            Cartas de 2 a 10 valem seu próprio número. Valete, Dama e Rei valem
            10 pontos. O Ás vale 1 ou 11 pontos, conforme a melhor combinação.
        </p>

        <h5>Como Jogar</h5>
        <p>
            Antes de cada rodada, os jogadores escolhem suas apostas
            individualmente. Cada participante recebe duas cartas, enquanto
            o dealer recebe uma carta visível e outra oculta.
        </p>
        <p>
            Em seu turno, cada jogador pode:
        </p>
        <ul className="text-start">
            <li><strong>Pedir (Hit):</strong> receber outra carta.</li>
            <li><strong>Parar (Stand):</strong> manter sua pontuação atual.</li>
        </ul>
        <p>
            Se ultrapassar 21 pontos, o jogador estoura e perde sua aposta, após todos os jogadores encerrarem seus turnos, o dealer revela sua carta oculta.
        </p>

        <h5>Resultados e Pagamentos</h5>
        <ul className="text-start">
            <li><strong>Vitória:</strong> recebe sua aposta de volta mais o mesmo valor em ganhos (1 para 1).</li>
            <li><strong>Derrota:</strong> perde o valor apostado.</li>
            <li><strong>Empate:</strong> recebe sua aposta de volta.</li>
            <li><strong>Dealer estoura:</strong> todos os jogadores que não estouraram vencem.</li>
            <li><strong>Blackjack natural:</strong> Ás + carta de valor 10 nas duas cartas iniciais, com pagamento de 3 para 2 (aposta 50, recebe 125).</li>
        </ul>

        <h5>Observações</h5>
        <p>
            Cada jogador compete individualmente contra o dealer, nunca contra
            os demais participantes. Vários jogadores podem vencer na mesma
            rodada. Jogadores que estourarem perdem mesmo que o dealer também estoure.
        </p>
        
        <Link href="/" className="btn btn-outline-light btn-lg"
            style={{ width: "260px" }}>Voltar</Link>
        </div>
    </div>
  );
}