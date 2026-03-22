import { forwardRef, useState, useEffect, useCallback } from "react";
import { motion } from 'framer-motion';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { WiStars } from "react-icons/wi";

import ProductCarousel from "../components/ProductComponents/ProductCarousel";

import summerBag from "../assets/done_art/summer_bag.png";
import flowerBag from "../assets/done_art/flower_bag.png";
import heartBag from "../assets/done_art/heart_bag.png";
import theWeeknd from "../assets/done_art/the_weeknd.png";

const products = [
    { id: 1, image: summerBag, name: "Summer Bag" },
    { id: 2, image: flowerBag, name: "Flower Bag" },
    { id: 3, image: heartBag, name: "Heart Bag" },
    { id: 4, image: theWeeknd, name: "The Weeknd" },
];

const Product = forwardRef((props, ref) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            slidesToScroll: 1,
        },
        [
            Autoplay({
                delay: 3500,
                stopOnInteraction: false,
            }),
        ]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi, onSelect]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <motion.section
            ref={ref}
            className="min-h-screen w-full scroll-mt-20 relative overflow-hidden py-10 md:py-5 px-3 sm:px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
        >
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-15deg); }
                    100% { transform: translateX(150%) skewX(-15deg); }
                }
            `}
            </style>

            {/* Title Section */}
            <motion.div
                className="text-center font-serif mb-12 opacity-0 "
                style={{ animation: "fadeInUp 1s ease-out forwards" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold title-primary inline-flex items-center gap-4 justify-center">
                    <motion.div
                        className="text-yellow-400 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none"
                        initial={{ opacity: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <WiStars className="text-yellow-400" />
                    </motion.div>
                    Our Products
                    <motion.div
                        initial={{ opacity: 0, rotate: 180 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <WiStars className="text-yellow-400" />
                    </motion.div>
                </h3>
                <motion.p
                    className="text-primary mt-4 text-base sm:text-lg md:text-xl italic opacity-80 px-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.8, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Small project for a big dream
                </motion.p>
            </motion.div>

            <ProductCarousel
                emblaRef={emblaRef}
                emblaApi={emblaApi}
                products={products}
                selectedIndex={selectedIndex}
            />
        </motion.section>
    );
});

export default Product;
