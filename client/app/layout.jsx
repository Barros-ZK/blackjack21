import { Nunito } from "next/font/google";
import "./globals.css";
import "../public/template/css/sb-admin-2.min.css";
import "../public/template/css/fontawesome-free/css/all.min.css";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Blackjack",
  description: "Aplicação criada para a disciplina de PFS2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
          .page {
            min-height: 100vh;
            width: 100%;
            color: #f6f0df;
          }

          .header {
            height: 84px;
            padding: 0 clamp(20px, 6vw, 88px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgb(214 182 110 / 18%);
            background: rgb(8 31 25 / 30%);
          }

          .logo {
            width: 46px;
            height: 46px;
            object-fit: contain;
          }

          @media (max-width: 620px) {
            .header {
              height: 72px;
              padding: 0 17px;
            }

            .logo {
              width: 40px;
              height: 40px;
            }
          }
        `}</style>
      </head>
      <body className={nunito.className}>
        <main className="page">
          <header className="header">
            <Image
              className="logo"
              src="/img/blackjack.png"
              alt="Blackjack"
              width={52}
              height={52}
              priority
            />
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}