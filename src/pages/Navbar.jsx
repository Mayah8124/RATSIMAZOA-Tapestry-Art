import logo from '../assets/logo.png';

export default function Navbar({ refs }) {

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (
        <header className="fixed top-0 w-full z-50 bg-transparent">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
                <img
                    src={logo}
                    alt="Tapestry Logo"
                    className="h-[14vh] w-auto cursor-pointer"
                    onClick={() => scrollTo(refs.home)}
                />

                <nav className="bg-navbar-initial w-[85vw] py-3 px-7 rounded-2xl flex justify-around items-center font-serif text-ml text-title-secondary">
                    <button onClick={() => scrollTo(refs.home)}>Home</button>
                    <button onClick={() => scrollTo(refs.about)}>About</button>
                    <button onClick={() => scrollTo(refs.product)}>Product</button>
                    <button onClick={() => scrollTo(refs.review)}>Review</button>
                    <button onClick={() => scrollTo(refs.contact, true)}>Contact</button>
                </nav>
            </div>
        </header>
    );
}
