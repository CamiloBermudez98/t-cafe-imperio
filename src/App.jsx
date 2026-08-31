import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'; // <--- 1. Importa el componente

import HomePage from './Pages/Home/homePage';
import NosotrosPage from './Pages/Nosotros/NosotrosPage';
import RecipesPage from './Pages/Recipes/RecipesPage';
import ProductsPage from './Pages/Products/ProductsPage';
import MethodsPage from './Pages/Methods/MethodsPage';
import DistributionPage from './Pages/Distribution/DistributionPage';
import ContactPage from './Pages/Contact/ContactPage';
import TermsPage from './Pages/Terms/TermsPage';

import './App.css';

function App() {
  const phone = "573107760300";
  const message = encodeURIComponent("¡Hola! Me interesa comprar el Café Imperio 100% Puro Colombiano.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="app-container">
      <ScrollToTop /> {/* <--- 2. Colócalo aquí para que fuerce el scroll arriba al cambiar de página */}
      
      <Header whatsappUrl={whatsappUrl} />
      <SocialSidebar whatsappUrl={whatsappUrl} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/productos" element={<ProductsPage />} />
          <Route path="/recetas" element={<RecipesPage />} />
          <Route path="/metodos" element={<MethodsPage />} />
          <Route path="/distribucion" element={<DistributionPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/terminos" element={<TermsPage />} />
        </Routes>
      </main>

      <Footer whatsappUrl={whatsappUrl} />
    </div>
  );
}

export default App;