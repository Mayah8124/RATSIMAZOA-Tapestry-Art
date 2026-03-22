import { forwardRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { GiBeveledStar } from "react-icons/gi";
import { WiStars } from "react-icons/wi";

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
            <div className="embla max-w-4xl mx-auto px-2 sm:px-4 relative">
                <div className="embla__viewport overflow-hidden py-10" ref={emblaRef}>
                    <div className="embla__container flex items-center">
                        {products.map((product, index) => {
                            const isActive = index === selectedIndex;
                            return (
                                <div
                                    key={product.id}
                                    className="
                                        embla__slide 
                                        flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_33.333%] 
                                        flex flex-col items-center justify-center px-4 
                                        transition-all duration-700 ease-out"
                                >
                                    <div
                                        className={`
                                            relative group
                                            transition-all duration-700 ease-out
                                            ${isActive
                                                ? "scale-110 opacity-100 z-10 drop-shadow-2xl"
                                                : "scale-90 opacity-40 z-0 drop-shadow-sm blur-[2px]"}
                                        `}
                                    >
                                        <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-lg">
                                            {/* Shimmer effect for active item */}
                                            {isActive && (
                                                <div
                                                    className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                                                    style={{ animation: "shimmer 2.5s infinite linear" }}
                                                />
                                            )}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-[40vh] sm:h-[45vh] md:h-[50vh] w-full object-cover rounded-xl"
                                            />
                                        </div>

                                        {/* Cute Badge */}
                                        <div
                                            className={`
                                                absolute -bottom-6 left-1/2 -translate-x-1/2
                                                bg-white/90 backdrop-blur-sm 
                                                px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm
                                                rounded-full shadow-lg border-2 border-pink-200
                                                transition-all duration-500
                                                flex items-center gap-2 whitespace-nowrap
                                                ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                                            `}
                                        >
                                            <span className="text-yellow-400">✨</span>
                                            <span className="font-serif font-bold text-title-primary">
                                                {product.name}
                                            </span>
                                            <span className="text-yellow-400">✨</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center gap-3 mt-8 md:mt-12">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            className={`
                                h-3 rounded-full transition-all duration-500 ease-out
                                ${index === selectedIndex
                                    ? "w-10 bg-title-primary"
                                    : "w-3 bg-pink-300 hover:bg-pink-400"}
                            `}
                            onClick={() => emblaApi && emblaApi.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Product;
