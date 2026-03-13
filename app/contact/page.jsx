export const metadata = {
    title: 'Contact',
    description: 'Get in touch with Robinson Homes LLC. Call (405) 476-6398 or email justin@robinsonhomesllc.com.',
};

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(/images/about-robinson-homes-bg.jpg)',
                    }}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
                    <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">Get in Touch</p>
                    <h1 className="!text-white mb-6">Contact Robinson Homes LLC</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Ready to start your real estate journey? We&apos;d love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Contact Info */}
                        <div>
                            <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
                                Contact Information
                            </p>
                            <h2 className="mb-6">Let&apos;s Build Together</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Whether you have questions about our properties, want to discuss investment
                                opportunities, or are ready to start building &mdash; we&apos;re here to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold mb-1">Phone</h3>
                                        <a href="tel:+14054766398" className="text-gray-600 no-underline hover:text-brand-gold transition-colors">
                                            (405) 476-6398
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                                            <path d="M22 7l-10 6L2 7"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold mb-1">Email</h3>
                                        <a href="mailto:justin@robinsonhomesllc.com" className="text-gray-600 no-underline hover:text-brand-gold transition-colors">
                                            justin@robinsonhomesllc.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                                            <circle cx="12" cy="10" r="3"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold mb-1">Location</h3>
                                        <p className="text-gray-600">Oklahoma</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-brand-light rounded-lg p-8 sm:p-10">
                            <h3 className="text-2xl mb-6">Send Us a Message</h3>
                            <form name="contact" method="POST" data-netlify="true" className="space-y-5">
                                <input type="hidden" name="form-name" value="contact" />
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-navy mb-1.5">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-navy mb-1.5">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-brand-navy mb-1.5">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition"
                                        placeholder="(555) 555-5555"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-brand-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition resize-none"
                                        placeholder="Tell us about your project or question..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg w-full"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
