import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Heart,
  Target,
  Crown,
  Lightbulb
} from 'lucide-react';

interface HeroVariant {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  stats: { label: string; value: string; icon: React.ComponentType<any> }[];
  theme: {
    primary: string;
    accent: string;
  };
}

export function OptimizedHeroSection({ serviceType = 'overview' }: { serviceType?: string }) {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const heroVariants: HeroVariant[] = [
    {
      id: 'innovation-leader',
      title: 'Revolutionary Municipal Intelligence',
      subtitle: 'AI-Powered Smart City Solutions',
      description: 'Transforming urban governance through breakthrough artificial intelligence, quantum-safe security, and immersive citizen experiences that set global standards.',
      primaryCTA: 'Experience the Future',
      stats: [
        { label: 'AI Decisions/Sec', value: '10.2M', icon: Brain },
        { label: 'Cities Transformed', value: '67+', icon: Globe },
        { label: 'Quantum Security', value: '100%', icon: Shield },
        { label: 'Citizen Satisfaction', value: '98.7%', icon: Heart }
      ],
      theme: {
        primary: 'from-blue-600 via-blue-700 to-indigo-800',
        accent: '#3b82f6'
      }
    },
    {
      id: 'digital-excellence',
      title: 'Digital Governance Revolution',
      subtitle: 'Next-Generation Municipal Platform',
      description: 'Pioneering the future of citizen services with blockchain identity, AR interfaces, and predictive analytics that eliminate bureaucracy forever.',
      primaryCTA: 'Start Revolution',
      stats: [
        { label: 'Processing Speed', value: '2.3s', icon: Zap },
        { label: 'Digital Services', value: '450+', icon: Sparkles },
        { label: 'Awards Won', value: '28', icon: Award },
        { label: 'ROI Increase', value: '340%', icon: TrendingUp }
      ],
      theme: {
        primary: 'from-emerald-500 via-teal-500 to-cyan-600',
        accent: '#10b981'
      }
    },
    {
      id: 'smart-future',
      title: 'Intelligent City Ecosystem',
      subtitle: 'Autonomous Municipal Operations',
      description: 'Creating self-optimizing cities where infrastructure predicts needs, citizens interact naturally, and governance becomes invisible yet perfect.',
      primaryCTA: 'Build Tomorrow',
      stats: [
        { label: 'Autonomous Systems', value: '15,000+', icon: Target },
        { label: 'Prediction Accuracy', value: '99.3%', icon: Target },
        { label: 'Energy Saved', value: '67%', icon: Lightbulb },
        { label: 'Carbon Reduced', value: '2.1M tons', icon: Globe }
      ],
      theme: {
        primary: 'from-orange-500 via-red-500 to-pink-600',
        accent: '#f97316'
      }
    }
  ];

  const currentHero = heroVariants[currentVariant];

  // Auto-rotation effect (simplified)
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentVariant(prev => (prev + 1) % heroVariants.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay, heroVariants.length]);

  const SimpleBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Simplified animated elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
          className="absolute w-6 h-6 rounded-full bg-current opacity-20"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
            color: currentHero.theme.accent
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Optimized Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${currentHero.theme.primary}`}
        key={currentVariant}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SimpleBackground />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVariant}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20"
            >
              <Crown className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Industry Pioneer • Award Winner 2024</span>
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
            >
              {currentHero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-6 text-white/90 font-light"
            >
              {currentHero.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              {currentHero.description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-black px-8 py-4 rounded-xl font-medium flex items-center space-x-2 hover:bg-white/90 transition-all duration-300 mx-auto"
              >
                <span>{currentHero.primaryCTA}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {currentHero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        <div className="flex space-x-2">
          {heroVariants.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrentVariant(index);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentVariant 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}