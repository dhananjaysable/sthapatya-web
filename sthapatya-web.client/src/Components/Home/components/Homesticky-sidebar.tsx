import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const sections = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About Us' },
  { id: 'services', name: 'Our Services' },
  { id: 'projects', name: 'Our Projects' },
  { id: 'founders', name: 'Founders' },
  { id: 'contact', name: 'Contact Us' }
];

export function StickySidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-6">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;
          
          return (
            <motion.div
              key={section.id}
              className="relative flex items-center justify-end group cursor-pointer"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.1 }}
            >
              {/* Section name - shows on hover */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0,
                  x: isHovered ? 0 : 10
                }}
                transition={{ duration: 0.2 }}
                className="absolute right-12 whitespace-nowrap"
              >
                <div 
                  className="px-3 py-1 rounded-md shadow-lg text-sm"
                  style={{ 
                    backgroundColor: '#fefefe', 
                    color: '#95231c',
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  {section.name}
                </div>
              </motion.div>
              
              {/* Navigation line */}
              <motion.div
                className="relative"
                animate={{
                  width: isActive || isHovered ? '32px' : '16px',
                  height: '3px'
                }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: isActive ? '#95231c' : '#dddcdb'
                }}
              />
              
              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#95231c' }}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}