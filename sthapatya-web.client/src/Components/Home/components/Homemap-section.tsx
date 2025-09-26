import { motion } from 'motion/react';

export function MapSection() {
  return (
    <section className="h-screen flex items-center py-20" style={{ backgroundColor: '#fefefe' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 
                className="text-5xl lg:text-6xl xl:text-7xl mb-8"
                style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
              >
                Our Reach Across India
              </h2>
              <div className="w-24 h-1 mb-8" style={{ backgroundColor: '#e1d385' }}></div>
            </div>
            
            <div className="space-y-6">
              <p 
                className="text-xl text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Starting from our roots in <strong style={{ color: '#95231c' }}>Maharashtra</strong>, we have successfully expanded our operations to serve clients across major Indian states.
              </p>
              <p 
                className="text-xl text-gray-700 leading-relaxed"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Our pan-India presence ensures local expertise combined with national-scale delivery capabilities, making us the preferred technology partner for businesses nationwide.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h3 
                  className="text-2xl xl:text-3xl"
                  style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Major States
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#e1d385' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Maharashtra (HQ)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#ba7b72' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Karnataka</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#e1d385' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Tamil Nadu</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#ba7b72' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Gujarat</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 
                  className="text-2xl xl:text-3xl"
                  style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                >
                  Expanding To
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#dddcdb' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Delhi NCR</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#dddcdb' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>West Bengal</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#dddcdb' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Rajasthan</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#dddcdb' }}></div>
                    <span style={{ fontFamily: 'Roboto, sans-serif' }}>Andhra Pradesh</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - India Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Simplified India Map SVG */}
              <svg
                viewBox="0 0 400 500"
                className="w-full h-auto"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
              >
                {/* Base India outline */}
                <path
                  d="M150 50 L250 40 L350 80 L380 120 L370 180 L350 220 L380 280 L370 350 L340 400 L300 450 L200 460 L120 440 L80 380 L60 320 L40 250 L50 180 L70 120 L100 80 L150 50 Z"
                  fill="#f3f3f3"
                  stroke="#dddcdb"
                  strokeWidth="2"
                />
                
                {/* Maharashtra (HQ) - Highlighted */}
                <circle cx="180" cy="280" r="10" style={{ fill: '#95231c' }}>
                  <animate attributeName="r" values="10;14;10" dur="2s" repeatCount="indefinite"/>
                </circle>
                <text x="195" y="285" className="text-sm" fill="#95231c" style={{ fontFamily: 'Montserrat, sans-serif' }}>Maharashtra</text>
                
                {/* Karnataka */}
                <circle cx="170" cy="350" r="8" style={{ fill: '#ba7b72' }}/>
                <text x="185" y="355" className="text-sm" fill="#ba7b72" style={{ fontFamily: 'Montserrat, sans-serif' }}>Karnataka</text>
                
                {/* Tamil Nadu */}
                <circle cx="190" cy="400" r="8" style={{ fill: '#e1d385' }}/>
                <text x="205" y="405" className="text-sm" fill="#95231c" style={{ fontFamily: 'Montserrat, sans-serif' }}>Tamil Nadu</text>
                
                {/* Gujarat */}
                <circle cx="120" cy="220" r="8" style={{ fill: '#ba7b72' }}/>
                <text x="135" y="225" className="text-sm" fill="#ba7b72" style={{ fontFamily: 'Montserrat, sans-serif' }}>Gujarat</text>
                
                {/* Expanding regions - dotted */}
                <circle cx="220" cy="150" r="6" fill="#dddcdb" opacity="0.7"/>
                <text x="235" y="155" className="text-sm" fill="#666" style={{ fontFamily: 'Montserrat, sans-serif' }}>Delhi NCR</text>
                
                <circle cx="280" cy="200" r="6" fill="#dddcdb" opacity="0.7"/>
                <text x="295" y="205" className="text-sm" fill="#666" style={{ fontFamily: 'Montserrat, sans-serif' }}>West Bengal</text>
                
                {/* Connection lines */}
                <g stroke="#ba7b72" strokeWidth="2" strokeDasharray="4,4" opacity="0.6">
                  <line x1="180" y1="280" x2="170" y2="350"/>
                  <line x1="180" y1="280" x2="190" y2="400"/>
                  <line x1="180" y1="280" x2="120" y2="220"/>
                </g>
              </svg>
              
              {/* Floating indicators */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-16 right-8 text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-xl"
                  style={{ backgroundColor: '#e1d385' }}
                >
                  <span className="text-3xl">🏢</span>
                </div>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  15+ States
                </p>
              </motion.div>
              
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                className="absolute bottom-16 left-8 text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-xl"
                  style={{ backgroundColor: '#ba7b72' }}
                >
                  <span className="text-3xl">🎯</span>
                </div>
                <p 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  200+ Projects
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}