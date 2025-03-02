"use client";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect } from "react";

interface SlideProps {
  src: string;
  alt?: string;
  index: number;
  current: number;
}

const Slide = ({ src, alt, index, current }: SlideProps) => {
  const slideRef = useRef<HTMLDivElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);
  const isActive = current === index;

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isActive) return;
    
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  // Only render if this slide is the current one or adjacent to it
  if (Math.abs(index - current) > 1 && !(index === 0 && current === Slide.length - 1) && !(index === Slide.length - 1 && current === 0)) {
    return null;
  }

  return (
    <div
      ref={slideRef}
      className={`
        absolute inset-0 flex flex-col items-center justify-center
        w-full h-full transition-all duration-500 ease-in-out
        ${!isActive && 'opacity-0 pointer-events-none'}
      `}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden={!isActive}
    >
      <div
        className="w-full h-full bg-[#1D1F2F] rounded-xl overflow-hidden shadow-lg"
        style={{
          transform: isActive
            ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0) scale(1)"
            : "scale(0.95)",
          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <img
          className="w-full h-full object-cover transition-all duration-500 ease-in-out"
          style={{
            opacity: 0, // Start opacity at 0 and transition on load
          }}
          alt={alt || `Slide ${index + 1}`}
          src={src}
          onLoad={handleImageLoad}
          loading={Math.abs(index - current) <= 1 ? "eager" : "lazy"}
          decoding="async"
        />
        
        {/* {isActive && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30 transition-all duration-500" />
        )} */}
      </div>
    </div>
  );
};

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
  disabled?: boolean;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
  disabled = false,
}: CarouselControlProps) => {
  return (
    <button
      className={`
        w-10 h-10 flex items-center justify-center 
        bg-black/60 backdrop-blur-sm 
        border border-purple/50 rounded-full 
        focus:outline-none focus:ring-2 focus:ring-purple
        hover:bg-black/40 active:scale-95
        disabled:opacity-50 disabled:pointer-events-none
        transition-all duration-200
      `}
      title={title}
      onClick={handleClick}
      disabled={disabled}
      aria-label={title}
    >
      {type === "previous" ? (
        <IconArrowNarrowLeft className="text-white" size={18} />
      ) : (
        <IconArrowNarrowRight className="text-white" size={18} />
      )}
    </button>
  );
};

interface PaginationDotProps {
  active: boolean;
  index: number;
  onClick: (index: number) => void;
}

const PaginationDot = ({ active, index, onClick }: PaginationDotProps) => (
  <button
    className={`
      w-2 h-2 mx-1 rounded-full transition-all duration-300
      focus:outline-none focus:ring-2 focus:ring-purple-500
      ${active ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}
    `}
    onClick={() => onClick(index)}
    aria-label={`Go to slide ${index + 1}`}
    aria-current={active ? "true" : "false"}
  />
);

interface CarouselProps {
  slides: string[];
  alts?: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
}

export function Carousel({ 
  slides, 
  alts = [], 
  autoPlay = false, 
  autoPlayInterval = 5000,
  showDots = true,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const autoPlayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = useId();

  const handlePreviousClick = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
    
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (current !== index && !isTransitioning) {
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsTouching(true);
    
    // Pause autoplay during touch
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsTouching(false);
    const diff = touchStartX.current - touchEndX.current;
    
    // Detect swipe (with minimum threshold of 50px)
    if (Math.abs(diff) > 50 && !isTransitioning) {
      if (diff > 0) {
        handleNextClick();
      } else {
        handlePreviousClick();
      }
    }
    
    // Resume autoplay if enabled
    if (autoPlay) {
      startAutoPlay();
    }
  };

  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearTimeout(autoPlayTimerRef.current);
    }
    
    autoPlayTimerRef.current = setTimeout(() => {
      handleNextClick();
    }, autoPlayInterval);
  };

  useEffect(() => {
    if (autoPlay && !isTouching) {
      startAutoPlay();
    }
    
    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current);
      }
    };
  }, [autoPlay, current, isTouching]);

  return (
    <div 
      className="relative w-full h-full max-w-full overflow-hidden"
      aria-labelledby={`carousel-heading-${id}`}
      role="region"
      aria-roledescription="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide}
            alt={alts[index] || `Image ${index + 1}`}
            index={index}
            current={current}
          />
        ))}
      </div>

      {/* Controls */}
      {slides.length > 1 && 

        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-30">
        <div className="pointer-events-auto">
          <CarouselControl
            type="previous"
            title="Previous slide"
            handleClick={handlePreviousClick}
            disabled={isTransitioning}
            />
        </div>
        <div className="pointer-events-auto">
          <CarouselControl
            type="next"
            title="Next slide"
            handleClick={handleNextClick}
            disabled={isTransitioning}
            />
        </div>
      </div>
          }

      {/* Pagination dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
          <div className="inline-flex bg-black/40 backdrop-blur-sm rounded-full px-3 py-2">
            {slides.map((_, index) => (
              <PaginationDot
                key={index}
                active={current === index}
                index={index}
                onClick={handleDotClick}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Current slide announcement for screen readers */}
      <div className="sr-only" aria-live="polite">
        Showing slide {current + 1} of {slides.length}
      </div>
    </div>
  );
}