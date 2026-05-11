"use client";

const clients = [
  "/clients/smartfit.png",
  "/clients/swiss.png",
  "/clients/libra.png",
  "/clients/signature.png",
  "/clients/seedspace.png",

  "/clients/cientifica.png",
  "/clients/ministerio.png",
  "/clients/brisa.png",
  "/clients/montt.png",
  "/clients/lena.png",

  "/clients/pucp.png",
  "/clients/adenauer.png",
  "/clients/museo.png",
  "/clients/yana.png",
  "/clients/quokka.png",
];

export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-container">

        {/* HEADER */}
        <div className="clients-header">
          <h2>
            Nuestros Clientes
          </h2>

          <p>
            Hemos trabajado con más de 250 clientes en 6 países,
            lo que nos ha dado una perspectiva amplia sobre
            diferentes negocios y, lo más importante,
            sobre las necesidades de los usuarios.
          </p>
        </div>

        {/* GRID */}
        <div className="clients-grid">
          {clients.map((logo, index) => (
  <div
    key={index}
    className={`client-item ${
      logo.includes("quokka")
        ? "client-quokka"
        : ""
    }`}
  >
              <img
                src={logo}
                alt="Cliente"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}