import logo from '../assets/logo.png';

export default function Navbar() {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="fixed top-0 w-full z-50">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
                <img
                    src={logo}
                    alt="Tapestry Logo"
                    className="h-[14vh] w-auto cursor-pointer"
                    onClick={() => scrollToSection('home')}
                />

                <nav className="bg-navbar-initial w-[85vw] py-3 px-7 rounded-2xl flex justify-around items-center font-serif text-ml text-title-secondary">
                    <button onClick={() => scrollToSection('home')}>Home</button>
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('product')}>Product</button>
                    <button onClick={() => scrollToSection('review')}>Review</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </nav>
            </div>
        </div>
    );
}
