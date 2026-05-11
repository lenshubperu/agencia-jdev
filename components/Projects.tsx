"use client";

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-grid">

        {/* LEFT COLUMN */}
        <div className="project-column">

          {/* RUNA */}
          <a
            href="https://runastore.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card project-large"
          >
            <img
              src="/projects/runa.jpg"
              alt="Runa Store"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>RUNA STORE</h3>

              <p>
                Re-diseño de marca, concepto publicitario,
                slogan comercial
              </p>
            </div>
          </a>

          {/* ATHLETIC */}
          <a
            href="#"
            className="project-card"
          >
            <img
              src="/projects/athletic.jpg"
              alt="Athletic Depor"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>ATHLETIC DEPOR</h3>

              <p>
                Re-diseño de marca, concepto publicitario,
                slogan comercial
              </p>
            </div>
          </a>

          {/* CAMBISTA */}
          <a
            href="https://tucambista.pe/"
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/projects/cambista.png"
              alt="Cambio Seguro"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>TU CAMBISTA</h3>

              <p>
                Diseño UI/UX, App Financiera,
                Diseño de marca
              </p>
            </div>
          </a>

          {/* SUMAQ */}
          <a
            href="#"
            className="project-card"
          >
            <img
              src="/projects/sumaq.jpg"
              alt="Sumaq 51"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>SUMAQ 51</h3>

              <p>
                Diseño de marca,
                Concepto publicitario
              </p>
            </div>
          </a>

        </div>

        {/* RIGHT COLUMN */}
        <div className="project-column">

          {/* STB */}
          <a
            href="https://stbgroup.com.sv/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="/projects/stb.jpg"
              alt="STB App"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>STB</h3>

              <p>
                UX Design, App Móvil
              </p>
            </div>
          </a>

          {/* ZINTEC */}
          <a
            href="https://zintec.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img
              src="/projects/zintec.jpg"
              alt="Zintec"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>ZINTEC STORE</h3>

              <p>
                Re-Diseño web, UX Research
              </p>
            </div>
          </a>

          {/* ELAS */}
          <a
            href="#"
            className="project-card"
          >
            <img
              src="/projects/elas.jpg"
              alt="ELAS"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>ELAS</h3>

              <p>
                Identidad corporativa,
                Estrategia Comercial, Diseño Web
              </p>
            </div>
          </a>

          {/* PUCP */}
          <a
            href="#"
            className="project-card"
          >
            <img
              src="/projects/pucp.jpg"
              alt="PUCP"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>PUCP</h3>

              <p>
                Diseño Social Media
              </p>
            </div>
          </a>

          {/* GRAFT */}
          <a
            href="#"
            className="project-card"
          >
            <img
              src="/projects/graft.jpg"
              alt="Real Graft Beer"
            />

            <div className="project-overlay"></div>

            <div className="project-content">
              <h3>REAL GRAFT BEER</h3>

              <p>
                Naming, identidad corporativa,
                diseño de etiqueta
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}