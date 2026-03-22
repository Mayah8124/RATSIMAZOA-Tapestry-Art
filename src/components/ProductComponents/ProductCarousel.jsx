import ProductBadge from "./ProductBadge";
import ProductNavigationDots from "./ProductNavigationDots";

const ProductCarousel = ({
    emblaRef,
    emblaApi,
    products,
    selectedIndex
}) => {
    return (
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
                                        ${
                                            isActive
                                                ? "scale-110 opacity-100 z-10 drop-shadow-2xl"
                                                : "scale-90 opacity-40 z-0 drop-shadow-sm blur-[2px]"
                                        }
                                    `}
                                >
                                    <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-lg">
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

                                    {/* Badge */}
                                    <ProductBadge isActive={isActive} name={product.name} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Navigation Dots */}
            <ProductNavigationDots
                products={products}
                selectedIndex={selectedIndex}
                emblaApi={emblaApi}
            />
        </div>
    );
};

export default ProductCarousel;