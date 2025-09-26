import { useState, useEffect, useMemo } from 'react';

// Inline SVG icons to avoid import issues
const Building2Icon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={2}/>
    <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2}/>
    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2}/>
  </svg>
);

const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" strokeWidth={2}/>
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" strokeWidth={2}/>
  </svg>
);

const TargetIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <circle cx="12" cy="12" r="6" strokeWidth={2}/>
    <circle cx="12" cy="12" r="2" strokeWidth={2}/>
  </svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" strokeWidth={2}/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" strokeWidth={2}/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2}/>
    <polyline points="17,6 23,6 23,12" strokeWidth={2}/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <polyline points="12,6 12,12 16,14" strokeWidth={2}/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2}/>
    <polyline points="12,5 19,12 12,19" strokeWidth={2}/>
  </svg>
);

const PlayIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21" strokeWidth={2}/>
  </svg>
);

const PauseIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="6" y="4" width="4" height="16" strokeWidth={2}/>
    <rect x="14" y="4" width="4" height="16" strokeWidth={2}/>
  </svg>
);

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  features: string[];
  stats: { label: string; value: string }[];
}

// Simple hero section without external imports
function SimpleHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/50 rounded-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent rounded-full opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 bg-accent rounded-2xl flex items-center justify-center shadow-xl">
            <Building2Icon />
          </div>
          
                  <h1 className="text-5xl md:text-6xl font-medium mb-6">Services Overview
                  </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
            Comprehensive government services powered by cutting-edge technology, delivering exceptional citizen experiences 
            through efficient municipal operations and transparent community engagement.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <CheckCircleIcon />
              <span>150,000+ Citizens Served</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <AwardIcon />
              <span>98.4% Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
              <ZapIcon />
              <span>24/7 Digital Services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesOverview() {
    const [activeService, setActiveService] = useState('municipal');
    const [isAnimating, setIsAnimating] = useState(true);
    const services = useMemo<ServiceData[]>(() => [
        {
            id: 'municipal',
            title: 'Municipal Services',
            subtitle: 'Community-Focused Excellence',
            description: 'Comprehensive municipal services designed to serve our community...',
            icon: Building2Icon,
            color: 'from-chart-1 to-chart-1/80',
            features: [
                'Complete property management and tax assessment services',
                'Streamlined building permits and zoning compliance',
                'Comprehensive citizen services and vital records management',
                'Business licensing, event permits, and regulatory support',
                'Public works coordination and infrastructure maintenance',
                'Community development and engagement programs'
            ],
            stats: [
                { label: 'Active Properties', value: '15,420' },
                { label: 'Permits Issued', value: '2,847' },
                { label: 'Citizens Served', value: '45,000+' },
                { label: 'Satisfaction Rate', value: '97.2%' }
            ]
        },
        {
            id: 'it',
            title: 'IT Services & Technology',
            subtitle: 'Digital Innovation Hub',
            description: 'State-of-the-art technology solutions...',
            icon: ServerIcon,
            color: 'from-chart-2 to-chart-2/80',
            features: [
                'Enterprise infrastructure management and optimization',
                'Advanced cybersecurity and comprehensive data protection',
                'Cloud solutions and complete digital transformation',
                '24/7 technical support and proactive system maintenance',
                'Custom software development and system integration',
                'Data analytics and business intelligence platforms'
            ],
            stats: [
                { label: 'System Uptime', value: '99.9%' },
                { label: 'Security Incidents', value: '0' },
                { label: 'Digital Services', value: '150+' },
                { label: 'Response Time', value: '<2 min' }
            ]
        },
        {
            id: 'gis',
            title: 'GIS & Geospatial Intelligence',
            subtitle: 'Spatial Data Mastery',
            description: 'Advanced Geographic Information Systems...',
            icon: MapIcon,
            color: 'from-chart-3 to-chart-3/80',
            features: [
                'Advanced spatial analysis and comprehensive urban planning',
                'Precision property mapping and professional cadastral surveys',
                'Strategic infrastructure planning and optimization',
                'Environmental monitoring and sustainability assessment',
                'Real-time data visualization and interactive mapping',
                'Predictive analytics and future scenario modeling'
            ],
            stats: [
                { label: 'Map Layers', value: '200+' },
                { label: 'Properties Mapped', value: '18,500' },
                { label: 'Planning Projects', value: '125' },
                { label: 'Data Accuracy', value: '99.8%' }
            ]
        }
    ], []);


  const overallMetrics = [
    { title: "Citizens Served", value: "150,000+", description: "Active service recipients" },
    { title: "Service Satisfaction", value: "98.4%", description: "Average across all services" },
    { title: "Digital Adoption", value: "89%", description: "Online service usage rate" },
    { title: "Response Time", value: "< 24hrs", description: "Average service response" }
  ];

  const processSteps = [
    { 
      title: 'Strategic Assessment', 
      description: 'Comprehensive analysis of citizen needs, community requirements, and municipal objectives through data-driven insights',
      icon: TargetIcon,
      features: ['Community surveys', 'Data analysis', 'Needs assessment', 'Priority mapping']
    },
    { 
      title: 'Innovation Development', 
      description: 'Design and develop cutting-edge solutions using advanced technology and best practices in municipal management',
      icon: ZapIcon,
      features: ['Solution design', 'Technology integration', 'Process optimization', 'Quality assurance']
    },
    { 
      title: 'Citizen-Focused Implementation', 
      description: 'Deploy services with comprehensive citizen engagement, accessibility, and user-friendly interfaces for maximum impact',
      icon: UsersIcon,
      features: ['Service deployment', 'User training', 'Accessibility compliance', 'Performance monitoring']
    },
    { 
      title: 'Continuous Optimization', 
      description: 'Monitor performance, gather feedback, and implement improvements to ensure evolving excellence and satisfaction',
      icon: CheckCircleIcon,
      features: ['Performance metrics', 'Feedback analysis', 'Service enhancement', 'Quality improvement']
    }
  ];

  const currentService = services.find(s => s.id === activeService) || services[0];

  // Auto-rotate services
  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveService(current => {
        const currentIndex = services.findIndex(s => s.id === current);
        const nextIndex = (currentIndex + 1) % services.length;
        return services[nextIndex].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAnimating, services]);

  // Enhanced Service Spotlight Component
  const ServiceSpotlight = () => (
    <div className="bg-gradient-to-br from-card to-card/80 rounded-3xl p-8 shadow-2xl border border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-medium text-foreground">Service Spotlight</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="p-2 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors hover:scale-105 duration-200"
          >
            {isAnimating ? <PauseIcon /> : <PlayIcon />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Service Navigation */}
        <div className="space-y-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover:translate-x-1 ${
                activeService === service.id
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-secondary hover:bg-secondary/80 text-foreground'
              }`}
            >
              <div className="flex items-center space-x-3">
                <service.icon />
                <div>
                  <h4 className="font-medium">{service.title}</h4>
                  <p className="text-sm opacity-80">{service.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="lg:col-span-2">
          <div key={activeService} className="space-y-6 animate-in fade-in-50 slide-in-from-right-2 duration-500">
            <div className="flex items-start space-x-4">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${currentService.color} shadow-lg`}>
                <currentService.icon />
              </div>
              <div>
                <h4 className="text-xl font-medium text-foreground mb-2">{currentService.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{currentService.description}</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentService.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 text-sm text-muted-foreground"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircleIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
              {currentService.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-medium text-accent">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SimpleHeroSection />

      {/* Performance Metrics */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-foreground mb-4">Performance Excellence Dashboard</h2>
            <p className="text-muted-foreground">Real-time metrics showcasing our commitment to outstanding public service delivery</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {overallMetrics.map((metric, index) => (
              <div
                key={metric.title}
                className="bg-card p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl font-medium text-accent mb-2">{metric.value}</div>
                <div className="font-medium text-foreground mb-1">{metric.title}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Spotlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Service Spotlight & Interactive Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive service offerings with detailed insights and real-time performance metrics.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <ServiceSpotlight />
          </div>
        </div>
      </section>

      {/* Excellence Process */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Excellence Through Innovation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our integrated, citizen-focused approach ensures seamless service delivery 
              and continuous improvement across all municipal operations.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center group hover:border-accent/50 transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon />
                    </div>
                    <h4 className="text-lg font-medium text-foreground mb-4 group-hover:text-accent transition-colors">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{step.description}</p>
                    
                    {/* Feature List */}
                    <div className="space-y-2">
                      {step.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                          <CheckCircleIcon />
                          <span className="ml-2">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Connecting Flow */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full transform -translate-y-1/2 -z-10">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                
                {/* Flow indicators */}
                <div className="flex justify-between items-center mt-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex-1 flex justify-center">
                      <ArrowRightIcon />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Achievement Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Innovation & Achievement Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our commitment to excellence through cutting-edge technology, community impact, and transformational municipal services.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Digital Transformation Award 2024",
                  category: "Government Excellence",
                  description: "Recognized for outstanding digital innovation in municipal services",
                  icon: AwardIcon,
                  stats: { value: "98.4%", label: "Citizen Satisfaction" },
                  color: "accent"
                },
                {
                  title: "Smart City Initiative Leader",
                  category: "Technology Innovation",
                  description: "Leading smart city infrastructure development across 36 districts",
                  icon: ZapIcon,
                  stats: { value: "150+", label: "Digital Services" },
                  color: "chart-2"
                },
                {
                  title: "Environmental Sustainability",
                  category: "Green Initiatives",
                  description: "Pioneering eco-friendly municipal operations and carbon reduction",
                  icon: CheckCircleIcon,
                  stats: { value: "35%", label: "Carbon Reduction" },
                  color: "chart-3"
                },
                {
                  title: "Community Engagement Excellence",
                  category: "Citizen Services",
                  description: "Fostering transparent governance and active community participation",
                  icon: UsersIcon,
                  stats: { value: "45K+", label: "Active Citizens" },
                  color: "chart-4"
                },
                {
                  title: "Data Security Leadership",
                  category: "Information Security",
                  description: "Maintaining zero security breaches with enterprise-grade protection",
                  icon: TargetIcon,
                  stats: { value: "100%", label: "Security Score" },
                  color: "chart-5"
                },
                {
                  title: "Infrastructure Modernization",
                  category: "Municipal Development",
                  description: "Comprehensive infrastructure upgrades enhancing service delivery",
                  icon: TrendingUpIcon,
                  stats: { value: "₹50M+", label: "Investment" },
                  color: "chart-6"
                }
              ].map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 bg-${achievement.color}/10 rounded-lg group-hover:bg-${achievement.color}/20 transition-colors`}>
                      <achievement.icon />
                    </div>
                    <div className="flex-1">
                      <div className={`text-xs font-medium text-${achievement.color} mb-1`}>
                        {achievement.category}
                      </div>
                      <h3 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  
                  <div className={`flex items-center justify-between p-3 bg-${achievement.color}/10 rounded-lg`}>
                    <span className="text-xs text-muted-foreground">Key Metric</span>
                    <div className="text-right">
                      <div className={`text-lg font-medium text-${achievement.color}`}>
                        {achievement.stats.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.stats.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Impact Dashboard */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Comprehensive Impact Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time metrics showcasing our holistic impact across all service areas and community touchpoints.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Service Requests", value: "156,420", growth: "+12%", period: "This Year", icon: ClockIcon, color: "chart-1" },
                { title: "Digital Adoption Rate", value: "89.3%", growth: "+8%", period: "YoY Growth", icon: TrendingUpIcon, color: "chart-2" },
                { title: "Infrastructure Projects", value: "234", growth: "+18%", period: "Active", icon: Building2Icon, color: "chart-3" },
                { title: "Community Events", value: "428", growth: "+25%", period: "Supported", icon: UsersIcon, color: "chart-4" },
                { title: "Environmental Initiatives", value: "67", growth: "+40%", period: "Launched", icon: CheckCircleIcon, color: "chart-5" },
                { title: "Technology Deployments", value: "89", growth: "+35%", period: "This Year", icon: ZapIcon, color: "chart-6" },
                { title: "Cost Optimization", value: "₹12.8M", growth: "+22%", period: "Savings", icon: TargetIcon, color: "accent" },
                { title: "Staff Training Hours", value: "3,240", growth: "+15%", period: "Completed", icon: AwardIcon, color: "success" }
              ].map((metric, index) => (
                <div
                  key={metric.title}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 bg-${metric.color}/10 rounded-lg flex items-center justify-center group-hover:bg-${metric.color}/20 transition-colors group-hover:scale-110 duration-300`}>
                    <metric.icon />
                  </div>
                  <div className={`text-2xl font-medium text-${metric.color} mb-2`}>
                    {metric.value}
                  </div>
                  <div className="font-medium text-foreground mb-1">{metric.title}</div>
                  <div className="text-sm text-muted-foreground mb-2">{metric.period}</div>
                  <div className="flex items-center justify-center space-x-1">
                    <TrendingUpIcon />
                    <span className="text-xs text-success font-medium">{metric.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Service Performance Comparison</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comparative analysis of our three core service areas demonstrating excellence across all municipal operations.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className="relative group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>

                    <div className="space-y-4">
                      {service.stats.map((stat, idx) => (
                        <div key={stat.label} className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">{stat.label}</span>
                            <span className="text-sm font-medium text-foreground">{stat.value}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${service.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: `${idx === 0 ? 95 : idx === 1 ? 88 : idx === 2 ? 92 : 85}%`,
                                animationDelay: `${(index * 200) + (idx * 100)}ms`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-40 h-40 border-2 border-accent rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 border border-accent/50 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent rounded-full opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-medium mb-6">Ready to Experience Excellence?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how our comprehensive municipal services can serve your community with unmatched efficiency, innovation, and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <span>Explore All Services</span>
              <ArrowRightIcon />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-current rounded-lg font-medium hover:bg-current hover:text-primary transition-all duration-300">
              Contact Our Team
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <ZapIcon />
              <span>Rapid Implementation</span>
            </div>
            <div className="flex items-center space-x-2">
              <UsersIcon />
              <span>Dedicated Account Management</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}