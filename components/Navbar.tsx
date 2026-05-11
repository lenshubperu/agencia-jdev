"use client";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50

        bg-black
        border-b
        border-white/5
      "
    >
      <div
        className="
          max-w-[1700px]
          mx-auto

          px-8
          py-5

          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <h1
          className="
            text-[34px]
            xl:text-[42px]

            font-black
            tracking-[-2px]

            text-white
            leading-none
          "
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          Johnatan
          <span className="text-[#00F5B0]">
            Dev
          </span>
        </h1>

        {/* CENTER MENU */}
        <nav
          className="
            hidden
            md:flex

            items-center
            gap-20

            absolute
            left-1/2
            -translate-x-1/2

            text-white
            text-[20px]
            font-bold
          "
          style={{
            fontFamily: "Georgia, serif",
          }}
        >
          <a
            href="#"
            className="
              hover:text-[#00F5B0]
              transition-all
              duration-300
            "
          >
            Inicio
          </a>

          <a
            href="#"
            className="
              hover:text-[#00F5B0]
              transition-all
              duration-300
            "
          >
            Casos de éxito
          </a>

          <a
            href="#"
            className="
              hover:text-[#00F5B0]
              transition-all
              duration-300
            "
          >
            Precios
          </a>

          <a
            href="#"
            className="
              hover:text-[#00F5B0]
              transition-all
              duration-300
            "
          >
            Contacto
          </a>
        </nav>

        {/* BUTTON */}
<button
  className="
    group
    relative

    overflow-hidden

    bg-[#00F5B0]
    text-black

    px-8
    py-3.5

    rounded-full

    text-[16px]
    font-semibold

    transition-all
    duration-300

    hover:scale-[1.03]
    hover:shadow-[0_0_30px_rgba(0,245,176,0.35)]
  "
  style={{
    fontFamily: "Inter, sans-serif",
  }}
>
  <span className="relative z-10 flex items-center gap-2">
    Cotiza ahora

    <span
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1
      "
    >
      →
    </span>
  </span>

  {/* GLOW */}
  <div
    className="
      absolute
      inset-0

      opacity-0
      group-hover:opacity-100

      transition-opacity
      duration-300

      bg-white/10
    "
  />
</button>
      </div>
    </header>
  );
}