import { motion } from 'motion/react';

export default function FounderVisionSection() {
  return (
      <section 
      className="py-8 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden"
      style={{ backgroundColor: '#dddcdb' }}
    >
      {/* Subtle Background Elements */}
          <div id="founder-vision"  className="absolute inset-0 opacity-5" >
        <motion.div
          className="absolute top-10 right-20 w-32 h-32 rounded-full"
          style={{ backgroundColor: '#e1d385' }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 left-16 w-24 h-24 rotate-45"
          style={{ backgroundColor: '#ba7b72' }}
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
          <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6"
            style={{ color: '#95231c' }}
          >
            Founder's Vision
          </h2>
          <p 
            className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: '#666666' }}
          >
            The visionary behind our integrated approach to civil engineering and technology solutions
          </p>
        </motion.div>
        
        {/* Main Content - Clean Layout */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
          {/* Left Column - Portrait */}
          <motion.div
            className="flex-shrink-0 flex justify-center mb-12 lg:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Portrait Circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                {/* Outer Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-3"
                  style={{ borderColor: '#e1d385' }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Inner Ring */}
                <motion.div
                  className="absolute inset-2 rounded-full border-2"
                  style={{ borderColor: '#95231c' }}
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Portrait Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1675277714353-376f525d935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwZm91bmRlciUyMHBvcnRyYWl0JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzU3OTM0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Founder Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full"
                  style={{ backgroundColor: '#e1d385' }}
                  animate={{ 
                    y: [-4, 4, -4],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full"
                  style={{ backgroundColor: '#ba7b72' }}
                  animate={{ 
                    x: [-3, 3, -3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div
                  className="absolute top-6 -left-6 w-8 h-8 rotate-45"
                  style={{ backgroundColor: '#d8bea5' }}
                  animate={{ 
                    rotate: [45, 225, 45],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Main Content Card */}
            <motion.div
              className="p-6 md:p-8 rounded-2xl"
              style={{ backgroundColor: '#fefefe' }}
              whileHover={{ 
                y: -2,
                boxShadow: '0 20px 40px rgba(149, 35, 28, 0.08)'
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start space-x-4">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#e1d385' }}
                >
                  <span className="text-lg" style={{ color: '#95231c' }}>
                    ✦
                  </span>
                </div>
                <div className="flex-1">
                  <p 
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: '#666666' }}
                  >
                    Starting as a civil engineer working on Mumbai's infrastructure projects, I witnessed 
                    the disconnect between traditional construction and emerging digital solutions. After 
                    completing my Masters in Technology Management, I spent five years bridging this gap 
                    in various consulting roles across India. My vision is to create India's most integrated 
                    civil-tech organization where infrastructure projects are conceived, designed, and executed 
                    with technology at their core, building smart, sustainable communities that seamlessly 
                    blend physical infrastructure with digital intelligence.
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Signature & Stats */}
            <motion.div
              className="flex flex-col space-y-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Signature */}
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-1 rounded-full"
                  style={{ backgroundColor: '#e1d385' }}
                />
                <div>
                  <p 
                    className="text-base md:text-lg"
                    style={{ color: '#95231c' }}
                  >
                    Rajesh Kumar
                  </p>
                  <p 
                    className="text-sm opacity-70"
                    style={{ color: '#95231c' }}
                  >
                    Founder & CEO
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-8 md:space-x-12">
                <div className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl mb-1"
                    style={{ color: '#e1d385' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    15+
                  </motion.div>
                  <p 
                    className="text-xs md:text-sm"
                    style={{ color: '#666666' }}
                  >
                    Years Experience
                  </p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl mb-1"
                    style={{ color: '#e1d385' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    100+
                  </motion.div>
                  <p 
                    className="text-xs md:text-sm"
                    style={{ color: '#666666' }}
                  >
                    Projects Led
                  </p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl mb-1"
                    style={{ color: '#e1d385' }}
                    whileHover={{ scale: 1.05 }}
                  >
                    50M+
                  </motion.div>
                  <p 
                    className="text-xs md:text-sm"
                    style={{ color: '#666666' }}
                  >
                    Value Delivered
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}