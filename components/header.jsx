'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/properties', label: 'Properties' },
    { href: '/contact', label: 'Contact' },
];

export function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 no-underline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-9 h-9 text-brand-gold"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <div className="flex flex-col">
                            <span
                                className="text-xl sm:text-2xl font-bold text-brand-navy tracking-wide leading-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Robinson Homes
                            </span>
                            <span className="text-xs text-brand-gold tracking-widest uppercase font-semibold">LLC</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium no-underline transition-colors ${
                                    pathname === link.href
                                        ? 'text-brand-gold'
                                        : 'text-brand-navy hover:text-brand-gold'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="btn btn-primary text-sm no-underline">
                            Get in Touch
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-brand-navy"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2 text-sm font-medium no-underline ${
                                    pathname === link.href
                                        ? 'text-brand-gold'
                                        : 'text-brand-navy hover:text-brand-gold'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary text-sm no-underline mt-2 w-full">
                            Get in Touch
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
