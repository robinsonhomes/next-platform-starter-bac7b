import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-brand-navy text-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-brand-gold"
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
                            <span
                                className="text-xl font-bold tracking-wide"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Robinson Homes LLC
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Building wealth, one brick at a time. Oklahoma real estate since 2016.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="text-gray-400 no-underline hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-400 no-underline hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties" className="text-gray-400 no-underline hover:text-white transition-colors">
                                    Properties
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 no-underline hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="tel:+14054766398"
                                    className="text-gray-400 no-underline hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                    </svg>
                                    (405) 476-6398
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:justin@robinsonhomesllc.com"
                                    className="text-gray-400 no-underline hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="M22 7l-10 6L2 7"/>
                                    </svg>
                                    justin@robinsonhomesllc.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; 2026 Robinson Homes LLC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
