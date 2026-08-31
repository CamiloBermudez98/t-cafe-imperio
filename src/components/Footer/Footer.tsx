import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo-imperio.png';
import styles from './Footer.module.css';

interface FooterProps {
  whatsappUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ whatsappUrl }) => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        
        {/* Columna Izquierda: Logo y Certificación / Sello */}
        <div className={styles.footerBrandCol}>
          <div className={styles.footerLogoWrapper}>
            <img src={logoImg} alt="Café Imperio Logo" className={styles.footerLogo} />
          </div>
          <div className={styles.certBadge}>
            <span className={styles.certTitle}>Café de Origen</span>
            <span className={styles.certSubtitle}>100% Colombiano</span>
          </div>
        </div>

        {/* Columna Central: Contáctanos */}
        <div className={styles.footerLinksCol}>
          <h4 className={styles.footerHeading}>CONTÁCTANOS</h4>
          <ul className={styles.footerList}>
            <li>
              <span className={styles.footerIcon}>📞</span> +57 3107760300
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.footerLinkItem}>
                <span className={styles.footerIcon}>💬</span> Escríbenos por WhatsApp
              </a>
            </li>
            <li>
              <span className={styles.footerIcon}>✉️</span>  cafe.imperio@hotmail.com
            </li>
          </ul>
        </div>

        {/* Columna Derecha: Acerca de nosotros / Enlaces */}
        <div className={styles.footerLinksCol}>
          <h4 className={styles.footerHeading}>ACERCA DE NOSOTROS</h4>
          <ul className={styles.footerList}>
            <li><Link to="/terminos" className={styles.footerLinkItem}>Términos y Condiciones</Link></li>
            <li><Link to="/nosotros" className={styles.footerLinkItem}>Nuestra Marca</Link></li>
            <li><Link to="/recetas" className={styles.footerLinkItem}>Recetas</Link></li>
            
          </ul>
        </div>

      </div>

      {/* Franja inferior de derechos */}
      <div className={styles.footerBottomBar}>
        <p>© {new Date().getFullYear()} Café Imperio®. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;