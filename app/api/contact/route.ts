import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      nombre,
      email,
      telefono,
      requerimiento,
      metodo,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: "hola@agencia-jdev.com",

      subject: "Nuevo contacto desde Agencia JDev",

      html: `
        <h2>Nuevo Lead</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Método:</strong> ${metodo}</p>

        <br />

        <p><strong>Requerimiento:</strong></p>

        <p>${requerimiento}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}