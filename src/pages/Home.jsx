import { useRef } from 'react';
import { motion } from 'framer-motion';
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

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8, 
                ease: 'easeOut',
                staggerChildren: 0.2
            }
        }
    };

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

            {/* HOME */}
            <section ref={homeRef} className="min-h-screen">
                <div className="relative w-full h-[95vh] bg-[url('/images/bg2.png')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-initial/40" />
                    <motion.div
                        className="absolute inset-0 flex flex-col justify-center items-center text-center px-4"
                        initial="hidden"
                        animate="visible"
                        variants={heroVariants}
                    >
                        <motion.h1 
                            className="title-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2"
                            variants={sectionVariants}
                        >
                            Tapestry Art and Crochet
                        </motion.h1>
                        <motion.h3 
                            className="title-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-4"
                            variants={sectionVariants}
                        >
                            by RATSIMAZOA
                        </motion.h3>
                        <motion.p 
                            className="text-primary text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl px-4 font-serif tracking-wider"
                            variants={sectionVariants}
                        >
                            a small personal project created by a lovely girl who wants to share her passion and her art
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <motion.section
                ref={aboutRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <About />
            </motion.section>

            {/* Product Section */}
            <motion.section
                ref={productRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Product />
            </motion.section>

            {/* Review Section */}
            <motion.section
                ref={reviewRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Review />
            </motion.section>

            {/* Contact Section */}
            <motion.section
                ref={contactRef}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
            >
                <Contact />
            </motion.section>
        </>
    );
}