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
                                bg-third-color
                                rounded-xl
                                shadow-md p-4
                                hover:scale-105
                                flex-shrink-0
                            "
                        >
                            <div className="flex flex-row sm:flex-col gap-2">
                                <div className="flex justify-center">
                                    <img
                                        src={c.picture}
                                        alt={c.name}
                                        className="
                                            w-80 h-40
                                            sm:w-45 sm:h-45
                                            lg:w-32 lg:h-32
                                            object-cover
                                            rounded-2xl
                                            sm:rounded-full
                                        "
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