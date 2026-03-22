const ProductNavigationDots = ({ products, selectedIndex, emblaApi }) => {
    return (
        <div className="flex justify-center gap-3 mt-8 md:mt-12">
            {products.map((_, index) => (
                <button
                    key={index}
                    className={`
                        h-3 rounded-full transition-all duration-500 ease-out
                        ${
                            index === selectedIndex
                                ? "w-10 bg-title-primary"
                                : "w-3 bg-pink-300 hover:bg-pink-400"
                        }
                    `}
                    onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default ProductNavigationDots;