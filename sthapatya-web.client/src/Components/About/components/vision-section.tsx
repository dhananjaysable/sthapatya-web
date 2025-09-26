import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
//import transitionMapImage from 'figma:asset/4afe02d94d671c76c167c251a954cf159734bbdc.png';

export default function VisionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const arrowScale = useTransform(scrollYProgress, [0.2, 0.8], [1, 1.5]);
  const arrowOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0.3, 1]);
  const mapScale = useTransform(scrollYProgress, [0.3, 0.9], [0.8, 1.2]);

  return (
    <section 
      ref={ref}
      className="py-4 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: '#fefefe' }}
    >
      {/* Background Geometric Overlays */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 md:top-10 left-4 md:left-10 w-16 h-16 md:w-32 md:h-32 rotate-45" style={{ backgroundColor: '#dddcdb' }} />
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-20 w-12 h-12 md:w-24 md:h-24 rounded-full" style={{ backgroundColor: '#d8bea5' }} />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 md:w-16 md:h-16 rotate-12" style={{ backgroundColor: '#e1d385' }} />
      </div>
      
      {/* Heading - Always at top, completely separate */}
          <div className="max-w-[90rem] mx-auto text-center mb-8 md:mb-12 lg:mb-16">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 md:mb-6"
          style={{ color: '#95231c' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Vision
        </motion.h2>
        
        {/* Vision Tagline */}
        <motion.div
                  className="max-w-[90rem] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-base md:text-lg lg:text-xl leading-relaxed font-bold" style={{ color: '#666666' }}>
            Expanding from Maharashtra to All of India, creating integrated solutions 
            that transform infrastructure and technology landscapes nationwide.
          </p>
        </motion.div>
      </div>

      {/* Content Container */}
          <div className="max-w-[90rem] mx-auto">
        {/* Mobile View - Original Layout */}
        <div className="lg:hidden">
          {/* Horizontal Map Transition */}
          <motion.div 
            className="relative flex items-center justify-center space-x-4 md:space-x-8 mb-8 md:mb-12"
            style={{ scale: mapScale }}
          >
            {/* Maharashtra Map */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-20 h-28 md:w-28 md:h-36 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717700299773-1accc14b67f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWhhcmFzaHRyYSUyMHN0YXRlJTIwbWFwJTIwSW5kaWElMjBvdXRsaW5lfGVufDF8fHx8MTc1NzkzMzE2OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Maharashtra state map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2">
                  <MapPin size={12} className="md:w-4 md:h-4" color="#e1d385" />
                </div>
              </div>
              <span className="block text-xs md:text-sm mt-2 md:mt-3 text-center" style={{ color: '#95231c' }}>
                Maharashtra
              </span>
            </motion.div>
            
            {/* Animated Arrow */}
            <motion.div
              className="flex items-center"
              style={{ 
                scale: arrowScale,
                opacity: arrowOpacity
              }}
            >
              <ArrowRight size={24} className="md:w-8 md:h-8" style={{ color: '#e1d385' }} />
            </motion.div>
            
            {/* India Map */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative w-28 h-36 md:w-40 md:h-48 rounded-lg overflow-hidden shadow-xl border-3 border-dashed" style={{ borderColor: '#e1d385' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546833998-07256bcc76ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGNvdW50cnklMjBtYXAlMjBvdXRsaW5lJTIwc2hhcGV8ZW58MXx8fHwxNzU3OTMzMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="India country map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 border-4 border-dashed opacity-60" style={{ borderColor: '#e1d385' }} />
                <div className="absolute bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2 text-center">
                  <MapPin size={16} className="md:w-5 md:h-5 mx-auto mb-1" style={{ color: '#e1d385' }} />
                  <span className="block text-xs" style={{ color: '#e1d385' }}>
                    Future
                  </span>
                </div>
              </div>
              <span className="block text-xs md:text-sm mt-2 md:mt-3 text-center" style={{ color: '#e1d385' }}>
                All of India
              </span>
            </motion.div>
          </motion.div>
          
          {/* Brief Description */}
          <motion.div
            className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#666666' }}>
              Starting with deep roots in Maharashtra, we envision a future where our integrated 
              civil and technology services reach every corner of India, transforming how 
              infrastructure and digital solutions work together.
            </p>
            
            <p className="text-sm md:text-base leading-relaxed" style={{ color: '#666666' }}>
              Our expansion strategy focuses on building local partnerships while maintaining 
              our commitment to quality, innovation, and sustainable development practices 
              that benefit communities nationwide.
            </p>
            
            <motion.div
              className="flex items-center justify-center space-x-3 pt-2 md:pt-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-8 md:w-12 h-1"
                style={{ backgroundColor: '#e1d385' }}
              />
              <span className="text-sm md:text-base" style={{ color: '#95231c' }}>
                Growing with Purpose
              </span>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Desktop/Laptop View - Clean Two Column Layout */}
        <div className="hidden lg:flex lg:items-center lg:gap-12 xl:gap-16">
          {/* Left Column - ONLY Map */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ scale: mapScale }}
          >
            <div className="max-w-lg w-full">
              <img 
                alt="Vision map showing expansion from Maharashtra to All of India"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
          
          {/* Right Column - ONLY Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-lg xl:text-xl leading-relaxed" style={{ color: '#666666' }}>
              Starting with deep roots in Maharashtra, we envision a future where our integrated 
              civil and technology services reach every corner of India, transforming how 
              infrastructure and digital solutions work together.
            </p>
            
            <p className="text-base xl:text-lg leading-relaxed" style={{ color: '#666666' }}>
              Our expansion strategy focuses on building local partnerships while maintaining 
              our commitment to quality, innovation, and sustainable development practices 
              that benefit communities nationwide.
            </p>
            
            <motion.div
              className="flex items-center space-x-3 pt-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-12 h-1"
                style={{ backgroundColor: '#e1d385' }}
              />
              <span className="text-lg" style={{ color: '#95231c' }}>
                Growing with Purpose
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Parallax Elements */}
      <motion.div
        className="absolute top-10 md:top-20 right-4 md:right-10 opacity-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      >
        <div 
          className="w-8 h-8 md:w-16 md:h-16 rotate-45"
          style={{ backgroundColor: '#ba7b72' }}
        />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 md:bottom-20 left-4 md:left-10 opacity-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
      >
        <div 
          className="w-10 h-10 md:w-20 md:h-20 rounded-full"
          style={{ backgroundColor: '#d8bea5' }}
        />
      </motion.div>
    </section>
  );
}