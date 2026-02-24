import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactForm from '../components/ContactForm';

const PHONE_PABLO = '5492364303960';
const WA_MSG = 'Hola Pablo, necesito consultar por un servicio de mantenimiento en Junín...';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* ═══════ BLOQUE 2: HERO — Limpio, impactante, sin formulario ═══════ */}
            <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute top-1/2 -right-40 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-float"></div>
                    <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8 py-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Disponibles ahora en Junín
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight max-w-4xl mx-auto">
                        ¿Buscás un profesional <br className="hidden sm:block" />
                        <span className="text-gradient">que realmente responda?</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Electricidad, plomería, pintura y techos. <strong className="text-white">Respondemos en menos de 15 minutos</strong>, facturamos y dejamos todo limpio. Junín necesitaba esto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a
                            href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Hablar por WhatsApp
                        </a>
                        <a href="#servicios" className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">
                            Ver Servicios ↓
                        </a>
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 3: TRUST BAR ═══════ */}
            <section className="py-6 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[
                        { icon: '⚡', text: 'Respuesta en 15 min' },
                        { icon: '🧾', text: 'Facturación Formal' },
                        { icon: '🛡️', text: 'Garantía Escrita' },
                        { icon: '🧹', text: 'Dejamos Limpio' },
                        { icon: '📍', text: 'Somos de Junín' },
                    ].map((b) => (
                        <div key={b.text} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                            <span className="text-lg">{b.icon}</span> {b.text}
                        </div>
                    ))}
                </div>
            </section>

            {/* ═══════ BLOQUE 4: PAIN POINTS ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <p className="text-red-400 font-semibold tracking-widest uppercase text-sm">¿Te pasó alguna de estas?</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Los problemas que <span className="text-gradient">nadie te resuelve</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { emoji: '📵', title: '"Llamo y no contestan"', desc: 'La mayoría de los técnicos en Junín no tienen presencia digital ni respuesta garantizada.' },
                            { emoji: '😤', title: '"Dijo que venía y no vino"', desc: 'Sin formalidad, sin compromiso. Tu tiempo vale y nadie lo respeta.' },
                            { emoji: '💸', title: '"Me cobró de más"', desc: 'Sin presupuesto previo, te enterás del precio cuando ya está hecho.' },
                            { emoji: '🗑️', title: '"Dejó todo sucio"', desc: 'Escombros, cables, restos de pintura. La peor parte después del arreglo.' },
                        ].map((p) => (
                            <div key={p.title} className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
                                <div className="text-4xl mb-3">{p.emoji}</div>
                                <h3 className="font-bold mb-2 text-red-300">{p.title}</h3>
                                <p className="text-slate-400 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-500 mt-8 text-sm">Con Pablo & Daniel, eso no pasa. Seguí bajando para ver cómo trabajamos. 👇</p>
                </div>
            </section>

            {/* ═══════ BLOQUE 5: SERVICIOS ═══════ */}
            <section id="servicios" className="py-20 px-4 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 space-y-3">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Nuestros Servicios</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Todo lo que tu casa o negocio <span className="text-gradient">necesita en un solo lugar</span></h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { href: '/electricidad', icon: '⚡', title: 'Electricidad', desc: 'Urgencias, cortocircuitos, tableros, iluminación LED y recableados.', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/20', wa_msg: 'Hola Pablo, necesito un electricista en Junín.' },
                            { href: '/plomeria', icon: '🚰', title: 'Plomería', desc: 'Pérdidas, destapes, caños rotos, griferías y termotanques.', color: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20', wa_msg: 'Hola Pablo, tengo un problema de plomería.' },
                            { href: '/empresas', icon: '🏢', title: 'Comercios e Inmobiliarias', desc: 'Mantenimiento integral B2B. Plan en 3 cuotas.', color: 'from-teal-500/20 to-emerald-500/20', border: 'border-teal-500/20', wa_msg: 'Hola Pablo, necesito mantenimiento para mi comercio.' },
                            { icon: '🎨', title: 'Pintura', desc: 'Interior, exterior, fachadas y retoques pre-alquiler.', color: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/20', wa_msg: 'Hola Pablo, necesito un presupuesto de pintura.' },
                            { icon: '🏠', title: 'Techos e Impermeabilización', desc: 'Membrana asfáltica, goteras, canaletas y sellados.', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/20', wa_msg: 'Hola Pablo, tengo goteras en mi techo.' },
                            { icon: '🔧', title: 'Mantenimiento General', desc: 'Arreglos varios, estanterías, cerraduras y puestas a punto.', color: 'from-slate-500/20 to-gray-500/20', border: 'border-slate-500/20', wa_msg: 'Hola Pablo, necesito un arreglo general en mi casa.' },
                        ].map((s) => (
                            <div key={s.title} className={`group glass ${s.border} rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden`}>
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="text-4xl">{s.icon}</div>
                                    <h3 className="text-xl font-bold">{s.title}</h3>
                                    <p className="text-slate-400 text-sm">{s.desc}</p>
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(s.wa_msg)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-2.5 rounded-lg text-sm transition-all hover:scale-105 shadow-lg shadow-green-500/10"
                                        >
                                            💬 WhatsApp
                                        </a>
                                        {s.href && (
                                            <a href={s.href} className="flex-1 text-center glass hover:bg-white/10 text-white font-medium py-2.5 rounded-lg text-sm transition-all">
                                                Ver más →
                                            </a>
                                        )}
                                    </div>
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
                        <h2 className="text-3xl sm:text-4xl font-bold">¿Por qué <span className="text-gradient">Pablo & Daniel?</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">No somos una empresa más. Somos dos profesionales de Junín que se cansaron de ver cómo los vecinos sufren con técnicos que no responden.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '🎯', title: 'Un Solo Contacto', desc: 'Eléctrica, plomería, pintura y techos. Todo con un solo WhatsApp.' },
                            { icon: '⏱️', title: 'Respondemos en 15 Min', desc: 'Nos vemos el WhatsApp al instante. El primero que se desocupa, te atiende.' },
                            { icon: '📋', title: 'Presupuesto Sin Cargo', desc: 'Vamos, diagnosticamos y cotizamos sin cobrarte. En casco urbano de Junín.' },
                            { icon: '🧾', title: 'Facturación Completa', desc: 'Trabajo formal, con comprobante. Ideal si necesitás deducir gastos.' },
                            { icon: '💳', title: '3 Cuotas para Comercios', desc: 'Financiá trabajos grandes sin descapitalizarte.' },
                            { icon: '🧹', title: 'Dejamos Todo Impecable', desc: 'Nos llevamos los residuos. Tu espacio queda mejor que antes.' },
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
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Prueba social</p>
                        <h2 className="text-3xl font-bold">Resultados que <span className="text-gradient">hablan solos</span></h2>
                    </div>

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

                    <div className="grid sm:grid-cols-3 gap-5">
                        {[
                            { quote: 'Tenía una pérdida severa un domingo. Les mandé un WhatsApp y Pablo me respondió en 10 minutos. Vinieron y lo arreglaron ese mismo día.', author: 'María G.', loc: 'Barrio Norte, Junín' },
                            { quote: 'Necesitaba pintar todo el departamento antes de entregarlo. Me dieron presupuesto en el acto, arrancaron al otro día y dejaron todo impecable.', author: 'Carlos R.', loc: 'Centro de Junín' },
                            { quote: 'Lo mejor es que llamo a uno solo y me resuelve todo: el enchufe, la canilla y la gotera del techo. No busco más a nadie.', author: 'Susana M.', loc: 'Junín, Barrio Belgrano' },
                        ].map((t, i) => (
                            <div key={i} className="glass rounded-2xl p-6 relative">
                                <div className="text-4xl text-cyan-500/30 absolute top-4 left-5">&ldquo;</div>
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

            {/* ═══════ BLOQUE 9: HOW IT WORKS ═══════ */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <h2 className="text-3xl font-bold">Así de <span className="text-gradient">simple es contratarnos</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-4 gap-6">
                        {[
                            { step: '1', title: 'Escribinos', desc: 'Por WhatsApp, teléfono o el formulario de abajo.' },
                            { step: '2', title: 'Visita Gratis', desc: 'Vamos a tu casa a ver el problema. Sin cargo en casco urbano.' },
                            { step: '3', title: 'Presupuesto', desc: 'Te damos el precio en el acto, por escrito.' },
                            { step: '4', title: 'Listo', desc: 'Trabajamos, facturamos y dejamos todo impecable.' },
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

            {/* ═══════ BLOQUE 10: MID-PAGE CTA ═══════ */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center glow relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-cyan-600/5 pointer-events-none"></div>
                    <div className="relative z-10 space-y-6">
                        <h2 className="text-3xl sm:text-4xl font-extrabold">¿Listo para resolver tu problema?</h2>
                        <p className="text-slate-300 text-lg max-w-xl mx-auto">
                            No sigas buscando. Mandanos un WhatsApp y en 15 minutos tenés respuesta. Presupuesto sin cargo en casco urbano.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`}
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

            {/* ═══════ BLOQUE 11: FORMULARIO (Al final) ═══════ */}
            <section className="py-20 px-4" id="contacto">
                <div className="max-w-lg mx-auto text-center space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold">Dejanos tus datos y <span className="text-gradient">te contactamos</span></h2>
                        <p className="text-slate-400">Respondemos en menos de 15 minutos. Tu consulta no tiene costo.</p>
                    </div>
                    <ContactForm title="Solicitar Presupuesto Gratis" origin="Home Institucional (Footer Form)" />
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        Tus datos están seguros. No compartimos tu información con nadie.
                    </div>
                </div>
            </section>

            {/* ═══════ BLOQUE 12: FOOTER ═══════ */}
            <footer className="border-t border-white/10 py-10 mt-auto">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
                        <div className="text-center md:text-left">
                            <p className="font-bold text-slate-300 text-base">Junín Soluciones Edilicias</p>
                            <p className="text-xs">by Pablo & Daniel — Junín, Buenos Aires</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a href="/electricidad" className="hover:text-white transition-colors">Electricidad</a>
                            <a href="/plomeria" className="hover:text-white transition-colors">Plomería</a>
                            <a href="/empresas" className="hover:text-white transition-colors">Empresas</a>
                            <a href="/planes" className="hover:text-white transition-colors">Planes</a>
                        </div>
                        <div className="text-center md:text-right">
                            <p>Contacto: <a href={`tel:+${PHONE_PABLO}`} className="text-primary hover:underline">236 430-3960</a> (Pablo)</p>
                            <p className="text-xs mt-1">© 2026 Todos los derechos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ═══════ STICKY MOBILE CTA BAR ═══════ */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3">
                <a href={`tel:+${PHONE_PABLO}`} className="flex-1 text-center glass text-white font-bold py-3 rounded-xl text-sm">
                    📞 Llamar
                </a>
                <a
                    href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm"
                >
                    💬 WhatsApp
                </a>
            </div>

            <WhatsAppButton phoneNumber={PHONE_PABLO} message={WA_MSG} />
        </main>
    );
}
