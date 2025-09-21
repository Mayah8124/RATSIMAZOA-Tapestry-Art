import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
    return (
        <div className='fixed top-0 w-full z-50 transition-colors duration-300'>
            <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
                <img src={logo} alt="Tapestry Logo" className="h-[14vh] w-auto" />

                <nav className='bg-navbar-initial  w-[85vw] py-3 px-7 rounded-2xl flex flex-row justify-around gap-4 items-center font-serif text-ml text-title-secondary'>
                    <Link to="/Home">Home</Link>
                    <Link to="/About">About</Link>
                    <Link to="/Product">Product</Link>
                    <Link to="/Review">Review</Link>
                    <Link to="/Contact">Contact</Link>
                </nav>
            </div>
        </div>
    );
}
