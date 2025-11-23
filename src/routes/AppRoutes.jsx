import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Produtos from "../pages/Produtos";
import Carrinho from "../pages/Carrinho";
import Checkout from "../pages/Checkout";
import Descontos from "../pages/Descontos";
import Compra from "../pages/Compra";
import Produto from "../pages/Produto";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/descontos" element={<Descontos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
