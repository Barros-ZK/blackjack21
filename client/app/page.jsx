import Link from "next/link";

export default function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 84px)" }}
    >
      <div className="d-flex flex-column align-items-center">
        <Link href="/salas" className="btn btn-success btn-lg mb-3"
          style={{ width: "260px" }}>Entrar em uma sala</Link>

        <Link href="/salas/criar" className="btn btn-warning btn-lg mb-3"
          style={{ width: "260px" }}>Criar uma sala</Link>

        <Link href="/regras" className="btn btn-outline-light btn-lg"
          style={{ width: "260px" }}>Regras do jogo</Link>
      </div>
    </div>
  );
}