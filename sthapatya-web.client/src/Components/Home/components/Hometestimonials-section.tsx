import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "CEO, TechVision Solutions",
    company: "Mumbai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwwfHx8fDE3NTc3MDExOTF8MA&ixlib=rb-4.1.0&q=80&w=400",
    quote: "InnovateNext Solutions transformed our digital infrastructure completely. Their strategic approach and technical expertise helped us scale from a regional player to a national leader in just 18 months."
  },
  {
    name: "Priya Sharma",
    position: "CTO, DataFlow Industries",
    company: "Bangalore",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFufGVufDB8fHx8MTc1NzcwMTE5MXww&ixlib=rb-4.1.0&q=80&w=400",
    quote: "The team's deep understanding of both technology and business processes is remarkable. They delivered a custom analytics platform that exceeded our expectations and drove 40% improvement in our operational efficiency."
  },
  {
    name: "Arjun Patel",
    position: "Founder, GreenTech Innovations",
    company: "Pune",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbnxlbnwwfHx8fDE3NTc3MDExOTF8MA&ixlib=rb-4.1.0&q=80&w=400",
    quote: "Working with InnovateNext was a game-changer for our startup. Their consultative approach and innovative solutions helped us secure Series A funding and establish a strong market presence across three states."
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="h-screen flex items-center py-20" style={{ backgroundColor: '#d8bea5' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl lg:text-6xl xl:text-7xl mb-6"
            style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
          >
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#e1d385' }}></div>
          <p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Success stories from businesses across India who trusted us with their digital transformation
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div 
                className="bg-white rounded-3xl p-12 lg:p-16 shadow-2xl max-w-4xl mx-auto"
                style={{ backgroundColor: '#fefefe' }}
              >
                <div className="mb-8">
                  <svg 
                    className="w-12 h-12 mx-auto mb-6" 
                    style={{ color: '#ba7b72' }}
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                
                <p 
                  className="text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-8 leading-relaxed italic"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 
                      className="text-xl xl:text-2xl"
                      style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p 
                      className="text-gray-600"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p 
                      className="text-sm"
                      style={{ color: '#ba7b72', fontFamily: 'Roboto, sans-serif' }}
                    >
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#95231c' }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: '#95231c' }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'w-8' : ''
                }`}
                style={{ 
                  backgroundColor: index === currentTestimonial ? '#95231c' : '#ba7b72' 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}