import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo-imperio.png';
import styles from './Header.module.css';

interface HeaderProps {
  whatsappUrl: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappUrl }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* HEADER PRINCIPAL CON DIFUMINADO FLOTANTE */}
      <header className={styles.header}>
        <Link to="/Home" className={styles.brandContainer}>
          <div className={styles.logoCircleWrapper}>
            <img src={logoImg} alt="Café Imperio Logo" className={styles.logoImage} />
          </div>
        </Link>

        <div className={styles.actionsContainer}>
          <button onClick={toggleMenu} className={styles.menuToggleBtn}>
            <span className={styles.menuIcon}>☰</span> Menú
          </button>
        </div>
      </header>

      {/* MENÚ DESPLEGABLE TIPO OVERLAY (PANTALLA COMPLETA) */}
      {isMenuOpen && (
        <div className={styles.menuOverlay}>
          <div className={styles.menuOverlayHeader}>
            <div className={styles.overlayBrand}>
              <div className={styles.logoCircleWrapper}>
                <img src={logoImg} alt="Café Imperio Logo" className={styles.logoImage} />
              </div>
              <span>CAFÉ IMPERIO</span>
            </div>
            <button onClick={toggleMenu} className={styles.closeBtn}>
              ✕ Cerrar
            </button>
          </div>

          <div className={styles.menuOverlayContent}>
            {/* Sección Izquierda: Cuadrícula de 4 Tarjetas Destacadas */}
            <div className={styles.menuCardsSection}>
              <h3 className={styles.sectionHeading}>También te puede interesar</h3>
              <div className={styles.cardsGrid}>
                
                {/* 1. Selección Especial */}
                <div className={styles.featureCardSpecial}>
                  <div className={styles.cardContent}>
                    <h4>Selección Especial</h4>
                    <p>100% café excelso, cosechado a mano para los más exigentes.</p>
                    <Link to="/productos" onClick={toggleMenu} className={styles.cardLink}>
                      Ver en catálogo →
                    </Link>
                  </div>
                </div>

                {/* 2. Café Gourmet */}
                <div className={styles.featureCardGourmet}>
                  <div className={styles.cardContent}>
                    <h4>Café Gourmet</h4>
                    <p>La combinación perfecta: 50% consumo y 50% excelso.</p>
                    <Link to="/productos" onClick={toggleMenu} className={styles.cardLink}>
                      Ver en catálogo →
                    </Link>
                  </div>
                </div>

                {/* 3. Recetas en Casa */}
                <div className={styles.featureCardRecipes}>
                  <div className={styles.cardContent}>
                    <h4>Recetas en Casa</h4>
                    <p>Aprende a preparar el Capuchino Dulce de Leche, Latte y Espresso.</p>
                    <Link to="/recetas" onClick={toggleMenu} className={styles.cardLink}>
                      Ver recetas →
                    </Link>
                  </div>
                </div>

                {/* 4. Puntos de Distribución */}
                <div className={styles.featureCardDistribution}>
                  <div className={styles.cardContent}>
                    <h4>Puntos de Venta</h4>
                    <p>Encuentra nuestros establecimientos aliados en tu ciudad.</p>
                    <Link to="/distribucion" onClick={toggleMenu} className={styles.cardLink}>
                      Ver tiendas →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Sección Derecha: Enlaces de navegación completos */}
            <nav className={styles.menuNavLinks}>
              <Link to="/Home" onClick={toggleMenu} className={styles.navLinkItem}>Inicio</Link>
              <Link to="/nosotros" onClick={toggleMenu} className={styles.navLinkItem}>Sobre nosotros</Link>
              <Link to="/productos" onClick={toggleMenu} className={styles.navLinkItem}>Nuestros Productos</Link>
              <Link to="/recetas" onClick={toggleMenu} className={styles.navLinkItem}>Recetas de la casa</Link>
              <Link to="/metodos" onClick={toggleMenu} className={styles.navLinkItem}>Métodos de Preparación</Link>
              <Link to="/distribucion" onClick={toggleMenu} className={styles.navLinkItem}>Distribuidores Autorizados</Link>
              <Link to="/contacto" onClick={toggleMenu} className={styles.navLinkItem}>Contacto</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;