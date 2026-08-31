import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-cafe.jpg';

// Importa aquí tus imágenes de productos (asegúrate de que los nombres y extensiones coincidan)
import tradicionalImg from '../../assets/tradicional.jpeg';
import gourmetImg from '../../assets/gourmet.jpeg';
import especialImg from '../../assets/especial.jpeg';
import consumoImg from '../../assets/consumo.jpeg';
import institucionalImg from '../../assets/institucional.jpeg';
import cafeteraImg from '../../assets/cafetera.jpg';
import prensaImg from '../../assets/prensa.jpg';
import convencionalImg from '../../assets/convencional.jpg';
import historiaImg from '../../assets/historia.jpg';


import capuchinoImg from '../../assets/capuchino.jpg';
import expressoImg from '../../assets/expresso.jpg';
import latteImg from '../../assets/latte.jpg';
import mugImg from '../../assets/consumo.jpeg';
import cucharaImg from '../../assets/consumo.jpeg';

import styles from './home.module.css';

export const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cafe' | 'metodos' | 'accesorios'>('cafe');

  const phone = "573107760300"; // Número de teléfono de WhatsApp
  const message = encodeURIComponent("¡Hola! Me interesa comprar productos de Café Imperio.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className={styles['landing-container']}>
      
      {/* HERO SECTION CON ESTILO BANNER */}
      <header 
        className={styles.hero} 
        id="inicio"
        style={{ backgroundImage: `linear-gradient(90deg, rgba(15,10,6,0.9) 0%, rgba(15,10,6,0.5) 55%, rgba(15,10,6,0.8) 100%), url(${bannerImg})` }}
      >
        <div className={styles['hero-content']}>
          <div className={styles['badge-flag']}>
            <span>EXCELENCIA DE ORIGEN COLOMBIANO</span>
          </div>

          <h1 className={styles['hero-title']}>
            Tradición familiar, experiencia y<br /><span>amor por el café</span>
          </h1>
          
          <p className={styles['hero-subtitle']}>
            Más de 20 años llevando el auténtico sabor de nuestra tierra a tu taza. Café 100% colombiano, natural y con el orgullo de lo nuestro.
          </p>

          <div className={styles['hero-actions']}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles['btn-primary']}>
              Adquiere el tuyo
            </a>
            {/* REDIRECCIONAMIENTO AL CATÁLOGO DE PRODUCTOS */}
            <Link to="/productos" className={styles['btn-secondary']}>
              Nuestros Productos
            </Link>
          </div>
        </div>
      </header>

      {/* NUEVA SECCIÓN NUESTRA HISTORIA (DISEÑO LIMPIO DE DOS COLUMNAS) */}
      <section className={styles['history-section']} id="historia">
        <div className={styles['history-grid']}>
          
          {/* Columna Izquierda: Imagen principal con marco elegante */}
          <div className={styles['history-image-wrapper']}>
            <div className={styles['history-image-card']} style={{ backgroundImage: `url(${historiaImg})` }}>
              <div className={styles['history-img-badge']}>CAFÉ IMPERIO®</div>
            </div>
          </div>

          {/* Columna Derecha: Contenido de texto y llamada a la acción */}
          <div className={styles['history-content-box']}>
            <span className={styles['history-tag']}>TRADICIÓN Y CALIDAD COLOMBIANA</span>
            <h2 className={styles['history-main-title']}>NUESTRA HISTORIA</h2>
            
            <p className={styles['history-description']}>
               Somos una empresa familiar con más de 20 años de trayectoria dedicados a tostar y ofrecer el más delicioso café colombiano bajo nuestra propia marca. A lo largo de los años, nuestra pasión por la tierra y el trabajo bien hecho nos han consolidado como un referente de sabor y confianza.
            </p>
            
            <p className={styles['history-description-sub']}>
             Nos enorgullece ofrecer a nuestros clientes cafe 100% colombiano, natural y de alta calidad.
            </p>

            <Link to="/nosotros" className={styles['history-action-btn']}>
              <span className={styles['explore-icon']}>➔</span> Conoce más sobre nuestra marca
            </Link>
          </div>

        </div>
      </section>

      {/* SECCIÓN NUESTROS PRODUCTOS CON PESTAÑAS INTERACTIVAS */}
      <section className={styles['releases-section']} id="productos">
        <div className={styles['releases-header']}>
          <h2 className={styles['releases-title']}>NUESTROS PRODUCTOS</h2>
          <p className={styles['releases-desc']}>Conoce nuestras líneas exclusivas y escoge tu favorito.</p>
          
          <div className={styles['releases-tabs']}>
            <button 
              onClick={() => setActiveTab('cafe')} 
              className={`${styles['tab-item']} ${activeTab === 'cafe' ? styles['active'] : ''}`}
            >
              CAFÉ
            </button>
            <button 
              onClick={() => setActiveTab('metodos')} 
              className={`${styles['tab-item']} ${activeTab === 'metodos' ? styles['active'] : ''}`}
            >
              MÉTODOS
            </button>
          </div>
        </div>

        <div className={activeTab === 'metodos' ? styles['releases-grid-ref'] : styles['releases-grid']}>
          {activeTab === 'cafe' && (
            <>
              {/* REDIRECCIONAMIENTO AL CATÁLOGO EN CADA TARJETA DE CAFÉ */}
              <div className={styles['release-card']}>
                <div className={styles['card-image-wrapper']} style={{ backgroundImage: `url(${tradicionalImg})` }}></div>
                <div className={styles['release-card-footer']}>
                  <h3>Café Tradicional</h3>
                  <Link to="/productos" className={styles['explore-btn']}>➔ Explorar</Link>
                </div>
              </div>

              <div className={styles['release-card']}>
                <div className={styles['card-image-wrapper']} style={{ backgroundImage: `url(${gourmetImg})` }}></div>
                <div className={styles['release-card-footer']}>
                  <h3>Café Gourmet</h3>
                  <Link to="/productos" className={styles['explore-btn']}>➔ Explorar</Link>
                </div>
              </div>

              <div className={styles['release-card']}>
                <div className={styles['card-image-wrapper']} style={{ backgroundImage: `url(${especialImg})` }}></div>
                <div className={styles['release-card-footer']}>
                  <h3>Selección Especial</h3>
                  <Link to="/productos" className={styles['explore-btn']}>➔ Explorar</Link>
                </div>
              </div>

              <div className={styles['release-card']}>
                <div className={styles['card-image-wrapper']} style={{ backgroundImage: `url(${consumoImg})` }}></div>
                <div className={styles['release-card-footer']}>
                  <h3>Consumo en grano</h3>
                  <Link to="/productos" className={styles['explore-btn']}>➔ Explorar</Link>
                </div>
              </div>

              <div className={styles['release-card']}>
                <div className={styles['card-image-wrapper']} style={{ backgroundImage: `url(${institucionalImg})` }}></div>
                <div className={styles['release-card-footer']}>
                  <h3>Institucional</h3>
                  <Link to="/productos" className={styles['explore-btn']}>➔ Explorar</Link>
                </div>
              </div>
            </>
          )}

          {activeTab === 'metodos' && (
            <>
              <div className={styles['release-card-ref']}>
                <div className={styles['card-img-bg-1']} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${convencionalImg})` }}>
                  <div className={styles['card-overlay-gradient']}>
                    <h3>Cafetera Convencional</h3>
                    <Link to="/metodos" className={styles['explore-btn-ref']}>
                      <span className={styles['explore-icon']}>➔</span> Explorar
                    </Link>
                  </div>
                </div>
              </div> 
              
              <div className={styles['release-card-ref']}>
                <div className={styles['card-img-bg-1']} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${cafeteraImg})` }}>
                  <div className={styles['card-overlay-gradient']}>
                    <h3>Cafetera Italiana</h3>
                    <Link to="/metodos" className={styles['explore-btn-ref']}>
                      <span className={styles['explore-icon']}>➔</span> Explorar
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles['release-card-ref']}>
                <div className={styles['card-img-bg-2']} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${prensaImg})` }}>
                  <div className={styles['card-overlay-gradient']}>
                    <h3>Prensa Francesa</h3>
                    <Link to="/metodos" className={styles['explore-btn-ref']}>
                      <span className={styles['explore-icon']}>➔</span> Explorar
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* SECCIÓN RECETAS Y PREPARACIONES IMPERDIBLES */}
      <section className={styles['recipes-section']} id="recetas">
        <div className={styles['recipes-header']}>
          <span className={styles['recipes-subtitle-tag']}>HAZLO TÚ MISMO</span>
          <h2 className={styles['recipes-title']}>RECETAS Y PREPARACIONES IMPERDIBLES</h2>
          <Link to="/recetas" className={styles['recipes-see-all']}>
            <span className={styles['explore-icon']}>➔</span> Ver todo
          </Link>
        </div>

        <div className={styles['recipes-grid']}>
          
          {/* Receta 1: Espresso Clásico */}
          <div className={styles['recipe-card']} style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(15,10,6,0.9) 100%), url(${expressoImg})` }}>
            <div className={styles['recipe-content']}>
              <h3>Espresso Clásico</h3>
              <Link to="/recetas" className={styles['recipe-link']}>
                <span className={styles['explore-icon']}>➔</span> Preparar receta
              </Link>
            </div>
          </div>

          {/* Receta 2: Capuccino Dulce de Leche */}
          <div className={styles['recipe-card']} style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(15,10,6,0.9) 100%), url(${capuchinoImg})` }}>
            <div className={styles['recipe-content']}>
              <h3>Capuccino Dulce de Leche</h3>
              <Link to="/recetas" className={styles['recipe-link']}>
                <span className={styles['explore-icon']}>➔</span> Preparar receta
              </Link>
            </div>
          </div>

          {/* Receta 3: Latte Tradicional */}
          <div className={styles['recipe-card']} style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(15,10,6,0.9) 100%), url(${latteImg})` }}>
            <div className={styles['recipe-content']}>
              <h3>Latte Tradicional</h3>
              <Link to="/recetas" className={styles['recipe-link']}>
                <span className={styles['explore-icon']}>➔</span> Preparar receta
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;