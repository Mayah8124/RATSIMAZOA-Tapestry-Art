import { forwardRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GiBeveledStar } from "react-icons/gi";
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

    return (
            <section ref={ref} className="min-h-screen w-full scroll-mt-20 relative overflow-hidden py-10 md:py-16 px-3 sm:px-6">
                <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-15deg); }
                    100% { transform: translateX(150%) skewX(-15deg); }
                }
            `}</style>

            {/* Background Decorations */}
            <div className="border-pink-300 border-[12px] w-[40vw] h-[25vh] md:w-[20vw] md:h-[40vh] bg-pink-200/50 rounded-br-full absolute top-0 left-0 -z-10 opacity-60 mix-blend-multiply"></div>
            <div className="border-pink-300 border-[12px] w-[40vw] h-[25vh] md:w-[20vw] md:h-[40vh] bg-pink-200/50 rounded-tl-full absolute bottom-0 right-0 -z-10 opacity-60 mix-blend-multiply"></div>

            {/* Animated Stars */}
            <div className="absolute top-10 right-[15%] text-yellow-400 opacity-70 animate-[spin_10s_linear_infinite] pointer-events-none -z-10">
                <GiBeveledStar className="text-[5rem] md:text-[10rem]" />
            </div>
            <div className="absolute bottom-20 left-[10%] text-yellow-400 opacity-70 animate-[pulse_3s_ease-in-out_infinite] pointer-events-none -z-10">
                <GiBeveledStar className="text-[5rem] md:text-[10rem]" />
            </div>
            <div className="absolute top-1/2 left-[80%] text-pink-400 opacity-50 animate-bounce pointer-events-none -z-10">
                <WiStars className="text-[6rem]" />
            </div>

            {/* Title Section */}
            <div
                className="text-center font-serif mb-12 opacity-0"
                style={{ animation: "fadeInUp 1s ease-out forwards" }}
            >
                <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold title-primary inline-flex items-center gap-4 justify-center">
                    <WiStars className="text-yellow-400" />
                    Our Products
                    <WiStars className="text-yellow-400" />
                </h3>
                <p className="text-primary mt-4 text-base sm:text-lg md:text-xl italic opacity-80 px-2">
                    Small project for a big dream 
                </p>
            </div>

            {/* === EMBLA CAROUSEL === */}
            
            <ProductCarousel
                emblaRef={emblaRef}
                emblaApi={emblaApi}
                products={products}
                selectedIndex={selectedIndex}
            />
        </section>
    );
});

export default Product;
