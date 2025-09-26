import { useState } from 'react';
import { RunningStats } from './RunningStats';

// Inline SVG icons to avoid import issues
const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth={2}/>
    <line x1="8" y1="21" x2="16" y2="21" strokeWidth={2}/>
    <line x1="12" y1="17" x2="12" y2="21" strokeWidth={2}/>
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2}/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeWidth={2}/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeWidth={2}/>
  </svg>
);

const CloudIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6" strokeWidth={2}/>
    <polyline points="8,6 2,12 8,18" strokeWidth={2}/>
  </svg>
);

const HeadphonesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1m0 0V5a2 2 0 012-2h8a2 2 0 012 2v4m0 0h1a1 1 0 011 1v4a1 1 0 01-1 1h-1.586l-1.707 1.707A1 1 0 0116 17v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1.707.707L5.586 15z" />
  </svg>
);

const ActivityIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" strokeWidth={2}/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <polyline points="12,6 12,12 16,14" strokeWidth={2}/>
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" strokeWidth={2}/>
  </svg>
);

const CpuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" strokeWidth={2}/>
    <rect x="9" y="9" width="6" height="6" strokeWidth={2}/>
    <line x1="9" y1="1" x2="9" y2="4" strokeWidth={2}/>
    <line x1="15" y1="1" x2="15" y2="4" strokeWidth={2}/>
    <line x1="9" y1="20" x2="9" y2="23" strokeWidth={2}/>
    <line x1="15" y1="20" x2="15" y2="23" strokeWidth={2}/>
    <line x1="20" y1="9" x2="23" y2="9" strokeWidth={2}/>
    <line x1="20" y1="14" x2="23" y2="14" strokeWidth={2}/>
    <line x1="1" y1="9" x2="4" y2="9" strokeWidth={2}/>
    <line x1="1" y1="14" x2="4" y2="14" strokeWidth={2}/>
  </svg>
);

const WifiIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth={2}/>
    <circle cx="12" cy="16" r="1" strokeWidth={2}/>
    <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth={2}/>
  </svg>
);

const LayersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 2,7 12,12 22,7" strokeWidth={2}/>
    <polyline points="2,17 12,22 22,17" strokeWidth={2}/>
    <polyline points="2,12 12,17 22,12" strokeWidth={2}/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2}/>
    <polyline points="12,5 19,12 12,19" strokeWidth={2}/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Simple ServiceCard component without motion
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  expandedContent?: React.ReactNode;
  delay?: number;
}

