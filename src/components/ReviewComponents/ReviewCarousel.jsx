import { customers } from "../../data/customers";

const ReviewCarousel = ({ emblaRef }) => {
    return (
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
                                    <p className="text-sm sm:text-base lg:text-lg">
                                        "{c.review}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;