const ProductBadge = ({ isActive, name }) => {
    return (
        <div
            className={`
                absolute -bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 backdrop-blur-sm 
                px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm
                rounded-full shadow-lg border-2 border-pink-200
                transition-all duration-500
                flex items-center gap-2 whitespace-nowrap
                ${
                    isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                }
            `}
        >
            <span className="text-yellow-400">✨</span>
            <span className="font-serif font-bold text-title-primary">
                {name}
            </span>
            <span className="text-yellow-400">✨</span>
        </div>
    );
};

export default ProductBadge;