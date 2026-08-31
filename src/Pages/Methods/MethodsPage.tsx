import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-cafe.jpg';
import cafeteraImg from '../../assets/cafetera.jpg';
import prensaImg from '../../assets/prensa.jpg';
import tradicionalImg from '../../assets/tradicional.jpeg'; // Puedes usar una imagen de cafetera convencional si la tienes
import convencionalImg from '../../assets/convencional.jpg';
import styles from './methods.module.css';

export const MethodsPage: React.FC = () => {
  // Estado para alternar entre los tres métodos de preparación
  const [selectedMethod, setSelectedMethod] = useState<'italiana' | 'prensa' | 'convencional'>('italiana');

  const methodsData = {
    italiana: {
      name: 'Café de Cafetera Italiana ',
      image: cafeteraImg,
      badge: '🔥 CUERPO INTENSO Y TRADICIÓN',
      desc: 'La cafetera es un método clásico de extracción por presión de vapor. Ideal para resaltar el carácter fuerte, denso y profundo de Café Imperio.',
      grind: 'Molienda media-fina (similar a la sal de mesa fina).',
      ratio: '1 parte de café por cada 10 partes de agua filtrada.',
      steps: [
        'Llena la base inferior con agua caliente o filtrada justo por debajo de la válvula de seguridad.',
        'Coloca el filtro metálico y llénalo completamente con tu Café Imperio favorito, sin presionar o compactar demasiado el café.',
        'Enrosca firmemente la parte superior con la base y colócala a fuego medio-bajo con la tapa abierta.',
        'Cuando comience a subir el café y escuches un sonido de burbujeo suave, retira del fuego inmediatamente y sirve de inmediato.'
      ]
    },
    prensa: {
      name: 'Prensa Francesa',
      image: prensaImg,
      badge: '☕️ CUERPO ENVOLVENTE Y AROMAS PUROS',
      desc: 'Un método de infusión por inmersión total. Al no utilizar filtros de papel, permite que los aceites esenciales naturales del café pasen directamente a la taza.',
      grind: 'Molienda gruesa (similar al azúcar morena o sal marina en grano).',
      ratio: '15 gramos de café por cada 250 ml de agua.',
      steps: [
        'Agrega el café con molienda gruesa directamente en el recipiente de vidrio limpio y seco de la prensa.',
        'Vierte agua caliente a unos 92°C-94°C (Antes de que hierva) humedeciendo todo el café de manera uniforme. Realiza una pre-infusión de 30 segundos.',
        'Termina de verter el agua restante, revuelve suavemente con una cuchara y coloca el émbolo arriba sin presionar durante 4 minutos.',
        'Desciende el émbolo de manera lenta, suave y uniforme hasta el fondo. Sirve y disfruta de inmediato.'
      ]
    },
    convencional: {
      name: 'Cafetera Convencional (Goteo / Eléctrica)',
      image: convencionalImg, // Puedes cambiar esta imagen por una de cafetera eléctrica si la agregas
      badge: '⚡️ PRÁCTICA, LIMPIA Y EQUILIBRADA',
      desc: 'El método clásico de todos los hogares. Utiliza un filtro de papel o malla donde el agua caliente gotea de forma constante para obtener una taza limpia, suave y reconfortante.',
      grind: 'Molienda media (similar a la arena de playa).',
      ratio: '10 gramos (una cucharada sopera) por cada taza de agua.',
      steps: [
        'Coloca el filtro de papel o permanente en el compartimiento de la cafetera convencional.',
        'Agrega la cantidad adecuada de Café Imperio en el filtro de acuerdo al número de tazas que desees preparar.',
        'Llena el tanque con agua fría y filtrada hasta el nivel indicado.',
        'Enciende la cafetera y deja que el ciclo de goteo filtre todo el contenido uniformemente en la jarra térmica antes de servir.'
      ]
    }
  };

  const currentMethod = methodsData[selectedMethod];

  return (
    <div className={styles['methods-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO */}
      <div 
        className={styles['methods-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.75) 0%, rgba(15,10,6,0.9) 100%), url(${bannerImg})` }}
      >
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ EXTRACCIÓN Y RITUAL ✦</span>
          <h1 className={styles['header-title']}>Métodos de Preparación</h1>
          <p className={styles['header-subtitle']}>
            Elige tu método de cafetera favorito y aprende las técnicas profesionales para extraer lo mejor de cada grano en casa.
          </p>
        </div>
      </div>

      {/* CONTENEDOR INTERACTIVO DE MÉTODOS */}
      <div className={styles['methods-content-wrapper']}>
        
        {/* BARRA DE SELECCIÓN DE MÉTODO */}
        <div className={styles['selector-control-bar']}>
          <label>Selecciona tu método de extracción:</label>
          <div className={styles['pill-buttons']}>
            <button 
              className={`${styles['pill-btn']} ${selectedMethod === 'italiana' ? styles['active'] : ''}`}
              onClick={() => setSelectedMethod('italiana')}
            >
              ☕️ Cafetera Italiana
            </button>
            <button 
              className={`${styles['pill-btn']} ${selectedMethod === 'prensa' ? styles['active'] : ''}`}
              onClick={() => setSelectedMethod('prensa')}
            >
              🌿 Prensa Francesa
            </button>
            <button 
              className={`${styles['pill-btn']} ${selectedMethod === 'convencional' ? styles['active'] : ''}`}
              onClick={() => setSelectedMethod('convencional')}
            >
              ⚡️ Cafetera Convencional
            </button>
          </div>
        </div>

        {/* TARJETA DINÁMICA DEL MÉTODO SELECCIONADO */}
        <div className={styles['method-display-card']}>
          
          {/* Lado Visual / Imagen */}
          <div className={styles['method-visual-side']} style={{ backgroundImage: `url(${currentMethod.image})` }}>
            <div className={styles['visual-gradient-overlay']}></div>
            <div className={styles['method-badge-floating']}>
              <span>{currentMethod.badge}</span>
              <h3>{currentMethod.name}</h3>
            </div>
          </div>

          {/* Lado de Especificaciones y Pasos */}
          <div className={styles['method-details-side']}>
            <h2>{currentMethod.name}</h2>
            <p className={styles['method-desc-text']}>{currentMethod.desc}</p>

            <div className={styles['specs-box']}>
              <div className={styles['spec-item']}>
                <strong>📏 Molienda recomendada:</strong>
                <p>{currentMethod.grind}</p>
              </div>
              <div className={styles['spec-item']}>
                <strong>⚖️ Proporción ideal:</strong>
                <p>{currentMethod.ratio}</p>
              </div>
            </div>

            <div className={styles['steps-box']}>
              <h3>Guía de preparación paso a paso:</h3>
              <ol>
                {currentMethod.steps.map((step, idx) => (
                  <li key={idx}><span>{idx + 1}.</span> {step}</li>
                ))}
              </ol>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default MethodsPage;