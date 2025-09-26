import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Quote, 
  Star, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  User,
  Building2,
  MapPin,
  Calendar,
  Trophy,
  TrendingUp,
  Heart,
  Eye,
  Users,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Video,
  Mic,
  Camera
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
  video?: string;
  audio?: string;
  metrics: {
    improvement: string;
    timeframe: string;
    impact: string;
  };
  achievements: string[];
  verificationBadge: string;
  socialProof: {
    linkedIn?: string;
    company?: string;
    website?: string;
  };
  tags: string[];
  backgroundImage: string;
  theme: 'blue' | 'green' | 'purple' | 'orange';
}

export function ImmersiveTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState<'card' | 'immersive' | 'grid'>('immersive');
  const [showFullText, setShowFullText] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const testimonials: Testimonial[] = [
    {
      id: 'mumbai-commissioner',
      name: 'Dr. Rajesh Sharma',
      role: 'Municipal Commissioner',
      organization: 'Greater Mumbai Municipal Corporation',
      location: 'Mumbai, Maharashtra',
      date: 'March 2024',
      rating: 5,
      testimonial: 'The digital transformation brought by this exceptional team has revolutionized how we serve Mumbai\'s 12.4 million citizens. Their AI-powered solutions reduced service delivery time from 15 days to just 2.3 days on average. The quantum-safe security implementation gives us complete confidence in protecting citizen data. What impressed me most is their ability to maintain 99.97% system uptime while handling millions of daily transactions. This is not just technology implementation - it\'s a complete reimagining of municipal governance.',
      shortQuote: 'Revolutionary transformation of Mumbai\'s municipal services.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      video: '/testimonials/mumbai-commissioner.mp4',
      audio: '/testimonials/mumbai-commissioner.mp3',
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
      socialProof: {
        linkedIn: 'https://linkedin.com/in/rajesh-sharma-mumbai',
        company: 'https://mumbai.gov.in',
        website: 'https://mumbai.gov.in/commissioner'
      },
      tags: ['Digital Transformation', 'Smart City', 'AI Implementation', 'Security'],
      backgroundImage: 'mumbai-skyline',
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
      testimonial: 'Working with this team has been a game-changer for Pune\'s technology infrastructure. They implemented a comprehensive quantum-safe cybersecurity framework that has maintained zero security breaches for 36 months straight. Their predictive analytics system now forecasts infrastructure maintenance needs 30 days in advance, reducing emergency repairs by 85%. The blockchain-based identity management system they developed is being studied by other smart cities worldwide as a model implementation.',
      shortQuote: 'Pune is now a model smart city thanks to their innovation.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      video: '/testimonials/pune-cto.mp4',
      audio: '/testimonials/pune-cto.mp3',
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
      socialProof: {
        linkedIn: 'https://linkedin.com/in/priya-patel-pune',
        company: 'https://punesmartcity.in',
        website: 'https://punesmartcity.in/leadership'
      },
      tags: ['Cybersecurity', 'Blockchain', 'Infrastructure', 'Innovation'],
      backgroundImage: 'pune-tech-hub',
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
      testimonial: 'The GIS and spatial analytics platform they developed has transformed our urban planning capabilities completely. We now make data-driven decisions backed by precise geographical intelligence. Property survey accuracy improved to 99.8%, and our planning cycles reduced from 18 months to just 4 months. The augmented reality interface they created allows citizens to visualize proposed developments in real-time, leading to 94% higher community approval rates.',
      shortQuote: 'Data-driven urban planning has revolutionized our city development.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      video: '/testimonials/nashik-director.mp4',
      audio: '/testimonials/nashik-director.mp3',
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
      socialProof: {
        linkedIn: 'https://linkedin.com/in/anil-deshmukh-nashik',
        company: 'https://nashikcity.gov.in',
        website: 'https://nashikcity.gov.in/planning'
      },
      tags: ['GIS', 'Urban Planning', 'AR Technology', 'Community Engagement'],
      backgroundImage: 'nashik-planning',
      theme: 'purple'
    },
    {
      id: 'aurangabad-commissioner',
      name: 'Dr. Meera Kulkarni',
      role: 'Municipal Commissioner',
      organization: 'Aurangabad Municipal Corporation',
      location: 'Aurangabad, Maharashtra',
      date: 'September 2023',
      rating: 5,
      testimonial: 'The citizen service portal and mobile application they developed has eliminated queues and paperwork completely. 89% of our services are now delivered digitally, with average processing time reduced to 3.2 days from 12 days previously. The AI-powered multilingual chatbot handles citizen queries in 12 regional languages with 96% accuracy. Our citizen satisfaction rating jumped to 91%, the highest in our city\'s history.',
      shortQuote: 'Complete digital transformation of citizen services.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      video: '/testimonials/aurangabad-commissioner.mp4',
      audio: '/testimonials/aurangabad-commissioner.mp3',
      metrics: {
        improvement: '89% services delivered digitally',
        timeframe: '12 months rollout',
        impact: '91% citizen satisfaction achieved'
      },
      achievements: [
        'Digital Service Excellence Award',
        'Citizen Satisfaction Leadership',
        'AI Innovation Recognition',
        'Public Service Transformation'
      ],
      verificationBadge: 'Government Excellence Verified',
      socialProof: {
        linkedIn: 'https://linkedin.com/in/meera-kulkarni-aurangabad',
        company: 'https://aurangabadcity.gov.in',
        website: 'https://aurangabadcity.gov.in/commissioner'
      },
      tags: ['Digital Services', 'AI Chatbot', 'Mobile App', 'Citizen Experience'],
      backgroundImage: 'aurangabad-heritage',
      theme: 'orange'
    }
  ];

  const currentTest = testimonials[currentTestimonial];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'blue': return {
        gradient: 'from-blue-600 via-blue-700 to-indigo-800',
        accent: '#3b82f6',
        light: 'from-blue-50 to-indigo-50'
      };
      case 'green': return {
        gradient: 'from-emerald-600 via-green-700 to-teal-800',
        accent: '#10b981',
        light: 'from-emerald-50 to-teal-50'
      };
      case 'purple': return {
        gradient: 'from-purple-600 via-violet-700 to-indigo-800',
        accent: '#8b5cf6',
        light: 'from-purple-50 to-indigo-50'
      };
      case 'orange': return {
        gradient: 'from-orange-600 via-red-700 to-pink-800',
        accent: '#f97316',
        light: 'from-orange-50 to-pink-50'
      };
      default: return {
        gradient: 'from-blue-600 via-blue-700 to-indigo-800',
        accent: '#3b82f6',
        light: 'from-blue-50 to-indigo-50'
      };
    }
  };

  const themeColors = getThemeColors(currentTest.theme);

  const ImmersiveView = () => (
    <div className="relative min-h-screen rounded-3xl overflow-hidden">
      {/* Background */}
      <motion.div
        key={currentTestimonial}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradient}`}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className="absolute w-8 h-8 border-2 border-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
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
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="max-w-6xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20"
                >
                  <Trophy className="w-5 h-5 text-yellow-300" />
                  <span className="text-white font-medium">{currentTest.verificationBadge}</span>
                  <Star className="w-5 h-5 text-yellow-300 fill-current" />
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl md:text-6xl font-bold text-white mb-4"
                >
                  Client Success Stories
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl text-white/80 max-w-3xl mx-auto"
                >
                  Hear directly from municipal leaders who have transformed their cities
                </motion.p>
              </div>

              {/* Main testimonial */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Profile and quote */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="space-y-8"
                >
                  {/* Profile */}
                  <div className="flex items-center space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="relative"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img 
                          src={currentTest.avatar} 
                          alt={currentTest.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                    </motion.div>

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
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowFullText(!showFullText)}
                      className="mt-4 text-white/80 hover:text-white transition-colors underline"
                    >
                      {showFullText ? 'Show less' : 'Read full testimonial'}
                    </motion.button>
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
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                  className="space-y-8"
                >
                  {/* Metrics */}
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
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
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
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
                          transition={{ delay: 1.3 + index * 0.1 }}
                          className="flex items-center space-x-2 text-white/80"
                        >
                          <Star className="w-3 h-3 text-yellow-300 fill-current flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Media controls */}
                  <div className="flex items-center space-x-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Video className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Mic className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>

        <div className="flex space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, type: "spring" }}
      >
        <ImmersiveView />
      </motion.div>
    </div>
  );
}