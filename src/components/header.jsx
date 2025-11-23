import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        padding: "16px",
        background: "#222",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2>Penguin Games 🐧</h2>

      <nav style={{ display: "flex", gap: "16px" }}>
        <Link style={{ color: "#fff" }} to="/">Home</Link>
        <Link style={{ color: "#fff" }} to="/login">Login</Link>
        <Link style={{ color: "#fff" }} to="/cadastro">Cadastro</Link>
      </nav>
    </header>
  );
}
