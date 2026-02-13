import { forwardRef } from "react"

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from 'embla-carousel-auto-scroll'

import { customers } from "../data/customers"
import { useAutoScroll } from "../components/CarouselComponent/AutoScroll";

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
            <div className="py-10">
                <div className="flex flex-col gap-2 text-center font-serif font-stretch-expanded">
                    <h1 className="text-title-primary text-7xl font-bold">
                        Reviews
                    </h1>
                    <p className="text-white-var">
                        More the client are satisfied more I am proud of myself
                    </p>
                </div>

                <div className="review">
                    <div className="review__viewport" ref={emblaRef}>
                        <div className="review__container my-10">
                            {customers.map((c) => (
                                <div
                                    key={c.id ?? c.name}
                                    className="
                                        review__slide
                                        bg-third-color
                                        rounded-xl
                                        shadow-md p-2
                                        hover:scale-105
                                    "
                                >
                                    <div className="flex flex-col">
                                        <div className="flex justify-center">
                                            <img
                                                src={c.picture}
                                                alt={c.name}
                                                className="h-[20vh] object-cover rounded-full"
                                            />
                                        </div>

                                        <div className="
                                            flex flex-col gap-2
                                            font-serif text-secondary
                                            text-center p-2
                                        ">
                                            <h1 className="text-xl font-semibold">
                                                {c.name}
                                            </h1>
                                            <p>"{c.review}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 
                <div className="mt-10 px-5 grid grid-cols-4 justify-around">
                    {customers.map((c) => (
                        <div
                            key={c.id ?? c.name}
                            className="w-[21vw] h-[48vh] bg-fourth-color rounded-xl shadow-md m-3
                            transition-transform duration-200 hover:scale-110"
                        >
                            <div className="rounded-t-xl bg-third-color p-2 flex justify-center items-center">
                                <img
                                    src={c.picture}
                                    alt="customer_picture"
                                    className="w-[50%] object-cover rounded-full"
                                />
                            </div>

                            <div className="bg-fourth-color flex flex-col gap-2 font-serif font-stretch-condensed text-center p-4 rounded-b-xl">
                                <h1 className="text-xl text-title-secondary font-semibold">
                                    {c.name}
                                </h1>
                                    <p>"{c.review}"</p>
                            </div>
                        </div>
                    ))}
                </div>

                const toggleAutoScroll = useCallback(() => {
                    const autoScroll = reviewApi?.plugins()?.autoScroll
                        if (!autoScroll) return

                        const playOrStop = autoScroll.isPlaying()
                        ? autoScroll.stop
                        : autoScroll.play
                        playOrStop()
                    }, [emblaApi])

                    useEffect(() => {
                        const autoScroll = emblaApi?.plugins()?.autoScroll
                        if (!autoScroll) return

                        setAutoScrollIsPlaying(autoScroll.isPlaying())
                        emblaApi
                        .on('autoscroll:play', () => setAutoScrollIsPlaying(true))
                        .on('autoscroll:stop', () => setAutoScrollIsPlaying(false))
                        .on('reinit', () => setAutoScrollIsPlaying(autoScroll.isPlaying()))
                    }, [emblaApi])
                 */}
            </div>
        </section>
    )
});

export default Review;