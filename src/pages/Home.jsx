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
                <div className={`w-full h-[95vh] bg-[url('/images/bg1.png')] bg-cover bg-center`}>
                    <div className='absolute flex flex-col gap-4 top-1/5 right-0 pr-4 text-right'>
                        <h1 className="text-title-primary text-4xl font-serif font-bold">
                            Tapestry Art and Crochet 
                        </h1>
                        <h3 className='text-title-primary text-7xl font-serif font-bold'>
                            by RATSIMAZOA
                        </h3>
                        <p className='text-title-secondary text-md pr-3 pl-[58vw] text-white-var font-serif tracking-wider'>
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
