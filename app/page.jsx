export default function Page() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-dark to-brand-slate" />
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(201,168,76,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.15) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>
                <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32 lg:py-40 text-center">
                    <p className="text-brand-gold text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
                        Oklahoma Real Estate Since 2016
                    </p>
                    <h1 className="text-white mb-6 leading-tight">
                        Building Dreams,
                        <br />
                        <span className="text-brand-gold">Crafting Homes</span>
                    </h1>
                    <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
                        Building Wealth, One Brick at a Time
                    </p>
                    <p className="text-gray-400 text-base max-w-xl mx-auto mb-10">
                        From strategic rentals to fix &amp; flips to ground-up new construction — let&apos;s build your legacy together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#about" className="btn btn-primary btn-lg no-underline">
                            Learn More About Us
                        </a>
                        <a href="tel:+14054766398" className="btn btn-outline btn-lg no-underline">
                            Call (405) 476-6398
                        </a>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="relative bg-brand-dark">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image Side */}
                        <div className="relative">
                            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-slate via-brand-navy to-brand-dark" />
                                {/* Interior home illustration */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-32 h-32 text-brand-gold/30"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                        <polyline points="9 22 9 12 15 12 15 22" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                            {/* Portfolio Badge */}
                            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-brand-gold text-brand-navy px-6 py-4 rounded-lg shadow-xl">
                                <p className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                    $3M+
                                </p>
                                <p className="text-xs font-semibold uppercase tracking-wider">Asset Portfolio</p>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div>
                            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
                                About Us
                            </p>
                            <h2 className="text-white mb-6">
                                Building Wealth Through Real Estate
                            </h2>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                <p>
                                    Robinson Homes LLC builds opportunities in the Oklahoma real estate market — from strategic
                                    rentals to fix &amp; flips to ground-up new construction. Let&apos;s build your legacy together.
                                </p>
                                <p>
                                    Since 2016, Robinson Homes LLC has been a staple in the Oklahoma real estate market. What began
                                    as a vision has grown into a $3 million asset portfolio, built on a foundation of grit, local
                                    expertise, and a proven track record of success.
                                </p>
                                <p className="text-white font-medium text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                                    We don&apos;t just build houses — we build opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Four Icons Section */}
            <section className="bg-brand-navy">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
                            What We Do
                        </p>
                        <h2 className="text-white mb-4">Our Expertise</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Strategic Rentals */}
                        <div className="group text-center p-8 rounded-lg bg-brand-dark/50 border border-white/5 hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                    <path d="M9 22V12h6v10"/>
                                </svg>
                            </div>
                            <h3 className="text-white text-lg mb-2">Strategic Rentals</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Long-term passive income
                            </p>
                        </div>

                        {/* Fix & Flips */}
                        <div className="group text-center p-8 rounded-lg bg-brand-dark/50 border border-white/5 hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                                </svg>
                            </div>
                            <h3 className="text-white text-lg mb-2">Fix &amp; Flips</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                High-value transformations
                            </p>
                        </div>

                        {/* New Construction */}
                        <div className="group text-center p-8 rounded-lg bg-brand-dark/50 border border-white/5 hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="6" width="20" height="16" rx="2"/>
                                    <path d="M12 2v4"/>
                                    <path d="M2 12h20"/>
                                    <path d="M7 12v6"/>
                                    <path d="M12 12v6"/>
                                    <path d="M17 12v6"/>
                                </svg>
                            </div>
                            <h3 className="text-white text-lg mb-2">New Construction</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Modern homes from scratch
                            </p>
                        </div>

                        {/* Proven Results */}
                        <div className="group text-center p-8 rounded-lg bg-brand-dark/50 border border-white/5 hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                                </svg>
                            </div>
                            <h3 className="text-white text-lg mb-2">Proven Results</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                $0 to $3M portfolio
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-14">
                        <a href="#about" className="btn btn-primary btn-lg no-underline">
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-brand-dark">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/5 to-brand-gold/10" />
                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-24 text-center">
                    <h2 className="text-white mb-4">Ready to Build Your Legacy?</h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you&apos;re looking to invest, build, or partner — Robinson Homes LLC is ready to help you achieve your real estate goals in Oklahoma.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:+14054766398" className="btn btn-primary btn-lg no-underline">
                            Call Us Today
                        </a>
                        <a href="mailto:justin@robinsonhomesllc.com" className="btn btn-outline btn-lg no-underline">
                            Send an Email
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
