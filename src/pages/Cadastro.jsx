import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/input";
import Button from "../components/buttons";
import Header from "../components/header";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {
      const res = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (res.ok) {
        // Cadastro realizado, realizar login automático
        const loginRes = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
        });

        if (loginRes.ok) {
          const data = await loginRes.json();
          // armazenar estado de sessão mínimo
          try {
            localStorage.setItem("userId", String(data.userId));
            localStorage.setItem("isLogged", "true");
            localStorage.setItem("userName", nome);
          } catch (e) {
            // se localStorage falhar, apenas continue
            console.warn("Não foi possível salvar no localStorage", e);
          }

          alert("Cadastro realizado com sucesso!");
          navigate("/"); // redireciona para home
        } else {
          // cadastro ok, mas login falhou — mostrar erro retornado pelo servidor
          let loginMsg = "Falha ao efetuar login automático.";
          try {
            const loginData = await loginRes.json();
            loginMsg = loginData.erro || loginData.mensagem || loginMsg;
          } catch (e) {
            // fallback
          }
          const loginCause = loginRes.status === 401 ? "Senha incorreta" : `Status ${loginRes.status}`;
          alert(`Cadastro realizado com sucesso! Porém o login automático falhou: ${loginMsg} (${loginCause})`);
          console.error("Login automático falhou:", loginRes.status, loginMsg);
          navigate("/login");
        }
      } else {
        // tentar extrair mensagem de erro do backend
        let errMsg = "Erro ao cadastrar!";
        try {
          const errData = await res.json();
          errMsg = errData.erro || errData.mensagem || JSON.stringify(errData) || errMsg;
        } catch (e) {
          // não foi possível parsear JSON
        }

        let cause = "";
        if (res.status === 400) cause = "Dados inválidos ou e-mail já cadastrado.";
        else if (res.status === 409) cause = "Conflito: recurso já existe.";
        else if (res.status === 500) cause = "Erro interno do servidor.";
        else cause = `Status ${res.status}`;

        alert(`${errMsg} (${cause})`);
        console.error("Erro ao cadastrar:", res.status, errMsg);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao cadastrar!");
    }
  };

  return (
    <>
      <Header />
      <div className="page">
        <h2>Cadastro</h2>

        <Input label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <Input label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Senha" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        <Button onClick={handleCadastro}>Cadastrar</Button>
      </div>
    </>
  );
}
