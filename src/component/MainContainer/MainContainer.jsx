import React, { useState, useEffect } from "react";

// Import media
import slide1 from "../../assets/a.jpg";
import slide2 from "../../assets/b.mp4";
import slide3 from "../../assets/c.mp4";
import slide4 from "../../assets/d.jpg";
import slide5 from "../../assets/e.mp4"; // video
import slide6 from "../../assets/f.mp4";
import slide7 from "../../assets/g.jpg";

const MainContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [slide5, slide1, slide2, slide3, slide4, slide6, slide7]; // ensure video first, then images

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  // Helper to check if file is a video
  const isVideo = (file) =>
    file.endsWith(".mp4") || file.endsWith(".webm") || file.endsWith(".mov");

  return (
    <main className="py-4">
      <div className="relative w-full max-w-7xl mx-auto aspect-[16/12] md:aspect-[21/14] lg:aspect-[18/10] xl:aspect-[16/7] px-4">
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
          {/* Conditional rendering for video or image */}
          {isVideo(slides[currentSlide]) ? (
            <video
              key={currentSlide}
              src={slides[currentSlide]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          ) : (
            <img
              src={slides[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          )}

          {/* Text Overlay */}
          <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-green-200 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">
              Welcome Titans
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-100 drop-shadow-[0_0_6px_rgba(0,0,0,0.5)]">
              No Mercy, Only Victory
            </p>
          </div>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-red-500 scale-110"
                    : "bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;
