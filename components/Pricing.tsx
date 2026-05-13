"use client";

/* PROPS */
interface PricingProps {
  workana?: boolean;
}

export default function Pricing({
  workana = false,
}: PricingProps) {

  console.log("WORKANA:", workana);

  return (
    <section className="pricing-section">
      <div className="pricing-container">

        {/* TITLE */}
        <div className="pricing-header">
          <h2>Planes Web Profesionales</h2>
        </div>

        {/* CARDS */}
        <div className="pricing-grid">

          {/* CARD 1 */}
          <div className="pricing-card">

            <div className="pricing-top">
              <span className="pricing-number">
                01
              </span>

              <div className="pricing-line"></div>

              <h3>Onepage</h3>
            </div>

            <p className="pricing-description">
              Una web de una sola página,
              ideal para presentar tu negocio
              de forma clara y rápida.
            </p>

            <ul>
              <li>Diseño 100% personalizado</li>
              <li>1 página completa</li>
              <li>Sección de contacto</li>
              <li>Optimización básica SEO</li>
            </ul>

            {!workana && (
              <a
                href="https://wa.me/51929391656"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-button"
              >
                Solicitar
              </a>
            )}
          </div>

          {/* CARD 2 */}
          <div className="pricing-card">

            <div className="pricing-top">
              <span className="pricing-number">
                02
              </span>

              <div className="pricing-line"></div>

              <h3>Página Web</h3>
            </div>

            <p className="pricing-description">
              Sitio web completo con múltiples páginas
              para presentar tu marca profesionalmente.
            </p>

            <ul>
              <li>Diseño personalizado</li>
              <li>Hasta 5 páginas</li>
              <li>Formulario de contacto</li>
              <li>SEO básico</li>
              <li>Panel autoadministrable</li>
            </ul>

            {!workana && (
              <a
                href="https://wa.me/51929391656"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-button"
              >
                Solicitar
              </a>
            )}
          </div>

          {/* CARD 3 */}
          <div className="pricing-card">

            <div className="pricing-top">
              <span className="pricing-number">
                03
              </span>

              <div className="pricing-line"></div>

              <h3>Ecommerce</h3>
            </div>

            <p className="pricing-description">
              Tienda online lista para vender
              con carrito de compras y gestión
              de productos.
            </p>

            <ul>
              <li>Diseño personalizado</li>
              <li>Carrito de compras</li>
              <li>Pasarela de pago</li>
              <li>Gestión de productos</li>
              <li>Panel autoadministrable</li>
            </ul>

            {!workana && (
              <a
                href="https://wa.me/51929391656"
                target="_blank"
                rel="noopener noreferrer"
                className="pricing-button"
              >
                Solicitar
              </a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}