"use client";

/* PROPS */
interface BrandingPricingProps {
  workana?: boolean;
}

export default function BrandingPricing({
  workana = false,
}: BrandingPricingProps) {
  return (
    <section className="pricing-section">
      <div className="pricing-container">

        {/* HEADER */}
        <div className="pricing-header">
          <h2>
            Packs de Branding y Web
          </h2>
        </div>

        {/* GRID */}
        <div className="pricing-grid">

          {/* CARD 1 */}
          <div className="pricing-card">

            <div className="pricing-top">
              <span className="pricing-number">
                04
              </span>

              <div className="pricing-line"></div>

              <h3>Pack StartUp</h3>
            </div>

            <p className="pricing-description">
              Ideal para emprendedores que inician
              un negocio.
            </p>

            <ul>
              <li>2 propuestas de logo</li>
              <li>4 piezas gráficas</li>
              <li>Manual de marca básico</li>
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
                05
              </span>

              <div className="pricing-line"></div>

              <h3>Pack Profesional</h3>
            </div>

            <p className="pricing-description">
              Hecho para empresas que quieren destacar
              con diseño profesional y un sitio web ganador.
            </p>

            <ul>
              <li>Investigación básica</li>
              <li>2 propuestas de logo</li>
              <li>5 piezas gráficas</li>
              <li>Diseño de banners para redes sociales</li>
              <li>Manual de marca</li>
              <li>Diseño de página web</li>
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
                06
              </span>

              <div className="pricing-line"></div>

              <h3>Pack Business</h3>
            </div>

            <p className="pricing-description">
              Para empresas que piensan en grande con
              un enfoque más publicitario.
            </p>

            <ul>
              <li>Investigación</li>
              <li>Estrategia de marca</li>
              <li>Slogan comercial</li>
              <li>2 propuestas de logo</li>
              <li>8 piezas gráficas</li>
              <li>Manual de marca</li>
              <li>Diseño de página web</li>
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