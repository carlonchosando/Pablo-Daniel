import React from 'react';
import WhatsAppButton from '../../components/WhatsAppButton';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import type { Metadata } from 'next';
import Footer from '../../components/Footer';

const PHONE_PABLO = '5492364303960';
const WA_MSG = 'Hola Pablo, me interesa la construcción en seco en Junín...';

export const metadata: Metadata = {
    title: 'Construcción en Seco en Junín - Durlock y Steel Framing | Pablo & Daniel',
    description: 'Ampliaciones, cielorrasos, divisorios y casas completas en seco. Hasta 70% más rápido que la obra tradicional. Presupuesto sin cargo.',
};

export default function ConstruccionSeco() {
    return (
        <main className="min-h-screen flex flex-col">

            {/* HERO */}
            <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[100px] animate-float"></div>
                </div>
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
                <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-8 py-20">
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        Más de 10.000 viviendas en Argentina ya usan este sistema
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight max-w-4xl mx-auto">
                        Construcción en Seco: <br className="hidden sm:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400">Sin escombros, sin demoras.</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        <strong className="text-white">Hasta 70% más rápido que la obra tradicional.</strong> Durlock, Steel Framing y cielorrasos. Obra limpia, presupuesto cerrado y sin sorpresas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                            Consultar por WhatsApp
                        </a>
                        <a href="#servicios" className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">Ver Servicios ↓</a>
                    </div>
                </div>
            </section>

            {/* TRUST BAR */}
            <section className="py-6 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-x-10 gap-y-4">
                    {[{ icon: '⏱️', text: '70% Más Rápido' }, { icon: '🧹', text: 'Obra Sin Escombros' }, { icon: '🌿', text: '47% Menos CO₂' }, { icon: '🔥', text: '60% Ahorro Energético' }, { icon: '🏗️', text: 'Acero: 300 Años' }].map(b => (
                        <div key={b.text} className="flex items-center gap-2 text-sm text-slate-300 font-medium"><span className="text-lg">{b.icon}</span> {b.text}</div>
                    ))}
                </div>
            </section>

            {/* PAIN POINTS */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <p className="text-red-400 font-semibold tracking-widest uppercase text-sm">¿Te pasa esto?</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Problemas de la <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-400">obra tradicional</span></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { emoji: '🧱', title: '"3 meses mínimo"', desc: 'El albañil te dice que tarda meses. En seco lo hacemos en semanas.' },
                            { emoji: '🗑️', title: 'Escombros y barro', desc: 'Tu casa se llena de polvo, cascotes y suciedad durante meses.' },
                            { emoji: '💸', title: 'Presupuesto que sube', desc: 'La inflación te come el presupuesto porque la obra nunca termina.' },
                            { emoji: '🥶', title: 'Frío en invierno', desc: 'Paredes de ladrillo sin aislación. Pagás fortunas de gas.' },
                        ].map(p => (
                            <div key={p.title} className="bg-red-500/5 border border-red-500/15 rounded-2xl p-6 text-center hover:border-red-500/30 transition-all">
                                <div className="text-4xl mb-3">{p.emoji}</div>
                                <h3 className="font-bold mb-2 text-red-300">{p.title}</h3>
                                <p className="text-slate-400 text-sm">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICIOS */}
            <section id="servicios" className="py-20 px-4 scroll-mt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14 space-y-3">
                        <p className="text-primary font-semibold tracking-widest uppercase text-sm">Nuestros Servicios</p>
                        <h2 className="text-3xl sm:text-4xl font-bold">Construcción en seco <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-400">para todo tipo de proyecto</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: '🏠', title: 'Ampliaciones', desc: 'Habitaciones, baños y dependencias extra. Listas en semanas, no meses.', wa: 'Hola Pablo, quiero ampliar mi casa con construcción en seco.' },
                            { icon: '🔲', title: 'Cielorrasos', desc: 'Durlock suspendido o aplicado. Ocultar instalaciones, bajar alturas, mejorar aislación.', wa: 'Hola Pablo, necesito un cielorraso de Durlock.' },
                            { icon: '🏢', title: 'Divisorios de Ambientes', desc: 'Separar oficinas, consultorios o habitaciones sin obra húmeda.', wa: 'Hola Pablo, necesito tabiques divisorios de Durlock.' },
                            { icon: '🧱', title: 'Revestimiento Interior', desc: 'Aislación térmica y acústica aplicando placas sobre paredes existentes.', wa: 'Hola Pablo, quiero revestir paredes con Durlock.' },
                            { icon: '🏗️', title: 'Steel Framing', desc: 'Casas completas con estructura de acero galvanizado. Antisísmico y sustentable.', wa: 'Hola Pablo, me interesa Steel Framing para una casa.' },
                            { icon: '🔧', title: 'Reparaciones en Seco', desc: 'Parches, agujeros y reformas en paredes de Durlock existentes.', wa: 'Hola Pablo, necesito reparar una pared de Durlock.' },
                        ].map(s => (
                            <div key={s.title} className="glass border-emerald-500/10 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-lime-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                                <div className="relative z-10 space-y-4">
                                    <div className="text-4xl">{s.icon}</div>
                                    <h3 className="text-xl font-bold">{s.title}</h3>
                                    <p className="text-slate-400 text-sm">{s.desc}</p>
                                    <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(s.wa)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-all hover:scale-105 shadow-lg shadow-green-500/10">💬 Pedir Presupuesto</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VENTAJAS VS HÚMEDO */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12"><h2 className="text-3xl sm:text-4xl font-bold">Construcción en seco vs. <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-400">tradicional</span></h2></div>
                    <div className="glass rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead><tr className="border-b border-white/10"><th className="p-4 text-left text-slate-400">Aspecto</th><th className="p-4 text-center text-emerald-400 font-bold">En Seco 🏗️</th><th className="p-4 text-center text-red-400 font-bold">Tradicional 🧱</th></tr></thead>
                            <tbody>
                                {[
                                    ['Tiempo de obra', 'Semanas', 'Meses'],
                                    ['Escombros', 'Casi nulos', 'Mucho polvo y cascotes'],
                                    ['Aislación térmica', 'Excelente (60% ahorro)', 'Mala sin agregados'],
                                    ['Aislación acústica', 'Superior', 'Básica'],
                                    ['Flexibilidad de diseño', 'Muy alta', 'Limitada'],
                                    ['Impacto ambiental', '47% menos CO₂', 'Alto'],
                                    ['Resistencia', 'Acero galvanizado 300 años', 'Ladrillo 80-100 años'],
                                ].map(([a, b, c], i) => (
                                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-all"><td className="p-4 text-slate-300 font-medium">{a}</td><td className="p-4 text-center text-emerald-300">{b}</td><td className="p-4 text-center text-slate-500">{c}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                        {[{ num: '+10.000', label: 'Casas en seco en Argentina' }, { num: '70%', label: 'Más rápido' }, { num: '60%', label: 'Ahorro energético' }, { num: '300 años', label: 'Vida útil del acero' }].map(m => (
                            <div key={m.label} className="glass rounded-xl p-5 text-center">
                                <div className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-400">{m.num}</div>
                                <div className="text-slate-400 text-xs mt-1">{m.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                        {[
                            { quote: 'Amplié la casa con una habitación y un baño en 3 semanas. Cero escombros. Mis vecinos no lo podían creer.', author: 'Diego R.', loc: 'Junín' },
                            { quote: 'Hicimos un cielorraso en el local y bajó la temperatura en verano. Ahora gasto mucho menos de aire acondicionado.', author: 'Comerciante', loc: 'Junín Centro' },
                            { quote: 'Quería dividir un ambiente grande en dos oficinas. Con Durlock lo hicieron en 2 días. Perfecto.', author: 'Profesional', loc: 'Junín' },
                        ].map((t, i) => (
                            <div key={i} className="glass rounded-2xl p-6 relative"><div className="text-4xl text-emerald-500/30 absolute top-4 left-5">&ldquo;</div><p className="text-slate-300 text-sm italic mt-6 mb-4">{t.quote}</p><div className="border-t border-white/10 pt-3"><p className="font-bold text-sm">{t.author}</p><p className="text-slate-500 text-xs">{t.loc}</p></div></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRUST BADGES */}
            <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><div className="glass rounded-2xl p-8 flex flex-wrap justify-center gap-8">
                {[{ icon: '🏗️', label: 'Acero Galvanizado' }, { icon: '🔥', label: 'Placas Ignífugas' }, { icon: '🧾', label: 'Factura Legal' }, { icon: '🛡️', label: 'Garantía Escrita' }, { icon: '🧹', label: 'Obra Limpia' }].map(b => (
                    <div key={b.label} className="flex flex-col items-center gap-2 w-28"><div className="w-16 h-16 glass rounded-full flex items-center justify-center text-2xl border border-emerald-500/20">{b.icon}</div><span className="text-xs text-slate-300 text-center font-medium leading-tight">{b.label}</span></div>
                ))}
            </div></div></section>

            {/* HOW IT WORKS */}
            <section className="py-20 px-4"><div className="max-w-4xl mx-auto"><div className="text-center mb-12"><h2 className="text-3xl font-bold">Así hacemos tu <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-400">obra en seco</span></h2></div>
                <div className="grid sm:grid-cols-4 gap-6">
                    {[{ step: '1', title: 'Consulta', desc: 'Contanos qué necesitás y te asesoramos sobre la mejor solución.' }, { step: '2', title: 'Visita y Medición', desc: 'Vamos, tomamos medidas y te damos presupuesto cerrado.' }, { step: '3', title: 'Ejecución', desc: 'Montamos la estructura, instalamos placas y terminamos.' }, { step: '4', title: 'Entrega', desc: 'Listo para pintar. Sin escombros. Garantía por escrito.' }].map((s, i) => (
                        <div key={s.step} className="text-center relative">
                            {i < 3 && <div className="hidden sm:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-emerald-500/40 to-transparent"></div>}
                            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center text-white text-2xl font-extrabold mb-4 shadow-lg shadow-emerald-500/20 relative z-10">{s.step}</div>
                            <h3 className="font-bold mb-1">{s.title}</h3><p className="text-slate-400 text-sm">{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div></section>

            {/* MID CTA */}
            <section className="py-16 px-4"><div className="max-w-4xl mx-auto glass rounded-3xl p-10 md:p-16 text-center glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-lime-600/5 pointer-events-none"></div>
                <div className="relative z-10 space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">¿Querés ampliar o reformar sin obra húmeda?</h2>
                    <p className="text-slate-300 text-lg max-w-xl mx-auto">Presupuesto cerrado, obra limpia, plazos que se cumplen. Mandanos un WhatsApp.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-105 text-lg">💬 WhatsApp</a>
                        <a href={`tel:+${PHONE_PABLO}`} className="inline-flex items-center justify-center gap-3 glass hover:bg-white/10 text-white font-bold py-4 px-10 rounded-xl transition-all text-lg">📞 236 430-3960</a>
                    </div>
                </div>
            </div></section>

            {/* FORM */}
            <section className="py-20 px-4" id="contacto"><div className="max-w-lg mx-auto text-center space-y-8">
                <div className="space-y-3"><h2 className="text-3xl font-bold">Dejanos tus datos y <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-lime-400">te contactamos</span></h2><p className="text-slate-400">Respondemos en menos de 15 minutos.</p></div>
                <ContactForm title="Consulta de Construcción en Seco" defaultService="General" origin="Landing Construccion Seco" />
                <div className="flex items-center justify-center gap-2 text-xs text-slate-500"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>Tus datos están seguros.</div>
            </div></section>

            {/* FOOTER */}
            <Footer />

            {/* MOBILE BAR */}
            <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/10 p-3 flex gap-3">
                <a href={`tel:+${PHONE_PABLO}`} className="flex-1 text-center glass text-white font-bold py-3 rounded-xl text-sm">📞 Llamar</a>
                <a href={`https://wa.me/${PHONE_PABLO}?text=${encodeURIComponent(WA_MSG)}`} target="_blank" rel="noopener noreferrer" className="flex-1 text-center bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm">💬 WhatsApp</a>
            </div>
            <WhatsAppButton phoneNumber={PHONE_PABLO} message={WA_MSG} />
        </main>
    );
}
