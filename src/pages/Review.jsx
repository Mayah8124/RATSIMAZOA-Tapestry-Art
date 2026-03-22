import { forwardRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from 'embla-carousel-auto-scroll'
import { customers } from "../data/customers"
import ReviewCarousel from "../components/ReviewComponents/ReviewCarousel"

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

                <ReviewCarousel emblaRef={emblaRef} />
            </div>
        </section>
    )
});

export default Review;