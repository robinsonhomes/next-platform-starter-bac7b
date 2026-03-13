import Link from 'next/link';

export function Header() {
    return (
        <nav className="bg-brand-navy/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex flex-col no-underline">
                        <span
                            className="text-xl sm:text-2xl font-bold text-white tracking-wide"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Robinson Homes
                        </span>
                        <span className="text-xs text-brand-gold tracking-widest uppercase">LLC</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+14054766398"
                            className="hidden sm:flex items-center gap-2 text-sm text-gray-300 no-underline hover:text-brand-gold transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                            </svg>
                            (405) 476-6398
                        </a>
                        <a
                            href="mailto:justin@robinsonhomesllc.com"
                            className="hidden md:flex items-center gap-2 text-sm text-gray-300 no-underline hover:text-brand-gold transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2"/>
                                <path d="M22 7l-10 6L2 7"/>
                            </svg>
                            justin@robinsonhomesllc.com
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
