import { useRef } from 'react';
import Navbar from './Navbar';
import About from './About';
import Product from './Product';
import Review from './Review';
import Contact from './Contact';

export default function Home() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const productRef = useRef(null);
    const reviewRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Navbar
                refs={{
                    home: homeRef,
                    about: aboutRef,
                    product: productRef,
                    review: reviewRef,
                    contact: contactRef,
                }}
            />

            {/* HERO / HOME */}
            <section ref={homeRef} className="min-h-screen">
                <div className="relative w-full h-[95vh] bg-[url('/images/bg2.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-initial/40" /> 
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="title-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2">
                            Tapestry Art and Crochet
                        </h1>
                        <h3 className="title-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4">
                            by RATSIMAZOA
                        </h3>
                        <p className="text-primary text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl px-4 font-serif tracking-wider">
                            a small personal project created by a lovely girl who wants to share her passion and her art
                        </p>
                    </div>
                </div>
            </section>

            <About ref={aboutRef} />
            <Product ref={productRef} />
            <Review ref={reviewRef} />
            <Contact ref={contactRef} />
        </>
    );
}
