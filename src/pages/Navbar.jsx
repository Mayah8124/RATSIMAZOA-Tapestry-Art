import logo from '../assets/logo.png';
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
    { label: 'Home',    key: 'home' },
    { label: 'About',   key: 'about' },
    { label: 'Product', key: 'product' },
    { label: 'Review',  key: 'review' },
    { label: 'Contact', key: 'contact' },
];

export default function Navbar({ refs }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (key) => {
        refs[key]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActive(key);
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-third-color/90 backdrop-blur-md shadow-md py-1'
                    : 'bg-transparent py-2'
            }`}
        >
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <img
                    src={logo}
                    alt="Tapestry Logo"
                    className="h-[12vh] w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => scrollTo('home')}
                />

                {/* Desktop Nav */}
                <nav className="hidden md:flex bg-fourth-color backdrop-blur-sm py-3 px-8 rounded-2xl items-center gap-8 font-serif title-primary shadow-sm">
                    {navLinks.map(({ label, key }) => (
                        <button
                            key={key}
                            onClick={() => scrollTo(key)}
                            className={`relative pb-1 transition-colors duration-300 group ${
                                active === key 
                                    ? 'title-primary font-bold' 
                                    : 'title-secondary font-normal'
                            }`}
                        >
                            {label}
                            <span
                                className={`absolute bottom-0 left-0 h-[2px] bg-third-color rounded-full transition-all duration-300 ${
                                    active === key 
                                        ? 'w-full' 
                                        : 'w-0 group-hover:w-full'
                                }`}
                            />
                        </button>
                    ))}
                </nav>


                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-title-primary text-3xl p-2 rounded-xl hover:bg-pink-100 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="bg-white/95 backdrop-blur-md mx-4 mb-3 rounded-2xl shadow-lg px-6 py-4 flex flex-col gap-3 font-serif text-title-secondary">
                    {navLinks.map(({ label, key }) => (
                        <button
                            key={key}
                            onClick={() => scrollTo(key)}
                            className={`text-left py-2 px-3 rounded-xl transition-all duration-200 hover:bg-pink-50 hover:text-title-primary ${
                                active === key
                                    ? 'bg-pink-100 text-title-primary font-bold'
                                    : ''
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
