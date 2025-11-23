import { useState } from "react";
import Button from "../components/buttons";
import Header from "../components/header";
import { Link } from "react-router-dom";
// import produtos from "./produtos";

export default function Descontos() {
  // 👉 Aqui é onde declaramos variáveis, fora do JSX
  const produtos = [
    { id: 1, nome: "Hogwarts Legacy", preco: 199 },
    { id: 2, nome: "The Last of Us", preco: 99 },
    { id: 3, nome: "Call of Duty: Black Ops 7", preco: 350 }
  ];

  // seleção local: clique no nome para selecionar (não navega)
  const [selectedId, setSelectedId] = useState(null);
  const selectedProduct = produtos.find((p) => p.id === selectedId) || null;

  return (
    <>
      <Header />

      <div className="page">
        <h1>O penguin tá maluco</h1>
        <h3>Super descontos pra você!!</h3>

        {/* Exemplo de lista se quiser mostrar */}
        <ul>
          {produtos.map((p) => (
            <li key={p.id} style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <button
                onClick={() => setSelectedId(p.id)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  color: selectedId === p.id ? "#0b66c3" : "#0077cc",
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: selectedId === p.id ? "700" : "400",
                }}
              >
                {p.nome}
              </button>
              <span style={{ marginRight: 8 }}>— R$ {p.preco}</span>
              <Link to={`/produto/${p.id}`} style={{ color: "#666", fontSize: 13 }}>Detalhes</Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/compra" state={{ product: selectedProduct }}>
            <Button disabled={!selectedProduct}>Comprar agora</Button>
          </Link>
          {!selectedProduct && (
            <p style={{ color: "#666", margin: 0 }}>Selecione um produto clicando no nome acima.</p>
          )}
        </div>
      </div>
    </>
  );
}
