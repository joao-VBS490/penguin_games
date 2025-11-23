import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui você valida depois com o backend
    if (email && senha) {
      navigate("/home");
    }
  };

  return (
    <div>
      <h1>Login da Penguin Games 🐧✨</h1>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>

      <p style={{ marginTop: "14px" }}>
          Não tem conta? <Link to="/cadastro">Cadastrar</Link>
        </p>
    </div>
  );
}


