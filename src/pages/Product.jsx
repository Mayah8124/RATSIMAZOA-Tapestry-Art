import { forwardRef } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { GiBeveledStar } from "react-icons/gi";
import { WiStars } from "react-icons/wi";

import summerBag from "../assets/done_art/summer_bag.png";
import flowerBag from "../assets/done_art/flower_bag.png";
import heartBag from "../assets/done_art/heart_bag.png";
import theWeeknd from "../assets/done_art/the_weeknd.png";

const Product = forwardRef((props, ref) => {
    const images = [
        summerBag,
        flowerBag,
        heartBag,
        theWeeknd,
    ];

    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            slidesToScroll: 1,
        },
        [
            Autoplay({
            delay: 3000,
            stopOnInteraction: false,
        }),
        ]
    );

    return (
        <section ref={ref} className="min-h-screen w-full scroll-mt-20 ">
            <div className="border-pink-300 border-8 w-[15vw] h-[30vh] bg-pink-300 rounded-br-full absolute">
        
            </div>
            <div className="right-0 mt-90 border-pink-300 border-8 w-[15vw] h-[30vh] bg-pink-300 rounded-tl-full absolute">
        
            </div>
            {/* icons */}
            <div className="flex">
                <GiBeveledStar className="text-[12rem] text-yellow-400 right-30 mt-2 absolute" />
                <GiBeveledStar className="text-[12rem] text-yellow-400 left-30 mt-80 absolute" />
            </div>
            {/* Title */}
            <div className="text-center font-serif mb-5">
                <h3 className="text-7xl font-bold title-primary">
                    Our Products
                </h3>
                <p className="text-primary mt-2">
                    Small project for a big dream
                </p>
            </div>

            {/* === EMBLA CAROUSEL === */}
            <div className="embla max-w-xl mx-auto">
                <div
                    className="embla__viewport overflow-hidden"
                    ref={emblaRef}
                >
                    <div className="embla__container flex">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="embla__slide flex-[0_0_33.333%] flex justify-center"
                            >
                                <img
                                    src={img}
                                    alt={`product-${index}`}
                                    className="
                                        h-[70vh]
                                        object-cover
                                        transition-all
                                        duration-1000
                                        scale-90
                                        embla__slide__img
                                    "
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Product;