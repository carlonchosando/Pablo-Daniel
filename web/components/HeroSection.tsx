import React from 'react';
import ContactForm from './ContactForm';

interface HeroProps {
    title: string;
    subtitle: string;
    defaultService?: string;
    origin?: string;
}

export default function HeroSection({ title, subtitle, defaultService, origin }: HeroProps) {
    const PHONE_PABLO = '5492364303960';

    return (
        <div className="relative min-h-[70vh] flex items-center pt-20 pb-16 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-float"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
                <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Disponibles en casco urbano
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
                        {subtitle}
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(`Hola Pablo, estoy viendo la página de ${defaultService || 'servicios'} y necesito una consulta...`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Hablar por WhatsApp
                        </a>
                        <a href={`tel:+${PHONE_PABLO}`} className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            Llamar Ahora
                        </a>
                    </div>
                </div>

                <div className="lg:w-5/12 w-full max-w-md">
                    <ContactForm defaultService={defaultService} origin={origin} />
                </div>
            </div>
        </div>
    );
}
