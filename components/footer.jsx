export function Footer() {
    return (
        <footer className="bg-brand-dark border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            Robinson Homes LLC
                        </h3>
                        <p className="text-brand-gold text-sm tracking-wide mb-4">Building Dreams, Crafting Homes</p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Oklahoma Real Estate Since 2016. Building wealth through strategic real estate investments.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="tel:+14054766398"
                                    className="text-gray-400 no-underline hover:text-brand-gold transition-colors flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                    </svg>
                                    (405) 476-6398
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:justin@robinsonhomesllc.com"
                                    className="text-gray-400 no-underline hover:text-brand-gold transition-colors flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                                        <path d="M22 7l-10 6L2 7"/>
                                    </svg>
                                    justin@robinsonhomesllc.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">Our Services</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Strategic Rentals</li>
                            <li>Fix &amp; Flips</li>
                            <li>New Construction</li>
                            <li>Real Estate Consulting</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Robinson Homes LLC. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-500">
                        Building Wealth, One Brick at a Time
                    </p>
                </div>
            </div>
        </footer>
    );
}
