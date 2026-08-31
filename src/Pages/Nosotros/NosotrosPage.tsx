import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-historia.jpg';
import historiaImg from '../../assets/historia.jpg';
import styles from './nosotros.module.css';

export const NosotrosPage: React.FC = () => {
  return (
    <div className={styles['nosotros-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO (Igual al de las demás páginas) */}
      <div 
        className={styles['nosotros-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.75) 0%, rgba(15,10,6,0.9) 100%), url(${bannerImg})` }}
      >
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ TRADICIÓN Y ALIADOS ESTRATÉGICOS ✦</span>
          <h1 className={styles['header-title']}>Nuestra Historia</h1>
          <p className={styles['header-subtitle']}>
            Más de 20 años dedicados a cultivar, tostar y compartir el orgullo del mejor café colombiano.
          </p>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className={styles['nosotros-content-wrapper']}>
        
        {/* Bloque 1: Empresa familiar */}
        <div className={styles['nosotros-grid']}>
          <div className={styles['nosotros-img-card']} style={{ backgroundImage: `url(${historiaImg})` }}>
            <div className={styles['nosotros-img-badge']}>✦ Legado Familiar</div>
          </div>
          
          <div className={styles['nosotros-text-box']}>
            <span className={styles['section-tag']}>NUESTRAS RAÍCES</span>
            <h2>Pasión y Tradición en Cada Grano</h2>
            <p>
              Somos una empresa familiar con más de <strong>20 años de trayectoria</strong> dedicados a tostar y ofrecer el más delicioso café colombiano bajo nuestra propia marca. 
            </p>
            <p>
              A lo largo de los años, nuestra pasión por la tierra y el trabajo bien hecho nos han consolidado como un referente de sabor y confianza.
            </p>
          </div>
        </div>

        {/* Bloque 2: Aliado estratégico / Maquila */}
        <div className={`${styles['nosotros-grid']} ${styles['reverse']}`}>
          <div className={styles['nosotros-text-box']}>
            <span className={styles['section-tag']}>IMPULSANDO NUEVOS SUEÑOS</span>
            <h2>Tu Aliado Estratégico en Maquila y Comercialización</h2>
            <p>
              Pero nuestra misión va más allá: también nos apasiona impulsar el talento y el crecimiento de nuevas marcas. 
            </p>
            <p>
              Gracias a nuestra experiencia, ofrecemos <strong>servicios integrales de maquila</strong> (procesamiento) y comercialización, convirtiéndonos en el aliado estratégico que otros proyectos necesitan para despegar.
            </p>
          </div>

          <div className={styles['nosotros-feature-card']}>
            <div className={styles['feature-overlay']}>
              <h3>100% Colombiano</h3>
              <p>Natural, de la más alta calidad, manteniendo intacta la tradición, el esfuerzo y el amor por el campo.</p>
            </div>
          </div>
        </div>

        {/* Cita de cierre destacada */}
        <div className={styles['nosotros-quote-box']}>
          <blockquote>
            "Nos enorgullece profundamente ofrecer a nuestros clientes un café excepcional, manteniendo vivo el esfuerzo y el amor por el cafe en cada taza."
          </blockquote>
          <span className={styles['quote-author']}>— Familia Café Imperio</span>
        </div>

      </div>

    </div>
  );
};

export default NosotrosPage;