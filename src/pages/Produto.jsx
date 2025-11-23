import Header from "../components/header";
import Button from "../components/buttons";
import { Link, useParams, useNavigate } from "react-router-dom";
const produtos = [
  { id: 1, nome: "Hogwarts Legacy", preco: 199, descricao: "Aventura no mundo bruxo." },
  { id: 2, nome: "The Last of Us", preco: 99, descricao: "Sobrevivência e emoção." },
  { id: 3, nome: "Call of Duty: Black Ops 7", preco: 350, descricao: "Ação em ritmo acelerado." }
];

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const produto = produtos.find((p) => String(p.id) === String(id)) || null;

  if (!produto) {
    return (
      <>
        <Header />
        <div className="page">
          <h2>Produto não encontrado</h2>
          <p>Volte para a lista de descontos.</p>
          <Link to="/descontos">
            <Button>Voltar</Button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="page">
        <h2>{produto.nome}</h2>
        <p>{produto.descricao}</p>
        <p><strong>R$ {produto.preco}</strong></p>

        <div style={{ display: "flex", gap: 12 }}>
          <Link to="/compra" state={{ product: produto }}>
            <Button>Comprar agora</Button>
          </Link>

          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </div>
      </div>
    </>
  );
}
