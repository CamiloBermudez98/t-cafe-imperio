import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/presentaciones.jpg';
import tradicionalImg from '../../assets/tradicional.jpeg';
import gourmetImg from '../../assets/gourmet.jpeg';
import especialImg from '../../assets/especial.jpeg';
import consumoImg from '../../assets/consumo.jpeg';
import institucionalImg from '../../assets/institucional.jpeg';
import styles from './products.module.css';

export const ProductsPage: React.FC = () => {
  const phone = "573107760300";
  
  const products = [
    {
      id: 'tradicional',
      name: 'Café Tradicional',
      image: tradicionalImg,
      badge: '👑 CLÁSICO DE TAZA',
      desc: 'Nuestro café de siempre. Un perfil equilibrado, con cuerpo medio y notas suaves ideal para acompañar cada mañana.',
      whatsappMsg: encodeURIComponent("¡Hola! Me interesa comprar el Café Tradicional de Café Imperio.")
    },
    {
      id: 'gourmet',
      name: 'Café Gourmet',
      image: gourmetImg,
      badge: '✨ SELECCIÓN GOURMET',
      desc: 'Tostión media seleccionada para paladares exigentes. Destaca por sutiles notas acarameladas y un aroma envolvente.',
      whatsappMsg: encodeURIComponent("¡Hola! Me interesa comprar el Café Gourmet de Café Imperio.")
    },
    {
      id: 'especial',
      name: 'Selección Especial',
      image: especialImg,
      badge: '🌟 EDICIÓN ESPECIAL',
      desc: 'Granos de origen único cosechados a mano en su punto óptimo de maduración. Una taza compleja, limpia y de gran distinción.',
      whatsappMsg: encodeURIComponent("¡Hola! Me interesa comprar la Selección Especial de Café Imperio.")
    },
    {
      id: 'grano',
      name: 'Consumo en Grano',
      image: consumoImg,
      badge: '☕️ MOLIDO A TU GUSTO',
      desc: 'Para los verdaderos amantes del ritual. Conserva todos los aceites esenciales y notas frescas hasta el momento exacto de la molienda.',
      whatsappMsg: encodeURIComponent("¡Hola! Me interesa comprar Café en Grano de Café Imperio.")
    },
    {
      id: 'institucional',
      name: 'Línea Institucional',
      image: institucionalImg,
      badge: '🏢 EMPRESAS Y MAYORISTAS',
      desc: 'Presentaciones optimizadas en volumen para oficinas, hoteles y restaurantes que buscan mantener la más alta calidad colombiana.',
      whatsappMsg: encodeURIComponent("¡Hola! Me interesa información sobre la Línea Institucional de Café Imperio.")
    }
  ];

  return (
    <div className={styles['products-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO DE ALTO NIVEL */}
      <div 
        className={styles['products-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.7) 0%, rgba(15,10,6,0.85) 100%), url(${bannerImg})` }}
      >
        {/* Botón de retorno limpio y anclado a la izquierda */}
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ EXCELENCIA Y ORIGEN COLOMBIANO ✦</span>
          <h1 className={styles['header-title']}>Nuestro Catálogo de Café</h1>
          <p className={styles['header-subtitle']}>
            Cada presentación de Café Imperio ha sido cuidadosamente elaborada para ofrecerte una experiencia sensorial única y fiel a la tradición cafetera.
          </p>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL DE PRODUCTOS */}
      <div className={styles['products-content-wrapper']}>
        <div className={styles['products-grid-detailed']}>
          {products.map((product) => {
            const buyUrl = `https://wa.me/${phone}?text=${product.whatsappMsg}`;
            return (
              <div key={product.id} className={styles['product-detail-card']}>
                <div className={styles['product-img-box']} style={{ backgroundImage: `url(${product.image})` }}>
                  <div className={styles['img-overlay-gradient']}></div>
                  <span className={styles['product-badge']}>{product.badge}</span>
                </div>
                
                <div className={styles['product-info-box']}>
                  <h2>{product.name}</h2>
                  <p>{product.desc}</p>
                  
                  <div className={styles['card-footer-action']}>
                    <a href={buyUrl} target="_blank" rel="noopener noreferrer" className={styles['buy-btn']}>
                      <span>Pedir por WhatsApp</span>
                      <span className={styles['btn-arrow']}>➔</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default ProductsPage;