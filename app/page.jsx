import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[600px] flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80)',
                    }}
                />
                <div className="absolute inset-0 bg-brand-navy/70" />
                <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-24 sm:py-32 lg:py-40 text-center w-full">
                    <p className="text-brand-gold text-sm sm:text-base font-semibold tracking-widest uppercase mb-6">
                        Oklahoma Real Estate Since 2016
                    </p>
                    <h1 className="!text-white mb-6 leading-tight">
                        Building Wealth,
                        <br />
                        <span className="text-brand-gold">One Brick at a Time</span>
                    </h1>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                        <Link href="/properties" className="btn btn-primary btn-lg no-underline">
                            View Our Homes
                        </Link>
                        <Link href="/contact" className="btn btn-outline btn-lg no-underline !border-white !text-white hover:!bg-white hover:!text-brand-navy">
                            Get a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-brand-navy">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div>
                            <p className="text-brand-gold text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>$3M+</p>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">Asset Portfolio</p>
                        </div>
                        <div>
                            <p className="text-brand-gold text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>2016</p>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">Founded</p>
                        </div>
                        <div>
                            <p className="text-brand-gold text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>360&deg;</p>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">Industry Expertise</p>
                        </div>
                        <div>
                            <p className="text-brand-gold text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>100%</p>
                            <p className="text-gray-400 text-xs sm:text-sm mt-1">Grit &amp; Hustle</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Preview */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                                alt="Modern interior home design"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
                                About Us
                            </p>
                            <h2 className="mb-6">
                                Building Wealth Through Real Estate
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Since 2016, Robinson Homes LLC has been a staple in the Oklahoma real estate market.
                                    What began as a vision has grown into a $3 million asset portfolio.
                                </p>
                                <p>
                                    Built on a foundation of grit, local expertise, and a proven track record of success,
                                    we don&apos;t just build houses &mdash; we build opportunities.
                                </p>
                            </div>
                            <Link href="/about" className="btn btn-primary mt-8 no-underline">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className="bg-brand-light">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
                            What We Offer
                        </p>
                        <h2 className="mb-4">Our Services</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Strategic Rentals */}
                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                    <path d="M9 22V12h6v10"/>
                                </svg>
                            </div>
                            <h3 className="text-lg mb-2">Strategic Rentals</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Long-term passive income through carefully selected rental properties</p>
                        </div>

                        {/* Fix & Flips */}
                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg mb-2">Fix &amp; Flips</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">High-value transformations turning undervalued properties into gems</p>
                        </div>

                        {/* New Construction */}
                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
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
                            <h3 className="text-lg mb-2">New Construction</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Modern homes built from scratch to your exact specifications</p>
                        </div>

                        {/* Investment Guidance */}
                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                                </svg>
                            </div>
                            <h3 className="text-lg mb-2">Investment Guidance</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Expert advice to help grow your real estate portfolio</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
                        <h2 className="mb-4">Featured Properties</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80"
                                    alt="1305 Property"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl mb-3">1305 Property</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M2 7h20"/><path d="M9 20V7"/><path d="M15 20V7"/></svg>
                                        3 Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16a1 1 0 011 1v3a1 1 0 01-1 1H4"/><path d="M4 12V6a2 2 0 012-2h3a2 2 0 012 2v6"/></svg>
                                        2 Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                                        1,800 sqft
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                    alt="Brick & Timber Home"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl mb-3">Brick &amp; Timber Home</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M2 7h20"/><path d="M9 20V7"/><path d="M15 20V7"/></svg>
                                        3 Beds
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16a1 1 0 011 1v3a1 1 0 01-1 1H4"/><path d="M4 12V6a2 2 0 012-2h3a2 2 0 012 2v6"/></svg>
                                        2 Baths
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                                        1,600 sqft
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/properties" className="btn btn-outline btn-lg no-underline">
                            View All Properties
                        </Link>
                    </div>
                </div>
            </section>

            {/* Design Showcase */}
            <section className="bg-brand-light">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">Craftsmanship</p>
                        <h2 className="mb-4">Design Showcase</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group relative rounded-lg overflow-hidden aspect-[3/4] shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                                alt="Kitchen Design"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="!text-white text-lg">Kitchen Design</h3>
                            </div>
                        </div>
                        <div className="group relative rounded-lg overflow-hidden aspect-[3/4] shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80"
                                alt="Living Spaces"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="!text-white text-lg">Living Spaces</h3>
                            </div>
                        </div>
                        <div className="group relative rounded-lg overflow-hidden aspect-[3/4] shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80"
                                alt="Bathrooms"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="!text-white text-lg">Bathrooms</h3>
                            </div>
                        </div>
                        <div className="group relative rounded-lg overflow-hidden aspect-[3/4] shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                                alt="Kitchen Details"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <h3 className="!text-white text-lg">Kitchen Details</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Building Process */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
                        <h2 className="mb-4">Building Process</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-brand-gold/20 mb-4" style={{ fontFamily: 'var(--font-display)' }}>01</div>
                            <h3 className="text-lg mb-2">Consultation</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">We discuss your goals, budget, and vision for your ideal property or investment.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-brand-gold/20 mb-4" style={{ fontFamily: 'var(--font-display)' }}>02</div>
                            <h3 className="text-lg mb-2">Design &amp; Planning</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Our team creates detailed plans and designs tailored to your specific needs.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-brand-gold/20 mb-4" style={{ fontFamily: 'var(--font-display)' }}>03</div>
                            <h3 className="text-lg mb-2">Construction</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Quality craftsmanship brings your vision to life with attention to every detail.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-brand-gold/20 mb-4" style={{ fontFamily: 'var(--font-display)' }}>04</div>
                            <h3 className="text-lg mb-2">Move In</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Your dream home is ready. We ensure a smooth handoff and your complete satisfaction.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-brand-light">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
                        <h2 className="mb-4">What Our Clients Say</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                &ldquo;Robinson Homes made our dream of owning a home a reality. Their attention to detail and commitment to quality is unmatched. We couldn&apos;t be happier with our new home.&rdquo;
                            </p>
                            <p className="font-semibold text-brand-navy text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                                Sarah &amp; David Mitchell
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                &ldquo;As a first-time investor, I was nervous about the process. The Robinson Homes team guided me every step of the way. My rental property is already generating great returns.&rdquo;
                            </p>
                            <p className="font-semibold text-brand-navy text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                                James Rodriguez
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="currentColor">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                &ldquo;The renovation of our home exceeded all expectations. Robinson Homes transformed an outdated property into a modern masterpiece. Their craftsmanship is truly exceptional.&rdquo;
                            </p>
                            <p className="font-semibold text-brand-navy text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                                Emily &amp; Tom Chen
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative overflow-hidden bg-brand-navy">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
                    <h2 className="!text-white mb-4">Ready to Build Your Legacy?</h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Whether you&apos;re looking to invest, build, or find your dream home &mdash; Robinson Homes LLC is ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn btn-primary btn-lg no-underline">
                            Schedule a Consultation
                        </Link>
                        <Link href="/properties" className="btn btn-outline btn-lg no-underline !border-white !text-white hover:!bg-white hover:!text-brand-navy">
                            Browse Our Homes
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
