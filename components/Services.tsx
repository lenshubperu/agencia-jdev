"use client";

const services = [
  {
    icon: "/icons/branding.svg",
    title: "Branding",
    description:
      "Identidad de marca, naming, Imagotipos, papelería corporativa, manuales de marca...",
  },
  {
    icon: "/icons/code.svg",
    title: "Productos Digitales",
    description:
      "Páginas web, Plataformas Web/App, Landing Pages, App Móviles, Ecommerce...",
  },
  {
    icon: "/icons/ia.svg",
    title: "Soluciones de IA",
    description:
      "Optimización de procesos, Automatizaciones, consultoría...",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
          >
            {/* ICON */}
            <div className="service-icon-wrapper">
              <img
                src={service.icon}
                alt={service.title}
                className="service-icon"
              />
            </div>

            {/* TITLE */}
            <h3>{service.title}</h3>

            {/* DESCRIPTION */}
            <p>{service.description}</p>

            {/* LINE */}
            <div className="service-line" />
          </div>
        ))}
      </div>
    </section>
  );
}