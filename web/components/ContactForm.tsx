'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    nombre: string;
    telefono: string;
    servicio: string;
    urgencia: string;
    mensaje: string;
}

export default function ContactForm({ title = "Solicitar Presupuesto", defaultService = "General", origin = "Home" }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const onSubmit = async (data: FormData) => {
        setStatus('loading');
        const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/nuevo-lead-mantenimiento';

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, origen_landing: origin }),
            });
            if (response.ok) { setStatus('success'); reset(); }
            else { setStatus('error'); }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="glass rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto relative overflow-hidden glow">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"></div>
            <h3 className="text-xl font-bold mb-6 text-white">{title}</h3>

            {status === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-6 rounded-xl text-center">
                    <svg className="w-14 h-14 mx-auto text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="font-semibold text-lg">¡Mensaje Enviado!</p>
                    <p className="text-sm mt-2 text-green-400">Pablo te contactará en breves minutos.</p>
                    <button onClick={() => setStatus('idle')} className="mt-4 text-cyan-400 underline text-sm">Enviar otra consulta</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Nombre *</label>
                        <input
                            {...register('nombre', { required: true })}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none focus:border-transparent text-white placeholder-slate-500"
                            placeholder="Juan Pérez"
                        />
                        {errors.nombre && <span className="text-red-400 text-xs">Requerido</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Teléfono (WhatsApp) *</label>
                        <input
                            {...register('telefono', { required: true })}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none focus:border-transparent text-white placeholder-slate-500"
                            placeholder="+54 9 236 ..."
                            type="tel"
                        />
                        {errors.telefono && <span className="text-red-400 text-xs">Requerido</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Servicio</label>
                            <select
                                {...register('servicio')}
                                defaultValue={defaultService}
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none text-white"
                            >
                                <option value="General" className="bg-slate-900">General</option>
                                <option value="Electricidad" className="bg-slate-900">Electricidad</option>
                                <option value="Plomería" className="bg-slate-900">Plomería</option>
                                <option value="Pintura o Techos" className="bg-slate-900">Pintura/Techos</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-1">Urgencia</label>
                            <select
                                {...register('urgencia')}
                                className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none text-white"
                            >
                                <option value="Presupuesto" className="bg-slate-900">Presupuesto</option>
                                <option value="URGENCIA" className="bg-slate-900">URGENCIA</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">Detalle del problema</label>
                        <textarea
                            {...register('mensaje')}
                            rows={3}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:outline-none text-white placeholder-slate-500"
                            placeholder="Breve descripción..."
                        ></textarea>
                    </div>

                    {status === 'error' && (
                        <div className="text-red-400 text-sm p-2 bg-red-500/10 border border-red-500/30 rounded-lg">Hubo un error. Intentá por WhatsApp.</div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex justify-center items-center"
                    >
                        {status === 'loading' ? (
                            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                        ) : (
                            'Solicitar Presupuesto Gratis'
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}
