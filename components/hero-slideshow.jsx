'use client';

import { useState, useEffect, useCallback } from 'react';

const heroPhotos = [
    { src: '/images/photo-6.jpeg', alt: 'Open-concept kitchen with pendant lighting and entertainment wall' },
    { src: '/images/photo-13.jpeg', alt: 'Luxury dark kitchen with marble island and professional appliances' },
    { src: '/images/photo-14.jpeg', alt: 'Grand two-story foyer with iron staircase and modern chandelier' },
    { src: '/images/photo-7.jpeg', alt: 'Master bathroom with freestanding tub and marble walls' },
    { src: '/images/photo-9.jpeg', alt: 'Kitchen island with farmhouse sink and pendant lights' },
    { src: '/images/photo-12.jpeg', alt: 'Dark cabinet kitchen with marble countertops and starburst chandeliers' },
    { src: '/images/photo-10.jpeg', alt: 'Curved wooden staircase with cascading LED chandelier' },
    { src: '/images/photo-8.jpeg', alt: 'Luxury master bathroom with hexagonal tile and dark vanity' },
    { src: '/images/photo-11.jpeg', alt: 'Curved staircase foyer with pendant chandelier and marble floor' },
];

export function HeroSlideshow({ children }) {
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(1);
    const [transitioning, setTransitioning] = useState(false);

    const advance = useCallback(() => {
        setTransitioning(true);
        setNext((current + 1) % heroPhotos.length);
        const timeout = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % heroPhotos.length);
            setTransitioning(false);
        }, 1200);
        return () => clearTimeout(timeout);
    }, [current]);

    useEffect(() => {
        const timer = setInterval(advance, 5000);
        return () => clearInterval(timer);
    }, [advance]);

    return (
        <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
            {/* Current slide */}
            <div
                className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
                style={{ opacity: transitioning ? 0 : 1, zIndex: 1 }}
            >
                <img
                    src={heroPhotos[current].src}
                    alt={heroPhotos[current].alt}
                    className="w-full h-full object-cover"
                    style={{ animation: 'hero-ken-burns 6s ease-in-out forwards' }}
                    key={`current-${current}`}
                />
            </div>

            {/* Next slide (fades in during transition) */}
            <div
                className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
                style={{ opacity: transitioning ? 1 : 0, zIndex: 2 }}
            >
                <img
                    src={heroPhotos[next].src}
                    alt={heroPhotos[next].alt}
                    className="w-full h-full object-cover"
                    key={`next-${next}`}
                />
            </div>

            {/* Light overlay for text readability */}
            <div className="absolute inset-0 bg-black/30 z-[3]" />

            {/* Content overlay */}
            <div className="relative z-[4] w-full">
                {children}
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[4] flex gap-2">
                {heroPhotos.map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 rounded-full transition-all duration-500 ${
                            i === current
                                ? 'bg-brand-gold w-8'
                                : 'bg-white/40 w-3'
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
