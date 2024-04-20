import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Primos Menores",
  description: "Buscador de Números Primos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`
        ${inter.className}
        secondary-color w-screen min-h-screen
      `}>
        {children}
      </body>
    </html>
  );
}