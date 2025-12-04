import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechLens - Sistema de Gestión para Talleres Técnicos',
  description: 'Plataforma SaaS para la gestión de talleres de reparación',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
