// app/api/contact/route.ts

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
      subject: "Nuevo formulario Agencia JDev",
      html: `
        <h2>Nuevo contacto</h2>

        <p><b>Nombre:</b> ${body.nombre}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Teléfono:</b> ${body.telefono}</p>
        <p><b>Contacto:</b> ${body.contacto}</p>

        <p>
          <b>Requerimiento:</b><br/>
          ${body.requerimiento}
        </p>
      `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}