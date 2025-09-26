import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Head of Civil Engineering",
    journey: "Started her career with municipal planning projects in Pune, led the smart city initiative for 3 major districts. Specializes in sustainable urban development and green infrastructure solutions.",
    expertise: "Urban Planning & Infrastructure",
    image: null, // No image for first card - solid color
    textColor: "#fefefe",
    bgColor: "#95231c",
    cardType: "solid"
  },
  {
    name: "Arjun Patel",
    role: "Chief Technology Officer", 
    journey: "Former tech lead at Microsoft Azure. Pioneered cloud-first infrastructure solutions for government projects. Expert in AI integration and scalable system architecture.",
    expertise: "Cloud Architecture & AI Integration",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc4OTE1NDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    textColor: "#95231c",
    bgColor: "#dddcdb",
    cardType: "image"
  },
  {
    name: "Sneha Reddy",
    role: "Director of Operations",
    journey: "MBA from IIM-A, managed operations for Fortune 500 infrastructure projects. Passionate about process optimization and delivering projects ahead of schedule.",
    expertise: "Process Excellence & Quality Assurance",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1Nzg5MTU0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    textColor: "#95231c",
    bgColor: "#fefefe",
    cardType: "image"
  },
  {
    name: "Vikram Singh",
    role: "Lead Project Manager",
    journey: "PMP certified project manager with experience in complex infrastructure projects across 6 states. Known for stakeholder management and risk mitigation strategies.",
    expertise: "Integration & Stakeholder Management",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHN1aXR8ZW58MXx8fHwxNzU3ODkxNTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    textColor: "#95231c",
    bgColor: "#fefefe",
    cardType: "image"
  }
];

export default function TeamSection() {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: '#f3f3f3' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-4 md:top-10 right-8 md:right-20 w-20 h-20 md:w-40 md:h-40 rounded-full"
          style={{ backgroundColor: '#95231c' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 md:bottom-20 left-4 md:left-16 w-16 h-16 md:w-32 md:h-32 rotate-45"
          style={{ backgroundColor: '#e1d385' }}
          animate={{ 
            rotate: [45, 405, 45],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
          <div className="max-w-[90rem] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4"
            style={{ color: '#95231c' }}
          >
            Founding Team
          </h2>
          <p 
            className="text-base md:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed px-2"
            style={{ color: '#666666' }}
          >
            Meet the visionaries and experts who are shaping the future of 
            integrated civil and technology services across India.
          </p>
        </motion.div>
        
        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card 
                className="h-full overflow-hidden border-0 transition-all duration-300 hover:shadow-2xl group"
                style={{ 
                  backgroundColor: member.bgColor,
                  boxShadow: '0 8px 32px rgba(149, 35, 28, 0.15)'
                }}
              >
                <div className="flex flex-col h-full">
                  {/* Profile Image Section */}
                  <div className="relative h-48 md:h-56">
                    {member.cardType === "solid" ? (
                      // Solid color card
                      <div 
                        className="h-full flex items-center justify-center relative"
                        style={{ backgroundColor: member.bgColor }}
                      >
                        {/* Decorative elements for solid card */}
                        <motion.div
                          className="absolute top-4 left-4 w-8 h-8 rounded-full opacity-20"
                          style={{ backgroundColor: '#e1d385' }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                          className="absolute bottom-4 right-4 w-6 h-6 rotate-45 opacity-20"
                          style={{ backgroundColor: '#d8bea5' }}
                          animate={{ 
                            scale: [1, 1.3, 1],
                            rotate: [45, 225, 45]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Team Member Initial or Icon */}
                        <div 
                          className="text-4xl md:text-5xl font-bold opacity-30"
                          style={{ color: member.textColor }}
                        >
                          {member.name.split(' ').map(name => name[0]).join('')}
                        </div>
                      </div>
                    ) : (
                      // Image card
                      <div className="h-full relative overflow-hidden">
                        <ImageWithFallback
                          src=""
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    )}
                    
                    {/* Social Icons Overlay */}
                    <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        className="p-2 rounded-full backdrop-blur-sm"
                        style={{ 
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: member.textColor
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(255,255,255,0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin size={14} />
                      </motion.button>
                      <motion.button
                        className="p-2 rounded-full backdrop-blur-sm"
                        style={{ 
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: member.textColor
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: 'rgba(255,255,255,0.3)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Mail size={14} />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 md:p-5 flex-1 flex flex-col">
                    {/* Name & Role */}
                    <h3 
                      className="text-lg md:text-xl mb-2"
                      style={{ color: member.textColor }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-sm mb-3 opacity-80"
                      style={{ color: member.textColor }}
                    >
                      {member.role}
                    </p>
                    
                    {/* Journey */}
                    <div 
                      className="p-3 rounded-lg mb-4 text-sm leading-relaxed flex-1"
                      style={{ 
                        backgroundColor: member.cardType === "solid" ? 'rgba(255,255,255,0.15)' : 'rgba(149, 35, 28, 0.08)',
                        color: member.cardType === "solid" ? 'rgba(255,255,255,0.9)' : '#666666'
                      }}
                    >
                      {member.journey}
                    </div>
                    
                    {/* Expertise */}
                    <div className="mb-4">
                      <p 
                        className="text-xs uppercase tracking-wide opacity-70 mb-1"
                        style={{ color: member.textColor }}
                      >
                        Expertise
                      </p>
                      <p 
                        className="text-sm"
                        style={{ 
                          color: member.cardType === "solid" ? 'rgba(255,255,255,0.9)' : '#666666'
                        }}
                      >
                        {member.expertise}
                      </p>
                    </div>
                    
                    {/* Profile Link */}
                    <motion.div
                      className="flex items-center justify-between mt-auto"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span 
                        className="text-xs opacity-60"
                        style={{ color: member.textColor }}
                      >
                        View Profile
                      </span>
                      <ExternalLink 
                        size={14} 
                        style={{ color: member.textColor, opacity: 0.7 }} 
                      />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}