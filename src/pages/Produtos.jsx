import { useParams, useNavigate } from "react-router-dom";

export default function Produto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const produto = { id, nome: `Produto ${id}`, preco: 199 };

  return (
    <div>
      <h1>{produto.nome}</h1>
      <p>Preço: R$ {produto.preco}</p>

      <button onClick={() => navigate(`/carrinho/${produto.id}`)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
