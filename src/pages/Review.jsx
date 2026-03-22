import { forwardRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from 'embla-carousel-auto-scroll'
import { customers } from "../data/customers"

const Review = forwardRef((props, ref) => {

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
            dragFree: false,
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1.2,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            })
        ]
    )

    return (
        <section ref={ref} className="w-full scroll-mt-15">
            <div className="py-10 px-4 sm:px-8 lg:px-16">
                <div className="flex flex-col gap-4 sm:gap-6 text-center font-serif font-stretch-expanded">
                    <h1 className="title-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                        Reviews
                    </h1>
                    <p className="text-primary text-base sm:text-lg md:text-xl">
                        More the client are satisfied more I am proud of myself
                    </p>
                </div>

                <div className="review">
                    <div className="review__viewport" ref={emblaRef}>
                        <div className="review__container my-5">
                            {customers.map((c) => (
                                <div
                                    key={c.id ?? c.name}
                                    className="
                                        review__slide
                                        sm:review__slide__responsive
                                        lg:review__slide
                                        bg-third-color
                                        rounded-xl
                                        shadow-md p-4
                                        hover:scale-105
                                        flex-shrink-0
                                    "
                                >
                                    <div className="flex flex-col">
                                        <div className="flex justify-center">
                                            <img
                                                src={c.picture}
                                                alt={c.name}
                                                className="h-[25vh] sm:h-[30vh] lg:h-[20vh] object-cover rounded-full w-32 sm:w-40 lg:w-32"
                                            />
                                        </div>

                                        <div className="
                                            flex flex-col gap-2
                                            font-serif text-secondary
                                            text-center p-4
                                        ">
                                            <h1 className="text-lg sm:text-xl font-semibold">
                                                {c.name}
                                            </h1>
                                            <p className="text-sm sm:text-base lg:text-lg">"{c.review}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Review;