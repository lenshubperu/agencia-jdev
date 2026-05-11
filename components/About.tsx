export default function About() {
  return (
    <section
      className="
        bg-black
        text-white

        py-24
        md:py-32

        overflow-hidden
      "
    >
      <div
        className="
          max-w-[1400px]
          mx-auto

          px-6
          md:px-10
          xl:px-14
        "
      >
        <div
          className="
            grid
            md:grid-cols-2
            gap-16
            items-start
          "
        >
          {/* LEFT */}
          <div>
            <h2
              className="
                text-[42px]
                md:text-[64px]

                leading-[0.95]
                tracking-[-2px]

                font-bold
              "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              Impulsamos tu negocio con tecnología y diseño de alto impacto
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className="
              text-white/75

              text-[17px]
              leading-[2]
            "
          >
            <p>
              Transformamos ideas en experiencias digitales que generan resultados reales.
            </p>

            <p className="mt-7">
              Contamos con más de 6 años de experiencia en desarrollo
              de páginas web, e-commerce y sistemas web a medida,
              especializada en crear soluciones tecnológicas que impulsan
              el crecimiento de tu negocio.
            </p>

            <p className="mt-7">
              Combinamos diseño enfocado en el usuario, tecnología moderna
              y una visión estratégica para ofrecer sitios web rápidos,
              escalables y listos para convertir visitas en clientes.
            </p>

            <p className="mt-7">
              Desde marcas emergentes hasta empresas consolidadas,
              ayudamos a construir presencia digital sólida,
              optimizar procesos y llevar tu empresa al siguiente nivel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}