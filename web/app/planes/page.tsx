import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import ContactForm from '../../components/ContactForm';
import type { Metadata } from 'next';

const PHONE_PABLO = '5492364303960';
const WA_MSG_DEFAULT = 'Hola Pablo, quiero consultar por un plan de mantenimiento...';

export const metadata: Metadata = {
    title: 'Planes de Mantenimiento en Junín - Hogares, Comercios e Inmobiliarias | Pablo & Daniel',
    description: 'Planes mensuales de mantenimiento integral. 3 opciones para hogares, comercios e inmobiliarias. Electricidad, plomería, pintura. Presupuesto sin cargo.',
};

const segments = [
    {
        id: 'hogares',
        emoji: '🏠',
        title: 'Hogares',
        subtitle: 'Para familias y propietarios',
        desc: 'Olvidate de buscar un técnico cada vez que algo falla. Con un plan mensual, tenés prioridad, respuesta rápida y precio preferencial.',
        gradient: 'from-blue-500 to-cyan-500',
        gradientText: 'from-blue-400 to-cyan-400',
        border: 'border-blue-500/20',
        glow: 'shadow-blue-500/10',
        plans: [
            {
                name: 'Básico',
                price: '25.000',
                tag: 'Para empezar',
                features: ['1 visita técnica al mes (eléctrica o plomería)', 'Prioridad en urgencias', '15% de descuento en materiales', 'Atención por WhatsApp directo', 'Diagnóstico incluido'],
                notIncluded: ['Visitas fuera de horario', 'Pintura'],
                wa: 'Hola Pablo, me interesa el Plan Básico para HOGARES ($25.000/mes).',
            },
            {
                name: 'Confort',
                price: '45.000',
                tag: '⭐ Más elegido',
                popular: true,
                features: ['2 visitas al mes (eléctrica + plomería)', 'Respuesta urgente en menos de 2 horas', '20% de descuento en materiales', 'Revisión preventiva trimestral', 'Atención prioritaria por WhatsApp', 'Diagnóstico + informe por escrito'],
                notIncluded: ['Pintura integral'],
                wa: 'Hola Pablo, me interesa el Plan Confort para HOGARES ($45.000/mes).',
            },
            {
                name: 'Premium',
                price: '65.000',
                tag: 'Todo incluido',
                features: ['Visitas ilimitadas*', 'Atención prioritaria 24/7', 'Pintura express anual (1 ambiente)', '25% de descuento en materiales', 'Chequeo integral semestral', 'Electricidad + plomería + pintura', 'Respuesta garantizada en <1 hora'],
                notIncluded: [],
                wa: 'Hola Pablo, me interesa el Plan Premium para HOGARES ($65.000/mes).',
            },
        ],
    },
    {
        id: 'comercios',
        emoji: '🏢',
        title: 'Comercios',
        subtitle: 'Para locales, oficinas y consultorios',
        desc: 'Cada hora con un problema sin resolver es facturación perdida. Un plan te da respuesta inmediata y presupuesto predecible.',
        gradient: 'from-teal-500 to-emerald-500',
        gradientText: 'from-teal-400 to-emerald-400',
        border: 'border-teal-500/20',
        glow: 'shadow-teal-500/10',
        plans: [
            {
                name: 'Starter',
                price: '45.000',
                tag: 'Local pequeño',
                features: ['2 visitas técnicas al mes', 'Prioridad en urgencias', 'Mantenimiento preventivo bimestral', '15% de descuento en materiales', 'Atención por WhatsApp directo'],
                notIncluded: ['Pintura', 'Atención 24/7'],
                wa: 'Hola Pablo, me interesa el Plan Starter para COMERCIOS ($45.000/mes).',
            },
            {
                name: 'Business',
                price: '75.000',
                tag: '⭐ Recomendado',
                popular: true,
                features: ['4 visitas al mes', 'Respuesta urgente en menos de 1 hora', 'Mantenimiento preventivo mensual', '20% de descuento en materiales', 'Electricidad + plomería + pintura básica', 'Informe mensual de estado', 'Facturación completa'],
                notIncluded: [],
                wa: 'Hola Pablo, me interesa el Plan Business para COMERCIOS ($75.000/mes).',
            },
            {
                name: 'Enterprise',
                price: '120.000',
                tag: 'Pague en 3 cuotas',
                features: ['Visitas ilimitadas*', 'Atención 24/7 con prioridad absoluta', 'Plan preventivo integral mensual', '25% de descuento en materiales', 'Pintura anual de fachada incluida', 'Pago en 3 cuotas sin interés', 'Electricidad + plomería + pintura + techos', 'Manager de cuenta dedicado'],
                notIncluded: [],
                wa: 'Hola Pablo, me interesa el Plan Enterprise para COMERCIOS ($120.000/mes).',
            },
        ],
    },
    {
        id: 'inmobiliarias',
        emoji: '🏗️',
        title: 'Inmobiliarias',
        subtitle: 'Para administración de propiedades',
        desc: 'Centralizar el mantenimiento de todas tus propiedades en un solo proveedor = menos llamadas, menos problemas, mejor imagen.',
        gradient: 'from-purple-500 to-pink-500',
        gradientText: 'from-purple-400 to-pink-400',
        border: 'border-purple-500/20',
        glow: 'shadow-purple-500/10',
        plans: [
            {
                name: 'Esencial',
                price: '55.000',
                tag: 'Hasta 5 propiedades',
                features: ['Hasta 5 propiedades administradas', '3 visitas técnicas al mes', 'Prioridad en urgencias', 'Reportes mensuales por propiedad', '15% descuento en materiales', 'Atención por WhatsApp directo'],
                notIncluded: ['Pintura pre-alquiler', 'Informe de tasación'],
                wa: 'Hola Pablo, me interesa el Plan Esencial para INMOBILIARIAS ($55.000/mes).',
            },
            {
                name: 'Profesional',
                price: '95.000',
                tag: '⭐ Más elegido',
                popular: true,
                features: ['Hasta 15 propiedades administradas', '8 visitas al mes', 'Respuesta urgente en menos de 1 hora', 'Puesta a punto pre-alquiler (pintura express)', 'Reportes con fotos por propiedad', '20% descuento en materiales', 'Facturación completa', 'Electricidad + plomería + pintura'],
                notIncluded: [],
                wa: 'Hola Pablo, me interesa el Plan Profesional para INMOBILIARIAS ($95.000/mes).',
            },
            {
                name: 'Full',
                price: '150.000',
                tag: 'Sin límites',
                features: ['Propiedades ilimitadas*', 'Visitas ilimitadas*', 'Atención 24/7 prioridad absoluta', 'Puesta a punto completa (pintura + eléctrica + plomería)', 'Informe técnico para tasación', 'Pago en 3 cuotas sin interés', '25% descuento en materiales', 'Manager de cuenta dedicado', 'Dashboard de propiedades'],
                notIncluded: [],
                wa: 'Hola Pablo, me interesa el Plan Full para INMOBILIARIAS ($150.000/mes).',
            },
        ],
    },
];

