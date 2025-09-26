import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  Building2, 
  Server, 
  Map, 
  Brain, 
  Shield, 
  Zap,
  Globe,
  Database,
  Users,
  Activity,
  Target,
  ArrowRight,
  Play,
  Pause,
  Expand,
  Code,
  Cpu,
  Cloud,
  Eye,
  Layers,
  Rocket,
  Heart,
  Star,
  Award,
  TrendingUp,
  CheckCircle,
  Clock,
  Sparkles,
  Diamond
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
  category: 'municipal' | 'technology' | 'intelligence';
  features: {
    title: string;
    description: string;
    icon: React.ComponentType<any>;
    benefit: string;
  }[];
  statistics: {
    label: string;
    value: string;
    trend: string;
    icon: React.ComponentType<any>;
  }[];
  technologies: string[];
  caseStudy: {
    client: string;
    challenge: string;
    solution: string;
    result: string;
    metrics: { label: string; value: string }[];
  };
  demo: {
    available: boolean;
    type: 'interactive' | 'video' | 'ar';
    url?: string;
  };
}

export function AdvancedServiceShowcase() {
  const [selectedService, setSelectedService] = useState<string>('smart-municipal');
  const [viewMode, setViewMode] = useState<'overview' | 'detailed' | 'demo'>('overview');
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const services: Service[] = [
    {
      id: 'smart-municipal',
      title: 'Intelligent Municipal Ecosystem',
      subtitle: 'AI-Powered Governance Revolution',
      description: 'Transform your city into a self-optimizing smart ecosystem where AI predicts citizen needs, automates services, and ensures seamless governance.',
      fullDescription: 'Our Intelligent Municipal Ecosystem represents the pinnacle of smart city technology, combining artificial intelligence, IoT sensors, and predictive analytics to create a self-managing urban environment. The system automatically optimizes traffic flow, predicts infrastructure maintenance needs, and delivers personalized citizen services through natural language interfaces.',
      icon: Building2,
      color: '#3b82f6',
      gradient: 'from-blue-500 via-blue-600 to-indigo-700',
      category: 'municipal',
      features: [
        {
          title: 'Predictive Infrastructure Management',
          description: 'AI algorithms predict maintenance needs 30 days in advance',
          icon: Activity,
          benefit: '85% reduction in emergency repairs'
        },
        {
          title: 'Autonomous Service Delivery',
          description: 'Self-executing smart contracts for instant permit approvals',
          icon: Zap,
          benefit: '92% faster processing times'
        },
        {
          title: 'Citizen Experience Engine',
          description: 'Personalized municipal services through AI interaction',
          icon: Heart,
          benefit: '98.7% satisfaction rating'
        },
        {
          title: 'Real-time City Intelligence',
          description: 'Comprehensive urban analytics and decision support',
          icon: Eye,
          benefit: 'Data-driven governance'
        }
      ],
      statistics: [
        { label: 'Cities Transformed', value: '67+', trend: '+23% YoY', icon: Globe },
        { label: 'Services Automated', value: '450+', trend: '+156% efficiency', icon: Rocket },
        { label: 'Citizens Served', value: '18.7M', trend: '99.2% satisfaction', icon: Users },
        { label: 'Cost Savings', value: '₹340Cr', trend: '+67% ROI', icon: TrendingUp }
      ],
      technologies: ['TensorFlow AI', 'Blockchain', 'IoT Mesh', 'Quantum Security', 'AR/VR', '5G Edge'],
      caseStudy: {
        client: 'Greater Mumbai Municipal Corporation',
        challenge: 'Managing 12.4M citizens with outdated manual processes and 15-day average service delivery',
        solution: 'Deployed comprehensive AI ecosystem with predictive analytics, automated workflows, and citizen-centric interfaces',
        result: 'Reduced service delivery to 2.3 days, achieved 96.8% citizen satisfaction, generated ₹2.1B additional revenue',
        metrics: [
          { label: 'Response Time', value: '87% faster' },
          { label: 'Efficiency Gain', value: '340% improvement' },
          { label: 'Revenue Impact', value: '₹2.1B generated' },
          { label: 'Citizen Rating', value: '4.9/5 stars' }
        ]
      },
      demo: {
        available: true,
        type: 'ar',
        url: '/demos/smart-municipal-ar'
      }
    },
    {
      id: 'quantum-tech',
      title: 'Quantum-Safe Technology Infrastructure',
      subtitle: 'Future-Proof Digital Foundation',
      description: 'Build tomorrow\'s municipal infrastructure today with quantum-resistant security, edge computing, and neural network optimization.',
      fullDescription: 'Our Quantum-Safe Technology Infrastructure provides municipal governments with a future-proof digital foundation that withstands both current and emerging threats. Featuring post-quantum cryptography, distributed edge computing, and self-healing network architectures.',
      icon: Server,
      color: '#10b981',
      gradient: 'from-emerald-500 via-teal-600 to-cyan-700',
      category: 'technology',
      features: [
        {
          title: 'Quantum-Resistant Security',
          description: 'Post-quantum cryptographic algorithms protecting all data',
          icon: Shield,
          benefit: 'Future-proof security'
        },
        {
          title: 'Neural Network Processing',
          description: 'AI-optimized infrastructure with self-healing capabilities',
          icon: Brain,
          benefit: '99.97% uptime achieved'
        },
        {
          title: 'Edge Computing Mesh',
          description: 'Distributed processing for ultra-low latency responses',
          icon: Cpu,
          benefit: '<2ms response time'
        },
        {
          title: 'Adaptive Load Balancing',
          description: 'Machine learning-based resource optimization',
          icon: Activity,
          benefit: '67% energy savings'
        }
      ],
      statistics: [
        { label: 'System Uptime', value: '99.97%', trend: 'Industry leading', icon: Activity },
        { label: 'Security Incidents', value: '0', trend: '5+ years', icon: Shield },
        { label: 'Processing Speed', value: '15.7M/s', trend: '+234% faster', icon: Zap },
        { label: 'Energy Efficiency', value: '67%', trend: 'Carbon reduced', icon: Globe }
      ],
      technologies: ['Quantum Key Distribution', 'TensorFlow', 'Kubernetes', 'Redis', 'PostgreSQL', 'GraphQL'],
      caseStudy: {
        client: 'Pune Smart City Development Corporation',
        challenge: 'Legacy systems vulnerable to cyber threats with 94.2% uptime and high maintenance costs',
        solution: 'Implemented quantum-safe infrastructure with AI-driven monitoring and predictive maintenance',
        result: 'Achieved 99.97% uptime, zero security incidents for 36 months, reduced operational costs by 45%',
        metrics: [
          { label: 'Uptime Improvement', value: '99.97% SLA' },
          { label: 'Security Record', value: 'Zero breaches' },
          { label: 'Cost Reduction', value: '45% savings' },
          { label: 'Performance Gain', value: '234% faster' }
        ]
      },
      demo: {
        available: true,
        type: 'interactive',
        url: '/demos/quantum-infrastructure'
      }
    },
    {
      id: 'spatial-intelligence',
      title: 'Spatial Intelligence Platform',
      subtitle: 'Next-Gen Geospatial Analytics',
      description: 'Revolutionize urban planning with AI-powered spatial intelligence, real-time mapping, and predictive geographical analytics.',
      fullDescription: 'Our Spatial Intelligence Platform combines advanced GIS technology with artificial intelligence to provide unprecedented insights into urban geography. From predictive flood modeling to autonomous urban planning, our platform transforms how cities understand and interact with their physical space.',
      icon: Map,
      color: '#8b5cf6',
      gradient: 'from-purple-500 via-violet-600 to-indigo-700',
      category: 'intelligence',
      features: [
        {
          title: 'AI-Powered Urban Planning',
          description: 'Machine learning algorithms optimize city development patterns',
          icon: Target,
          benefit: '78% faster planning cycles'
        },
        {
          title: 'Real-time Spatial Analytics',
          description: 'Live geographical data processing and visualization',
          icon: Eye,
          benefit: '99.8% accuracy mapping'
        },
        {
          title: 'Predictive Modeling',
          description: 'Forecast urban growth, traffic patterns, and environmental changes',
          icon: TrendingUp,
          benefit: '30-day advance predictions'
        },
        {
          title: 'Augmented Reality Interface',
          description: 'Immersive 3D city visualization and planning tools',
          icon: Layers,
          benefit: '94% community approval'
        }
      ],
      statistics: [
        { label: 'Mapping Accuracy', value: '99.8%', trend: 'GPS-level precision', icon: Target },
        { label: 'Planning Speed', value: '78%', trend: 'Faster cycles', icon: Clock },
        { label: 'Properties Mapped', value: '89K+', trend: 'Complete coverage', icon: Map },
        { label: 'Revenue Recovery', value: '₹127Cr', trend: 'Additional revenue', icon: TrendingUp }
      ],
      technologies: ['QGIS', 'PostGIS', 'MapBox', 'Three.js', 'WebGL', 'ARCore'],
      caseStudy: {
        client: 'Nashik Municipal Corporation',
        challenge: 'Manual property surveys taking months, inaccurate mapping, 18-month planning cycles',
        solution: 'Deployed AI-powered GIS platform with drone mapping, predictive analytics, and AR visualization',
        result: 'Achieved 99.8% mapping accuracy, reduced planning cycles to 4 months, recovered ₹127Cr additional revenue',
        metrics: [
          { label: 'Survey Accuracy', value: '99.8% precision' },
          { label: 'Speed Improvement', value: '78% faster' },
          { label: 'Revenue Impact', value: '₹127Cr recovered' },
          { label: 'Cycle Reduction', value: '18m to 4m months' }
        ]
      },
      demo: {
        available: true,
        type: 'ar',
        url: '/demos/spatial-intelligence-ar'
      }
    }
  ];

  const currentService = services.find(s => s.id === selectedService) || services[0];

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;
    
    const interval = setInterval(() => {
      setSelectedService(current => {
        const currentIndex = services.findIndex(s => s.id === current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoRotating, services]);

  // Particle animation for current service
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Initialize particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: currentService.color,
        alpha: Math.random() * 0.5 + 0.1
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.offsetWidth) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.offsetHeight) particle.vy *= -1;

        // Draw particle
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = particle.color;
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

    return () => cancelAnimationFrame(animationId);
  }, [currentService]);

  const OverviewMode = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Service info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Header */}
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`w-20 h-20 bg-gradient-to-br ${currentService.gradient} rounded-2xl flex items-center justify-center shadow-2xl mb-6`}
          >
            <currentService.icon className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl font-bold text-foreground mb-3"
          >
            {currentService.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-accent font-medium mb-4"
          >
            {currentService.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground leading-relaxed text-lg"
          >
            {currentService.description}
          </motion.p>
        </div>

        {/* Key features */}
        <div>
          <h3 className="font-medium text-foreground mb-4 flex items-center">
            <Star className="w-5 h-5 text-accent mr-2" />
            Key Capabilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentService.features.slice(0, 4).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                onMouseEnter={() => setHoveredFeature(feature.title)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-start space-x-3">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  >
                    <feature.icon className="w-4 h-4 text-accent group-hover:text-accent-foreground" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground group-hover:text-accent transition-colors text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {feature.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div>
          <h3 className="font-medium text-foreground mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-accent mr-2" />
            Performance Metrics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentService.statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 bg-secondary rounded-xl hover:bg-accent/10 transition-colors"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setViewMode('detailed')}
            className="flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-medium hover:bg-accent/90 transition-colors"
          >
            <span>Explore Details</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>

          {currentService.demo.available && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode('demo')}
              className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-foreground rounded-xl font-medium hover:border-accent/50 hover:text-accent transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Right: Visual */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className={`relative bg-gradient-to-br ${currentService.gradient} rounded-3xl p-8 shadow-2xl overflow-hidden`}>
          {/* Background animation */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-30"
          />

          {/* Content */}
          <div className="relative z-10 text-white">
            <div className="text-center mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              >
                <currentService.icon className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">{currentService.title}</h3>
              <p className="text-white/80">Next-Generation Technology</p>
            </div>

            {/* Technology stack */}
            <div className="space-y-3">
              <h4 className="font-medium">Technology Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {currentService.technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-background via-secondary to-background rounded-3xl p-8 shadow-2xl border border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
            className="absolute w-8 h-8 border border-accent/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </motion.div>
            <h2 className="text-4xl font-medium text-foreground">Advanced Service Portfolio</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our revolutionary municipal solutions powered by cutting-edge AI, quantum technology, and spatial intelligence
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedService(service.id);
                setIsAutoRotating(false);
                setViewMode('overview');
              }}
              className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedService === service.id
                  ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg shadow-${service.color}/25`
                  : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
              }`}
            >
              <service.icon className="w-5 h-5" />
              <span className="font-medium">{service.title.split(' ')[0]} {service.title.split(' ')[1]}</span>
            </motion.button>
          ))}
        </div>

        {/* View mode toggle */}
        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: Eye },
              { id: 'detailed', label: 'Details', icon: Expand },
              { id: 'demo', label: 'Demo', icon: Play }
            ].map((mode) => (
              <motion.button
                key={mode.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode(mode.id as any)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  viewMode === mode.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:text-foreground'
                }`}
              >
                <mode.icon className="w-3 h-3" />
                <span>{mode.label}</span>
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className="p-2 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
          >
            {isAutoRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedService}-${viewMode}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            {viewMode === 'overview' && <OverviewMode />}
            {viewMode === 'detailed' && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-medium text-foreground mb-4">Detailed Analysis</h3>
                <p className="text-muted-foreground">Comprehensive service breakdown coming soon...</p>
              </div>
            )}
            {viewMode === 'demo' && (
              <div className="text-center py-20">
                <h3 className="text-2xl font-medium text-foreground mb-4">Interactive Demo</h3>
                <p className="text-muted-foreground">Live demonstration experience coming soon...</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}