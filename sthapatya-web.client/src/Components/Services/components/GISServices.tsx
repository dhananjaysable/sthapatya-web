import { useState } from 'react';
import { RunningStats } from './RunningStats';

// Inline SVG icons to avoid import issues
const MapIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" strokeWidth={2}/>
  </svg>
);

const LayersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 2,7 12,12 22,7" strokeWidth={2}/>
    <polyline points="2,17 12,22 22,17" strokeWidth={2}/>
    <polyline points="2,12 12,17 22,12" strokeWidth={2}/>
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const NavigationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="3,11 22,2 13,21 11,13 3,11" strokeWidth={2}/>
  </svg>
);

const SatelliteIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const BarChart3Icon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2}/>
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2}/>
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2}/>
  </svg>
);

const CompassIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" strokeWidth={2}/>
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2}/>
    <circle cx="12" cy="12" r="6" strokeWidth={2}/>
    <circle cx="12" cy="12" r="2" strokeWidth={2}/>
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

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" strokeWidth={2}/>
    <path d="M21 21l-4.35-4.35" strokeWidth={2}/>
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" strokeWidth={2}/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth={2}/>
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2}/>
    <polyline points="12,5 19,12 12,19" strokeWidth={2}/>
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2}/>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" strokeWidth={2}/>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" strokeWidth={2}/>
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

const UsersIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeWidth={2}/>
    <circle cx="9" cy="7" r="4" strokeWidth={2}/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" strokeWidth={2}/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth={2}/>
  </svg>
);

// Enhanced GIS hero section with geographical elements
function GISHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-chart-3 via-primary to-chart-4 text-primary-foreground py-20 overflow-hidden">
      {/* Enhanced geographical-themed animated background with reduced opacity */}
      <div className="absolute inset-0 opacity-55">
        {/* Advanced map-like patterns */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-chart-4/25 to-success/20 rounded-xl blur-xl animate-floating-orb"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-accent/30 to-warning/20 rounded-full blur-lg animate-floating-orb" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-chart-2/25 to-chart-5/15 rotate-45 blur-md animate-floating-orb" style={{ animationDelay: '2s' }}></div>
        
        {/* Enhanced topographical lines */}
        <div className="absolute inset-0 opacity-12">
          <svg className="w-full h-full">
            <defs>
              <pattern id="topo-lines" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-constellation"/>
                <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-constellation" style={{ animationDelay: '1s' }}/>
                <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="0.3" className="animate-constellation" style={{ animationDelay: '2s' }}/>
                <path d="M 10 40 Q 40 20 70 40" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo-lines)" />
          </svg>
        </div>
        
        {/* Enhanced floating navigation elements */}
        <div className="absolute top-1/4 right-32 w-8 h-8 bg-chart-4/25 rotate-45 animate-spin-slow animate-scale-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-10 h-10 border-2 border-success/25 rounded-full animate-pulse-glow animate-heartbeat"></div>
        <div className="absolute top-20 left-1/3 w-6 h-6 bg-accent/25 rounded-full animate-wave animate-morph"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 border border-chart-3/20 rotate-12 animate-constellation" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-chart-4 to-success rounded-2xl flex items-center justify-center shadow-xl hover-glow animate-bounce-in neon-border">
            <MapIcon />
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mb-8 geo-text animate-title-reveal max-w-7xl mx-auto leading-[1.1] relative z-10" data-text="GIS & Geographical Services">
            <span className="relative inline-block">
              GIS & Geographical Services
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chart-4/10 to-transparent animate-text-shimmer pointer-events-none"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 animate-slide-up glass-effect p-6 rounded-xl">
            Advanced Geographic Information Systems powering spatial intelligence, urban planning, 
            and data-driven municipal decision making with cutting-edge mapping technology.
          </p>
          
          <RunningStats stats={[
            { value: 99.8, label: "Data Accuracy", suffix: "%" },
            { value: 50, label: "Data Layers", suffix: "+" },
            { value: 188, label: "Active Projects", suffix: "" },
            { value: 31.2, label: "Population Covered", suffix: "M" }
          ]} />
        </div>
      </div>
    </section>
  );
}

