import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout-container">
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/descontos">Descontos</Link></li>
            <li><Link to="/compra">Compra</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
          </ul>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>Pinguin Games 🐧 — MVP</p>
      </footer>
    </div>
  );
}
