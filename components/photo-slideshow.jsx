'use client';

import { useState, useEffect, useCallback } from 'react';

const photos = [
    { src: '/images/photo-1.jpeg', alt: 'Modern open-concept kitchen with pendant lighting and hardwood floors', label: 'Kitchen & Living' },
    { src: '/images/photo-2.jpeg', alt: 'Luxury master bathroom with marble walls and freestanding tub', label: 'Master Bath' },
    { src: '/images/photo-3.jpeg', alt: 'Curved wooden staircase with cascading pendant chandelier', label: 'Custom Staircase' },
    { src: '/images/photo-4.jpeg', alt: 'Luxury dark kitchen with marble island and professional appliances', label: 'Gourmet Kitchen' },
    { src: '/images/photo-5.jpeg', alt: 'Grand two-story foyer with curved staircase and chandelier', label: 'Grand Foyer' },
];

export function PhotoSlideshow() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback((index) => {
        if (isTransitioning || index === current) return;
        setIsTransitioning(true);
        setCurrent(index);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [isTransitioning, current]);

    const next = useCallback(() => {
        goTo((current + 1) % photos.length);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + photos.length) % photos.length);
    }, [current, goTo]);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <div className="relative w-full overflow-hidden rounded-xl shadow-2xl" style={{ aspectRatio: '16/9' }}>
            {/* Slides */}
            {photos.map((photo, i) => (
                <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
                    style={{
                        opacity: i === current ? 1 : 0,
                        zIndex: i === current ? 1 : 0,
                    }}
                >
                    <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        style={{
                            animation: i === current ? 'ken-burns 8s ease-in-out forwards' : 'none',
                        }}
                    />
                </div>
            ))}

            {/* Gradient overlay at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-[2]" />

            {/* Label */}
            <div className="absolute bottom-6 left-6 z-[3]">
                <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm text-brand-navy text-sm font-semibold rounded-full shadow-md" style={{ fontFamily: 'var(--font-display)' }}>
                    {photos[current].label}
                </span>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-[3] w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-brand-navy hover:bg-white transition-colors shadow-md"
                aria-label="Previous photo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
            </button>
            <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-[3] w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-brand-navy hover:bg-white transition-colors shadow-md"
                aria-label="Next photo"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 right-6 z-[3] flex gap-2">
                {photos.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            i === current
                                ? 'bg-brand-gold w-7'
                                : 'bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Go to photo ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
