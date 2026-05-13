"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* IMPORTS */
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import BrandingPricing from "@/components/BrandingPricing";
import Clients from "@/components/Clients";

const words = [
  "Página web",
  "idea",
  "app",
  "startup",
  "negocio",
  "proceso",
];

/* WHATSAPP */
const whatsappLink =
  "https://wa.me/51929391656?text=Hola,%20necesito%20información%20sobre%20uno%20de%20sus%20planes";

/* PROPS */
interface HeroProps {
  workana?: boolean;
}

export default function Hero({
  workana = false,
}: HeroProps) {

  console.log("HERO WORKANA:", workana);

  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className="
          fixed
          top-0
          left-0
          w-full
          z-50

          bg-black/95
          backdrop-blur-md

          border-b
          border-white/5
        "
      >
        <div
          className="
            max-w-[1700px]
            mx-auto

            px-5
            xl:px-10

            h-[82px]

            flex
            items-center
            justify-between
          "
        >
          {/* LOGO */}
          <a
            href="#"
            className="
              absolute
              left-1/2
              -translate-x-1/2

              md:relative
              md:left-auto
              md:translate-x-0

              flex
              items-center
              justify-center

              w-[150px]
              md:w-[210px]
              xl:w-[240px]

              h-[40px]
              md:h-[50px]

              relative
            "
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </a>

          {/* CENTER MENU */}
          <nav
            className="
              hidden
              md:flex

              absolute
              left-1/2
              -translate-x-1/2

              items-center
              gap-16

              text-white
              text-[18px]
              font-bold
            "
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            {/* INICIO */}
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

            {/* PROJECTS */}
            <a
              href="#projects"
              className="
                hover:text-[#00F5B0]
                transition-all
                duration-300
              "
            >
              Casos de éxito
            </a>

            {/* PRICING */}
            <a
              href="#pricing"
              className="
                hover:text-[#00F5B0]
                transition-all
                duration-300
              "
            >
              Precios
            </a>

            {/* CONTACTO */}
            {!workana && (
              <Link
                href="/contacto"
                className="
                  hover:text-[#00F5B0]
                  transition-all
                  duration-300
                "
              >
                Contacto
              </Link>
            )}
          </nav>

          {/* BUTTON DESKTOP */}
          {!workana && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                neo-button
                hidden
                md:flex

                items-center
                justify-center
              "
            >
              Cotiza ahora
            </a>
          )}
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-black text-white overflow-x-hidden">

        {/* ================= MOBILE ================= */}
        <div
          className="
            md:hidden

            min-h-screen

            flex
            flex-col
            items-center
            justify-center

            px-6
            pb-0

            text-center

            pt-[90px]
          "
        >
          {/* VIDEO */}
          <div className="flex justify-center -mb-3">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                w-full
                max-w-[300px]

                object-contain
                mix-blend-lighten
              "
            >
              <source
                src="/videos/hero.mp4"
                type="video/mp4"
              />
            </motion.video>
          </div>

          {/* CONTENT */}
          <div className="w-full max-w-[340px]">

            {/* TITLE */}
            <div
              className="
                leading-[0.9]
                tracking-[-2px]
                font-bold
              "
              style={{
                fontFamily: "Georgia, serif",
              }}
            >
              <h1 className="text-[52px]">
                Dale a tu
              </h1>

              {/* WORD */}
              <div className="relative h-[60px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentWord}
                    initial={{
                      y: 40,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -40,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      absolute
                      left-0
                      right-0

                      text-[#00F5B0]
                      text-[52px]
                    "
                  >
                    {words[currentWord]}
                  </motion.h1>
                </AnimatePresence>
              </div>

              <h1 className="text-[52px]">
                alegría y
              </h1>

              <h1 className="text-[52px]">
                impacto...
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5

                text-white/75
                text-[15px]
                leading-[1.9]
              "
            >
              Combinamos diseño, estrategia y tecnología moderna
              para construir soluciones digitales premium.
            </p>

            {/* BUTTON MOBILE */}
            {!workana && (
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contacto"
                  className="
                    neo-button

                    text-[15px]
                    px-7
                    py-3

                    flex
                    items-center
                    justify-center
                  "
                >
                  Cotiza ahora
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div
          className="
            hidden
            md:flex

            min-h-screen

            items-center

            pt-[120px]
            pb-[20px]

            overflow-hidden
          "
        >
          <div
            className="
              max-w-[1700px]
              mx-auto

              px-8
              xl:px-14

              w-full

              grid
              grid-cols-2

              gap-4
              items-center
            "
          >
            {/* LEFT */}
            <div className="flex flex-col justify-start">

              <div
                className="
                  leading-[0.9]
                  tracking-[-4px]
                  font-bold
                "
                style={{
                  fontFamily: "Georgia, serif",
                }}
              >
                <h2
                  className="
                    text-[68px]
                    xl:text-[88px]
                  "
                >
                  Dale a tu
                </h2>

                {/* WORD */}
                <div
                  className="
                    relative
                    h-[85px]
                    xl:h-[105px]

                    overflow-hidden
                  "
                >
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={currentWord}
                      initial={{
                        y: 100,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -100,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="
                        absolute

                        text-[#00F5B0]
                        text-[68px]
                        xl:text-[88px]
                      "
                    >
                      {words[currentWord]}
                    </motion.h2>
                  </AnimatePresence>
                </div>

                <h2
                  className="
                    text-[68px]
                    xl:text-[88px]
                  "
                >
                  alegría y
                </h2>

                <h2
                  className="
                    text-[68px]
                    xl:text-[88px]
                  "
                >
                  impacto...
                </h2>
              </div>

              {/* DESCRIPTION */}
              <div className="mt-12 pl-1">
                <p
                  className="
                    text-white/75
                    text-[18px]
                    leading-[2]

                    max-w-[680px]
                  "
                >
                  Combinamos diseño, estrategia y tecnología moderna
                  para construir soluciones digitales que elevan tus ventas.
                </p>

                {/* BUTTON DESKTOP */}
                {!workana && (
                  <div className="flex mt-10">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        neo-button
                        flex
                        items-center
                        justify-center
                      "
                    >
                      Cotiza ahora
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="relative flex justify-center">

              {/* GLOW */}
              <div
                className="
                  absolute

                  w-[500px]
                  h-[500px]

                  bg-[#00F5B0]/10

                  blur-[140px]
                  rounded-full
                "
              />

              {/* VIDEO */}
              <motion.video
                autoPlay
                muted
                loop
                playsInline
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="
                  relative

                  w-full
                  max-w-[760px]
                  xl:max-w-[880px]

                  object-contain
                  mix-blend-lighten
                "
              >
                <source
                  src="/videos/hero.mp4"
                  type="video/mp4"
                />
              </motion.video>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <Services />

      {/* ================= ABOUT ================= */}
      <About />

      {/* ================= PROJECTS ================= */}
      <div id="projects">
        <Projects />
      </div>

      {/* ================= PRICING ================= */}
      <div id="pricing">
        <Pricing workana={workana} />
      </div>

      {/* ================= BRANDING PRICING ================= */}
      <BrandingPricing workana={workana} />

      {/* ================= CLIENTS ================= */}
      <Clients />
    </>
  );
}