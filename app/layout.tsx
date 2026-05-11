import type { Metadata } from "next";
import "./globals.css";

/* COMPONENTS */
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agencia JDev | Full Stack Developer",
  description:
    "Agencia JDev. Desarrollo web moderno, experiencias digitales y diseño cinematográfico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-black text-white antialiased overflow-x-hidden">

        {children}

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}