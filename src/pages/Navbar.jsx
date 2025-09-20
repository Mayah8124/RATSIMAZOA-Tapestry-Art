import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; 

export default function Navbar() { 
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/Home' && window.scrollY === 0) {
                setScrolled(false);
            } else {
                setScrolled(true); 
            }
        };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

    return ( 
    <div className='flex flex-2 flex-row gap-3 items-center px-4 fixed top-0 z-0'>    
        <img src={logo} alt="Tapestry Logo" className="h-[10vh] w-auto" />
        <nav className="bg-navbar-initial w-[85vw] py-3 px-7 rounded-2xl flex flew-row justify-around gap-4 items-center text-white-var font-serif text-ml">
            <Link to="/Home" >Home</Link> 
            <Link to='/About'>About</Link> 
            <Link to='/Product'>Product</Link> 
            <Link to='/Review'>Review</Link> 
            <Link to='/Contact'>Contact</Link>
        </nav>
    </div>
    )
}