"use client";
import React, { useState } from 'react';
import { 
  Wrench, 
  Shield, 
  Cloud, 
  Camera, 
  Smartphone, 
  Menu, 
  X, 
  ChevronRight, 
  Cpu 
} from 'lucide-react';

// Nota: En Next.js usarías 'next/link'. 
// Aquí uso <a> y un estado simple para simular la navegación en este entorno de vista previa.

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) => {
  const links = [
    { name: 'Iniciar Sesión', href: '#login', primary: false },
    { name: 'Registrarse', href: '#register', primary: true },
  ];

  return (
    <nav className="flex items-center gap-4">
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 ${
              link.primary
                ? 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg shadow-indigo-900/20'
                : 'border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <div className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
      <Icon className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);

interface MiniFeatureProps {
  icon: React.ElementType;
  title: string;
  text: string;
}

const MiniFeature = ({ icon: Icon, title, text }: MiniFeatureProps) => (
  <div className="flex items-start gap-3">
    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm mt-1">
      <Icon size={20} className="text-white" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
      <p className="text-indigo-100 text-sm leading-relaxed opacity-90">{text}</p>
    </div>
  </div>
);

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-500 selection:text-white flex flex-col">
      
      {/* Hero Wrapper with Gradient Background */}
      <div className="relative bg-indigo-900 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 opacity-90"></div>
        </div>

        {/* Header */}
        <header className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <Cpu className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">TechLens</span>
            </div>
            <Navigation mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-indigo-900/95 backdrop-blur-md border-t border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-2xl animate-in slide-in-from-top-5">
              <a href="#login" className="text-white py-2 px-4 hover:bg-white/10 rounded-lg">Iniciar Sesión</a>
              <a href="#register" className="bg-white text-indigo-900 py-3 px-4 rounded-lg font-bold text-center">Registrarse</a>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <main className="relative z-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/30 text-indigo-100 text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-200"></span>
                  </span>
                  Nuevo: Módulo de Facturación v2.0
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                  Gestiona tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200">Taller Técnico</span> al siguiente nivel
                </h1>
                <p className="text-lg sm:text-xl text-indigo-100 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  El sistema SaaS definitivo para talleres de reparación. Control total sobre tickets, clientes y evidencia fotográfica en una sola plataforma.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#register"
                    className="group px-8 py-4 bg-white text-indigo-700 rounded-xl hover:bg-indigo-50 transition-all duration-300 font-bold text-lg shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-2"
                  >
                    Comenzar Gratis
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#demo"
                    className="px-8 py-4 bg-indigo-600/50 text-white border border-indigo-400/30 rounded-xl hover:bg-indigo-600/70 transition-all duration-300 font-bold text-lg backdrop-blur-sm flex items-center justify-center"
                  >
                    Ver Demo
                  </a>
                </div>
              </div>

              {/* Feature Glass Box */}
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                       <div className="w-3 h-3 rounded-full bg-red-400"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                       <div className="w-3 h-3 rounded-full bg-green-400"></div>
                       <span className="ml-auto text-xs font-mono text-indigo-200">System.Active</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-white">✨ Panel de Control</h3>
                    
                    <div className="space-y-6">
                      <MiniFeature 
                        icon={Smartphone} 
                        title="100% Responsive" 
                        text="Tu taller en el bolsillo. Funciona perfecto en móvil y tablet."
                      />
                      <MiniFeature 
                        icon={Camera} 
                        title="Evidencia Visual" 
                        text="Sube fotos del 'antes y después' directamente desde el dispositivo."
                      />
                      <MiniFeature 
                        icon={Shield} 
                        title="Seguridad Bancaria" 
                        text="Datos encriptados y backups diarios automáticos."
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decoration behind card */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-white/10 rounded-3xl hidden lg:block"></div>
              </div>

            </div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 w-full leading-none z-10">
            <svg className="block w-full h-12 sm:h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </main>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">
              ¿Por qué elegirnos?
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Todo lo que necesitas para escalar
            </h3>
            <p className="text-gray-600 text-lg">
              Deja de usar papel y Excel. TechLens profesionaliza cada aspecto de tu operación diaria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Wrench}
              title="Rápido y Eficiente"
              description="Registra recepciones en segundos con nuestro wizard de 3 pasos. Optimizado para velocidad en mostrador."
            />
            <FeatureCard 
              icon={Cpu}
              title="Gestión Completa"
              description="Administra tickets, base de datos de clientes, control de inventario y estados de reparación centralizados."
            />
            <FeatureCard 
              icon={Cloud}
              title="Siempre Disponible"
              description="Accede a tu información desde cualquier lugar. Si tu computadora falla, tus datos siguen seguros en la nube."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TechLens</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 TechLens SaaS. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-gray-400">
             <a href="#" className="hover:text-indigo-600 transition-colors">Términos</a>
             <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
             <a href="#" className="hover:text-indigo-600 transition-colors">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}