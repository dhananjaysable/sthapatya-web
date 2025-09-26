import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  Sparkles, 
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Star,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Eye,
  Heart,
  Target,
  Crown,
  Lightbulb,
  Diamond
} from 'lucide-react';

interface HeroVariant {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  stats: { label: string; value: string; icon: React.ComponentType<any> }[];
  backgroundType: 'particles' | 'neural' | 'geometric' | 'quantum';
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  type: 'circle' | 'triangle' | 'square';
}

export function DynamicHeroSection({ serviceType = 'overview' }: { serviceType?: string }) {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const heroVariants: HeroVariant[] = [
    {
      id: 'innovation-leader',
      title: 'Revolutionary Municipal Intelligence',
      subtitle: 'AI-Powered Smart City Solutions',
      description: 'Transforming urban governance through breakthrough artificial intelligence, quantum-safe security, and immersive citizen experiences that set global standards.',
      primaryCTA: 'Experience the Future',
      secondaryCTA: 'Watch Demo',
      stats: [
        { label: 'AI Decisions/Sec', value: '10.2M', icon: Brain },
        { label: 'Cities Transformed', value: '67+', icon: Globe },
        { label: 'Quantum Security', value: '100%', icon: Shield },
        { label: 'Citizen Satisfaction', value: '98.7%', icon: Heart }
      ],
      backgroundType: 'neural',
      theme: {
        primary: 'from-purple-600 via-blue-600 to-indigo-700',
        secondary: 'from-purple-100 to-blue-100',
        accent: '#8b5cf6'
      }
    },
    {
      id: 'digital-excellence',
      title: 'Digital Governance Revolution',
      subtitle: 'Next-Generation Municipal Platform',
      description: 'Pioneering the future of citizen services with blockchain identity, AR interfaces, and predictive analytics that eliminate bureaucracy forever.',
      primaryCTA: 'Start Revolution',
      secondaryCTA: 'See Results',
      stats: [
        { label: 'Processing Speed', value: '2.3s', icon: Zap },
        { label: 'Digital Services', value: '450+', icon: Sparkles },
        { label: 'Awards Won', value: '28', icon: Award },
        { label: 'ROI Increase', value: '340%', icon: TrendingUp }
      ],
      backgroundType: 'quantum',
      theme: {
        primary: 'from-emerald-500 via-teal-500 to-cyan-600',
        secondary: 'from-emerald-50 to-cyan-50',
        accent: '#10b981'
      }
    },
    {
      id: 'smart-future',
      title: 'Intelligent City Ecosystem',
      subtitle: 'Autonomous Municipal Operations',
      description: 'Creating self-optimizing cities where infrastructure predicts needs, citizens interact naturally, and governance becomes invisible yet perfect.',
      primaryCTA: 'Build Tomorrow',
      secondaryCTA: 'Live Preview',
      stats: [
        { label: 'Autonomous Systems', value: '15,000+', icon: Rocket },
        { label: 'Prediction Accuracy', value: '99.3%', icon: Target },
        { label: 'Energy Saved', value: '67%', icon: Lightbulb },
        { label: 'Carbon Reduced', value: '2.1M tons', icon: Globe }
      ],
      backgroundType: 'geometric',
      theme: {
        primary: 'from-orange-500 via-red-500 to-pink-600',
        secondary: 'from-orange-50 to-pink-50',
        accent: '#f97316'
      }
    }
  ];

  const currentHero = heroVariants[currentVariant];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentVariant(prev => (prev + 1) % heroVariants.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlay, heroVariants.length]);

  // Particle system initialization
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: ParticleProps[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
          color: currentHero.theme.accent,
          type: ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square'
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, [currentVariant, currentHero.theme.accent]);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Update position
        particle.y -= particle.speed;
        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }

        // Draw particle based on type
        ctx.fillStyle = particle.color + '40';
        ctx.beginPath();

        switch (particle.type) {
          case 'circle':
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            break;
          case 'triangle':
            ctx.moveTo(particle.x, particle.y - particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
            ctx.closePath();
            break;
          case 'square':
            ctx.rect(particle.x - particle.size/2, particle.y - particle.size/2, particle.size, particle.size);
            break;
        }

        ctx.fill();

        // Connection lines
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 150) {
            ctx.strokeStyle = particle.color + '20';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [particles]);

  const NeuralNetworkBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Neural nodes */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1
          }}
          className="absolute w-3 h-3 rounded-full bg-current opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: currentHero.theme.accent
          }}
        />
      ))}
      
      {/* Neural connections */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}% ${Math.random() * 100}%`}
            stroke={currentHero.theme.accent}
            strokeWidth="1"
            fill="none"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
      </svg>
    </div>
  );

  const QuantumBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute border-2 rounded-full opacity-20"
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            borderColor: currentHero.theme.accent
          }}
        />
      ))}
    </div>
  );

  const GeometricBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className="absolute opacity-20"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            width: `${30 + i * 10}px`,
            height: `${30 + i * 10}px`,
            background: `linear-gradient(45deg, ${currentHero.theme.accent}, transparent)`,
            clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                     i % 3 === 1 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' :
                     'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
          }}
        />
      ))}
    </div>
  );

  const renderBackground = () => {
    switch (currentHero.backgroundType) {
      case 'neural':
        return <NeuralNetworkBackground />;
      case 'quantum':
        return <QuantumBackground />;
      case 'geometric':
        return <GeometricBackground />;
      default:
        return <canvas ref={canvasRef} className="absolute inset-0" />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <motion.div
        style={{ y }}
        className={`absolute inset-0 bg-gradient-to-br ${currentHero.theme.primary}`}
      >
        {renderBackground()}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVariant}
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -100, scale: 0.8 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100
            }}
            className="max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/20"
            >
              <Crown className="w-5 h-5 text-yellow-300" />
              <span className="font-medium">Industry Pioneer • Award Winner 2024</span>
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
            >
              {currentHero.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-2xl md:text-3xl mb-8 text-white/90 font-light"
            >
              {currentHero.subtitle}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              {currentHero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-black px-8 py-4 rounded-xl font-medium flex items-center space-x-2 hover:bg-white/90 transition-all duration-300"
              >
                <span>{currentHero.primaryCTA}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-medium flex items-center space-x-2 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>{currentHero.secondaryCTA}</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {currentHero.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-3 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors"
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-3xl font-bold mb-1 text-white">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
        {/* Variant indicators */}
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
                  ? 'bg-white shadow-lg shadow-white/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Control buttons */}
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMuted(!isMuted)}
            className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 flex flex-col items-center text-white/60 z-20"
      >
        <div className="text-sm mb-2">Scroll</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}