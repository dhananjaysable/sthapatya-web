import { motion } from 'motion/react';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { Card } from './ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    testimonial: "The cybersecurity solutions provided by this team gave our organization complete confidence in securing our data infrastructure and protecting sensitive information.",
    name: "Priya Sharma",
    role: "Operations Manager",
    rating: 5
  },
  {
    testimonial: "Working with this team was a game-changer. Their cloud migration services were seamless, and we saw immediate improvements in our system performance.",
    name: "Arjun Patel", 
    role: "Founder of TechPlus",
    rating: 5
  },
  {
    testimonial: "From consultation to execution, this team proved to be a reliable and knowledgeable partner. Their IT experts helped us streamline our operations.",
    name: "Sneha Reddy",
    role: "Founder of GreenTech",
    rating: 5
  },
  {
    testimonial: "The sustainable building design they created for our housing complex exceeded all environmental standards while maintaining cost efficiency.",
    name: "Meera Krishnan",
    role: "Sustainability Director",
    rating: 5
  },
  {
    testimonial: "Their innovative approach to combining traditional construction methods with modern IT solutions revolutionized our infrastructure projects completely.",
    name: "Rajesh Gupta",
    role: "Chief Engineer",
    rating: 5
  },
  {
    testimonial: "The smart traffic management system they built improved our city traffic flow by 40% within just the first year of implementation.",
    name: "Vikram Singh",
    role: "Director Operations", 
    rating: 5
  }
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'fill-current' : 'fill-none'
          } transition-colors duration-200`}
          style={{ color: '#e1d385' }}
        />
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Memoize calculations to prevent unnecessary re-renders
  const cardsPerView = useMemo(() => 
    isDesktop ? 4 : 1, 
    [isDesktop]
  );
  
  const maxIndex = useMemo(() => 
    Math.max(0, Math.ceil(testimonials.length / cardsPerView) - 1), 
      [cardsPerView] 
  );

  const translateX = useMemo(() => {
    if (isDesktop) {
      // For desktop: move by 3 cards at a time (320px card + 32px gap = 352px per card)
      return -(currentIndex * cardsPerView * 352);
    } else {
      // For mobile: move by full width percentage
      return -(currentIndex * 100);
    }
  }, [currentIndex, isDesktop, cardsPerView]);

  // Desktop check with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const checkIsDesktop = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsDesktop(window.innerWidth >= 1024);
      }, 100);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => {
      window.removeEventListener('resize', checkIsDesktop);
      clearTimeout(timeoutId);
    };
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 8000); // 8 seconds to give time to read 3 testimonials

    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  // Memoize navigation functions
  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? maxIndex : prev - 1);
  }, [maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  }, [maxIndex]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  }, [maxIndex]);

  return (
    <section 
      className="py-4 md:py-12 lg:py-16 px-4 md:px-6 w-full relative overflow-hidden"
      style={{ backgroundColor: '#f3f3f3' }}
    >
          <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
            style={{ color: '#95231c' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-2"
            style={{ color: '#ba7b72' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Trusted by leading organizations for our excellence in civil services and IT solutions.
          </motion.p>
        </motion.div>
        
        {/* Testimonials Grid/Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Only show if there are multiple slides */}
          {maxIndex > 0 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#fefefe', 
                  color: '#95231c',
                  boxShadow: '0 4px 20px rgba(149, 35, 28, 0.15)'
                }}
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                style={{ 
                  backgroundColor: '#fefefe', 
                  color: '#95231c',
                  boxShadow: '0 4px 20px rgba(149, 35, 28, 0.15)'
                }}
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out gap-6 md:gap-8"
              style={{ 
                transform: isDesktop ? `translateX(${translateX}px)` : `translateX(${translateX}%)`,
                width: isDesktop ? `${testimonials.length * 352}px` : `${(testimonials.length / cardsPerView) * 100}%`,
                marginLeft: isDesktop ? `calc(39% - ${3 * 352 /2}px)` : '0',
                justifyContent: isDesktop ? 'flex-start' : 'center'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  style={{ 
                    width: isDesktop ? '320px' : '100%',
                    maxWidth: isDesktop ? '320px' : '380px',
                    flexShrink: 0
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  <Card 
                    className="p-6 md:p-8 h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg border-0 group hover:-translate-y-1 mx-auto lg:mx-0 flex flex-col lg:flex-col"
                    style={{ 
                      backgroundColor: '#fefefe',
                      boxShadow: '0 4px 20px rgba(149, 35, 28, 0.08)',
                      borderRadius: '20px',
                      minHeight: '360px',
                      width: '100%'
                    }}
                  >
                    {/* Star Rating */}
                    <div className="flex justify-center mb-6">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote 
                      className="text-base md:text-lg leading-relaxed mb-8 text-center flex-grow lg:flex-grow"
                      style={{ color: '#4a4a4a' }}
                    >
                      <span className="lg:hidden">"{testimonial.testimonial}"</span>
                      <span className="hidden lg:inline">{testimonial.testimonial}</span>
                    </blockquote>
                    
                    {/* Author Information */}
                    <div className="text-center mt-auto lg:mt-auto">
                      <h4 
                        className="text-lg md:text-xl mb-2"
                        style={{ color: '#95231c' }}
                      >
                        {testimonial.name}
                      </h4>
                      <p 
                        className="text-sm md:text-base opacity-80"
                        style={{ color: '#ba7b72' }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Pagination Dots - Only show if there are multiple slides */}
          {maxIndex > 0 && (
            <div className="flex justify-center mt-12 space-x-3">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex ? 'scale-125' : 'scale-100 opacity-40 hover:opacity-70'
                  }`}
                  style={{ 
                    backgroundColor: index === currentIndex ? '#95231c' : '#ba7b72',
                    boxShadow: index === currentIndex ? '0 2px 8px rgba(149, 35, 28, 0.25)' : 'none'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}