function ServiceCard({ title, description, icon: Icon, expandedContent }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-card to-chart-5/10 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover-lift hover-glow animate-fade-in-up">
      <div className="flex items-start space-x-4 mb-4">
        <div className="p-4 bg-gradient-to-br from-chart-2/20 to-accent/20 rounded-xl group-hover:animate-heartbeat transition-all duration-300 hover-scale neon-border">
          <Icon />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-chart-2 transition-colors premium-glow">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {expandedContent && (
        <div className="mt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-accent hover:text-accent/80 font-medium transition-colors flex items-center space-x-1"
          >
            <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
            <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isExpanded && (
            <div className="mt-4 animate-in slide-in-from-top-2 duration-300">
              {expandedContent}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Enhanced IT hero section with cyber-tech aesthetic
function SimpleHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-chart-1 via-primary to-chart-3 text-primary-foreground py-20 overflow-hidden">
      {/* Enhanced tech-inspired animated background with reduced opacity */}
      <div className="absolute inset-0 opacity-50">
        {/* Advanced circuit-like patterns */}
        <div className="absolute top-10 left-10 w-44 h-44 bg-gradient-to-br from-chart-2/20 to-accent/15 rounded-xl blur-xl animate-floating-orb"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-warning/20 to-chart-4/15 rounded-full blur-lg animate-floating-orb" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-accent/25 to-chart-2/20 rotate-45 blur-md animate-floating-orb" style={{ animationDelay: '5s' }}></div>
        
        {/* Enhanced digital grid overlay */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full">
            <defs>
              <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.4" className="animate-constellation"/>
                <rect x="20" y="20" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>
        
        {/* Enhanced floating tech elements */}
        <div className="absolute top-20 right-1/4 w-10 h-10 border-2 border-chart-2/25 rotate-45 animate-spin-slow animate-scale-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-accent/20 rounded-full animate-pulse-glow animate-heartbeat"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 border border-warning/20 rounded-lg animate-wave animate-morph"></div>
        <div className="absolute bottom-20 left-1/3 w-6 h-6 bg-chart-2/25 rotate-12 animate-constellation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-chart-2 to-accent rounded-2xl flex items-center justify-center shadow-xl hover-glow animate-bounce-in neon-border">
            <ServerIcon />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-8 tech-text animate-title-reveal max-w-7xl mx-auto leading-[1.1] relative z-10" data-text="IT Services & Technology">
            <span className="relative inline-block">
              IT Services & Technology
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chart-2/10 to-transparent animate-text-shimmer pointer-events-none"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 animate-slide-up glass-effect p-6 rounded-xl">
            State-of-the-art technology solutions powering efficient municipal operations, enhancing citizen services, 
            and driving digital transformation through cutting-edge innovation and robust infrastructure.
          </p>
          
          <RunningStats stats={[
            { value: 99.9, label: "System Uptime", suffix: "%" },
            { value: 500, label: "Data Managed", suffix: "TB+" },
            { value: 150, label: "Active Systems", suffix: "+" },
            { value: 24, label: "Support Available", suffix: "/7" }
          ]} />
        </div>
      </div>
    </section>
  );
}

export function ITServices() {
  const services = [
    {
      title: "Infrastructure & Network Management",
      description: "Enterprise-grade IT infrastructure design, implementation, and 24/7 monitoring for optimal municipal operations and citizen services.",
      icon: ServerIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Network Architecture</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• High-speed fiber optic networks</li>
                <li>• Redundant system design</li>
                <li>• Load balancing and optimization</li>
                <li>• Bandwidth management</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">System Management</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Server virtualization</li>
                <li>• Performance monitoring</li>
                <li>• Automated maintenance</li>
                <li>• Capacity planning</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
            <span className="text-sm font-medium text-foreground">System Uptime:</span>
            <span className="text-sm text-success font-medium">99.9% SLA Guaranteed</span>
          </div>
        </div>
      )
    },
    {
      title: "Cybersecurity & Data Protection",
      description: "Comprehensive security framework protecting municipal data, citizen information, and critical infrastructure from cyber threats.",
      icon: ShieldIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Security Measures</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Multi-factor authentication</li>
                <li>• End-to-end encryption</li>
                <li>• Intrusion detection systems</li>
                <li>• Security incident response</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Threat Management</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 24/7 security monitoring</li>
                <li>• Vulnerability assessments</li>
                <li>• Penetration testing</li>
                <li>• Compliance auditing</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Data Management & Analytics",
      description: "Advanced data storage, backup solutions, and business intelligence systems enabling data-driven municipal decision making.",
      icon: DatabaseIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Data Storage</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Scalable database systems</li>
                <li>• Automated backup solutions</li>
                <li>• Disaster recovery planning</li>
                <li>• Data archival systems</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Business Intelligence</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real-time dashboards</li>
                <li>• Predictive analytics</li>
                <li>• Performance metrics</li>
                <li>• Custom reporting tools</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Cloud Solutions & Digital Transformation",
      description: "Hybrid cloud infrastructure, migration services, and digital transformation initiatives to modernize municipal operations.",
      icon: CloudIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Cloud Services</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Hybrid cloud architecture</li>
                <li>• Cloud migration planning</li>
                <li>• Multi-cloud management</li>
                <li>• Cost optimization</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Digital Innovation</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Process automation</li>
                <li>• Digital workflows</li>
                <li>• API integration</li>
                <li>• Legacy system modernization</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Application Development & Web Services",
      description: "Custom software development, web portals, mobile applications, and digital services for enhanced citizen engagement.",
      icon: CodeIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Web Development</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Citizen service portals</li>
                <li>• Government websites</li>
                <li>• Online forms and applications</li>
                <li>• E-payment systems</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Mobile Solutions</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Native mobile apps</li>
                <li>• Push notifications</li>
                <li>• Offline functionality</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Technical Support & Help Desk",
      description: "Comprehensive 24/7 technical support services for all municipal employees, departments, and citizen-facing systems.",
      icon: HeadphonesIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Support Services</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 24/7 emergency support</li>
                <li>• Remote troubleshooting</li>
                <li>• On-site technical assistance</li>
                <li>• Hardware replacement</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Training & Documentation</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Staff training programs</li>
                <li>• User documentation</li>
                <li>• Video tutorials</li>
                <li>• Knowledge base management</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const systemMetrics = [
    { title: "System Uptime", value: "99.9%", description: "Guaranteed service level" },
    { title: "Response Time", value: "< 2 min", description: "Average support response" },
    { title: "Active Users", value: "1,250+", description: "Daily active municipal users" },
    { title: "Data Processed", value: "2.5TB", description: "Daily data processing" }
  ];

  const technologies = [
    { title: "Microsoft Azure", description: "Primary cloud platform providing scalable infrastructure" },
    { title: "VMware vSphere", description: "Virtualization platform for efficient resource management" },
    { title: "Cisco Networking", description: "Enterprise networking infrastructure and security" },
    { title: "Splunk Analytics", description: "Security monitoring and operational intelligence" },
    { title: "ServiceNow ITSM", description: "IT service management and workflow automation" },
    { title: "Power BI Analytics", description: "Business intelligence and data visualization" }
  ];

  const innovationAreas = [
    { title: "Artificial Intelligence", description: "Machine learning and AI solutions for predictive analytics and automation", icon: CpuIcon },
    { title: "Internet of Things", description: "Connected sensors and devices for smart city infrastructure", icon: WifiIcon },
    { title: "Blockchain Technology", description: "Secure, transparent systems for municipal records and transactions", icon: LockIcon },
    { title: "Edge Computing", description: "Distributed computing for real-time processing and reduced latency", icon: LayersIcon }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SimpleHeroSection />

      {/* System Metrics */}
      <section className="py-12 bg-gradient-to-r from-secondary via-chart-5/20 to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-foreground mb-4 animate-zoom-in tech-text">System Performance Dashboard</h2>
            <p className="text-muted-foreground animate-fade-in-up">Real-time technology metrics demonstrating our infrastructure excellence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {systemMetrics.map((metric, index) => (
              <div
                key={metric.title}
                className="bg-gradient-to-br from-card to-chart-2/5 p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover-lift hover-glow animate-bounce-in glass-effect neon-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-medium text-chart-2 mb-2 animate-heartbeat">{metric.value}</div>
                <div className="font-medium text-foreground mb-1">{metric.title}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Enterprise Technology Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT services designed to modernize municipal operations and enhance citizen digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                expandedContent={service.expandedContent}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">Enterprise Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry-leading technologies and platforms powering our advanced municipal IT infrastructure.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={tech.title}
                  className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-medium text-foreground mb-2">{tech.title}</h4>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Technology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">Emerging Technology Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Forward-thinking technology adoption preparing for the future of smart municipal governance.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {innovationAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                      <area.icon />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">{area.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Security & Compliance Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading security standards and certifications ensuring the highest level of data protection and regulatory compliance.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  badge: "SOC 2 Type II",
                  description: "System security & availability controls",
                  icon: ShieldIcon,
                  status: "Certified",
                  color: "success"
                },
                {
                  badge: "ISO 27001",
                  description: "Information security management",
                  icon: LockIcon,
                  status: "Certified",
                  color: "success"
                },
                {
                  badge: "FISMA Compliant",
                  description: "Federal information security standards",
                  icon: CheckCircleIcon,
                  status: "Compliant",
                  color: "success"
                },
                {
                  badge: "Zero Breaches",
                  description: "Perfect security track record",
                  icon: ZapIcon,
                  status: "2024",
                  color: "accent"
                }
              ].map((cert, index) => (
                <div
                  key={cert.badge}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${cert.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${cert.color}/20 transition-colors shadow-lg`}>
                    <cert.icon />
                  </div>
                  <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">{cert.badge}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${cert.color}/10 text-${cert.color}`}>
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture Visualization */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Enterprise Architecture Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive system architecture designed for scalability, security, and high availability across all municipal services.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Architecture Layers */}
              <div className="space-y-8">
                {[
                  {
                    layer: "Presentation Layer",
                    description: "User interfaces, web portals, and mobile applications",
                    components: ["Citizen Portal", "Admin Dashboard", "Mobile Apps", "Public Kiosks"],
                    color: "chart-1"
                  },
                  {
                    layer: "Application Layer",
                    description: "Business logic, APIs, and service orchestration",
                    components: ["Municipal Services API", "Payment Gateway", "Document Management", "Workflow Engine"],
                    color: "chart-2"
                  },
                  {
                    layer: "Data Layer",
                    description: "Database systems, data warehouses, and storage solutions",
                    components: ["Primary Database", "Data Warehouse", "File Storage", "Backup Systems"],
                    color: "chart-3"
                  },
                  {
                    layer: "Infrastructure Layer",
                    description: "Servers, networks, and cloud infrastructure",
                    components: ["Cloud Servers", "Load Balancers", "CDN", "Security Gateways"],
                    color: "chart-4"
                  }
                ].map((layer, index) => (
                  <div
                    key={layer.layer}
                    className="relative"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`bg-card rounded-xl p-6 shadow-lg border-l-4 border-${layer.color} hover:shadow-xl transition-all duration-300`}>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="mb-4 lg:mb-0">
                          <h3 className="text-xl font-medium text-foreground mb-2">{layer.layer}</h3>
                          <p className="text-muted-foreground">{layer.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {layer.components.map((component, idx) => (
                            <div
                              key={component}
                              className={`px-3 py-1 bg-${layer.color}/10 text-${layer.color} rounded-full text-sm font-medium hover:bg-${layer.color}/20 transition-colors`}
                              style={{ animationDelay: `${(index * 200) + (idx * 50)}ms` }}
                            >
                              {component}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Analytics Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Real-Time Performance Analytics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Live system metrics and performance indicators demonstrating our commitment to operational excellence.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Performance Charts */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                <h3 className="text-lg font-medium text-foreground mb-6">System Performance Trends</h3>
                <div className="space-y-6">
                  {[
                    { metric: "CPU Usage", value: 23, target: 80, color: "success" },
                    { metric: "Memory Usage", value: 45, target: 80, color: "warning" },
                    { metric: "Network I/O", value: 67, target: 90, color: "info" },
                    { metric: "Disk Usage", value: 34, target: 85, color: "success" }
                  ].map((metric, index) => (
                    <div key={metric.metric} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{metric.metric}</span>
                        <span className="text-sm text-muted-foreground">{metric.value}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3">
                        <div 
                          className={`bg-${metric.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ width: `${metric.value}%` }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alert & Monitoring */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                <h3 className="text-lg font-medium text-foreground mb-6">System Status & Alerts</h3>
                <div className="space-y-4">
                  {[
                    { system: "Web Services", status: "Operational", uptime: "99.9%", color: "success" },
                    { system: "Database Cluster", status: "Optimal", uptime: "100%", color: "success" },
                    { system: "Payment Gateway", status: "Operational", uptime: "99.8%", color: "success" },
                    { system: "Backup Systems", status: "Scheduled", uptime: "100%", color: "info" }
                  ].map((system, index) => (
                    <div key={system.system} className="flex items-center justify-between p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 bg-${system.color} rounded-full animate-pulse`}></div>
                        <div>
                          <div className="font-medium text-foreground">{system.system}</div>
                          <div className="text-sm text-muted-foreground">{system.status}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">{system.uptime}</div>
                        <div className="text-xs text-muted-foreground">Uptime</div>
                      </div>
                    </div>
                  ))}
                </div>
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
          <h2 className="text-4xl font-medium mb-6">Partner With Our IT Excellence Team</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Transform your municipal operations with enterprise-grade technology solutions, 24/7 expert support, and cutting-edge innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <span>Schedule Consultation</span>
              <ArrowRightIcon />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-current rounded-lg font-medium hover:bg-current hover:text-primary transition-all duration-300">
              View Technology Portfolio
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span>Free Technology Assessment</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon />
              <span>24/7 Emergency Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldIcon />
              <span>Enterprise Security Standards</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}