import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import CardapioPage from './pages/CardapioPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/cardapio" element={<CardapioPage />} />
      </Routes>
    </BrowserRouter>
  )
}
