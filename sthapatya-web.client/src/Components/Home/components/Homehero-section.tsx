import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Users, Code, TrendingUp, Globe } from 'lucide-react';

const sidebarItems = [
  {
    id: 'innovation',
    title: 'Innovation',
    icon: <TrendingUp className="w-5 h-5" />,
    content: {
      title: 'Driving Innovation Forward',
      description: 'We leverage cutting-edge technologies and methodologies to create innovative solutions that transform businesses and drive growth.',
      features: ['AI & Machine Learning', 'Blockchain Solutions', 'IoT Integration', 'Cloud-Native Architecture']
    }
  },
  {
    id: 'expertise',
    title: 'Expertise',
    icon: <Code className="w-5 h-5" />,
    content: {
      title: 'Technical Excellence',
      description: 'Our team of expert developers, architects, and consultants brings decades of combined experience across various industries.',
      features: ['Full-Stack Development', 'Enterprise Architecture', 'DevOps & CI/CD', 'Quality Assurance']
    }
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    icon: <Users className="w-5 h-5" />,
    content: {
      title: 'Partnership Approach',
      description: 'We work closely with our clients as strategic partners, ensuring alignment with business objectives and long-term success.',
      features: ['Agile Methodology', 'Transparent Communication', 'Regular Updates', 'Client-Centric Approach']
    }
  },
  {
    id: 'global',
    title: 'Global',
    icon: <Globe className="w-5 h-5" />,
    content: {
      title: 'Pan-India Presence',
      description: 'From Maharashtra to nationwide expansion, we serve clients across India with local expertise and global standards.',
      features: ['15+ States Coverage', '200+ Projects Delivered', '24/7 Support', 'Multilingual Teams']
    }
  }
];

export function HeroSection() {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          {/* Fallback image if video doesn't load */}
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc3NDIzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Corporate building"
            className="w-full h-full object-cover"
          />
        </video>
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      
      {/* Vertical Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -240 }}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-0 h-full z-30 flex"
      >
        {/* Sidebar Content */}
        <div 
          className="w-64 h-full flex flex-col justify-center px-6 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(149, 35, 28, 0.95)' }}
        >
          <div className="space-y-4">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  selectedItem.id === item.id 
                    ? 'bg-white/20 shadow-lg' 
                    : 'hover:bg-white/10'
                }`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div style={{ color: '#e1d385' }}>
                  {item.icon}
                </div>
                <span className="text-white font-medium">{item.title}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-8 h-12 flex items-center justify-center self-center rounded-r-lg transition-all duration-300"
          style={{ backgroundColor: '#95231c' }}
        >
          <motion.div
            animate={{ rotate: sidebarOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </motion.div>
        </button>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          {/* Left side - Company Name & Tagline */}
          <div className="flex-1 text-center lg:text-left lg:pl-80">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 text-white font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              InnovateNext
              <span className="block" style={{ color: '#e1d385' }}>Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl leading-relaxed mb-8"
              style={{ fontFamily: 'Roboto, sans-serif' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming businesses across India with cutting-edge technology solutions and innovative strategies
            </motion.p>
            
            <motion.button
              className="px-8 py-4 rounded-full text-white text-lg hover:shadow-2xl transition-all duration-300"
              style={{ backgroundColor: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
              whileHover={{ scale: 1.05, backgroundColor: '#ba7b72' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore Our Solutions
            </motion.button>
          </div>

          {/* Right side - Detail Card */}
          <div className="hidden lg:block flex-1 max-w-md ml-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl shadow-2xl backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
              >
                <h3 
                  className="text-2xl xl:text-3xl mb-4"
                  style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                >
                  {selectedItem.content.title}
                </h3>
                <p 
                  className="text-gray-700 mb-6 leading-relaxed"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {selectedItem.content.description}
                </p>
                <ul className="space-y-3">
                  {selectedItem.content.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: '#e1d385' }}
                      ></div>
                      <span 
                        className="text-gray-700"
                        style={{ fontFamily: 'Roboto, sans-serif' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}