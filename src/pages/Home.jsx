import Header from "../components/header";
import Button from "../components/buttons";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      <div className="page">
        <h2>Olá!! Bem vindo a penguin Games🐧</h2>
        <p>Aqui vai entrar a vitrine futuramente.</p>

        <Link to="/descontos">
          <Button>Ir para descontos</Button>
        </Link>
      </div>
    </>
  );
}



