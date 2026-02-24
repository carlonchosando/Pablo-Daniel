'use client';

import Link from 'next/link';

const PHONE_PABLO = '5492364303960';

const footerLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/electricidad', label: 'Electricidad' },
    { href: '/plomeria', label: 'Plomería' },
    { href: '/pintura', label: 'Pintura' },
    { href: '/construccion-seco', label: 'Construcción' },
    { href: '/empresas', label: 'Empresas' },
    { href: '/planes', label: 'Planes' },
];

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 mt-auto">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                <p className="font-bold text-slate-300">Junín Soluciones Edilicias — by Pablo & Daniel</p>
                <div className="flex flex-wrap gap-6">
                    {footerLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>
                <p>Contacto: <a href={`tel:+${PHONE_PABLO}`} className="text-primary hover:underline">236 430-3960</a></p>
            </div>
        </footer>
    );
}
