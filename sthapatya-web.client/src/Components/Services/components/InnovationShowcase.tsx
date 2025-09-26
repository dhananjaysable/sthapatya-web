import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Brain, 
  Cpu, 
  Smartphone, 
  Eye, 
  Shield,
  Layers,
  Globe,
  Activity,
  ArrowRight,
  Play,
  Pause,
  Sparkles,
  Rocket,
  Target,
  BarChart3,
  Users,
  Clock,
  Database,
  Monitor,
  Wifi
} from 'lucide-react';

interface InnovationFeature {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  impact: {
    metric: string;
    value: string;
  }[];
  techStack: string[];
  status: 'deployed' | 'beta' | 'development';
}

export function InnovationShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const innovations: InnovationFeature[] = [
    {
      id: 'ai-citizen-assistant',
      title: 'AI-Powered Citizen Assistant',
      category: 'Artificial Intelligence',
      description: 'Advanced conversational AI that handles 89% of citizen queries automatically, available in 12+ languages with real-time translation and emotional intelligence.',
      icon: Brain,
      color: 'from-purple-500 to-purple-700',
      features: [
        'Natural Language Processing in 12+ regional languages',
        'Emotional Intelligence for empathetic responses',
        'Real-time document processing and verification',
        'Integrated payment gateway for instant transactions',
        'Predictive service recommendations based on citizen profile',
        'Voice-enabled accessibility for visually impaired users'
      ],
      impact: [
        { metric: 'Query Resolution', value: '89% Automated' },
        { metric: 'Response Time', value: '<3 seconds' },
        { metric: 'Citizen Satisfaction', value: '96.2%' },
        { metric: 'Cost Reduction', value: '78% Lower' }
      ],
      techStack: ['OpenAI GPT-4', 'Azure Cognitive Services', 'TensorFlow', 'React Native'],
      status: 'deployed'
    },
    {
      id: 'predictive-infrastructure',
      title: 'Predictive Infrastructure Analytics',
      category: 'IoT & Machine Learning',
      description: 'ML-powered infrastructure monitoring that predicts failures 30 days in advance, optimizes maintenance schedules, and reduces emergency repairs by 85%.',
      icon: Activity,
      color: 'from-blue-500 to-blue-700',
      features: [
        'IoT sensor network across 15,000+ municipal assets',
        'Machine learning models for failure prediction',
        'Automated maintenance scheduling and workforce optimization',
        'Real-time asset health monitoring dashboard',
        'Predictive budget planning for infrastructure investments',
        'Integration with GIS for spatial asset management'
      ],
      impact: [
        { metric: 'Failure Prediction', value: '30 days advance' },
        { metric: 'Emergency Repairs', value: '85% Reduction' },
        { metric: 'Maintenance Costs', value: '67% Savings' },
        { metric: 'Asset Uptime', value: '98.7%' }
      ],
      techStack: ['Azure IoT Hub', 'Apache Kafka', 'Scikit-learn', 'Power BI'],
      status: 'deployed'
    },
    {
      id: 'blockchain-identity',
      title: 'Blockchain Digital Identity',
      category: 'Blockchain Technology',
      description: 'Tamper-proof digital identity system using blockchain technology, enabling citizens to securely access all municipal services with a single verified identity.',
      icon: Shield,
      color: 'from-green-500 to-green-700',
      features: [
        'Decentralized identity verification on Ethereum blockchain',
        'Zero-knowledge proof authentication for privacy',
        'Biometric integration for enhanced security',
        'Cross-municipal identity portability',
        'Smart contracts for automated service eligibility',
        'Immutable audit trail for all identity transactions'
      ],
      impact: [
        { metric: 'Identity Verification', value: '<5 seconds' },
        { metric: 'Security Breaches', value: '0 incidents' },
        { metric: 'Service Access', value: '99.9% Available' },
        { metric: 'Cost Per Verification', value: '94% Lower' }
      ],
      techStack: ['Ethereum', 'Hyperledger Fabric', 'Web3.js', 'MetaMask'],
      status: 'beta'
    },
    {
      id: 'ar-city-navigation',
      title: 'AR City Navigation & Services',
      category: 'Augmented Reality',
      description: 'Augmented reality mobile application providing real-time city navigation, service location discovery, and immersive municipal information overlay.',
      icon: Eye,
      color: 'from-orange-500 to-orange-700',
      features: [
        'Real-time AR overlay of municipal services and facilities',
        'GPS-based navigation with AR directional indicators',
        'Historical information overlay for heritage sites',
        'Virtual queue management for municipal offices',
        'Augmented reality forms for on-location applications',
        'Multi-language AR text translation and voice guidance'
      ],
      impact: [
        { metric: 'Navigation Accuracy', value: '±2 meter precision' },
        { metric: 'Service Discovery', value: '340% Increase' },
        { metric: 'Tourist Engagement', value: '156% Higher' },
        { metric: 'App Usage', value: '45 min/session' }
      ],
      techStack: ['ARCore', 'ARKit', 'Unity 3D', 'Mapbox'],
      status: 'development'
    },
    {
      id: 'smart-traffic-ai',
      title: 'AI Traffic Optimization',
      category: 'Smart City AI',
      description: 'Intelligent traffic management system using computer vision and AI to optimize signal timing, reduce congestion, and improve emergency vehicle response.',
      icon: Zap,
      color: 'from-red-500 to-red-700',
      features: [
        'Computer vision traffic flow analysis at 200+ intersections',
        'Dynamic signal timing optimization based on real-time conditions',
        'Emergency vehicle detection and priority routing',
        'Pedestrian safety monitoring and automated alerts',
        'Air quality correlation with traffic patterns',
        'Predictive congestion modeling and proactive routing'
      ],
      impact: [
        { metric: 'Travel Time', value: '34% Reduction' },
        { metric: 'Emergency Response', value: '45% Faster' },
        { metric: 'Emissions', value: '28% Lower' },
        { metric: 'Accidents', value: '52% Reduction' }
      ],
      techStack: ['YOLO v8', 'OpenCV', 'TensorFlow', 'Apache Storm'],
      status: 'deployed'
    },
    {
      id: 'quantum-security',
      title: 'Quantum-Safe Cryptography',
      category: 'Quantum Computing',
      description: 'Next-generation security infrastructure using quantum-resistant encryption algorithms to future-proof municipal data against quantum computing threats.',
      icon: Cpu,
      color: 'from-indigo-500 to-indigo-700',
      features: [
        'Post-quantum cryptographic algorithms (CRYSTALS-Kyber)',
        'Quantum key distribution for ultra-secure communications',
        'Hybrid classical-quantum encryption for transition period',
        'Quantum random number generation for true randomness',
        'Future-proof digital signatures using lattice cryptography',
        'Quantum threat assessment and monitoring systems'
      ],
      impact: [
        { metric: 'Security Level', value: 'Quantum-resistant' },
        { metric: 'Key Exchange', value: 'Sub-millisecond' },
        { metric: 'Future Proof', value: '20+ years' },
        { metric: 'Performance', value: '15% overhead' }
      ],
      techStack: ['IBM Qiskit', 'Microsoft Q#', 'PQCrypto', 'NIST Standards'],
      status: 'development'
    }
  ];

  const currentInnovation = innovations[activeFeature];

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % innovations.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAnimating, innovations.length]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'deployed': return 'bg-success text-success-foreground';
      case 'beta': return 'bg-warning text-warning-foreground';
      case 'development': return 'bg-info text-info-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'deployed': return 'Live in Production';
      case 'beta': return 'Beta Testing';
      case 'development': return 'In Development';
      default: return 'Unknown Status';
    }
  };

  return (
    <div className="bg-gradient-to-br from-card via-secondary to-card rounded-3xl p-8 shadow-2xl border border-border/50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '24px',
              height: '24px',
              background: 'linear-gradient(45deg, #e1d385, #95231c)',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 15 }}
              className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </motion.div>
            <h2 className="text-3xl font-medium text-foreground">Innovation Showcase</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our cutting-edge technologies and innovative solutions that are revolutionizing 
            municipal services and setting new standards for smart city development worldwide.
          </p>
        </motion.div>

        {/* Innovation Selector */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAnimating(!isAnimating)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
              isAnimating 
                ? 'bg-accent text-accent-foreground shadow-lg' 
                : 'bg-card border border-border text-muted-foreground hover:border-accent/50'
            }`}
          >
            {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isAnimating ? 'Pause' : 'Play'}</span>
          </motion.button>

          <div className="flex space-x-2">
            {innovations.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setActiveFeature(index);
                  setIsAnimating(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === activeFeature 
                    ? 'bg-accent shadow-lg shadow-accent/50' 
                    : 'bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Innovation Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="space-y-8"
          >
            {/* Innovation Header */}
            <div className="bg-card rounded-2xl p-6 border border-border relative overflow-hidden">
              {/* Background Gradient */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                className={`absolute inset-0 bg-gradient-to-r ${currentInnovation.color} rounded-2xl`}
              />
              
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    className={`w-16 h-16 bg-gradient-to-br ${currentInnovation.color} rounded-xl flex items-center justify-center shadow-xl`}
                  >
                    <currentInnovation.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-medium text-foreground mb-2"
                    >
                      {currentInnovation.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-accent font-medium mb-2"
                    >
                      {currentInnovation.category}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-muted-foreground leading-relaxed max-w-2xl"
                    >
                      {currentInnovation.description}
                    </motion.p>
                  </div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(currentInnovation.status)}`}
                >
                  {getStatusText(currentInnovation.status)}
                </motion.div>
              </div>
            </div>

            {/* Features and Impact Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h4 className="font-medium text-foreground mb-6 flex items-center">
                  <Rocket className="w-5 h-5 text-accent mr-2" />
                  Advanced Features
                </h4>
                <div className="space-y-4">
                  {currentInnovation.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-start space-x-3 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        className="w-6 h-6 bg-accent/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                      >
                        <Target className="w-3 h-3 text-accent group-hover:text-accent-foreground" />
                      </motion.div>
                      <p className="text-foreground leading-relaxed group-hover:text-primary transition-colors">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h4 className="font-medium text-foreground mb-6 flex items-center">
                  <BarChart3 className="w-5 h-5 text-accent mr-2" />
                  Performance Impact
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  {currentInnovation.impact.map((impact, index) => (
                    <motion.div
                      key={impact.metric}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-between p-4 bg-secondary rounded-xl hover:bg-accent/10 transition-colors group"
                    >
                      <div>
                        <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {impact.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">Performance Metric</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-medium text-primary">{impact.value}</div>
                        <div className="text-xs text-success">Improvement</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Technology Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-6 border border-accent/20"
            >
              <h4 className="font-medium text-foreground mb-4 flex items-center">
                <Database className="w-5 h-5 text-accent mr-2" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {currentInnovation.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-xl font-medium shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                <span>Explore Implementation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}