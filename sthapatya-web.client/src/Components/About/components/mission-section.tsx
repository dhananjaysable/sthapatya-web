import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { HardHat, Code2, Network, FileText, Cloud, Zap } from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    category: "Civil Services",
    icon: HardHat,
    description: "Comprehensive infrastructure development, urban planning, and construction management services.",
    features: ["Urban Planning", "Construction Management", "Infrastructure Development"],
    color: "#95231c"
  },
  {
    category: "IT Services", 
    icon: Code2,
    description: "Cutting-edge technology solutions, software development, and digital transformation services.",
    features: ["Software Development", "Digital Transformation", "Cloud Solutions"],
    color: "#e1d385"
  },
  {
    category: "Integrated Solutions",
    icon: Network,
    description: "Bridging physical and digital infrastructure for smart, sustainable development projects.",
    features: ["Smart Infrastructure", "IoT Integration", "Sustainable Technology"],
    color: "#ba7b72"
  }
];

const additionalIcons = [FileText, Cloud, Zap];

export default function MissionSection() {
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselApiRef = useRef<any>(null);

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    autoplayRef.current = setInterval(() => {
      if (carouselApiRef.current) {
        if (carouselApiRef.current.canScrollNext()) {
          carouselApiRef.current.scrollNext();
        } else {
          carouselApiRef.current.scrollTo(0);
        }
      }
    }, 4000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  useEffect(() => {
    startAutoplay();
    
    return () => {
      stopAutoplay();
    };
  }, []);

  return (
    <section className="py-4 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: '#f3f3f3' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 md:grid-cols-8 gap-2 md:gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-current"
              style={{ borderColor: '#95231c' }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ 
                duration: 3,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
        <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
            style={{ color: '#95231c' }}
          >
            Our Mission
          </h2>
          
          {/* Mission Tagline */}
          <motion.div
            className="max-w-[90rem] mx-auto mb-3 sm:mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 font-bold" style={{ color: '#666666' }}>
              Delivering integrated Civil Services and IT Services that create sustainable synergies 
              between physical infrastructure and technological innovation.
            </p>
          </motion.div>
          
          <p 
            className="text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-2"
            style={{ color: '#666666' }}
          >
            We build infrastructure and digital solutions that work together for sustainable growth, 
            creating synergies between physical and technological development.
          </p>
        </motion.div>
        
        {/* Service Cards Carousel */}
        <motion.div
          className="mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={(api) => {
              carouselApiRef.current = api;
            }}
            className="w-full max-w-[90rem] mx-auto"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
            onFocus={stopAutoplay}
            onBlur={startAutoplay}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const AdditionalIcon = additionalIcons[index];
                
                return (
                  <CarouselItem key={service.category} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 50, rotateX: -15 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.2,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10,
                        rotateX: 2,
                        rotateY: 2,
                        scale: 1.01
                      }}
                      className="group perspective-1000 h-full"
                    >
                      <Card 
                        className="p-3 sm:p-4 md:p-6 lg:p-8 h-full relative overflow-hidden transition-all duration-500 group-hover:shadow-2xl"
                        style={{ 
                          backgroundColor: '#fefefe',
                          border: `2px solid ${service.color}`,
                          boxShadow: `0 10px 30px ${service.color}20`
                        }}
                      >
                        {/* Card Glow Effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                          style={{ backgroundColor: service.color }}
                        />
                        
                        {/* Icon Section */}
                        <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-6">
                          <motion.div
                            className="p-2 sm:p-3 md:p-3 lg:p-4 rounded-lg sm:rounded-xl relative"
                            style={{ backgroundColor: `${service.color}15` }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.8 }}
                          >
                            <IconComponent size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" style={{ color: service.color }} />
                          </motion.div>
                          
                          <motion.div
                            className="opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <AdditionalIcon size={16} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ color: service.color }} />
                          </motion.div>
                        </div>
                        
                        {/* Content */}
                        <h3 
                          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-4 leading-tight"
                          style={{ color: service.color }}
                        >
                          {service.category}
                        </h3>
                        
                        <p 
                          className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 leading-relaxed"
                          style={{ color: '#666666' }}
                        >
                          {service.description}
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              className="flex items-center space-x-2 sm:space-x-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ 
                                duration: 0.5,
                                delay: (index * 0.2) + (featureIndex * 0.1)
                              }}
                              viewport={{ once: true }}
                            >
                              <div 
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                                style={{ backgroundColor: service.color }}
                              />
                              <span 
                                className="text-xs sm:text-xs md:text-sm leading-tight"
                                style={{ color: '#666666' }}
                              >
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Hover Arrow */}
                        <motion.div
                          className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 right-2 sm:right-3 md:right-4 lg:right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ x: 5 }}
                        >
                          <div 
                            className="w-4 sm:w-5 md:w-6 lg:w-8 h-0.5 sm:h-1"
                            style={{ backgroundColor: service.color }}
                          />
                        </motion.div>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation arrows - hidden on mobile, visible on larger screens */}
            <CarouselPrevious 
              className="hidden sm:flex -left-12 md:-left-16"
              style={{ 
                backgroundColor: '#fefefe',
                borderColor: '#95231c',
                color: '#95231c'
              }}
            />
            <CarouselNext 
              className="hidden sm:flex -right-12 md:-right-16"
              style={{ 
                backgroundColor: '#fefefe',
                borderColor: '#95231c',
                color: '#95231c'
              }}
            />
          </Carousel>
          
          {/* Carousel indicators for mobile */}
          <div className="flex justify-center mt-4 sm:hidden space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: index === 0 ? '#95231c' : '#dddcdb'
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Integration Visualization */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8">
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#95231c' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <HardHat size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" color="#fefefe" />
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 sm:w-3 md:w-4 lg:w-8 h-0.5 sm:h-1" style={{ backgroundColor: '#e1d385' }} />
              <div className="w-2 sm:w-3 md:w-4 lg:w-8 h-0.5 sm:h-1" style={{ backgroundColor: '#ba7b72' }} />
              <div className="w-2 sm:w-3 md:w-4 lg:w-8 h-0.5 sm:h-1" style={{ backgroundColor: '#e1d385' }} />
            </motion.div>
            
            <motion.div
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: '#e1d385' }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ color: '#95231c' }} />
            </motion.div>
          </div>
          
          <p 
            className="text-xs sm:text-xs md:text-xs mt-2 sm:mt-3 md:mt-4 max-w-md mx-auto px-4 leading-tight"
            style={{ color: '#666666' }}
          >
            Seamless integration of civil engineering excellence with cutting-edge technology solutions
          </p>
        </motion.div>
      </div>
    </section>
  );
}