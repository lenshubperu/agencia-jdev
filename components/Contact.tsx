"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  PhoneInput,
} from "react-international-phone";

export default function Contact() {

  const [contactType, setContactType] =
    useState("whatsapp");

  const [success, setSuccess] =
    useState(false);

  /* ================= FORM ================= */

  const [formData, setFormData] =
    useState({
      nombre: "",
      email: "",
      prefijo: "+51",
      telefono: "",
      requerimiento: "",
    });

  /* ================= PHONE ================= */

  const [phone, setPhone] =
    useState("");

  /* ================= ERRORS ================= */

  const [errors, setErrors] =
    useState<any>({});

  /* ================= VALIDATION ================= */

  const validate = () => {

    const newErrors: any = {};

    if (
      formData.nombre.trim().length < 3
    ) {
      newErrors.nombre =
        "Ingresa un nombre válido";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailRegex.test(formData.email)
    ) {
      newErrors.email =
        "Ingresa un correo válido";
    }

    const phoneLength =
      phone.replace(/\D/g, "")
        .length;

    if (
      phoneLength < 6
    ) {
      newErrors.telefono =
        "Ingresa un teléfono válido";
    }

    if (
      formData.requerimiento.trim()
        .length < 10
    ) {
      newErrors.requerimiento =
        "Cuéntanos un poco más sobre tu proyecto";
    }

    setErrors(newErrors);

    return Object.keys(newErrors)
      .length === 0;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    const data = {
      nombre: formData.nombre,
      email: formData.email,
      telefono: phone,
      requerimiento:
        formData.requerimiento,
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

        setFormData({
          nombre: "",
          email: "",
          prefijo: "+51",
          telefono: "",
          requerimiento: "",
        });

        setPhone("");

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

      {/* SECTION */}

      <section className="contact-section">
        <div className="contact-container">

          {/* TOP */}

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

            {/* TOP GRID */}

            <div className="contact-grid">

              {/* NOMBRE */}

              <div className="input-group">

                <input
                  type="text"
                  placeholder=" "
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      nombre:
                        e.target.value,
                    })
                  }
                  className={
                    errors.nombre
                      ? "input-error"
                      : ""
                  }
                />

                <label>
                  Nombre
                </label>

                {errors.nombre && (
                  <span className="error-text">
                    {errors.nombre}
                  </span>
                )}

              </div>

              {/* EMAIL */}

              <div className="input-group">

                <input
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email:
                        e.target.value,
                    })
                  }
                  className={
                    errors.email
                      ? "input-error"
                      : ""
                  }
                />

                <label>
                  Email
                </label>

                {errors.email && (
                  <span className="error-text">
                    {errors.email}
                  </span>
                )}

              </div>

            </div>

            {/* PHONE */}

            <div className="phone-modern">

              <PhoneInput
                defaultCountry="pe"
                value={phone}
                onChange={(phone) => {

                  /* SOLO NÚMEROS */

                  const cleaned =
                    phone.replace(
                      /[^\d+]/g,
                      ""
                    );

                  setPhone(cleaned);

                  if (errors.telefono) {
                    setErrors({
                      ...errors,
                      telefono: "",
                    });
                  }
                }}
                inputClassName={
                  errors.telefono
                    ? "phone-error"
                    : ""
                }
              />

              {errors.telefono && (
                <span className="error-text">
                  {errors.telefono}
                </span>
              )}

            </div>

            {/* MESSAGE */}

            <div className="input-group full textarea-group">

              <textarea
                placeholder=" "
                value={
                  formData.requerimiento
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    requerimiento:
                      e.target.value,
                  })
                }
                className={
                  errors.requerimiento
                    ? "input-error"
                    : ""
                }
              />

              <label>
                Requerimiento
              </label>

              {errors.requerimiento && (
                <span className="error-text">
                  {
                    errors.requerimiento
                  }
                </span>
              )}

            </div>

            {/* METHODS */}

            <div className="contact-methods">

              <h4>
                ¿Cómo te gustaría que
                nos contactáramos?
              </h4>

              <div className="methods-grid">

                <label className="method-item">

                  <input
                    type="radio"
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

                <label className="method-item">

                  <input
                    type="radio"
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

                <label className="method-item">

                  <input
                    type="radio"
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