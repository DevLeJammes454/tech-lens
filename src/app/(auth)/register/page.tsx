'use client';

import * as React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

interface RegisterFormData {
    organizationName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterPage() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<RegisterFormData>({
        defaultValues: {
            organizationName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const password = watch('password');

    const onSubmit = (data: RegisterFormData) => {
        console.log('Registration attempt:', data);
        alert('Registro exitoso! (Demo)');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h1 className="text-3xl font-bold text-primary-600">TechLens</h1>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Crear Cuenta</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Registra tu taller y comienza a gestionar tus reparaciones
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Organization Section */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Información del Taller</h3>
                            <div>
                                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700">
                                    Nombre del Taller
                                </label>
                                <input
                                    {...register('organizationName', { required: 'El nombre del taller es requerido' })}
                                    type="text"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Ej: Reparaciones TechPro"
                                />
                                {errors.organizationName && (
                                    <p className="mt-1 text-sm text-red-600">{errors.organizationName.message}</p>
                                )}
                            </div>
                        </div>

                        {/* User Section */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-4">Información del Usuario</h3>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                                        Nombre Completo
                                    </label>
                                    <input
                                        {...register('userName', { required: 'El nombre es requerido' })}
                                        type="text"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        autoComplete="name"
                                    />
                                    {errors.userName && (
                                        <p className="mt-1 text-sm text-red-600">{errors.userName.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        {...register('email', {
                                            required: 'El email es requerido',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email inválido',
                                            },
                                        })}
                                        type="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                        autoComplete="email"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Contraseña
                                        </label>
                                        <input
                                            {...register('password', {
                                                required: 'La contraseña es requerida',
                                                minLength: {
                                                    value: 6,
                                                    message: 'La contraseña debe tener al menos 6 caracteres',
                                                },
                                            })}
                                            type="password"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                            autoComplete="new-password"
                                        />
                                        {errors.password && (
                                            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                            Confirmar Contraseña
                                        </label>
                                        <input
                                            {...register('confirmPassword', {
                                                required: 'Confirma tu contraseña',
                                                validate: (value) => value === password || 'Las contra señas no coinciden',
                                            })}
                                            type="password"
                                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                                            autoComplete="new-password"
                                        />
                                        {errors.confirmPassword && (
                                            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                        >
                            Crear Cuenta
                        </button>

                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                ¿Ya tienes una cuenta?{' '}
                                <Link href="/login" className="font-semibold text-primary-600 hover:text-primary-700">
                                    Iniciar Sesión
                                </Link>
                            </p>
                        </div>

                        <div className="text-center">
                            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                                ← Volver al inicio
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
