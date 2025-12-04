'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';

interface TicketFormData {
    // Customer
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    // Equipment
    brand: string;
    model: string;
    serialNumber: string;
    problemDescription: string;
}

export default function NewTicketPage() {
    const [step, setStep] = React.useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm<TicketFormData>();

    const onSubmit = (data: TicketFormData) => {
        console.log('Ticket data:', data);
        alert('Ticket creado con éxito! (Demo)');
    };

    const steps = ['Cliente', 'Equipo', 'Evidencia'];

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Nuevo Ticket</h1>
            <p className="text-gray-600 mb-8">Registra una nueva recepción de equipo</p>

            {/* Stepper */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    {steps.map((label, index) => (
                        <React.Fragment key={label}>
                            <div className="flex flex-col items-center flex-1">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${index <= step
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-200 text-gray-600'
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span className={`mt-2 text-sm ${index <= step ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
                                    {label}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`h-1 flex-1 mx-4 ${index < step ? 'bg-primary-600' : 'bg-gray-200'}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-white rounded-lg shadow-md p-6">
                    {/* Step 1: Customer */}
                    {step === 0 && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold mb-4">Información del Cliente</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                                <input
                                    {...register('customerName', { required: 'El nombre es requerido' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="Nombre completo"
                                />
                                {errors.customerName && <p className="text-red-600 text-sm mt-1">{errors.customerName.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    {...register('customerEmail', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="correo@ejemplo.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                                <input
                                    {...register('customerPhone')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="Número de contact"
                                />
                            </div>
                        </div>
                    )}

                    {/* Step 2: Equipment */}
                    {step === 1 && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold mb-4">Información del Equipo</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                                <input
                                    {...register('brand', { required: 'La marca es requerida' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="Ej: Apple, Samsung"
                                />
                                {errors.brand && <p className="text-red-600 text-sm mt-1">{errors.brand.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                                <input
                                    {...register('model', { required: 'El modelo es requerido' })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="Ej: iPhone 13 Pro"
                                />
                                {errors.model && <p className="text-red-600 text-sm mt-1">{errors.model.message}</p>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Número de Serie</label>
                                <input
                                    {...register('serialNumber')}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="Número de serie o IMEI"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Descripción del Problema</label>
                                <textarea
                                    {...register('problemDescription', { required: 'La descripción es requerida' })}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    placeholder="Describe el problema reportado por el cliente..."
                                />
                                {errors.problemDescription && <p className="text-red-600 text-sm mt-1">{errors.problemDescription.message}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Evidence */}
                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Evidencia Fotográfica</h2>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-gray-600 mb-2">La funcionalidad de carga de imágenes será implementada próximamente</p>
                                <p className="text-sm text-gray-500">Sube fotos del equipo antes de la reparación</p>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        <button
                            type="button"
                            onClick={() => setStep(Math.max(0, step - 1))}
                            disabled={step === 0}
                            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Atrás
                        </button>
                        {step < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={() => setStep(step + 1)}
                                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                            >
                                Siguiente
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                            >
                                Crear Ticket
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
