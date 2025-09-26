import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Quote, 
  Star, 
  User,
  Building2,
  MapPin,
  Calendar,
  Trophy,
  TrendingUp,
  ArrowLeft,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  location: string;
  date: string;
  rating: number;
  testimonial: string;
  shortQuote: string;
  avatar: string;
  metrics: {
    improvement: string;
    timeframe: string;
    impact: string;
  };
  achievements: string[];
  verificationBadge: string;
  theme: 'blue' | 'green' | 'purple' | 'orange';
}

export function LightweightTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showFullText, setShowFullText] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 'mumbai-commissioner',
      name: 'Dr. Rajesh Sharma',
      role: 'Municipal Commissioner',
      organization: 'Greater Mumbai Municipal Corporation',
      location: 'Mumbai, Maharashtra',
      date: 'March 2024',
      rating: 5,
      testimonial: 'The digital transformation brought by this exceptional team has revolutionized how we serve Mumbai\'s 12.4 million citizens. Their AI-powered solutions reduced service delivery time from 15 days to just 2.3 days on average. The quantum-safe security implementation gives us complete confidence in protecting citizen data.',
      shortQuote: 'Revolutionary transformation of Mumbai\'s municipal services.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      metrics: {
        improvement: '87% faster service delivery',
        timeframe: '18 months implementation',
        impact: '₹2.1B additional revenue generated'
      },
      achievements: [
        'Digital India Excellence Award 2024',
        'Smart City Innovation Leadership',
        'Zero Security Incidents Record',
        'Highest Citizen Satisfaction in Maharashtra'
      ],
      verificationBadge: 'Government Verified',
      theme: 'blue'
    },
    {
      id: 'pune-cto',
      name: 'Ms. Priya Patel',
      role: 'Chief Technology Officer',
      organization: 'Pune Smart City Development Corporation',
      location: 'Pune, Maharashtra',
      date: 'January 2024',
      rating: 5,
      testimonial: 'Working with this team has been a game-changer for Pune\'s technology infrastructure. They implemented a comprehensive quantum-safe cybersecurity framework that has maintained zero security breaches for 36 months straight. Their predictive analytics system now forecasts infrastructure maintenance needs 30 days in advance.',
      shortQuote: 'Pune is now a model smart city thanks to their innovation.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      metrics: {
        improvement: '85% reduction in emergency repairs',
        timeframe: '24 months deployment',
        impact: '₹8.5 Cr annual operational savings'
      },
      achievements: [
        'National Cybersecurity Excellence Award',
        'Smart Infrastructure Pioneer',
        'Blockchain Innovation Leader',
        'Technology Excellence Recognition'
      ],
      verificationBadge: 'Industry Leader Verified',
      theme: 'green'
    },
    {
      id: 'nashik-director',
      name: 'Shri Anil Deshmukh',
      role: 'Director of Urban Planning',
      organization: 'Nashik Municipal Corporation',
      location: 'Nashik, Maharashtra',
      date: 'November 2023',
      rating: 5,
      testimonial: 'The GIS and spatial analytics platform they developed has transformed our urban planning capabilities completely. We now make data-driven decisions backed by precise geographical intelligence. Property survey accuracy improved to 99.8%, and our planning cycles reduced from 18 months to just 4 months.',
      shortQuote: 'Data-driven urban planning has revolutionized our city development.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      metrics: {
        improvement: '78% faster urban planning cycles',
        timeframe: '15 months implementation',
        impact: '₹127 Cr additional property revenue'
      },
      achievements: [
        'Best Urban Planning Innovation',
        'GIS Excellence Award',
        'Community Engagement Excellence',
        'Sustainable Development Recognition'
      ],
      verificationBadge: 'Municipal Authority Verified',
      theme: 'purple'
    }
  ];

  const currentTest = testimonials[currentTestimonial];

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      setShowFullText(false);
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'blue': return {
        gradient: 'from-blue-600 via-blue-700 to-indigo-800',
        accent: '#3b82f6',
      };
      case 'green': return {
        gradient: 'from-emerald-600 via-green-700 to-teal-800',
        accent: '#10b981',
      };
      case 'purple': return {
        gradient: 'from-purple-600 via-violet-700 to-indigo-800',
        accent: '#8b5cf6',
      };
      default: return {
        gradient: 'from-blue-600 via-blue-700 to-indigo-800',
        accent: '#3b82f6',
      };
    }
  };

  const themeColors = getThemeColors(currentTest.theme);

  return (
    <section className="relative min-h-screen rounded-3xl overflow-hidden">
      {/* Background */}
      <motion.div
        key={currentTestimonial}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradient}`}
      >
        {/* Simple animated background */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-8 h-8 border-2 border-white rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 12}%`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20"
                >
                  <Trophy className="w-5 h-5 text-yellow-300" />
                  <span className="text-white font-medium">{currentTest.verificationBadge}</span>
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                >
                  Client Success Stories
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-white/80 max-w-3xl mx-auto"
                >
                  Hear from municipal leaders transforming their cities
                </motion.p>
              </div>

              {/* Main testimonial */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Profile and quote */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-8"
                >
                  {/* Profile */}
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
                        <img 
                          src={currentTest.avatar} 
                          alt={currentTest.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {currentTest.name}
                      </h3>
                      <p className="text-white/80 mb-1">{currentTest.role}</p>
                      <p className="text-white/60 text-sm">{currentTest.organization}</p>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                        ))}
                        <span className="text-white/80 text-sm ml-2">5.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="w-12 h-12 text-white/20 absolute -top-4 -left-2" />
                    <blockquote className="text-xl text-white leading-relaxed pl-8">
                      {showFullText ? currentTest.testimonial : currentTest.shortQuote}
                    </blockquote>
                    
                    <button
                      onClick={() => setShowFullText(!showFullText)}
                      className="mt-4 text-white/80 hover:text-white transition-colors underline"
                    >
                      {showFullText ? 'Show less' : 'Read full testimonial'}
                    </button>
                  </div>

                  {/* Location and date */}
                  <div className="flex items-center space-x-6 text-white/60">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{currentTest.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{currentTest.date}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Right: Metrics and achievements */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-8"
                >
                  {/* Metrics */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="text-white font-medium mb-4 flex items-center">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(currentTest.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-white/80 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Awards */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="text-white font-medium mb-4 flex items-center">
                      <Trophy className="w-5 h-5 mr-2" />
                      Awards & Recognition
                    </h4>
                    <div className="space-y-2">
                      {currentTest.achievements.map((achievement, index) => (
                        <motion.div
                          key={achievement}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center space-x-2 text-white/80"
                        >
                          <Star className="w-3 h-3 text-yellow-300 fill-current flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <button
          onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
          className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}