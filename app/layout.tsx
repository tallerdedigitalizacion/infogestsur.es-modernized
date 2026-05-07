import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Asesoría y Gestoría en Móstoles | IGS - InfoGestSur",
  description:
    "Info Gest Sur Gestión, asesoría y gestoría en Móstoles especializada en transferencias DGT, herencias y trámites fiscales para particulares, autónomos y empresas.",
  icons: {
    icon: `${basePath}/favicon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
