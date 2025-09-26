import { useState } from 'react';
import { RunningStats } from './RunningStats';

// Inline SVG icons to avoid import issues
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8a2 2 0 012-2V8" />
  </svg>
);

const CarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const TreePineIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeWidth={2}/>
    <line x1="1" y1="10" x2="23" y2="10" strokeWidth={2}/>
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <polyline points="12,6 12,12 16,14" strokeWidth={2}/>
  </svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="7" strokeWidth={2}/>
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" strokeWidth={2}/>
  </svg>
);

const ZapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" strokeWidth={2}/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2}/>
    <polyline points="12,5 19,12 12,19" strokeWidth={2}/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" strokeWidth={2}/>
    <polyline points="17,6 23,6 23,12" strokeWidth={2}/>
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

const LockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth={2}/>
    <circle cx="12" cy="16" r="1" strokeWidth={2}/>
    <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth={2}/>
  </svg>
);

const BarChart3Icon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2}/>
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2}/>
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2}/>
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
    <div className="bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group hover-lift hover-glow animate-fade-in-up">
      <div className="flex items-start space-x-4 mb-4">
        <div className="p-4 bg-gradient-accent rounded-xl group-hover:animate-heartbeat transition-all duration-300 hover-scale">
          <Icon />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors neon-text">
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

