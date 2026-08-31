import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-cafe.jpg';
import styles from './terms.module.css';

export const TermsPage: React.FC = () => {
  return (
    <div className={styles['terms-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO */}
      <div 
        className={styles['terms-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.75) 0%, rgba(15,10,6,0.9) 100%), url(${bannerImg})` }}
      >
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ MARCO LEGAL Y TRANSPARENCIA ✦</span>
          <h1 className={styles['header-title']}>Términos y Condiciones</h1>
          <p className={styles['header-subtitle']}>
            Conoce los lineamientos de compra, privacidad y garantías que rigen el uso de nuestro sitio web y la comercialización de nuestros productos.
          </p>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL DE TEXTO LEGAL */}
      <div className={styles['terms-content-wrapper']}>
        
        <div className={styles['terms-card']}>
          
          <section className={styles['terms-section']}>
            <h2>1. Información General y Titularidad</h2>
            <p>
              El presente sitio web es propiedad y está operado por <strong>Café Imperio</strong>, empresa colombiana dedicada a la tostión, empaque y comercialización de café 100% colombiano de alta calidad.
            </p>
            <ul>
              <li><strong>Dirección principal:</strong> Cra 58 # 5c - 42, Bogotá D.C., Colombia</li>
              <li><strong>Línea oficial de atención:</strong> +57 310 776 0300</li>
              <li><strong>Notificación Sanitaria:</strong> Registro sanitario oficial para la comercialización de alimentos procesados.</li>
            </ul>
          </section>

          <section className={styles['terms-section']}>
            <h2>2. Aceptación de los Términos</h2>
            <p>
              Al acceder, navegar o realizar pedidos a través de este sitio web o nuestros canales de atención conectados (como WhatsApp), el usuario acepta cumplir y estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le solicitamos abstenerse de utilizar nuestros servicios comerciales.
            </p>
          </section>

          <section className={styles['terms-section']}>
            <h2>3. Productos y Disponibilidad</h2>
            <p>
              Café Imperio comercializa distintas líneas de producto (Tradicional, Selección Especial, Gourmet, Consumo en Grano e Institucional). Nos esforzamos por mantener la información de precios, gramajes y características actualizada. Sin embargo, la disponibilidad de lotes específicos o presentaciones puede variar según la producción y temporada de cosecha.
            </p>
          </section>

          <section className={styles['terms-section']}>
            <h2>4. Pedidos y Canales de Venta Directa</h2>
            <p>
              Los pedidos solicitados a través de la plataforma son confirmados vía WhatsApp o contacto directo con nuestro equipo comercial. El proceso de despacho se inicia una vez verificado el pago a través de las pasarelas o cuentas autorizadas por Café Imperio.
            </p>
          </section>

          <section className={styles['terms-section']}>
            <h2>5. Envíos y Entregas</h2>
            <p>
              Realizamos envíos a nivel local en Bogotá D.C. y cobertura nacional en Colombia mediante transportadoras aliadas. Los tiempos de entrega son estimados y pueden ser sujetos a condiciones logísticas o de fuerza mayor ajenas a nuestra gestión directa.
            </p>
          </section>

          <section className={styles['terms-section']}>
            <h2>6. Garantías y Devoluciones</h2>
            <p>
              Garantizamos el empaque sellado y la frescura de nuestro café al momento de despacho. En caso de recibir un producto con defectos de empaque o inconsistencia en la orden, el cliente debe notificarlo a nuestro canal oficial en un plazo máximo de cinco (5) días hábiles tras la recepción para coordinar el cambio correspondiente.
            </p>
          </section>

          <section className={styles['terms-section']}>
            <h2>7. Protección de Datos Personales</h2>
            <p>
              En cumplimiento con la legislación colombiana de protección de datos (Ley 1581 de 2012), la información suministrada por los clientes será utilizada únicamente para procesar pedidos, coordinar entregas e brindar atención comercial directa. No compartimos ni vendemos datos personales a terceros.
            </p>
          </section>

          <section className={styles['terms-section']}>
            <h2>8. Modificaciones</h2>
            <p>
              Café Imperio se reserva el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Le recomendamos revisar esta sección periódicamente.
            </p>
          </section>

          <div className={styles['terms-footer-note']}>
            <p>Última actualización: Agosto de 2026</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default TermsPage;