import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-cafe.jpg';
import styles from './contact.module.css';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const businessPhone = "573107760300";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prepara un mensaje directo de WhatsApp con los datos del formulario
    const text = encodeURIComponent(
      `¡Hola! Nuevo mensaje desde la web de Café Imperio:\n\nNombre: ${formData.name}\nCorreo: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${businessPhone}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className={styles['contact-page-container']}>
      
      {/* BANNER SUPERIOR INMERSIVO */}
      <div 
        className={styles['contact-hero-banner']}
        style={{ backgroundImage: `linear-gradient(135deg, rgba(15,10,6,0.75) 0%, rgba(15,10,6,0.9) 100%), url(${bannerImg})` }}
      >
        <Link to="/Home" className={styles['back-link']}>
          <span>←</span> Volver al inicio
        </Link>

        <div className={styles['banner-glass-card']}>
          <span className={styles['header-tag']}>✦ ESTAMOS PARA ESCUCHARTE ✦</span>
          <h1 className={styles['header-title']}>Contáctanos</h1>
          <p className={styles['header-subtitle']}>
            ¿Tienes dudas sobre nuestros productos, pedidos al por mayor o deseas asesoría con tu café? Escríbenos y con gusto te atenderemos.
          </p>
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className={styles['contact-content-wrapper']}>
        
        <div className={styles['contact-grid']}>
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO */}
          <div className={styles['contact-info-box']}>
            <span className={styles['section-tag']}>CANALES OFICIALES</span>
            <h2>Hablemos de Café</h2>
            <p>
              Nos encanta conectar con nuestros clientes y amantes del buen café colombiano. Comunícate con nosotros a través de nuestros canales directos.
            </p>

            <div className={styles['info-cards-list']}>
              <div className={styles['info-card-item']}>
                <div className={styles['icon-box']}>📍</div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Bogotá D.C., Colombia</p>
                </div>
              </div>

              <div className={styles['info-card-item']}>
                <div className={styles['icon-box']}>📞</div>
                <div>
                  <h4>WhatsApp Directo</h4>
                  <p>+57 310 776 0300</p>
                </div>
              </div>

              <div className={styles['info-card-item']}>
                <div className={styles['icon-box']}>✉️</div>
                <div>
                  <h4>Correo Electrónico</h4>
                  <p>cafe.imperio@hotmail.com</p>
                </div>
              </div>

              <div className={styles['info-card-item']}>
                <div className={styles['icon-box']}>⏰</div>
                <div>
                  <h4>Horario de Atención</h4>
                  <p>Lunes a Viernes: 8:00 a.m. - 4:30 p.m.</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: FORMULARIO DE CONTACTO */}
          <div className={styles['contact-form-box']}>
            <h2>Envíanos un Mensaje</h2>
            <p className={styles['form-subtitle']}>Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>

            {submitted ? (
              <div className={styles['success-message']}>
                <h3>¡Mensaje enviado con éxito! 🎉</h3>
                <p>Te hemos redirigido a nuestro WhatsApp para continuar la conversación de forma inmediata.</p>
                <button onClick={() => setSubmitted(false)} className={styles['reset-btn']}>Enviar otro mensaje</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles['form']}>
                <div className={styles['input-group']}>
                  <label htmlFor="name">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Ej. Camila Rodríguez" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles['input-row']}>
                  <div className={styles['input-group']}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="correo@ejemplo.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles['input-group']}>
                    <label htmlFor="phone">Teléfono / Celular</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="+57 300 000 0000" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles['input-group']}>
                  <label htmlFor="message">¿En qué podemos ayudarte?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    placeholder="Escribe tu consulta o requerimiento aquí..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className={styles['submit-btn']}>
                  Enviar por WhatsApp ➔
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};

export default ContactPage;