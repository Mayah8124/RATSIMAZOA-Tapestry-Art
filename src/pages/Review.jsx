import { forwardRef } from "react"
import { motion } from 'framer-motion';
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

    // Animation variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section ref={ref} className="w-full scroll-mt-15">
            <div className="py-10 px-4 sm:px-8 lg:px-16">
                <motion.div
                    className="flex flex-col gap-4 sm:gap-6 text-center font-serif font-stretch-expanded"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                >
                    <motion.h1 
                        className="title-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
                        variants={sectionVariants}
                    >
                        Reviews
                    </motion.h1>
                    <motion.p 
                        className="text-primary text-base sm:text-lg md:text-xl"
                        variants={sectionVariants}
                        transition={{ delay: 0.1 }}
                    >
                        More the client are satisfied more I am proud of myself
                    </motion.p>
                </motion.div>

                <ReviewCarousel emblaRef={emblaRef} />
            </div>
        </section>
    )
});

export default Review;
