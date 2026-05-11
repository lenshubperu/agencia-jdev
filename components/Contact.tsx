"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [contactType, setContactType] = useState("whatsapp");

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
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "Gracias por contactarnos. Nuestro equipo se comunicará contigo pronto."
        );

        form.reset();

        window.location.href = "/";
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
    <section className="contact-section">
      <div className="contact-container">

        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
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
            <span>Volver al inicio</span>
          </Link>
        </div>

        {/* HEADER */}
        <div className="contact-header">
          <h2>Hablemos de tu proyecto</h2>

          <p>
            Cuéntanos tu idea y construyamos una experiencia
            digital moderna, estratégica y enfocada en resultados.
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

              <label>Nombre</label>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                required
                placeholder=" "
              />

              <label>Email</label>
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

            <label>Teléfono</label>
          </div>

          {/* MESSAGE */}
          <div className="input-group full textarea-group">
            <textarea
              name="requerimiento"
              required
              placeholder=" "
            />

            <label>Requerimiento</label>
          </div>

          {/* CONTACT TYPE */}
          <div className="contact-methods">
            <h4>
              ¿Cómo te gustaría que nos contactáramos?
            </h4>

            <div className="methods-grid">

              <label className="method-item">
                <input
                  type="radio"
                  name="contacto"
                  checked={contactType === "llamada"}
                  onChange={() =>
                    setContactType("llamada")
                  }
                />

                <span className="custom-radio"></span>

                <span>Llamada</span>
              </label>

              <label className="method-item">
                <input
                  type="radio"
                  name="contacto"
                  checked={contactType === "correo"}
                  onChange={() =>
                    setContactType("correo")
                  }
                />

                <span className="custom-radio"></span>

                <span>Correo</span>
              </label>

              <label className="method-item">
                <input
                  type="radio"
                  name="contacto"
                  checked={contactType === "whatsapp"}
                  onChange={() =>
                    setContactType("whatsapp")
                  }
                />

                <span className="custom-radio"></span>

                <span>Whatsapp</span>
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
  );
}