import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  Building2, 
  Users, 
  TrendingUp, 
  Award,
  Quote,
  ArrowLeft,
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  DollarSign,
  BarChart3
} from 'lucide-react';

interface SuccessStory {
  id: string;
  clientName: string;
  clientType: string;
  location: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    improvement: string;
    impact: string;
  }[];
  testimonial: string;
  clientRole: string;
  projectDuration: string;
  budget: string;
  image: string;
  tags: string[];
}

export function ClientSuccessStories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const successStories: SuccessStory[] = [
    {
      id: 'mumbai-smart-city',
      clientName: 'Mumbai Municipal Corporation',
      clientType: 'Metropolitan City',
      location: 'Mumbai, Maharashtra',
      challenge: 'Managing 12.4M citizens with outdated manual processes, inefficient permit systems, and lack of real-time data visibility across 24 wards.',
      solution: 'Implemented comprehensive digital transformation including GIS-enabled property management, automated permit processing, and real-time citizen service dashboards.',
      results: [
        { metric: 'Service Processing Time', improvement: '85% Reduction', impact: '15 days to 2.5 days average' },
        { metric: 'Citizen Satisfaction', improvement: '94% Rating', impact: 'Up from 67% previously' },
        { metric: 'Revenue Efficiency', improvement: '340% Increase', impact: '₹2.1B additional annual revenue' },
        { metric: 'Staff Productivity', improvement: '156% Boost', impact: 'Handling 3x more applications' }
      ],
      testimonial: "This digital transformation has revolutionized how we serve Mumbai's citizens. The efficiency gains are remarkable, and our staff can now focus on strategic initiatives rather than manual processing.",
      clientRole: 'Municipal Commissioner',
      projectDuration: '18 months',
      budget: '₹45 Crores',
      image: 'mumbai-skyline',
      tags: ['Digital Transformation', 'GIS Implementation', 'Smart City', 'Property Management']
    },
    {
      id: 'pune-it-infrastructure',
      clientName: 'Pune Smart City Development',
      clientType: 'Smart City Initiative',
      location: 'Pune, Maharashtra',
      challenge: 'Fragmented IT systems across departments, cybersecurity vulnerabilities, and inability to integrate with state-level digital infrastructure.',
      solution: 'Deployed enterprise-grade cloud infrastructure, implemented zero-trust security architecture, and created unified API gateway for seamless integration.',
      results: [
        { metric: 'System Uptime', improvement: '99.97% SLA', impact: 'From 94.2% to industry-leading reliability' },
        { metric: 'Security Incidents', improvement: '100% Prevention', impact: 'Zero breaches in 36 months' },
        { metric: 'Integration Speed', improvement: '90% Faster', impact: 'New services deployed in weeks vs months' },
        { metric: 'Operational Costs', improvement: '45% Reduction', impact: '₹8.5 Cr annual savings' }
      ],
      testimonial: "The IT infrastructure transformation has positioned Pune as a model smart city. Our systems now seamlessly integrate with state and national digital initiatives.",
      clientRole: 'Chief Technology Officer',
      projectDuration: '24 months',
      budget: '₹67 Crores',
      image: 'pune-tech-hub',
      tags: ['Cloud Infrastructure', 'Cybersecurity', 'API Integration', 'Smart City']
    },
    {
      id: 'nashik-gis-planning',
      clientName: 'Nashik Municipal Corporation',
      clientType: 'Tier-2 City',
      location: 'Nashik, Maharashtra',
      challenge: 'Rapid urban expansion without proper planning tools, manual property surveys taking months, and lack of spatial data for decision-making.',
      solution: 'Implemented comprehensive GIS platform with drone-based surveying, predictive urban planning models, and real-time spatial analytics dashboard.',
      results: [
        { metric: 'Survey Accuracy', improvement: '99.8% Precision', impact: 'GPS-level accuracy for all 89,000+ properties' },
        { metric: 'Planning Efficiency', improvement: '78% Time Savings', impact: 'Urban planning cycles reduced from 18 to 4 months' },
        { metric: 'Revenue Recovery', improvement: '₹127 Cr Additional', impact: 'Through accurate property assessment' },
        { metric: 'Development Approvals', improvement: '65% Faster', impact: 'Data-driven approval processes' }
      ],
      testimonial: "The GIS implementation has transformed our urban planning capabilities. We now make data-driven decisions that benefit both development and environmental sustainability.",
      clientRole: 'City Planning Director',
      projectDuration: '15 months',
      budget: '₹32 Crores',
      image: 'nashik-planning',
      tags: ['GIS Implementation', 'Urban Planning', 'Spatial Analytics', 'Property Management']
    },
    {
      id: 'aurangabad-citizen-services',
      clientName: 'Aurangabad City Corporation',
      clientType: 'Heritage City',
      location: 'Aurangabad, Maharashtra',
      challenge: 'Long queues for citizen services, paper-based processes causing delays, and lack of transparency in application status tracking.',
      solution: 'Launched comprehensive citizen service portal with mobile app, automated workflow engine, and real-time application tracking system.',
      results: [
        { metric: 'Service Delivery', improvement: '89% Online', impact: '156,000+ services delivered digitally' },
        { metric: 'Processing Time', improvement: '73% Reduction', impact: 'Average 3.2 days vs 12 days previously' },
        { metric: 'Citizen Satisfaction', improvement: '91% Rating', impact: 'Consistent 4.5+ star mobile app rating' },
        { metric: 'Cost Per Transaction', improvement: '82% Lower', impact: 'From ₹245 to ₹44 per service' }
      ],
      testimonial: "Citizens now complete most services from their homes. The transparency and speed of service delivery has significantly improved our relationship with the community.",
      clientRole: 'Municipal Commissioner',
      projectDuration: '12 months',
      budget: '₹28 Crores',
      image: 'aurangabad-heritage',
      tags: ['Citizen Services', 'Digital Portal', 'Mobile App', 'Process Automation']
    }
  ];

  const currentStoryData = successStories[currentStory];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentStory(prev => (prev + 1) % successStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, successStories.length]);

  const nextStory = () => {
    setCurrentStory(prev => (prev + 1) % successStories.length);
    setIsAutoPlaying(false);
  };

  const prevStory = () => {
    setCurrentStory(prev => (prev - 1 + successStories.length) % successStories.length);
    setIsAutoPlaying(false);
  };

  const goToStory = (index: number) => {
    setCurrentStory(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-gradient-to-br from-secondary via-card to-secondary rounded-3xl p-8 shadow-2xl border border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 12 }).map((_, i) => (
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
              delay: i * 1.2
            }}
            className="absolute w-16 h-16 border border-accent/40 rounded-full"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${15 + Math.sin(i) * 30}%`
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
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg"
            >
              <Award className="w-6 h-6 text-primary-foreground" />
            </motion.div>
            <h2 className="text-3xl font-medium text-foreground">Client Success Stories</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how our innovative municipal solutions have transformed cities across Maharashtra, 
            delivering measurable results and exceptional citizen experiences.
          </p>
        </motion.div>

        {/* Story Navigation */}
        <div className="flex items-center justify-center space-x-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevStory}
            className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </motion.button>

          <div className="flex space-x-2">
            {successStories.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => goToStory(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentStory ? 'bg-accent' : 'bg-border'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextStory}
            className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/50 transition-colors"
          >
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-3 py-2 rounded-lg transition-colors ${
              isAutoPlaying ? 'bg-accent text-accent-foreground' : 'bg-card border border-border text-muted-foreground'
            }`}
          >
            <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
          </motion.button>
        </div>
      </div>

      {/* Success Story Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Client Info Header */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-medium text-foreground mb-2">{currentStoryData.clientName}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Building2 className="w-4 h-4" />
                      <span>{currentStoryData.clientType}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{currentStoryData.location}</span>
                    </span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{currentStoryData.projectDuration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-3 h-3" />
                      <span>{currentStoryData.budget}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-destructive/5 rounded-xl p-6 border border-destructive/20"
              >
                <h4 className="font-medium text-foreground mb-3 flex items-center">
                  <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center mr-3">
                    <BarChart3 className="w-4 h-4 text-destructive" />
                  </div>
                  Challenge
                </h4>
                <p className="text-muted-foreground leading-relaxed">{currentStoryData.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-success/5 rounded-xl p-6 border border-success/20"
              >
                <h4 className="font-medium text-foreground mb-3 flex items-center">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center mr-3">
                    <CheckCircle className="w-4 h-4 text-success" />
                  </div>
                  Solution
                </h4>
                <p className="text-muted-foreground leading-relaxed">{currentStoryData.solution}</p>
              </motion.div>
            </div>

            {/* Results Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h4 className="font-medium text-foreground mb-6 flex items-center">
                <TrendingUp className="w-5 h-5 text-accent mr-2" />
                Measurable Results
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentStoryData.results.map((result, index) => (
                  <motion.div
                    key={result.metric}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-shadow">
                      <TrendingUp className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <div className="text-xl font-medium text-primary mb-1">{result.improvement}</div>
                    <div className="text-sm font-medium text-foreground mb-1">{result.metric}</div>
                    <div className="text-xs text-muted-foreground">{result.impact}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20 relative"
            >
              <Quote className="w-12 h-12 text-accent/30 absolute top-4 right-4" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-4 italic">
                "{currentStoryData.testimonial}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">{currentStoryData.clientRole}</div>
                  <div className="text-sm text-muted-foreground">{currentStoryData.clientName}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentStoryData.tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}