import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Robinson Homes LLC',
        default: 'Robinson Homes LLC | Building Dreams, Crafting Homes'
    },
    description:
        'Robinson Homes LLC builds opportunities in the Oklahoma real estate market — from strategic rentals to fix & flips to ground-up new construction. Building Wealth, One Brick at a Time.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-white bg-brand-navy" style={{ fontFamily: 'var(--font-sans)' }}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