// Enhanced hero section with advanced animations
function SimpleHeroSection() {
  return (
    <section className="relative bg-gradient-rainbow animate-gradient-shift text-primary-foreground py-20 overflow-hidden">
      {/* Advanced animated background elements with reduced opacity */}
      <div className="absolute inset-0 opacity-60">
        {/* Enhanced floating orbs with complex animations */}
        <div className="absolute top-10 left-10 w-36 h-36 bg-gradient-to-br from-accent/20 to-warning/15 rounded-full blur-xl animate-floating-orb"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-secondary/30 to-chart-4/20 rounded-full blur-lg animate-floating-orb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-warning/20 to-accent/15 rounded-full blur-md animate-floating-orb" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-gradient-to-br from-chart-2/20 to-chart-5/15 rounded-full blur-lg animate-floating-orb" style={{ animationDelay: '6s' }}></div>
        
        {/* Enhanced geometric patterns */}
        <div className="absolute top-1/4 left-20 w-10 h-10 border-2 border-accent/25 rotate-45 animate-spin-slow hover-scale"></div>
        <div className="absolute bottom-1/3 right-32 w-8 h-8 border-2 border-warning/25 rotate-12 animate-pulse-glow animate-scale-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-chart-3/20 rounded-full animate-heartbeat" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-success/25 rounded-lg animate-wave" style={{ animationDelay: '3s' }}></div>
        
        {/* Enhanced grid overlay with animation */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="municipal-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="30" cy="30" r="1" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#municipal-grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-xl hover-glow animate-bounce-in neon-border">
            <HomeIcon />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-8 municipal-text animate-title-reveal max-w-7xl mx-auto leading-[1.1] relative z-10" data-text="Municipal Services">
            <span className="relative inline-block">
              Municipal Services
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-text-shimmer pointer-events-none"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 animate-slide-up glass-effect p-4 rounded-xl">
            Comprehensive government services designed to serve our community with efficiency, 
            transparency, and unwavering commitment to citizen welfare and public service excellence.
          </p>
          
          <RunningStats stats={[
            { value: 45000, label: "Citizens Served", suffix: "+" },
            { value: 97, label: "Satisfaction Rate", suffix: "%" },
            { value: 24, label: "Online Services", suffix: "/7" },
            { value: 350, label: "Daily Requests", suffix: "+" }
          ]} />
        </div>
      </div>
    </section>
  );
}

export function MunicipalServices() {
  const services = [
    {
      title: "Property & Real Estate Services",
      description: "Comprehensive property management including assessments, permits, zoning compliance, and real estate transactions with digital efficiency.",
      icon: HomeIcon,
      expandedContent: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <h5 className="font-medium text-foreground mb-2 flex items-center">
                <FileTextIcon />
                <span className="ml-2">Property Assessment</span>
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Annual property valuations with market analysis</li>
                <li>• Tax assessment appeals with legal support</li>
                <li>• Comprehensive market value determinations</li>
                <li>• Automated property tax calculations</li>
                <li>• Historical value tracking and trends</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <h5 className="font-medium text-foreground mb-2 flex items-center">
                <CheckCircleIcon />
                <span className="ml-2">Building Permits</span>
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Streamlined new construction permits</li>
                <li>• Fast-track renovation approvals</li>
                <li>• Digital zoning compliance verification</li>
                <li>• Professional safety inspections</li>
                <li>• Code violation resolution support</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <h5 className="font-medium text-foreground mb-2 flex items-center">
                <CreditCardIcon />
                <span className="ml-2">Tax Services</span>
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Online property tax payments</li>
                <li>• Payment plan arrangements</li>
                <li>• Tax exemption processing</li>
                <li>• Senior citizen discounts</li>
                <li>• Delinquency management</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors">
              <h5 className="font-medium text-foreground mb-2 flex items-center">
                <ZapIcon />
                <span className="ml-2">Digital Services</span>
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Online permit applications</li>
                <li>• Real-time status tracking</li>
                <li>• Digital document submission</li>
                <li>• Mobile-friendly interfaces</li>
                <li>• Automated notifications</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
              <span className="text-sm font-medium text-foreground">Average Processing Time:</span>
              <span className="text-sm text-success font-medium">5-7 business days</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
              <span className="text-sm font-medium text-foreground">Digital Adoption Rate:</span>
              <span className="text-sm text-accent font-medium">92% online submissions</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Citizen & Vital Records Services",
      description: "Essential documentation services including birth certificates, marriage licenses, and identity verification.",
      icon: UsersIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Vital Records</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Birth certificates</li>
                <li>• Death certificates</li>
                <li>• Marriage licenses</li>
                <li>• Divorce records</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Registration Services</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Voter registration</li>
                <li>• Pet licensing</li>
                <li>• Notary services</li>
                <li>• Document authentication</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Licensing & Permits",
      description: "Complete business support including licensing, permits, regulatory compliance, and commercial development.",
      icon: BriefcaseIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Business Licenses</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• General business licenses</li>
                <li>• Professional services</li>
                <li>• Retail establishments</li>
                <li>• Food service permits</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Special Events</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Event permits</li>
                <li>• Street closures</li>
                <li>• Parade licenses</li>
                <li>• Festival approvals</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Transportation & Traffic Services",
      description: "Comprehensive transportation management including parking, traffic control, public transit, and infrastructure maintenance.",
      icon: CarIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Parking Services</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Parking permits</li>
                <li>• Meter enforcement</li>
                <li>• Disability placards</li>
                <li>• Commercial loading zones</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Traffic Management</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Traffic signal maintenance</li>
                <li>• Speed limit enforcement</li>
                <li>• Road safety assessments</li>
                <li>• Crosswalk improvements</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Environmental & Waste Services",
      description: "Environmental protection and waste management including recycling programs, waste collection, and sustainability initiatives.",
      icon: TreePineIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Waste Management</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Residential garbage collection</li>
                <li>• Recycling programs</li>
                <li>• Bulk item pickup</li>
                <li>• Hazardous waste disposal</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Environmental Programs</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Tree planting initiatives</li>
                <li>• Air quality monitoring</li>
                <li>• Green building certifications</li>
                <li>• Sustainability consulting</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Utilities & Infrastructure",
      description: "Essential utility services including water, sewer, electric systems, and infrastructure development and maintenance.",
      icon: LightbulbIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Utility Services</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Water service connections</li>
                <li>• Sewer system maintenance</li>
                <li>• Electric utility management</li>
                <li>• Utility bill assistance</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Infrastructure</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Street maintenance</li>
                <li>• Bridge inspections</li>
                <li>• Storm drain systems</li>
                <li>• Public facility upgrades</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const quickActions = [
    { title: "Pay Property Tax", icon: CreditCardIcon, description: "Secure online payment system" },
    { title: "Apply for Permit", icon: FileTextIcon, description: "Digital application process" },
    { title: "Request Service", icon: PhoneIcon, description: "24/7 support available" },
    { title: "Download Forms", icon: DownloadIcon, description: "All forms and documents" }
  ];

  const performanceMetrics = [
    { title: "Service Requests", value: "12,500+", description: "Monthly average completion" },
    { title: "Response Time", value: "< 24 hrs", description: "For non-emergency requests" },
    { title: "Satisfaction", value: "96.8%", description: "Based on quarterly surveys" },
    { title: "Digital Adoption", value: "87%", description: "Online service usage" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <SimpleHeroSection />

      {/* Quick Actions */}
      <section className="py-12 bg-gradient-to-r from-secondary via-muted to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-medium text-foreground mb-4 animate-zoom-in enhanced-text">Quick Access Center</h2>
            <p className="text-muted-foreground animate-fade-in-up">Fast access to our most requested services</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickActions.map((action, index) => (
              <div
                key={action.title}
                className="bg-gradient-to-br from-card to-accent/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover-lift hover-glow animate-bounce-in glass-effect neon-border"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="group-hover:animate-flip">
                  <action.icon />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-accent transition-colors mt-3 mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Comprehensive Municipal Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete range of government services designed to serve citizens efficiently and transparently 
              with modern digital infrastructure.
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

      {/* Performance Metrics */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">Performance Excellence</h2>
            <p className="text-muted-foreground">Real-time metrics demonstrating our commitment to service delivery</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {performanceMetrics.map((metric, index) => (
              <div key={metric.title} className="text-center">
                <div className="text-3xl font-medium text-accent mb-2">{metric.value}</div>
                <div className="font-medium text-foreground mb-1">{metric.title}</div>
                <div className="text-sm text-muted-foreground">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories & Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Citizen Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real experiences from community members who have benefited from our streamlined municipal services.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Small Business Owner",
                  testimonial: "The new digital permit system saved me weeks of time. I was able to get my restaurant renovation approved entirely online with real-time updates at every step.",
                  service: "Business Permits",
                  rating: 5
                },
                {
                  name: "Michael Chen",
                  role: "Property Developer",
                  testimonial: "The property assessment team provided transparent, accurate valuations that helped me make informed investment decisions. Their expertise is invaluable.",
                  service: "Property Assessment",
                  rating: 5
                },
                {
                  name: "Maria Rodriguez",
                  role: "Community Advocate",
                  testimonial: "From voter registration to vital records, every interaction has been professional and efficient. The staff truly cares about serving our community.",
                  service: "Citizen Services",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
                        <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-accent font-medium">{testimonial.service}</span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.testimonial}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-3">
                      <UsersIcon />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-success/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-medium text-foreground mb-4">Community Impact Dashboard</h2>
            <p className="text-muted-foreground">Real-time metrics demonstrating our positive impact on community development</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Property Value Growth", value: "+12.8%", description: "Average annual increase", icon: TrendingUpIcon },
                { title: "Building Permits", value: "2,847", description: "Approved this year", icon: HomeIcon },
                { title: "Environmental Projects", value: "45", description: "Green initiatives launched", icon: TreePineIcon },
                { title: "Community Events", value: "128", description: "Supported annually", icon: UsersIcon },
                { title: "Business Licenses", value: "1,250+", description: "Active local businesses", icon: BriefcaseIcon },
                { title: "Infrastructure Projects", value: "23", description: "Major improvements", icon: LightbulbIcon },
                { title: "Waste Diverted", value: "85%", description: "From landfills through recycling", icon: TreePineIcon },
                { title: "Citizen Satisfaction", value: "97.2%", description: "Based on quarterly surveys", icon: AwardIcon }
              ].map((stat, index) => (
                <div
                  key={stat.title}
                  className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <stat.icon />
                  </div>
                  <div className="text-2xl font-medium text-accent mb-2">{stat.value}</div>
                  <div className="font-medium text-foreground mb-1">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Innovation & Future Initiatives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pioneering the future of municipal services through technology and community-focused innovation.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart City Integration",
                  description: "IoT sensors and smart infrastructure for real-time city monitoring and predictive maintenance.",
                  icon: ZapIcon,
                  progress: 75,
                  timeline: "Q2 2025"
                },
                {
                  title: "AI-Powered Service Routing",
                  description: "Machine learning algorithms to optimize service requests and resource allocation.",
                  icon: CpuIcon,
                  progress: 60,
                  timeline: "Q3 2025"
                },
                {
                  title: "Blockchain Document Security",
                  description: "Immutable document verification system for enhanced security and transparency.",
                  icon: LockIcon,
                  progress: 45,
                  timeline: "Q4 2025"
                },
                {
                  title: "Mobile-First Citizen Portal",
                  description: "Comprehensive mobile application for all municipal services and real-time communication.",
                  icon: PhoneIcon,
                  progress: 85,
                  timeline: "Q1 2025"
                },
                {
                  title: "Predictive Analytics Platform",
                  description: "Advanced data analytics for infrastructure planning and resource optimization.",
                  icon: BarChart3Icon,
                  progress: 70,
                  timeline: "Q2 2025"
                },
                {
                  title: "Green Energy Transition",
                  description: "Comprehensive renewable energy infrastructure for all municipal facilities.",
                  icon: TreePineIcon,
                  progress: 55,
                  timeline: "2026"
                }
              ].map((initiative, index) => (
                <div
                  key={initiative.title}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <initiative.icon />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                        {initiative.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-accent font-medium">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent to-accent/80 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Target</span>
                      <span className="text-foreground font-medium">{initiative.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
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
          <h2 className="text-4xl font-medium mb-6">Ready to Access Municipal Services?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens using our digital platform for faster, more convenient government services with 24/7 accessibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <span>Create Your Account</span>
              <ArrowRightIcon />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-current rounded-lg font-medium hover:bg-current hover:text-primary transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircleIcon />
              <span>Free Account Setup</span>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon />
              <span>24/7 Online Access</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon />
              <span>Multi-Language Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}