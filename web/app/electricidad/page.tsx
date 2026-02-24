import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import ContactForm from '../../components/ContactForm';
import type { Metadata } from 'next';

const PHONE_PABLO = '5492364303960';
const WA_MSG = 'Hola Pablo, necesito un electricista urgente en Junín...';

export const metadata: Metadata = {
    title: 'Electricista en Junín - Urgencias y Obras Eléctricas | Pablo & Daniel',
    description: '¿Cortes de luz o problemas eléctricos en Junín? Llegamos rápido. Diagnóstico sin cargo. Materiales homologados y facturación.',
};

export default function Electricidad() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* ═══════ BLOQUE 2: HERO ═══════ */}
            <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] animate-float"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8 py-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-yellow-300">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Electricista disponible ahora en Junín
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight max-w-4xl mx-auto">
                        ¿Se cortó la luz <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">y no sabés por qué?</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        <strong className="text-white">El 75% de los hogares en Argentina tienen instalaciones deficientes.</strong> No te arriesgues. Diagnosticamos tu problema eléctrico en menos de una hora y te damos presupuesto en el acto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Necesito un Electricista
                        </a>
                        <a href="#problemas" className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">
                            ¿Cuál es tu problema? ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 3: TRUST BAR ═══════ */}
            <section className="py-6 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[
                        { icon: '⚡', text: 'Llegamos en el día' },
                        { icon: '🛡️', text: 'Materiales Homologados' },
                        { icon: '🧾', text: 'Facturación' },
                        { icon: '🔒', text: 'Puesta a Tierra' },
                        { icon: '💡', text: 'Cambio a LED' },
                    ].map((b) => (
                        <div key={b.text} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                            <span className="text-lg">{b.icon}</span> {b.text}
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════ BLOQUE 4: PAIN POINTS ═══════ */}
            <section id="problemas" className="py-20 px-4 scroll-mt-24">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <p className="text-red-400 font-semibold tracking-widest uppercase text-sm">Señales de peligro</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">¿Reconocés alguna <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">de estas situaciones?</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { emoji: '🔥', title: 'Olor a quemado', desc: 'Un enchufe o cable caliente es señal de cortocircuito inminente. Riesgo de incendio real.' },
                            { emoji: '⚡', title: 'Salta la térmica', desc: 'Se corta cada vez que prendés el aire. Tu circuito está sobrecargado.' },
                            { emoji: '💡', title: 'Luces que parpadean', desc: 'Conexiones flojas o cables deteriorados. No es "normal", es peligroso.' },
                            { emoji: '🏚️', title: 'Instalación vieja', desc: 'Más de 15 años sin revisión = riesgo invisible. Sin puesta a tierra = riesgo de descarga.' },
                        ].map((p) => (
                            <div key={p.title} className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
                                <div className="text-4xl mb-3">{p.emoji}</div>
                                <h3 className="font-bold mb-2 text-red-300">{p.title}</h3>
                                <p className="text-slate-400 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent('Hola Pablo, tengo un problema eléctrico en mi casa/local en Junín.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:underline text-lg">
                            ¿Te pasa alguna? Contactanos ahora →
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 5: SERVICIOS ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 space-y-3">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Servicios Eléctricos</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Resolvemos <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">cualquier problema eléctrico</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '🚨', title: 'Urgencias Eléctricas', desc: 'Cortes de luz, cortocircuitos y chispazos. Llegamos en el día.', wa: 'Hola Pablo, tengo una URGENCIA eléctrica.' },
                            { icon: '🔲', title: 'Tableros y Térmicas', desc: 'Armado de tablero nuevo, cambio de térmicas, disyuntor diferencial.', wa: 'Hola Pablo, necesito revisar mi tablero eléctrico.' },
                            { icon: '🔌', title: 'Recableados', desc: 'Renovación de cableado en casas antiguas. Cables de cobre puro.', wa: 'Hola Pablo, necesito un recableado.' },
                            { icon: '⚡', title: 'Puesta a Tierra', desc: 'Instalación de jabalina y cableado. Protegé tu familia y electrodomésticos.', wa: 'Hola Pablo, necesito instalar puesta a tierra.' },
                            { icon: '💡', title: 'Iluminación LED', desc: 'Ahorrá hasta 60% en consumo. Diseño de iluminación para locales y hogares.', wa: 'Hola Pablo, me interesa el cambio a LED.' },
                            { icon: '🏗️', title: 'Obras Nuevas', desc: 'Instalación eléctrica completa para casas nuevas, ampliaciones o reformas.', wa: 'Hola Pablo, necesito instalación eléctrica para una obra.' },
                        ].map((s) => (
                            <div key={s.title} className="glass border-yellow-500/10 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="text-4xl">{s.icon}</div>
                                    <h3 className="text-xl font-bold">{s.title}</h3>
                                    <p className="text-slate-400 text-sm">{s.desc}</p>
                                    <a
                                        href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(s.wa)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all hover:scale-105 shadow-lg shadow-green-500/10"
                                    >
                                        💬 Pedir Presupuesto
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 6: WHY US ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-bold">¿Por qué elegir a <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">nuestros electricistas?</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '⏱️', title: 'Llegamos en el Día', desc: 'No esperás semanas. Coordinamos visita para hoy o mañana.' },
                            { icon: '🛡️', title: 'Materiales de Primera', desc: 'Cables de cobre puro, térmicas de marca. Nada "cobreado".' },
                            { icon: '📋', title: 'Diagnóstico Sin Cargo', desc: 'Revisamos tu instalación y te explicamos todo antes de presupuestar.' },
                            { icon: '🧾', title: 'Con Factura', desc: 'Trabajo formal. Ideal si necesitás deducir o presentar al seguro.' },
                            { icon: '📐', title: 'Bajo Normativa', desc: 'Respetamos las normas eléctricas vigentes. Puesta a tierra incluida.' },
                            { icon: '🧹', title: 'Limpieza Total', desc: 'Nos llevamos los restos de cable y canaletas. Nada queda tirado.' },
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

            {/* ═══════ BLOQUE 7: SOCIAL PROOF ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Clientes satisfechos</p>
                        <h2 className="text-3xl font-bold">Lo que dicen de <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">nuestro trabajo eléctrico</span></h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {[
                            { num: '+80', label: 'Trabajos eléctricos' },
                            { num: '< 1 hora', label: 'Tiempo de llegada' },
                            { num: '0', label: 'Accidentes' },
                            { num: '100%', label: 'Bajo normativa' },
                        ].map((m) => (
                            <div key={m.label} className="glass rounded-xl p-5 text-center">
                                <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">{m.num}</div>
                                <div className="text-slate-400 text-xs mt-1">{m.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid sm:grid-cols-3 gap-5">
                        {[
                            { quote: 'Me saltaba la térmica cada vez que prendía el horno eléctrico. Vinieron, revisaron el tablero y me armaron un circuito nuevo. Nunca más tuve el problema.', author: 'Laura P.', loc: 'Junín Centro' },
                            { quote: 'Sentí olor a quemado en un enchufe del living. Les mandé WhatsApp un sábado y Pablo vino esa misma tarde. Era un cable derretido. Zafé de un incendio.', author: 'Martín H.', loc: 'Barrio Norte, Junín' },
                            { quote: 'Me cambiaron toda la iluminación del local a LED. Bajó la boleta de luz un montón y el local se ve diez veces mejor.', author: 'Comerciante', loc: 'Calle Roque Sáenz Peña, Junín' },
                        ].map((t, i) => (
                            <div key={i} className="glass rounded-2xl p-6 relative">
                                <div className="text-4xl text-yellow-500/30 absolute top-4 left-5">&ldquo;</div>
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

            {/* ═══════ BLOQUE 8: TRUST BADGES ═══════ */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-8 flex flex-wrap justify-center gap-8">
                        {[
                            { icon: '🛡️', label: 'Garantía Escrita' },
                            { icon: '🔌', label: 'Cobre Puro' },
                            { icon: '⚡', label: 'Bajo Normativa' },
                            { icon: '🧾', label: 'Con Factura' },
                            { icon: '🔒', label: 'Puesta a Tierra' },
                        ].map((badge) => (
                            <div key={badge.label} className="flex flex-col items-center gap-2 w-28">
                                <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-2xl border border-yellow-500/20">
                                    {badge.icon}
                                </div>
                                <span className="text-xs text-slate-300 text-center font-medium leading-tight">{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 9: HOW IT WORKS ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl font-bold">Así resolvemos tu <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">problema eléctrico</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Escribinos', desc: 'Contanos qué te pasa por WhatsApp o teléfono.' },
                            { step: '2', title: 'Diagnóstico', desc: 'Vamos a tu casa, revisamos la instalación. Sin cargo.' },
                            { step: '3', title: 'Presupuesto', desc: 'Te decimos cuánto sale, por escrito, antes de tocar nada.' },
                            { step: '4', title: 'Resuelto', desc: 'Arreglamos, dejamos limpio y te damos garantía.' },
                        ].map((s, i) => (
                            <div key={s.step} className="text-center relative">
                                {i < 3 && <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-yellow-500/40 to-transparent"></div>}
                                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white text-2xl font-extrabold mb-4 shadow-lg shadow-yellow-500/20 relative z-10">
                                    {s.step}
                                </div>
                                <h3 className="font-bold mb-1">{s.title}</h3>
                                <p className="text-slate-400 text-sm">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 10: MID-PAGE CTA ═══════ */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center glow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-orange-600/5 pointer-events-none"></div>
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">No esperes a que sea un incendio</h2>
                        <p className="text-slate-300 text-lg max-w-xl mx-auto">
                            Un problema eléctrico no se arregla solo. Mandanos un WhatsApp y en menos de 15 minutos coordinamos la visita. Diagnóstico sin cargo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg"
                            >
                                💬 WhatsApp Urgente
                            </a>
                            <a href={`tel:+${PHONE_PABLO}`} className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">
                                📞 Llamar al 236 430-3960
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 11: FORMULARIO ═══════ */}
            <section className="py-20 px-4" id="contacto">
                <div className="max-w-lg mx-auto text-center space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">Dejanos tus datos y <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">te llamamos</span></h2>
                        <p className="text-slate-400">Respondemos en menos de 15 minutos. Diagnóstico gratuito.</p>
                    </div>
                    <ContactForm title="Consulta Eléctrica" defaultService="Electricidad" origin="Landing Electricidad (Footer Form)" />
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        Tus datos están seguros. No compartimos tu información.
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 12: FOOTER ═══════ */}
            <footer className="border-t border-white/10 py-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                    <p className="font-bold text-slate-300">Junín Soluciones Edilicias — by Pablo & Daniel</p>
                    <div className="flex gap-6">
                        <a href="/" className="hover:text-white transition-colors">Inicio</a>
                        <a href="/plomeria" className="hover:text-white transition-colors">Plomería</a>
                        <a href="/empresas" className="hover:text-white transition-colors">Empresas</a>
                        <a href="/planes" className="hover:text-white transition-colors">Planes</a>
                    </div>
                    <p>Contacto: <a href={`tel:+${PHONE_PABLO}`} className="text-primary hover:underline">236 430-3960</a></p>
                </div>
            </footer>

            {/* STICKY MOBILE CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3">
                <a href={`tel:+${PHONE_PABLO}`} className="flex-1 text-center glass text-white font-bold py-3 rounded-xl text-sm">📞 Llamar</a>
                <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm">💬 WhatsApp</a>
            </div>

            <WhatsAppButton phoneNumber={PHONE_PABLO} message={WA_MSG} />
        </main>
    );
}
