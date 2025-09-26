import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  Trophy, 
  Star, 
  Medal, 
  Crown,
  Target,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Calendar,
  Building2,
  Rocket,
  BarChart3,
  Heart,
  Lightbulb
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<any>;
  date: string;
  issuer: string;
  impact: string;
  color: string;
  stats: {
    label: string;
    value: string;
  }[];
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
}

export function ProfessionalAchievements() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredAchievement, setHoveredAchievement] = useState<string | null>(null);

  const achievements: Achievement[] = [
    {
      id: 'digital-india-excellence',
      title: 'Digital India Excellence Award 2024',
      category: 'national',
      description: 'Recognized by Government of India for outstanding contribution to digital governance and citizen services transformation across Maharashtra.',
      icon: Crown,
      date: 'March 2024',
      issuer: 'Ministry of Electronics & IT, Government of India',
      impact: 'First municipal technology company to receive this prestigious national recognition',
      color: 'from-yellow-500 to-yellow-600',
      stats: [
        { label: 'Cities Impacted', value: '45+' },
        { label: 'Citizens Served', value: '18.7M' },
        { label: 'Services Digitized', value: '340+' }
      ]
    },
    {
      id: 'smart-city-innovation',
      title: 'Smart City Innovation Leader',
      category: 'technology',
      description: 'Leading innovator in smart city solutions with breakthrough AI-powered municipal services and IoT infrastructure implementations.',
      icon: Lightbulb,
      date: 'January 2024',
      issuer: 'Smart Cities Council India',
      impact: 'Pioneered AI-based citizen service automation reducing response time by 89%',
      color: 'from-blue-500 to-blue-600',
      stats: [
        { label: 'AI Solutions', value: '15+' },
        { label: 'Automation Rate', value: '89%' },
        { label: 'Response Time', value: '<3 sec' }
      ]
    },
    {
      id: 'cybersecurity-excellence',
      title: 'Cybersecurity Excellence Award',
      category: 'security',
      description: 'Maintaining zero security breaches across all municipal systems for 5+ consecutive years with advanced quantum-safe security measures.',
      icon: Shield,
      date: 'November 2023',
      issuer: 'Data Security Council of India',
      impact: 'Zero security incidents across 18.7M citizen records and 45+ municipal systems',
      color: 'from-green-500 to-green-600',
      stats: [
        { label: 'Security Incidents', value: '0' },
        { label: 'Years Protected', value: '5+' },
        { label: 'Records Secured', value: '18.7M' }
      ]
    },
    {
      id: 'citizen-satisfaction',
      title: 'Outstanding Citizen Satisfaction',
      category: 'service',
      description: 'Achieved highest citizen satisfaction ratings in Maharashtra with 96.8% approval across all digital municipal services.',
      icon: Heart,
      date: 'December 2023',
      issuer: 'Maharashtra Governance Survey 2023',
      impact: 'Highest satisfaction rating among all municipal service providers in Maharashtra',
      color: 'from-pink-500 to-pink-600',
      stats: [
        { label: 'Satisfaction Rate', value: '96.8%' },
        { label: 'Service Rating', value: '4.9/5' },
        { label: 'Repeat Usage', value: '92%' }
      ]
    },
    {
      id: 'environmental-impact',
      title: 'Green Technology Implementation',
      category: 'environment',
      description: 'Reduced municipal carbon footprint by 67% through digital transformation, eliminating paper-based processes and optimizing energy usage.',
      icon: Globe,
      date: 'June 2023',
      issuer: 'United Nations Environment Programme',
      impact: 'Leading example of sustainable municipal digitization reducing environmental impact',
      color: 'from-emerald-500 to-emerald-600',
      stats: [
        { label: 'Carbon Reduction', value: '67%' },
        { label: 'Paper Eliminated', value: '2.4M sheets' },
        { label: 'Energy Saved', value: '45%' }
      ]
    },
    {
      id: 'innovation-leadership',
      title: 'Municipal Innovation Leadership',
      category: 'innovation',
      description: 'Pioneered blockchain-based identity management and quantum-safe cryptography for municipal services, setting new industry standards.',
      icon: Rocket,
      date: 'September 2023',
      issuer: 'National Innovation Foundation',
      impact: 'First implementation of quantum-safe municipal identity system in India',
      color: 'from-purple-500 to-purple-600',
      stats: [
        { label: 'Patents Filed', value: '12' },
        { label: 'Innovations', value: '25+' },
        { label: 'Industry Firsts', value: '8' }
      ]
    }
  ];

  const milestones: Milestone[] = [
    {
      year: '2024',
      title: 'AI-Powered Municipal Revolution',
      description: 'Launched comprehensive AI assistant serving 18.7M citizens in 12+ languages',
      icon: Rocket,
      color: 'from-blue-500 to-purple-500'
    },
    {
      year: '2023',
      title: 'Quantum Security Implementation',
      description: 'First quantum-safe cryptography deployment in municipal services',
      icon: Shield,
      color: 'from-green-500 to-blue-500'
    },
    {
      year: '2022',
      title: 'Blockchain Identity Platform',
      description: 'Revolutionary tamper-proof digital identity system for all citizens',
      icon: Award,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2021',
      title: 'Smart City Infrastructure',
      description: 'Complete digital transformation of municipal operations',
      icon: Building2,
      color: 'from-red-500 to-pink-500'
    },
    {
      year: '2020',
      title: 'Municipal Excellence Foundation',
      description: 'Established as Maharashtra\'s leading municipal technology provider',
      icon: Star,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Achievements', icon: Trophy },
    { id: 'national', label: 'National Awards', icon: Crown },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'service', label: 'Service Excellence', icon: Heart },
    { id: 'environment', label: 'Environment', icon: Globe },
    { id: 'innovation', label: 'Innovation', icon: Lightbulb }
  ];

  const filteredAchievements = activeCategory === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeCategory);

  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center space-x-3 mb-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 15 }}
            className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Award className="w-6 h-6 text-primary-foreground" />
          </motion.div>
          <h2 className="text-4xl font-medium text-foreground">Professional Achievements</h2>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Celebrating our remarkable journey of innovation, excellence, and transformative impact 
          in municipal technology and citizen services across Maharashtra and beyond.
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
            }`}
          >
            <category.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{category.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredAchievement(achievement.id)}
              onHoverEnd={() => setHoveredAchievement(null)}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:border-accent/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: hoveredAchievement === achievement.id ? 1 : 0, 
                  opacity: hoveredAchievement === achievement.id ? 0.1 : 0 
                }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Achievement Header */}
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {/* Issuer and Date */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Building2 className="w-3 h-3" />
                    <span>{achievement.issuer}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{achievement.date}</span>
                  </div>
                </div>

                {/* Impact */}
                <div className="p-3 bg-accent/5 rounded-lg border border-accent/20 mb-4">
                  <p className="text-xs font-medium text-accent mb-1">Impact</p>
                  <p className="text-xs text-foreground leading-relaxed">{achievement.impact}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {achievement.stats.map((stat, statIndex) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + statIndex * 0.05 }}
                      className="text-center"
                    >
                      <div className="text-sm font-medium text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Timeline Milestones */}
      <div className="bg-gradient-to-br from-secondary to-card rounded-3xl p-8 shadow-xl border border-border/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-medium text-foreground mb-4">Journey of Excellence</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones that have shaped our path to becoming Maharashtra's premier municipal technology leader.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-accent via-primary to-accent"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                {/* Year Badge */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                >
                  <milestone.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div className="bg-card rounded-xl p-4 shadow-lg border border-border group-hover:border-accent/50 transition-all duration-300">
                  <div className="text-2xl font-medium text-primary mb-2">{milestone.year}</div>
                  <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 text-primary-foreground text-center"
      >
        <h3 className="text-2xl font-medium mb-6">Excellence by Numbers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Awards Received', value: '25+', icon: Trophy },
            { label: 'Cities Transformed', value: '45+', icon: Building2 },
            { label: 'Citizens Served', value: '18.7M', icon: Users },
            { label: 'Innovation Patents', value: '12', icon: Lightbulb }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 mx-auto mb-3 bg-primary-foreground/10 rounded-xl flex items-center justify-center group-hover:bg-accent transition-colors"
              >
                <stat.icon className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground" />
              </motion.div>
              <div className="text-3xl font-medium mb-1">{stat.value}</div>
              <div className="text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}