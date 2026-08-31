import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-cafe.jpg';
import tradicionalImg from '../../assets/tradicional.jpeg';
import gourmetImg from '../../assets/gourmet.jpeg';
import especialImg from '../../assets/especial.jpeg';
import styles from './recipes.module.css';

export const RecipesPage: React.FC = () => {
  // Estado para la línea de café seleccionada ('tradicional' | 'gourmet' | 'especial')
  const [selectedCoffee, setSelectedCoffee] = useState<'tradicional' | 'gourmet' | 'especial'>('tradicional');
  
  // Estado para la preparación seleccionada ('espresso' | 'capuchino' | 'latte')
  const [selectedRecipe, setSelectedRecipe] = useState<'espresso' | 'capuchino' | 'latte'>('espresso');

  // Datos y perfiles oficiales actualizados de Café Imperio
  const coffeeData = {
    tradicional: {
      name: 'Café Tradicional',
      image: tradicionalImg,
      badge: '☕️ EL CLÁSICO DE SIEMPRE',
      profile: 'Un café para todos los hogares, con carácter y muy rico al paladar.'
    },
    gourmet: {
      name: 'Café Gourmet',
      image: gourmetImg,
      badge: '✨ EQUILIBRIO PERFECTO',
      profile: 'Exclusiva combinación para una taza superior.'
    },
    especial: {
      name: 'Selección Especial',
      image: especialImg,
      badge: '🌟 MÁXIMA DISTINCIÓN',
      profile: 'Cosechado a mano para los paladares más exigentes.'
    }
  };

  // Contenido detallado de las recetas adaptadas al café seleccionado
  const recipesContent = {
    espresso: {
      title: 'Espresso Clásico',
      time: '2 - 3 minutos',
      difficulty: 'Fácil / Esencial',
      description: `La base de todo buen ritual. Una extracción corta y precisa que resalta la fuerza y el cuerpo único utilizando ${coffeeData[selectedCoffee].name} (${coffeeData[selectedCoffee].profile}).`,
      ingredients: [
        '7 a 9 gramos de ' + coffeeData[selectedCoffee].name + ' (Molienda fina)',
        '30 ml de agua filtrada a 90°C - 92°C'
      ],
      steps: [
        'Calienta tu máquina de espresso o cafetera italiana y asegura que el portafiltro esté seco y limpio.',
        'Dosifica el café finamente molido y nivélalo ejerciendo una presión suave y uniforme (compactado).',
        'Realiza la extracción durante 25 a 30 segundos exactos hasta obtener 30 ml de un espresso denso y brillante con una crema compacta.'
      ]
    },
    capuchino: {
      title: 'Capuchino Dulce de Leche',
      time: '5 minutos',
      difficulty: 'Intermedio',
      description: `Una combinación perfecta entre la intensidad del espresso de ${coffeeData[selectedCoffee].name}, la cremosidad de la leche vaporizada y el toque dulce del dulce de leche.`,
      ingredients: [
        '1 taza de espresso doble de ' + coffeeData[selectedCoffee].name,
        '150 ml de leche entera fría',
        '1 cucharada generosa de dulce de leche (arequipe)'
      ],
      steps: [
        'Coloca la cucharada de dulce de leche en el fondo de tu taza favorita.',
        'Prepara un espresso doble y viértelo directamente sobre el dulce de leche, mezclando bien hasta disolverlo por completo.',
        'Vaporiza la leche hasta conseguir una textura de microespuma sedosa y agrégala con cuidado sobre la mezcla de café.',
        'Decora con un toque ligero de cacao en polvo o líneas de dulce de leche por encima.'
      ]
    },
    latte: {
      title: 'Latte Tradicional',
      time: '4 minutos',
      difficulty: 'Fácil',
      description: `Un clásico indiscutible elaborado con ${coffeeData[selectedCoffee].name}. Un tercio de espresso puro rodeado de una generosa capa de leche vaporizada y una fina textura de espuma cremosa.`,
      ingredients: [
        '1 espresso sencillo de ' + coffeeData[selectedCoffee].name,
        '200 ml de leche entera o vegetal'
      ],
      steps: [
        'Extrae un espresso sencillo directamente en el fondo de un vaso alto o taza grande de cerámica.',
        'Calienta y vaporiza la leche manteniendo la boquilla cerca de la superficie para incorporar aire y generar una capa fina de espuma cremosa (aproximadamente 1 cm).',
        'Vierte la leche de manera fluida y constante desde una altura media hacia el centro del espresso para integrar los sabores y lograr un acabado armónico.'
      ]
    }
  };

  const currentRecipe = recipesContent[selectedRecipe];
  const currentCoffee = coffeeData[selectedCoffee];

  return (
    <div className={styles['recipes-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO */}
      <div 
        className={styles['recipes-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.75) 0%, rgba(15,10,6,0.9) 100%), url(${bannerImg})` }}
      >
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ HAZLO TÚ MISMO ✦</span>
          <h1 className={styles['header-title']}>Recetas en Casa</h1>
          <p className={styles['header-subtitle']}>
            Selecciona tu café preferido de Café Imperio y descubre el paso a paso detallado para preparar la bebida perfecta.
          </p>
        </div>
      </div>

      {/* CONTENEDOR INTERACTIVO DE RECETAS */}
      <div className={styles['recipes-content-wrapper']}>
        
        {/* BARRA DE SELECCIÓN (CAFÉ Y MÉTODO) */}
        <div className={styles['selector-control-bar']}>
          
          {/* Selector de tipo de Café */}
          <div className={styles['selector-group']}>
            <label>1. Elige tu Café Imperio:</label>
            <div className={styles['pill-buttons']}>
              <button 
                className={`${styles['pill-btn']} ${selectedCoffee === 'tradicional' ? styles['active'] : ''}`}
                onClick={() => setSelectedCoffee('tradicional')}
              >
                Tradicional
              </button>
              <button 
                className={`${styles['pill-btn']} ${selectedCoffee === 'gourmet' ? styles['active'] : ''}`}
                onClick={() => setSelectedCoffee('gourmet')}
              >
                Gourmet
              </button>
              <button 
                className={`${styles['pill-btn']} ${selectedCoffee === 'especial' ? styles['active'] : ''}`}
                onClick={() => setSelectedCoffee('especial')}
              >
                Selección Especial
              </button>
            </div>
          </div>

          {/* Selector desplegable (Dropdown) de Preparaciones */}
          <div className={styles['selector-group']}>
            <label htmlFor="recipe-select">2. Elige la Preparación:</label>
            <select 
              id="recipe-select"
              className={styles['recipe-dropdown']}
              value={selectedRecipe}
              onChange={(e) => setSelectedRecipe(e.target.value as 'espresso' | 'capuchino' | 'latte')}
            >
              <option value="espresso">☕️ Espresso Clásico</option>
              <option value="capuchino">🍯 Capuccino Dulce de Leche</option>
              <option value="latte">🥛 Latte Tradicional</option>
            </select>
          </div>

        </div>

        {/* TARJETA DINÁMICA DE LA RECETA SELECCIONADA */}
        <div className={styles['recipe-display-card']}>
          
          {/* Columna de Imagen y Resumen del Café con el Perfil Destacado */}
          <div className={styles['recipe-visual-side']} style={{ backgroundImage: `url(${currentCoffee.image})` }}>
            <div className={styles['visual-gradient-overlay']}></div>
            <div className={styles['coffee-badge-floating']}>
              <span className={styles['floating-coffee-tag']}>{currentCoffee.badge}</span>
              <h3>{currentCoffee.name}</h3>
              <p>{currentCoffee.profile}</p>
            </div>
          </div>

          {/* Columna con el Paso a Paso de la Receta */}
          <div className={styles['recipe-details-side']}>
            <div className={styles['recipe-meta-tags']}>
              <span>⏱ {currentRecipe.time}</span>
              <span>📊 {currentRecipe.difficulty}</span>
            </div>

            <h2>{currentRecipe.title}</h2>
            <p className={styles['recipe-desc-text']}>{currentRecipe.description}</p>

            <div className={styles['ingredients-box']}>
              <h3>Ingredientes necesarios:</h3>
              <ul>
                {currentRecipe.ingredients.map((ing, idx) => (
                  <li key={idx}>{ing}</li>
                ))}
              </ul>
            </div>

            <div className={styles['steps-box']}>
              <h3>Paso a paso para prepararlo:</h3>
              <ol>
                {currentRecipe.steps.map((step, idx) => (
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

export default RecipesPage;