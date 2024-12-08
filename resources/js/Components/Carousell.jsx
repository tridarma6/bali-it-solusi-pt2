import { useState, useEffect } from 'react';

export default function Carousel() {
    const images = [
        '/assets/images/banner1.png',
        '/assets/images/banner2.png',
        '/assets/images/banner3.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }
    };

    const goToPrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }
    };

    // Handle transition end to stop it once the animation is done
    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

    // Auto-slide every 8 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 8000); // 8 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div className="relative w-full h-[276px] pt-2 overflow-hidden ">
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    borderRadius: 5
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[276px] flex-shrink-0 px-16"
                        style={{
                            borderRadius: 5
                        }}
                    />
                ))}
            </div>
            {/* Previous Button */}
            <button
                className="absolute top-1/2 left-32 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 rounded-xl"
                onClick={goToPrev}
                disabled={isTransitioning}
            >
                &#10094;
            </button>
            {/* Next Button */}
            <button
                className="absolute top-1/2 right-32 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10 rounded-xl"
                onClick={goToNext}
                disabled={isTransitioning}
            >
                &#10095;
            </button>
        </div>
    );
}
