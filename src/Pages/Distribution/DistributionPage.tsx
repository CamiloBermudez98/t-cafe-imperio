import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-cafe.jpg';
import styles from './distribution.module.css';

export const DistributionPage: React.FC = () => {
  // Estado para filtrar por categoría / tipo de distribuidor
  const [filterType, setFilterType] = useState<string>('todos');

  const defaultPhone = "573107760300"; // Número de respaldo por defecto

  const distributors = [
    {
      id: '1',
      name: 'Café Imperio - Punto de Fábrica & Tienda Oficial',
      city: 'Bogotá D.C.',
      address: 'Cra 58 # 5c - 42',
      phone: '+57 310 7760300',
      rawPhone: '573107760300',
      type: 'Punto Principal de Fábrica',
      category: 'fabrica',
      isFactory: true
    },
    {
      id: '2',
      name: 'Papeleria Grafos',
      city: 'Bogotá D.C.',
      address: 'Cra 38 # 9 - 55 sur',
      phone: '+57 310 7760300',
      rawPhone: '573107760300',
      type: 'Distribuidor Exclusivo',
      category: 'exclusivo',
      isFactory: false
    },
    {
      
      id: '3',
      name: 'Dumar',
      city: 'Bogotá D.C.',
      address: '', // Si no tiene dirección física específica
      phone: '+57 3143754339 - +57 3184072993',
      rawPhone: '573143754339',
      type: 'Aliados Comerciales',
      category: 'aliado',
      isFactory: false
    },
    {
      id: '4',
      name: 'Hernando Hernandez',
      city: 'Bogotá D.C.',
      address: '', // Si no tiene dirección física específica
      phone: '+57 320 9202414',
      rawPhone: '573209202414',
      type: 'Aliados Comerciales',
      category: 'aliado',
      isFactory: false
    }
  ];

  const filteredDistributors = filterType === 'todos' 
    ? distributors 
    : distributors.filter(d => d.category === filterType);

  return (
    <div className={styles['distribution-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO */}
      <div 
        className={styles['distribution-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.75) 0%, rgba(15,10,6,0.9) 100%), url(${bannerImg})` }}
      >
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ RED OFICIAL Y FÁBRICA ✦</span>
          <h1 className={styles['header-title']}>Distribuidores autorizados</h1>
          <p className={styles['header-subtitle']}>
            Visita nuestro punto directo de fábrica o encuentra los canales oficiales certificados para garantizar el auténtico sabor de Café Imperio.
          </p>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className={styles['distribution-content-wrapper']}>
        
        {/* BARRA DE FILTROS POR TIPO DE DISTRIBUIDOR */}
        <div className={styles['filter-control-bar']}>
          <label>Filtrar red de distribución:</label>
          <div className={styles['pill-buttons']}>
            <button 
              className={`${styles['pill-btn']} ${filterType === 'todos' ? styles['active'] : ''}`}
              onClick={() => setFilterType('todos')}
            >
              Todos los puntos
            </button>
            <button 
              className={`${styles['pill-btn']} ${filterType === 'fabrica' ? styles['active'] : ''}`}
              onClick={() => setFilterType('fabrica')}
            >
              🏭 Punto de Fábrica
            </button>
            <button 
              className={`${styles['pill-btn']} ${filterType === 'autorizado' ? styles['active'] : ''}`}
              onClick={() => setFilterType('autorizado')}
            >
              🛡️ Puntos Autorizados
            </button>
            <button 
              className={`${styles['pill-btn']} ${filterType === 'exclusivo' ? styles['active'] : ''}`}
              onClick={() => setFilterType('exclusivo')}
            >
              ⭐ Distribuidores Exclusivos
            </button>
            <button 
              className={`${styles['pill-btn']} ${filterType === 'aliado' ? styles['active'] : ''}`}
              onClick={() => setFilterType('aliado')}
            >
              🤝 Aliados Comerciales
            </button>
          </div>
        </div>

        {/* CUADRÍCULA DE DISTRIBUIDORES */}
        <div className={styles['distribution-grid']}>
          {filteredDistributors.map((item) => {
            const targetPhone = item.rawPhone ? item.rawPhone.replace(/\D/g, '') : defaultPhone;
            
            // Construcción limpia del mensaje dependiendo si tiene o no dirección
            const locationDetail = item.address ? ` (${item.city} - ${item.address})` : ` (${item.city})`;
            const msg = encodeURIComponent(`¡Hola! Me gustaría cotizar/consultar disponibilidad de Café Imperio con el aliado: ${item.name}${locationDetail}.`);
            const chatUrl = `https://wa.me/${targetPhone}?text=${msg}`;

            return (
              <div 
                key={item.id} 
                className={`${styles['distribution-card']} ${item.isFactory ? styles['factory-highlight-card'] : ''}`}
              >
                <div className={styles['card-top-tag']}>
                  {item.isFactory ? '🔥 SEDE PRINCIPAL' : '✨'} {item.type}
                </div>
                <h3>{item.name}</h3>
                <span className={styles['card-city']}>📍 {item.city}</span>
                
                {/* Renderizado condicional: Solo muestra la dirección si existe */}
                {item.address && <p className={styles['card-address']}>{item.address}</p>}
                
                <div className={styles['card-footer']}>
                  <span className={styles['card-phone']}>📞 {item.phone}</span>
                  <a href={chatUrl} target="_blank" rel="noopener noreferrer" className={styles['consult-btn']}>
                    Cotiza ➔
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECCIÓN DE CONFIANZA Y NUEVOS ALIADOS */}
        <div className={styles['alliance-banner-box']}>
          <h2>¿Quieres ser un Distribuidor Autorizado?</h2>
          <p>Ofrecemos excelentes beneficios, respaldo de marca y comercialización de un café 100% colombiano de alta calidad.</p>
          <a 
            href={`https://wa.me/${defaultPhone}?text=${encodeURIComponent("¡Hola! Me interesa conocer los requisitos para ser un distribuidor autorizado de Café Imperio.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles['alliance-btn']}
          >
            Postula tu negocio como distribuidor ➔
          </a>
        </div>

      </div>

    </div>
  );
};

export default DistributionPage;