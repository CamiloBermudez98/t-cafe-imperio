import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SocialSidebar from './components/SocialSidebar/SocialSidebar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// Asegúrate de que la ruta y la H coincidan exactamente con tu archivo (HomePage.tsx)
import HomePage from './Pages/Home/HomePage';
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
      <ScrollToTop />
      
      <Header whatsappUrl={whatsappUrl} />
      <SocialSidebar whatsappUrl={whatsappUrl} />

      <main className="main-content">
        <Routes>
          {/* Ambas rutas cargan directamente el componente de inicio sin redirecciones */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
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