import { useParams, useNavigate } from "react-router-dom";

export default function Carrinho() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Carrinho 🛒</h1>
      <p>Produto ID: {id}</p>

      <button onClick={() => navigate("/checkout")}>
        Finalizar Compra
      </button>
    </div>
  );
}