export default function Planes() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* HERO */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] animate-float"></div>
                    <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Planes mensuales sin contrato fijo
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
                        Un plan para cada <br className="hidden sm:block" />
                        <span className="text-gradient">necesidad y bolsillo</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
                        Hogares, comercios e inmobiliarias. Electricidad, plomería y pintura con <strong className="text-white">prioridad, descuentos y respuesta garantizada</strong>. Sin contrato anual.
                    </p>

                    {/* Segment Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        {segments.map((seg) => (
                            <a key={seg.id} href={`#${seg.id}`} className="glass hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 text-sm">
                                {seg.emoji} {seg.title}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <section className="py-6 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[{ icon: '❌', text: 'Sin contrato anual' }, { icon: '💳', text: 'Pagá en 3 cuotas' }, { icon: '🛡️', text: 'Garantía incluida' }, { icon: '📞', text: 'Prioridad en urgencias' }, { icon: '🧾', text: 'Facturación completa' }].map(b => (
                        <div key={b.text} className="flex items-center gap-2 text-sm text-slate-300 font-medium"><span className="text-lg">{b.icon}</span> {b.text}</div>
                    ))}
                </div>
            </section>

            {/* SEGMENTS */}
            {segments.map((seg) => (
                <section key={seg.id} id={seg.id} className="py-20 px-4 scroll-mt-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-4 space-y-3">
                            <div className="text-5xl">{seg.emoji}</div>
                            <h2 className="text-3xl sm:text-4xl font-bold">Planes para <span className={`bg-clip-text text-transparent bg-gradient-to-r ${seg.gradientText}`}>{seg.title}</span></h2>
                            <p className="text-slate-400 text-lg">{seg.subtitle}</p>
                            <p className="text-slate-500 max-w-xl mx-auto text-sm">{seg.desc}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-10">
                            {seg.plans.map((plan) => (
                                <div key={plan.name} className={`glass rounded-2xl p-7 relative flex flex-col ${plan.popular ? `ring-2 ring-offset-2 ring-offset-slate-950 ${seg.border.replace('border-', 'ring-')} scale-[1.03]` : ''} hover:bg-white/5 transition-all duration-300`}>
                                    {plan.popular && (
                                        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r ${seg.gradient} text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg ${seg.glow}`}>
                                            {plan.tag}
                                        </div>
                                    )}
                                    {!plan.popular && (
                                        <span className="text-xs text-slate-500 font-medium mb-2">{plan.tag}</span>
                                    )}
                                    <h3 className="text-2xl font-extrabold mt-1">{plan.name}</h3>
                                    <div className="mt-3 mb-5">
                                        <span className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${seg.gradientText}`}>${plan.price}</span>
                                        <span className="text-slate-500 text-sm">/mes</span>
                                    </div>

                                    <ul className="space-y-2.5 flex-1 mb-6">
                                        {plan.features.map((f, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <svg className="w-4 h-4 mt-0.5 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                        {plan.notIncluded && plan.notIncluded.map((f, i) => (
                                            <li key={`no-${i}`} className="flex items-start gap-2 text-sm text-slate-600">
                                                <svg className="w-4 h-4 mt-0.5 text-slate-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                                <span className="line-through">{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(plan.wa)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full text-center font-bold py-3.5 rounded-xl transition-all hover:scale-105 text-sm ${plan.popular ? `bg-gradient-to-r ${seg.gradient} text-white shadow-lg ${seg.glow}` : 'glass hover:bg-white/10 text-white'}`}
                                    >
                                        {plan.popular ? '💬 Lo quiero — WhatsApp' : '💬 Consultar'}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* WHAT'S INCLUDED */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl font-bold">Todos los planes <span className="text-gradient">incluyen</span></h2></div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { icon: '📞', title: 'WhatsApp Directo', desc: 'Hablás directo con Pablo. Sin call center ni intermediarios.' },
                            { icon: '🛡️', title: 'Garantía Escrita', desc: 'Todo trabajo tiene garantía por escrito. Tranquilidad total.' },
                            { icon: '🧾', title: 'Facturación', desc: 'Comprobante legal por cada pago y servicio. Ideal para deducir.' },
                            { icon: '🧹', title: 'Dejamos Limpio', desc: 'Nos llevamos los residuos. Tu espacio queda impecable.' },
                        ].map(v => (
                            <div key={v.title} className="glass rounded-2xl p-6 hover:bg-white/5 transition-all text-center">
                                <div className="text-3xl mb-3">{v.icon}</div>
                                <h3 className="font-bold mb-1">{v.title}</h3>
                                <p className="text-slate-400 text-sm">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl font-bold">Preguntas <span className="text-gradient">frecuentes</span></h2></div>
                    <div className="space-y-4">
                        {[
                            { q: '¿Hay contrato anual?', a: 'No. Todos los planes son mensuales sin compromiso. Podés cancelar cuando quieras.' },
                            { q: '¿Qué pasa si necesito algo fuera del plan?', a: 'Te aplicamos el descuento en materiales de tu plan y tenés prioridad de atención. El servicio adicional se cotiza aparte.' },
                            { q: '¿Qué significa "visitas ilimitadas"?', a: 'Podés solicitar hasta 8 intervenciones por mes. Si necesitás más, las coordinamos con precio preferencial.' },
                            { q: '¿Los materiales están incluidos?', a: 'El plan cubre la mano de obra y el servicio. Los materiales se cobran aparte con el descuento de tu plan (15%, 20% o 25%).' },
                            { q: '¿Puedo pagar en cuotas?', a: 'Los planes Enterprise, Full y algunos servicios grandes se pueden pagar en 3 cuotas sin interés.' },
                            { q: '¿Cómo se contratan?', a: 'Mandanos un WhatsApp, elegís tu plan y arrancamos. No hay trámites complicados.' },
                            { q: '¿Cubren todo Junín?', a: 'Sí. Cubrimos todo el casco urbano de Junín y alrededores.' },
                        ].map((faq, i) => (
                            <details key={i} className="glass rounded-xl group">
                                <summary className="p-5 cursor-pointer text-white font-bold flex justify-between items-center hover:bg-white/5 rounded-xl transition-all">
                                    {faq.q}
                                    <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </summary>
                                <p className="px-5 pb-5 text-slate-400 text-sm">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* MID CTA */}
            <section className="py-16 px-4"><div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 pointer-events-none"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">¿No sabés cuál plan te conviene?</h2>
                    <p className="text-slate-300 text-lg max-w-xl mx-auto">Escribinos por WhatsApp y te asesoramos gratis. Te recomendamos el plan ideal para tu situación.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent('Hola Pablo, quiero que me asesores sobre qué plan me conviene.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg">💬 Asesoramiento Gratis</a>
                        <a href={`tel:+${PHONE_PABLO}`} className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">📞 236 430-3960</a>
                    </div>
                </div>
            </div></section>

            {/* FORM */}
            <section className="py-20 px-4" id="contacto"><div className="max-w-lg mx-auto text-center space-y-8">
                <div className="space-y-3"><h2 className="text-3xl font-bold">¿Preferís que <span className="text-gradient">te llamemos?</span></h2><p className="text-slate-400">Dejanos tus datos y te contactamos en menos de 15 minutos.</p></div>
                <ContactForm title="Consulta sobre Planes" defaultService="General" origin="Landing Planes (Footer Form)" />
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>Tus datos están seguros.</div>
            </div></section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-10 mt-auto"><div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                <p className="font-bold text-slate-300">Junín Soluciones Edilicias — by Pablo & Daniel</p>
                <div className="flex flex-wrap gap-6"><a href="/" className="hover:text-white transition-colors">Inicio</a><a href="/electricidad" className="hover:text-white transition-colors">Electricidad</a><a href="/plomeria" className="hover:text-white transition-colors">Plomería</a><a href="/pintura" className="hover:text-white transition-colors">Pintura</a><a href="/construccion-seco" className="hover:text-white transition-colors">Construcción</a><a href="/empresas" className="hover:text-white transition-colors">Empresas</a></div>
                <p>Contacto: <a href={`tel:+${PHONE_PABLO}`} className="text-primary hover:underline">236 430-3960</a></p>
            </div></footer>

            <p className="text-center text-xs text-slate-600 py-4">*Sujeto a uso razonable (máx. 8 intervenciones/mes). Precios en ARS, vigentes a Feb 2026. Sin contrato anual.</p>

            {/* MOBILE BAR */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3">
                <a href={`tel:+${PHONE_PABLO}`} className="flex-1 text-center glass text-white font-bold py-3 rounded-xl text-sm">📞 Llamar</a>
                <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG_DEFAULT)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm">💬 WhatsApp</a>
            </div>
            <WhatsAppButton phoneNumber={PHONE_PABLO} message={WA_MSG_DEFAULT} />
        </main>
    );
}
