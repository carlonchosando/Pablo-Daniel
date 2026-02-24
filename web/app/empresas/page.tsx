import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import ContactForm from '../../components/ContactForm';
import type { Metadata } from 'next';

const PHONE_PABLO = '5492364303960';
const WA_MSG_B2B = 'Hola Pablo, represento un comercio/inmobiliaria en Junín y necesito consultarles sobre mantenimiento...';

export const metadata: Metadata = {
    title: 'Mantenimiento para Comercios e Inmobiliarias en Junín | Pablo & Daniel',
    description: 'Un solo proveedor para toda la infraestructura de tu negocio. Electricidad, plomería, pintura e impermeabilización. Planes en 3 cuotas.',
};

/* ═══════════════════════════════════════════════════════
   BLOQUE 1: NAVBAR — Ya está en layout.tsx (global)
   ═══════════════════════════════════════════════════════ */

export default function Empresas() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* ═══════ BLOQUE 2: HERO — Sin formulario, limpio e impactante ═══════ */}
            <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-float"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8 py-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-teal-300">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Disponibles ahora para empresas en Junín
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight max-w-4xl mx-auto">
                        Un Solo Proveedor.<br />
                        <span className="text-gradient">Cero Problemas Edilicios.</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Centralizá el mantenimiento de tu comercio, oficina o propiedad inmobiliaria en un solo equipo confiable. <strong className="text-white">Facturamos, trabajamos limpio y financiamos en 3 cuotas.</strong>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG_B2B)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Hablar con Pablo
                        </a>
                        <a href="#servicios" className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">
                            Ver Servicios ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 3: TRUST BAR — Franja de confianza rápida ═══════ */}
            <section className="py-6 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[
                        { icon: '🧾', text: 'Facturación Formal' },
                        { icon: '⚡', text: 'Respuesta en 15 min' },
                        { icon: '🛡️', text: 'Trabajo Garantizado' },
                        { icon: '🧹', text: 'Dejamos Limpio' },
                        { icon: '💳', text: 'Hasta 3 Cuotas' },
                    ].map((b) => (
                        <div key={b.text} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                            <span className="text-lg">{b.icon}</span> {b.text}
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════ BLOQUE 4: PAIN POINTS — Los dolores del empresario ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <p className="text-red-400 font-semibold tracking-widest uppercase text-sm">¿Te pasa esto?</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Problemas que le cuestan <span className="text-gradient">plata a tu negocio</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { emoji: '💡', title: 'Cortes de luz', desc: 'Cada hora sin electricidad es facturación perdida y clientes que se van.' },
                            { emoji: '💧', title: 'Filtraciones', desc: 'Una pérdida invisible aumenta tu factura y puede dañar mercadería.' },
                            { emoji: '🎨', title: 'Local viejo', desc: 'Paredes manchadas y descascaradas espantan clientes antes de entrar.' },
                            { emoji: '😩', title: '4 proveedores', desc: 'Coordinar electricista, plomero, pintor y techista te consume el día.' },
                        ].map((p) => (
                            <div key={p.title} className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
                                <div className="text-4xl mb-3">{p.emoji}</div>
                                <h3 className="font-bold text-lg mb-2 text-red-300">{p.title}</h3>
                                <p className="text-slate-400 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 5: SERVICIOS / SOLUCIÓN ═══════ */}
            <section id="servicios" className="py-20 px-4 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 space-y-3">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Basado en Estudio de Mercado</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Los 5 Servicios Más <span className="text-gradient">Demandados por Empresas</span></h2>
                    </div>

                    <div className="space-y-5">
                        {[
                            { icon: '🔌', title: 'Seguridad Eléctrica', demand: 'ALTA', demandColor: 'text-red-400 bg-red-500/10', items: ['Revisión de tableros y térmicas', 'Recableado de circuitos sobrecargados', 'Cambio a LED (ahorrá hasta 60%)', 'Puesta a tierra y normativa'] },
                            { icon: '🚰', title: 'Plomería Preventiva', demand: 'ALTA', demandColor: 'text-red-400 bg-red-500/10', items: ['Detección de fugas invisibles', 'Destapes industriales', 'Recambio de cañerías antiguas', 'Reparación de griferías y mochilas'] },
                            { icon: '🎨', title: 'Pintura Comercial', demand: 'MEDIA-ALTA', demandColor: 'text-yellow-400 bg-yellow-500/10', items: ['Pintura integral de locales', 'Reparación de humedades visibles', 'Fachadas exteriores y carteles', 'Retoques pre-apertura o renovación'] },
                            { icon: '🏠', title: 'Impermeabilización', demand: 'ESTACIONAL', demandColor: 'text-orange-400 bg-orange-500/10', items: ['Membrana líquida / asfáltica', 'Reparación de goteras activas', 'Sellado de canaletas', 'Preventiva pre-invierno'] },
                            { icon: '🔧', title: 'Facility Management', demand: 'CRECIENTE', demandColor: 'text-emerald-400 bg-emerald-500/10', items: ['Un solo contacto para TODO', 'Mantenimiento preventivo mensual', 'Informes de estado por inmueble', 'Atención prioritaria'] },
                        ].map((s) => (
                            <div key={s.title} className="glass rounded-2xl p-6 hover:bg-white/5 transition-all flex flex-col sm:flex-row items-start gap-5">
                                <div className="flex items-center gap-3 sm:w-1/4 shrink-0">
                                    <span className="text-3xl">{s.icon}</span>
                                    <div>
                                        <h3 className="font-bold text-lg">{s.title}</h3>
                                        <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mt-1 ${s.demandColor}`}>{s.demand}</span>
                                    </div>
                                </div>
                                <ul className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {s.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                                            <svg className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(`Hola Pablo, necesito presupuesto de ${s.title} para mi comercio en Junín.`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-2.5 px-5 rounded-xl shadow-lg shadow-green-500/10 hover:shadow-green-500/30 transition-all hover:scale-105 text-sm whitespace-nowrap"
                                >
                                    💬 Pedir Presupuesto
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 6: WHY US — Propuesta de Valor Diferenciada ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold">¿Por qué elegirnos <span className="text-gradient">a nosotros?</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '🎯', title: 'Un Solo Proveedor', desc: 'Eléctrica, plomería, pintura y techos. Todo con un solo llamado.' },
                            { icon: '📋', title: 'Presupuesto Sin Cargo', desc: 'Vamos, diagnosticamos y cotizamos sin cobrarte un peso en casco urbano.' },
                            { icon: '💳', title: 'Plan en 3 Cuotas', desc: 'Financiá la puesta a punto y cuidá el flujo de fondos de tu negocio.' },
                            { icon: '🧾', title: 'Facturación Completa', desc: 'Trabajo formal con factura. Ideal para empresas que necesitan respaldo contable.' },
                            { icon: '🕐', title: 'Respuesta en Minutos', desc: 'Respondemos tu WhatsApp en menos de 15 minutos. El primero que se desocupe, te atiende.' },
                            { icon: '🧹', title: 'Dejamos Limpio', desc: 'Nos llevamos todos los residuos. Tu local queda mejor que como lo encontramos.' },
                        ].map((v) => (
                            <div key={v.title} className="glass rounded-2xl p-6 hover:bg-white/5 transition-all text-center">
                                <div className="text-3xl mb-4">{v.icon}</div>
                                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                                <p className="text-slate-400 text-sm">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 7: SOCIAL PROOF — Prueba Social ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Lo que dicen nuestros clientes</p>
                        <h2 className="text-3xl font-bold">Resultados que <span className="text-gradient">hablan por sí solos</span></h2>
                    </div>

                    {/* Métricas */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {[
                            { num: '+150', label: 'Trabajos realizados' },
                            { num: '8 años', label: 'De experiencia' },
                            { num: '< 15 min', label: 'Tiempo de respuesta' },
                            { num: '100%', label: 'Presupuestos cumplidos' },
                        ].map((m) => (
                            <div key={m.label} className="glass rounded-xl p-5 text-center">
                                <div className="text-2xl sm:text-3xl font-extrabold text-gradient">{m.num}</div>
                                <div className="text-slate-400 text-xs mt-1">{m.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Testimonios */}
                    <div className="grid sm:grid-cols-3 gap-5">
                        {[
                            { quote: 'Nos solucionaron un cortocircuito en el horario pico del local. Llegaron en 40 minutos y no tuvimos que cerrar.', author: 'Comerciante', loc: 'Centro de Junín' },
                            { quote: 'Antes teníamos 3 proveedores distintos para manejar 12 propiedades. Ahora llamamos solo a Pablo y listo.', author: 'Administrador de edificios', loc: 'Junín' },
                            { quote: 'La financiación en 3 cuotas nos permitió refaccionar todo el frente del local sin descapitalizarnos.', author: 'Dueño de local gastronómico', loc: 'Junín' },
                        ].map((t, i) => (
                            <div key={i} className="glass rounded-2xl p-6 relative">
                                <div className="text-4xl text-cyan-500/30 absolute top-4 left-5">"</div>
                                <p className="text-slate-300 text-sm italic mt-6 mb-4">{t.quote}</p>
                                <div className="border-t border-white/10 pt-3">
                                    <p className="font-bold text-sm">{t.author}</p>
                                    <p className="text-slate-500 text-xs">{t.loc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 8: TRUST BADGES — Sellos de Garantía ═══════ */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-8 flex flex-wrap justify-center gap-8">
                        {[
                            { icon: '🛡️', label: 'Trabajo Garantizado' },
                            { icon: '✅', label: 'Materiales Homologados' },
                            { icon: '🧾', label: 'Factura Legal' },
                            { icon: '🔒', label: 'Sin Cargos Ocultos' },
                            { icon: '👷', label: 'Personal Capacitado' },
                        ].map((badge) => (
                            <div key={badge.label} className="flex flex-col items-center gap-2 w-28">
                                <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-2xl border border-cyan-500/20">
                                    {badge.icon}
                                </div>
                                <span className="text-xs text-slate-300 text-center font-medium leading-tight">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 9: HOW IT WORKS — Proceso de Trabajo ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl font-bold">Así de <span className="text-gradient">simple es contratarnos</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Contactanos', desc: 'Por WhatsApp, teléfono o formulario.' },
                            { step: '2', title: 'Visita Sin Cargo', desc: 'Vamos a tu local a diagnosticar, sin compromiso.' },
                            { step: '3', title: 'Presupuesto', desc: 'Te entregamos cotización escrita en el acto.' },
                            { step: '4', title: 'Trabajo Limpio', desc: 'Ejecutamos, facturamos y dejamos todo impecable.' },
                        ].map((s, i) => (
                            <div key={s.step} className="text-center relative">
                                {i < 3 && <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-cyan-500/40 to-transparent"></div>}
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-extrabold mb-4 shadow-lg shadow-blue-500/20 relative z-10">
                                    {s.step}
                                </div>
                                <h3 className="font-bold mb-1">{s.title}</h3>
                                <p className="text-slate-400 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 10: MID-PAGE CTA — Banner de conversión ═══════ */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center glow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-cyan-600/5 pointer-events-none"></div>
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">¿Listo para resolver los problemas de tu negocio?</h2>
                        <p className="text-slate-300 text-lg max-w-xl mx-auto">
                            Presupuesto gratuito en el casco urbano de Junín. Sin compromiso. Pagá en hasta 3 cuotas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG_B2B)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg"
                            >
                                💬 WhatsApp Directo
                            </a>
                            <a href={`tel:+${PHONE_PABLO}`} className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">
                                📞 Llamar al 236 430-3960
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 11: FORMULARIO DE CONTACTO (Al final) ═══════ */}
            <section className="py-20 px-4" id="contacto">
                <div className="max-w-lg mx-auto text-center space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">Dejanos tus datos y <span className="text-gradient">te contactamos</span></h2>
                        <p className="text-slate-400">Respondemos en menos de 15 minutos. Tu consulta no tiene costo.</p>
                    </div>
                    <ContactForm title="Solicitar Presupuesto Empresarial" defaultService="General" origin="Landing B2B Empresas (Footer Form)" />
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        Tus datos están seguros. No compartimos tu información.
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 12: FOOTER — Ya está en page.tsx principal ═══════ */}
            <footer className="border-t border-white/10 py-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p className="font-bold text-slate-300">Junín Soluciones Edilicias — by Pablo & Daniel</p>
                    <div className="flex gap-6">
                        <a href="/" className="hover:text-white transition-colors">Inicio</a>
                        <a href="/electricidad" className="hover:text-white transition-colors">Electricidad</a>
                        <a href="/plomeria" className="hover:text-white transition-colors">Plomería</a>
                        <a href="/planes" className="hover:text-white transition-colors">Planes</a>
                    </div>
                    <p>Contacto: <a href={`tel:+${PHONE_PABLO}`} className="text-primary hover:underline">236 430-3960</a></p>
                </div>
            </footer>

            {/* ═══════ STICKY MOBILE CTA BAR ═══════ */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3">
                <a href={`tel:+${PHONE_PABLO}`} className="flex-1 text-center glass text-white font-bold py-3 rounded-xl text-sm">
                    📞 Llamar
                </a>
                <a
                    href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG_B2B)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm"
                >
                    💬 WhatsApp
                </a>
            </div>

            <WhatsAppButton phoneNumber={PHONE_PABLO} message={WA_MSG_B2B} />
        </main>
    );
}
