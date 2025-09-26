import { motion } from 'motion/react';
import founderVisionImage from 'figma:asset/9309fa4fe66d7f392829484ed55eba832fbf9b80.png';

export default function FounderSection() {
  return (
    <section 
      className="py-8 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: '#f3f3f3' }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-4 md:top-10 left-4 md:left-10 w-10 h-10 md:w-16 md:h-16 rounded-full"
          style={{ backgroundColor: '#e1d385' }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-8 h-8 md:w-12 md:h-12 rotate-45"
          style={{ backgroundColor: '#ba7b72' }}
          animate={{ 
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto flex justify-center">
        {/* Single Founder Vision Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={founderVisionImage}
            alt="Founder's Vision - Complete design with heading, portrait, and vision statement"
            className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}