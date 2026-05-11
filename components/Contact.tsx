"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

export default function Contact() {
  const [contactType, setContactType] =
    useState("whatsapp");

  const [success, setSuccess] =
    useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const data = {
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      telefono: formData.get("telefono"),
      requerimiento: formData.get("requerimiento"),
      metodo: contactType,
    };

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        setSuccess(true);

        form.reset();

        setTimeout(() => {
          window.location.href = "/";
        }, 3000);

      } else {
        alert(
          "Ocurrió un error enviando el formulario."
        );
      }

    } catch (error) {
      console.log(error);

      alert(
        "Ocurrió un error enviando el formulario."
      );
    }
  };

  return (
    <>
      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {success && (
          <motion.div
            className="success-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              className="success-box"
              initial={{
                scale: 0.8,
                opacity: 0,
                y: 40,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              {/* GIF */}
              <div className="success-icon">
                <img
                  src="/success.gif"
                  alt="success"
                />
              </div>

              <h3>
                Mensaje enviado
              </h3>

              <p>
                Gracias por contactarnos.
                Nuestro equipo se comunicará
                contigo muy pronto.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="contact-section">
        <div className="contact-container">

          {/* TOP BAR */}
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "40px",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* BACK BUTTON */}
            <Link
              href="/"
              className="back-home-button"
            >
              <span>←</span>
              <span>
                Volver al inicio
              </span>
            </Link>
          </div>

          {/* HEADER */}
          <div className="contact-header">
            <h2>
              Hablemos de tu proyecto
            </h2>

            <p>
              Cuéntanos tu idea y
              construyamos una experiencia
              digital moderna,
              estratégica y enfocada
              en resultados.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >

            {/* TOP */}
            <div className="contact-grid">

              <div className="input-group">
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder=" "
                />

                <label>
                  Nombre
                </label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder=" "
                />

                <label>
                  Email
                </label>
              </div>

            </div>

            {/* PHONE */}
            <div className="input-group full">
              <input
                type="text"
                name="telefono"
                required
                placeholder=" "
              />

              <label>
                Teléfono
              </label>
            </div>

            {/* MESSAGE */}
            <div className="input-group full textarea-group">
              <textarea
                name="requerimiento"
                required
                placeholder=" "
              />

              <label>
                Requerimiento
              </label>
            </div>

            {/* CONTACT TYPE */}
            <div className="contact-methods">

              <h4>
                ¿Cómo te gustaría que nos contactáramos?
              </h4>

              <div className="methods-grid">

                {/* LLAMADA */}
                <label className="method-item">
                  <input
                    type="radio"
                    name="contacto"
                    checked={
                      contactType ===
                      "llamada"
                    }
                    onChange={() =>
                      setContactType(
                        "llamada"
                      )
                    }
                  />

                  <span className="custom-radio"></span>

                  <span>
                    Llamada
                  </span>
                </label>

                {/* CORREO */}
                <label className="method-item">
                  <input
                    type="radio"
                    name="contacto"
                    checked={
                      contactType ===
                      "correo"
                    }
                    onChange={() =>
                      setContactType(
                        "correo"
                      )
                    }
                  />

                  <span className="custom-radio"></span>

                  <span>
                    Correo
                  </span>
                </label>

                {/* WHATSAPP */}
                <label className="method-item">
                  <input
                    type="radio"
                    name="contacto"
                    checked={
                      contactType ===
                      "whatsapp"
                    }
                    onChange={() =>
                      setContactType(
                        "whatsapp"
                      )
                    }
                  />

                  <span className="custom-radio"></span>

                  <span>
                    Whatsapp
                  </span>
                </label>

              </div>
            </div>

            {/* BUTTON */}
            <div className="contact-button-wrapper">
              <button
                type="submit"
                className="contact-button"
              >
                Enviar Mensaje
              </button>
            </div>

          </form>
        </div>
      </section>
    </>
  );
}