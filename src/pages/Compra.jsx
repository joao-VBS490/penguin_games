import Button from "../components/buttons";
import Header from "../components/header";
import { Link, useLocation } from "react-router-dom";

export default function Compra() {
  const { state } = useLocation();
  const product = state && state.product ? state.product : null;

  return (
    <>
      <Header />

      <div className="page">
        <h2>Finalizar compra</h2>

        {product ? (
          <>
            <p>Resumo do pedido:</p>
            <ul>
              <li><strong>{product.nome}</strong></li>
              <li>R$ {product.preco}</li>
            </ul>
          </>
        ) : (
          <>
            <p>Nenhum produto selecionado.</p>
            <p>Volte à página de descontos e selecione um produto clicando no nome.</p>
          </>
        )}

        <Link to="/checkout">
          <Button>Confirmar compra</Button>
        </Link>

      </div>
    </>
  );
}