// Interactive Maharashtra Map Component
function InteractiveMaharashtraMap() {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'coverage' | 'expansion' | 'analytics'>('coverage');

  const maharashtraDistricts = [
    { 
      name: "Mumbai", 
      projects: 45, 
      coverage: "100%", 
      population: "12.4M", 
      coordinates: { x: 72.8777, y: 19.0760 },
      status: "Complete",
      lastUpdate: "Dec 2024",
      keyProjects: ["Smart Traffic Management", "Digital Property Registry", "E-Governance Portal"]
    },
    { 
      name: "Pune", 
      projects: 38, 
      coverage: "95%", 
      population: "9.4M", 
      coordinates: { x: 73.8567, y: 18.5204 },
      status: "Active",
      lastUpdate: "Nov 2024",
      keyProjects: ["Urban Planning GIS", "Infrastructure Mapping", "Environmental Monitoring"]
    },
    { 
      name: "Nagpur", 
      projects: 28, 
      coverage: "88%", 
      population: "4.6M", 
      coordinates: { x: 79.0882, y: 21.1458 },
      status: "Active",
      lastUpdate: "Nov 2024",
      keyProjects: ["Transport Network Analysis", "Land Use Planning", "Asset Management"]
    },
    { 
      name: "Nashik", 
      projects: 22, 
      coverage: "85%", 
      population: "2.1M", 
      coordinates: { x: 73.7898, y: 19.9975 },
      status: "Expanding",
      lastUpdate: "Oct 2024",
      keyProjects: ["Agricultural Mapping", "Water Resource Management", "Tourism GIS"]
    },
    { 
      name: "Aurangabad", 
      projects: 18, 
      coverage: "78%", 
      population: "1.2M", 
      coordinates: { x: 75.3433, y: 19.8762 },
      status: "Active",
      lastUpdate: "Oct 2024",
      keyProjects: ["Heritage Site Mapping", "Industrial Zone Planning", "Utility Networks"]
    },
    { 
      name: "Kolhapur", 
      projects: 15, 
      coverage: "72%", 
      population: "1.9M", 
      coordinates: { x: 74.2433, y: 16.7050 },
      status: "Developing",
      lastUpdate: "Sep 2024",
      keyProjects: ["Rural Development GIS", "Flood Risk Assessment", "Market Analysis"]
    },
    { 
      name: "Solapur", 
      projects: 12, 
      coverage: "68%", 
      population: "950K", 
      coordinates: { x: 75.9064, y: 17.6599 },
      status: "Planning",
      lastUpdate: "Sep 2024",
      keyProjects: ["Agricultural Planning", "Water Management", "Transportation"]
    },
    { 
      name: "Amravati", 
      projects: 10, 
      coverage: "65%", 
      population: "647K", 
      coordinates: { x: 77.7523, y: 20.9319 },
      status: "Planning",
      lastUpdate: "Aug 2024",
      keyProjects: ["Forest Management", "Agricultural GIS", "Infrastructure Development"]
    }
  ];

  const expansionPhases = [
    { 
      phase: "Phase 1", 
      period: "2019-2020", 
      region: "Maharashtra Core Districts", 
      districts: 8, 
      color: "chart-1",
      investment: "₹2.5M",
      completion: "100%",
      description: "Foundation establishment in key Maharashtra districts"
    },
    { 
      phase: "Phase 2", 
      period: "2021-2022", 
      region: "Western India Expansion", 
      districts: 15, 
      color: "chart-2",
      investment: "₹5.8M",
      completion: "100%",
      description: "Extended coverage to major western Indian states"
    },
    { 
      phase: "Phase 3", 
      period: "2023-2024", 
      region: "Pan-India Coverage", 
      districts: 28, 
      color: "chart-3",
      investment: "₹12.3M",
      completion: "85%",
      description: "Nationwide expansion with advanced GIS capabilities"
    },
    { 
      phase: "Phase 4", 
      period: "2024-2025", 
      region: "Complete India Integration", 
      districts: 36, 
      color: "chart-4",
      investment: "₹18.7M",
      completion: "45%",
      description: "Final phase with AI-powered analytics and smart city integration"
    }
  ];

  const analytics = {
    totalProjects: 188,
    completedProjects: 142,
    activeProjects: 34,
    plannedProjects: 12,
    totalInvestment: "₹39.3M",
    populationCovered: "31.2M",
    dataPoints: "2.8M",
    accuracy: "99.8%"
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Complete": return "success";
      case "Active": return "chart-2";
      case "Expanding": return "warning";
      case "Developing": return "chart-3";
      case "Planning": return "chart-4";
      default: return "muted";
    }
  };

  const getMarkerSize = (projects: number) => {
    if (projects >= 40) return 8;
    if (projects >= 25) return 6;
    if (projects >= 15) return 5;
    return 4;
  };

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex justify-center">
        <div className="bg-secondary rounded-xl p-1 inline-flex">
          {[
            { id: 'coverage', label: 'Coverage Map', icon: MapIcon },
            { id: 'expansion', label: 'Expansion Timeline', icon: TrendingUpIcon },
            { id: 'analytics', label: 'Analytics Dashboard', icon: BarChart3Icon }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-card text-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <tab.icon />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Coverage Map Tab */}
      {activeTab === 'coverage' && (
        <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Interactive Map */}
            <div className="xl:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-foreground">Maharashtra GIS Coverage Map</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-success rounded-full"></div>
                    <span>Complete</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                    <span>Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <span>Expanding</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Maharashtra Map */}
              <div className="relative bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-xl p-6 aspect-[4/3] overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Main Map Container */}
                <div className="relative w-full h-full">
                  <svg className="w-full h-full" viewBox="0 0 500 350">
                    {/* Maharashtra boundary - more detailed */}
                    <path
                      d="M50,120 L80,100 L120,95 L180,100 L220,110 L280,120 L330,130 L380,140 L420,160 L450,190 L460,220 L450,250 L420,280 L380,300 L330,310 L280,305 L220,295 L180,285 L140,270 L100,250 L70,220 L50,190 Z"
                      fill="rgba(149, 35, 28, 0.1)"
                      stroke="rgba(149, 35, 28, 0.3)"
                      strokeWidth="2"
                      className="drop-shadow-sm"
                    />
                    
                    {/* Districts with enhanced visuals */}
                    {maharashtraDistricts.map((district, index) => {
                      const x = 50 + (district.coordinates.x - 72) * 15;
                      const y = 300 - (district.coordinates.y - 16) * 12;
                      const size = getMarkerSize(district.projects);
                      const isHovered = hoveredDistrict === district.name;
                      const isSelected = selectedDistrict === district.name;
                      
                      return (
                        <g key={district.name}>
                          {/* Hover/Select ring effect */}
                          {(isHovered || isSelected) && (
                            <circle
                              cx={x}
                              cy={y}
                              r={size + 4}
                              fill="none"
                              stroke="rgba(225, 211, 133, 0.6)"
                              strokeWidth="2"
                              className="animate-pulse"
                            />
                          )}
                          
                          {/* Main district marker */}
                          <circle
                            cx={x}
                            cy={y}
                            r={isHovered ? size + 2 : size}
                            className={`cursor-pointer transition-all duration-300 drop-shadow-lg ${
                              isSelected
                                ? "fill-accent stroke-accent-foreground" 
                                : `fill-${getStatusColor(district.status)} stroke-card`
                            }`}
                            strokeWidth="2"
                            onMouseEnter={() => setHoveredDistrict(district.name)}
                            onMouseLeave={() => setHoveredDistrict(null)}
                            onClick={() => setSelectedDistrict(selectedDistrict === district.name ? null : district.name)}
                            style={{ 
                              filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
                              animationDelay: `${index * 100}ms` 
                            }}
                          />
                          
                          {/* District labels with better positioning */}
                          <text
                            x={x}
                            y={y - size - 8}
                            className={`text-xs font-medium pointer-events-none transition-all duration-200 ${
                              isHovered || isSelected ? 'fill-foreground' : 'fill-muted-foreground'
                            }`}
                            textAnchor="middle"
                            style={{ 
                              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                              fontWeight: isHovered || isSelected ? 600 : 500 
                            }}
                          >
                            {district.name}
                          </text>
                          
                          {/* Project count indicator */}
                          {(isHovered || isSelected) && (
                            <text
                              x={x}
                              y={y + 4}
                              className="text-xs fill-card font-medium pointer-events-none"
                              textAnchor="middle"
                            >
                              {district.projects}
                            </text>
                          )}
                        </g>
                      );
                    })}
                    
                    {/* Decorative elements */}
                    <circle cx="80" cy="80" r="2" fill="rgba(225, 211, 133, 0.4)" className="animate-pulse"/>
                    <circle cx="420" cy="100" r="1.5" fill="rgba(225, 211, 133, 0.3)" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    <circle cx="400" cy="320" r="2.5" fill="rgba(225, 211, 133, 0.2)" className="animate-pulse" style={{animationDelay: '2s'}}/>
                  </svg>
                </div>
                
                {/* Enhanced Legend */}
                <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border">
                  <div className="text-sm font-medium text-foreground mb-3">Coverage Status</div>
                  <div className="space-y-2">
                    {[
                      { status: "Complete", color: "success", count: 2 },
                      { status: "Active", color: "chart-2", count: 3 },
                      { status: "Expanding", color: "warning", count: 1 },
                      { status: "Developing", color: "chart-3", count: 1 },
                      { status: "Planning", color: "chart-4", count: 1 }
                    ].map((item) => (
                      <div key={item.status} className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 bg-${item.color} rounded-full`}></div>
                          <span className="text-muted-foreground">{item.status}</span>
                        </div>
                        <span className="text-foreground font-medium">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* District Details Panel */}
            <div className="space-y-6">
              {/* Selected District Details */}
              {selectedDistrict ? (
                <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-medium text-foreground">{selectedDistrict} District</h4>
                    <button
                      onClick={() => setSelectedDistrict(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {maharashtraDistricts
                    .filter(d => d.name === selectedDistrict)
                    .map(district => (
                      <div key={district.name} className="space-y-4">
                        {/* Status Badge */}
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${getStatusColor(district.status)}/10 text-${getStatusColor(district.status)}`}>
                          {district.status}
                        </div>
                        
                        {/* Key Metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-card rounded-lg">
                            <div className="text-xl font-medium text-accent">{district.projects}</div>
                            <div className="text-xs text-muted-foreground">Active Projects</div>
                          </div>
                          <div className="text-center p-3 bg-card rounded-lg">
                            <div className="text-xl font-medium text-success">{district.coverage}</div>
                            <div className="text-xs text-muted-foreground">GIS Coverage</div>
                          </div>
                        </div>
                        
                        {/* Additional Info */}
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Population Served:</span>
                            <span className="text-foreground font-medium">{district.population}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Last Update:</span>
                            <span className="text-foreground font-medium">{district.lastUpdate}</span>
                          </div>
                        </div>
                        
                        {/* Key Projects */}
                        <div>
                          <div className="text-sm font-medium text-foreground mb-2">Key Projects</div>
                          <div className="space-y-1">
                            {district.keyProjects.map((project, idx) => (
                              <div key={idx} className="text-xs text-muted-foreground flex items-center">
                                <CheckCircleIcon />
                                <span className="ml-2">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="bg-secondary/30 rounded-xl p-6 text-center border border-dashed border-border">
                  <MapIcon />
                  <div className="mt-2 text-sm text-muted-foreground">
                    Click on any district marker to view detailed information
                  </div>
                </div>
              )}

              {/* Quick Stats */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-accent">8</div>
                  <div className="text-sm text-muted-foreground">Maharashtra Districts</div>
                </div>
                <div className="bg-gradient-to-r from-success/10 to-success/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-success">188</div>
                  <div className="text-sm text-muted-foreground">Total Projects</div>
                </div>
                <div className="bg-gradient-to-r from-chart-2/10 to-chart-2/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-medium text-chart-2">31.2M</div>
                  <div className="text-sm text-muted-foreground">Population Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expansion Timeline Tab */}
      {activeTab === 'expansion' && (
        <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
          <h3 className="text-xl font-medium text-foreground mb-8 text-center">Business Expansion Journey</h3>
          
          <div className="space-y-6">
            {expansionPhases.map((phase, index) => (
              <div
                key={phase.phase}
                className="relative group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-6 p-6 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all duration-300 border border-border hover:border-accent/30">
                  {/* Phase indicator */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-${phase.color}/10 rounded-xl flex items-center justify-center border-2 border-${phase.color}/30`}>
                    <span className={`text-lg font-medium text-${phase.color}`}>{phase.phase.split(' ')[1]}</span>
                  </div>
                  
                  {/* Phase content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-medium text-foreground">{phase.phase}</h4>
                      <span className="text-sm text-muted-foreground">{phase.period}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className={`text-lg font-medium text-${phase.color}`}>{phase.districts}</div>
                        <div className="text-xs text-muted-foreground">Districts</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-medium text-${phase.color}`}>{phase.investment}</div>
                        <div className="text-xs text-muted-foreground">Investment</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-medium text-${phase.color}`}>{phase.completion}</div>
                        <div className="text-xs text-muted-foreground">Complete</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-medium text-${phase.color}`}>{phase.region}</div>
                        <div className="text-xs text-muted-foreground">Region</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Dashboard Tab */}
      {activeTab === 'analytics' && (
        <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
          <h3 className="text-xl font-medium text-foreground mb-8 text-center">GIS Analytics & Performance</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Total Projects", value: analytics.totalProjects, color: "accent" },
              { label: "Completed", value: analytics.completedProjects, color: "success" },
              { label: "Active Projects", value: analytics.activeProjects, color: "chart-2" },
              { label: "Planned", value: analytics.plannedProjects, color: "chart-4" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-xl border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`text-3xl font-medium text-${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-4">Investment Overview</h4>
              <div className="text-2xl font-medium text-primary mb-2">{analytics.totalInvestment}</div>
              <div className="text-sm text-muted-foreground">Total Investment</div>
            </div>
            
            <div className="bg-gradient-to-br from-chart-2/10 to-chart-2/5 rounded-xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-4">Coverage Reach</h4>
              <div className="text-2xl font-medium text-chart-2 mb-2">{analytics.populationCovered}</div>
              <div className="text-sm text-muted-foreground">Population Covered</div>
            </div>
            
            <div className="bg-gradient-to-br from-success/10 to-success/5 rounded-xl p-6">
              <h4 className="text-lg font-medium text-foreground mb-4">Data Quality</h4>
              <div className="text-2xl font-medium text-success mb-2">{analytics.accuracy}</div>
              <div className="text-sm text-muted-foreground">Data Accuracy</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple service card component
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
          <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors premium-glow">
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

export function GISServices() {
  const services = [
    {
      title: "Spatial Data Management",
      description: "Comprehensive geospatial data collection, processing, and storage systems with real-time updates and multi-layer integration.",
      icon: DatabaseIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Data Collection</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Satellite imagery processing</li>
                <li>• Field survey integration</li>
                <li>• IoT sensor data streams</li>
                <li>• Drone mapping services</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Data Processing</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Automated quality checks</li>
                <li>• Coordinate system conversion</li>
                <li>• Topological validation</li>
                <li>• Multi-format exports</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Urban Planning & Development",
      description: "Advanced spatial analysis tools for urban development planning, zoning management, and infrastructure optimization.",
      icon: CompassIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Zoning Analysis</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Land use classification</li>
                <li>• Development density mapping</li>
                <li>• Regulatory compliance</li>
                <li>• Future growth projections</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Infrastructure</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Transportation networks</li>
                <li>• Utility system mapping</li>
                <li>• Service area analysis</li>
                <li>• Impact assessments</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Environmental Monitoring",
      description: "Real-time environmental data tracking and analysis for sustainable development and regulatory compliance.",
      icon: SatelliteIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Air Quality</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Pollution monitoring</li>
                <li>• Emission source tracking</li>
                <li>• Health impact analysis</li>
                <li>• Compliance reporting</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Water Resources</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Watershed mapping</li>
                <li>• Flood risk assessment</li>
                <li>• Quality monitoring</li>
                <li>• Conservation planning</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Asset Management",
      description: "Comprehensive municipal asset tracking and maintenance scheduling with spatial intelligence and optimization.",
      icon: SettingsIcon,
      expandedContent: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Asset Tracking</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real-time location data</li>
                <li>• Condition monitoring</li>
                <li>• Maintenance history</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
            <div className="p-4 bg-secondary rounded-lg">
              <h5 className="font-medium text-foreground mb-2">Optimization</h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Route optimization</li>
                <li>• Resource allocation</li>
                <li>• Predictive maintenance</li>
                <li>• Cost analysis</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <GISHeroSection />

      {/* Interactive Maharashtra Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Interactive Coverage Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive GIS coverage across Maharashtra and track our expansion journey 
              from regional leadership to pan-India presence.
            </p>
          </div>

          <InteractiveMaharashtraMap />
        </div>
      </section>

      {/* GIS Services Grid */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Comprehensive GIS Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced geographical information systems and spatial intelligence solutions 
              designed for modern municipal governance and urban planning.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-foreground mb-6">Advanced Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge GIS technologies and platforms powering our spatial intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                category: "GIS Platforms",
                technologies: ["ArcGIS Enterprise", "QGIS", "PostGIS", "MapServer", "GeoServer"],
                icon: LayersIcon
              },
              {
                category: "Data Sources", 
                technologies: ["Satellite Imagery", "LiDAR", "GPS Surveys", "IoT Sensors", "Open Data"],
                icon: SatelliteIcon
              },
              {
                category: "Analytics & AI",
                technologies: ["Spatial Analysis", "Machine Learning", "Predictive Modeling", "Remote Sensing", "Big Data"],
                icon: BarChart3Icon
              }
            ].map((stack, index) => (
              <div
                key={stack.category}
                className="text-center p-8 bg-gradient-to-br from-card to-secondary/30 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover-lift"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <stack.icon />
                </div>
                
                <h3 className="text-xl font-medium text-foreground mb-4">{stack.category}</h3>
                
                <div className="space-y-2">
                  {stack.technologies.map((tech, idx) => (
                    <div
                      key={tech}
                      className="text-sm text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}