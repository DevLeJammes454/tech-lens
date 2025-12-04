import React, { useState } from 'react';
import { ChevronLeft, Lock, Mail, User, Building } from 'lucide-react';

// Reemplazo simple para Link
const Link = ({ href, children, className, ...props }: any) => (
  <a href={href} className={className} {...props}>
    {children}
  </a>
);

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        organizationName: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    
    const [errors, setErrors] = useState<{
        organizationName?: string;
        userName?: string;
        email?: string;
        password?: string;
        confirmPassword?: string;
    }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Limpiar error al escribir
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validación
        const newErrors: typeof errors = {};
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        
        if (!formData.organizationName.trim()) newErrors.organizationName = 'El nombre del taller es requerido';
        if (!formData.userName.trim()) newErrors.userName = 'El nombre es requerido';
        
        if (!formData.email) {
            newErrors.email = 'El email es requerido';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mínimo 6 caracteres';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirma tu contraseña';
        } else if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Registration attempt:', formData);
        alert('Registro exitoso! (Demo)\nDatos: ' + JSON.stringify(formData, null, 2));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-2xl w-full">
                <div className="bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in zoom-in duration-300">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-indigo-700 tracking-tight">TechLens</h1>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Crear Cuenta</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Registra tu taller y comienza a gestionar tus reparaciones
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={onSubmit} className="space-y-6">
                        
                        {/* Section: Organization */}
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                                Información del Taller
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del Taller</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Building className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        name="organizationName"
                                        type="text"
                                        value={formData.organizationName}
                                        onChange={handleChange}
                                        className={`block w-full pl-10 pr-3 py-2.5 border ${errors.organizationName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                                        placeholder="Ej: Reparaciones TechPro"
                                    />
                                </div>
                                {errors.organizationName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.organizationName}</p>}
                            </div>
                        </div>

                        {/* Section: User */}
                        <div>
                            <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">
                                Información del Usuario
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            name="userName"
                                            type="text"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-2.5 border ${errors.userName ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                                            placeholder="Juan Pérez"
                                        />
                                    </div>
                                    {errors.userName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.userName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block w-full pl-10 pr-3 py-2.5 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                                            placeholder="correo@ejemplo.com"
                                        />
                                    </div>
                                    {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                name="password"
                                                type="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-2.5 border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                                                placeholder="••••••••"
                                            />
                                        </div>
                                        {errors.password && <p className="mt-1 text-xs text-red-600 font-medium">{errors.password}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400" />
                                            </div>
                                            <input
                                                name="confirmPassword"
                                                type="password"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                className={`block w-full pl-10 pr-3 py-2.5 border ${errors.confirmPassword ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg shadow-sm focus:outline-none focus:ring-2 transition-colors`}
                                                placeholder="••••••••"
                                            />
                                        </div>
                                        {errors.confirmPassword && <p className="mt-1 text-xs text-red-600 font-medium">{errors.confirmPassword}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Crear Cuenta
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                ¿Ya tienes una cuenta?{' '}
                                <Link href="#login" className="font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                                    Iniciar Sesión
                                </Link>
                            </p>
                        </div>

                        <div className="text-center mt-6">
                            <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors">
                                <ChevronLeft size={16} />
                                Volver al inicio
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}