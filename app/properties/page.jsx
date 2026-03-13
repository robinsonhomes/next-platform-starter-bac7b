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
        description: 'Charming single-story home with covered porch, attached garage, and spacious front yard.',
        image: '/images/house-1305.jpeg',
    },
    {
        name: 'Brick & Timber Home',
        badge: 'Investment',
        badgeColor: 'bg-brand-navy',
        description: 'Solid brick and timber construction with double garage, mature trees, and generous backyard.',
        image: '/images/house-brick-timber.jpeg',
    },
    {
        name: 'Ranch Style Home',
        badge: 'New',
        badgeColor: 'bg-emerald-600',
        description: 'Spacious ranch-style home with classic shutters, circular driveway, and plenty of room to grow.',
        image: '/images/house-ranch.jpeg',
    },
    {
        name: 'Modern Luxury Home',
        badge: 'Popular',
        badgeColor: 'bg-rose-600',
        description: 'Stunning modern two-story home with sleek stucco exterior, black trim accents, and grand entrance.',
        image: '/images/house-modern-luxury.jpeg',
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
                        backgroundImage: 'url(/images/photo-13.jpeg)',
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
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {property.description}
                                    </p>
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
