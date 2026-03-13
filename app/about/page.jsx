import Link from 'next/link';

export const metadata = {
    title: 'About',
    description: 'Learn about Robinson Homes LLC — Oklahoma real estate since 2016. From a vision to a $3M+ asset portfolio.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&q=80)',
                    }}
                />
                <div className="absolute inset-0 bg-brand-navy/75" />
                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
                    <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
                    <h1 className="!text-white mb-6">About Robinson Homes LLC</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Building wealth through real estate in Oklahoma since 2016.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                                alt="Robinson Homes interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute -bottom-4 -right-2 sm:right-4 bg-brand-gold text-white px-6 py-4 rounded-lg shadow-xl">
                                <p className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                    $3M+
                                </p>
                                <p className="text-xs font-semibold uppercase tracking-wider">Asset Portfolio</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
                                Our Story
                            </p>
                            <h2 className="mb-6">
                                Building Wealth Through Real Estate
                            </h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Since 2016, Robinson Homes LLC has been a staple in the Oklahoma real estate market.
                                    What began as a vision has grown into a $3 million asset portfolio, built on a foundation
                                    of grit, local expertise, and a proven track record of success.
                                </p>
                                <p>
                                    We don&apos;t just build houses &mdash; we build opportunities. From strategic rentals to
                                    fix &amp; flips to ground-up new construction, our approach is rooted in creating lasting
                                    value for our clients and our community.
                                </p>
                                <p>
                                    Our team brings 360-degree industry expertise to every project, combining deep market
                                    knowledge with hands-on experience to deliver results that exceed expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-brand-navy">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-brand-gold text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>$3M+</p>
                            <p className="text-gray-400 text-sm mt-2">Asset Portfolio</p>
                        </div>
                        <div>
                            <p className="text-brand-gold text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>2016</p>
                            <p className="text-gray-400 text-sm mt-2">Founded</p>
                        </div>
                        <div>
                            <p className="text-brand-gold text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>360&deg;</p>
                            <p className="text-gray-400 text-sm mt-2">Industry Expertise</p>
                        </div>
                        <div>
                            <p className="text-brand-gold text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>100%</p>
                            <p className="text-gray-400 text-sm mt-2">Grit &amp; Hustle</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-brand-light">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="text-center mb-16">
                        <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
                        <h2 className="mb-4">Our Services</h2>
                        <div className="section-divider mt-6" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                                    <path d="M9 22V12h6v10"/>
                                </svg>
                            </div>
                            <h3 className="text-lg mb-2">Strategic Rentals</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Long-term passive income through carefully selected rental properties across Oklahoma.</p>
                        </div>

                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg mb-2">Fix &amp; Flips</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">High-value transformations turning undervalued properties into profitable investments.</p>
                        </div>

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
                            <p className="text-gray-500 text-sm leading-relaxed">Modern homes built from scratch with quality materials and expert craftsmanship.</p>
                        </div>

                        <div className="group text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-gold/10 flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                                </svg>
                            </div>
                            <h3 className="text-lg mb-2">Investment Guidance</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">Expert advice and mentorship to help grow your real estate portfolio from the ground up.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-brand-navy">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 text-center">
                    <h2 className="!text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Let&apos;s discuss how Robinson Homes LLC can help you achieve your real estate goals.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg no-underline">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </div>
    );
}
