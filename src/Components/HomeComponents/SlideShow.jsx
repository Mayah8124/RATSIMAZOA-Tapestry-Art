import { useEffect, useState } from "react";

export default function SlideShow({ images, interval = 3000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    return (
        <div className="relative flex justify-center">
            {/* Conteneur principal */}
            <div className="relative w-[40vw] h-[75vh] bg-third-color rounded-md overflow-hidden">
            {/* Track qui bouge */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{
                        width: `${images.length * 100}%`,
                        transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
                    }}
            >
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full h-full"
                        style={{ width: `${100 / images.length}%` }}
                    >
                        <img
                            src={img}
                            alt={`Slide ${idx}`}
                            className="w-[90%] h-[80%] object-contain mx-auto my-auto"
                        />
                    </div>
                ))}
            </div>

            {/* Boutons de navigation (dots) */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                        idx === currentIndex ? "bg-white" : "bg-gray-400"
                    }`}
                />
                ))}
            </div>
        </div>
    </div>
  );
}
