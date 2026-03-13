import Link from 'next/link';

export const metadata = {
    title: 'Properties',
    description: 'Browse our portfolio of Oklahoma properties — from single-family homes to investment opportunities.',
};

const properties = [
    {
        name: '1305 Property',
        badge: 'Featured',
        badgeColor: 'bg-brand-gold',
        beds: 3,
        baths: 2,
        sqft: '1,800',
        description: 'Charming single-story home with covered porch, attached garage, and spacious front yard.',
        image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80',
    },
    {
        name: 'Brick & Timber Home',
        badge: 'Investment',
        badgeColor: 'bg-brand-navy',
        beds: 3,
        baths: 2,
        sqft: '1,600',
        description: 'Solid brick and timber construction with double garage, mature trees, and generous backyard.',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
        name: 'Ranch Style Home',
        badge: 'New',
        badgeColor: 'bg-emerald-600',
        beds: 4,
        baths: 2,
        sqft: '2,200',
        description: 'Spacious ranch-style home with classic shutters, circular driveway, and plenty of room to grow.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    },
    {
        name: 'Stone Two-Story',
        badge: 'Popular',
        badgeColor: 'bg-rose-600',
        beds: 4,
        baths: 3,
        sqft: '2,400',
        description: 'Two-story home with stone chimney accent, two-car garage, and well-established neighborhood setting.',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    },
];

export default function PropertiesPage() {
    return (
        <div className="flex flex-col">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80)',
                    }}
                />
                <div className="absolute inset-0 bg-brand-navy/75" />
                <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
                    <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-4">Portfolio</p>
                    <h1 className="!text-white mb-6">Our Properties</h1>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Explore our portfolio of Oklahoma homes and investment properties.
                    </p>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="bg-white">
                <div className="max-w-6xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {properties.map((property) => (
                            <div
                                key={property.name}
                                className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={property.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className={`absolute top-4 left-4 ${property.badgeColor} text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider`}>
                                        {property.badge}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl mb-2">{property.name}</h3>
                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                                        {property.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                                        <span className="flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"/><path d="M2 7h20"/><path d="M9 20V7"/><path d="M15 20V7"/></svg>
                                            {property.beds} Beds
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16a1 1 0 011 1v3a1 1 0 01-1 1H4"/><path d="M4 12V6a2 2 0 012-2h3a2 2 0 012 2v6"/></svg>
                                            {property.baths} Baths
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                                            {property.sqft} sqft
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-brand-navy">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 py-20 text-center">
                    <h2 className="!text-white mb-4">Interested in a Property?</h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                        Contact us today to schedule a viewing or learn more about our available properties.
                    </p>
                    <Link href="/contact" className="btn btn-primary btn-lg no-underline">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
