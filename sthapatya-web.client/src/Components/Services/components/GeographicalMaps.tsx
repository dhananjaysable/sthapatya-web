import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Users, 
  Building, 
  TrendingUp, 
  Award,
  Zap,
  Target,
  Globe,
  ArrowRight,
  CheckCircle,
  Activity,
  Star,
  Navigation,
  Expand
} from 'lucide-react';

interface District {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  projects: number;
  population: string;
  area: string;
  specialization: string;
  status: 'completed' | 'ongoing' | 'planned';
  description: string;
  achievements: string[];
}

interface IndiaState {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  status: 'active' | 'planned' | 'target';
  projects: number;
}

export function GeographicalMaps() {
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<District | null>(null);
  const [showIndiaExpansion, setShowIndiaExpansion] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);

  const maharashtraDistricts: District[] = [
    {
      id: 'mumbai',
      name: 'Mumbai',
      coordinates: { x: 25, y: 70 },
      projects: 45,
      population: '12.4M',
      area: '603 km²',
      specialization: 'Financial Hub & Smart City Initiative',
      status: 'completed',
      description: 'India\'s financial capital with advanced municipal digital infrastructure and smart city solutions.',
      achievements: ['100% Digital Services', 'Smart Traffic Management', 'E-Governance Portal', 'IoT Infrastructure']
    },
    {
      id: 'pune',
      name: 'Pune',
      coordinates: { x: 42, y: 65 },
      projects: 38,
      population: '3.1M',
      area: '331 km²',
      specialization: 'IT Hub & Innovation Center',
      status: 'completed',
      description: 'Major IT and automotive hub with comprehensive GIS mapping and digital transformation.',
      achievements: ['IT Park Management', 'Digital Property Records', 'Smart Parking', 'Online Permit System']
    },
    {
      id: 'nagpur',
      name: 'Nagpur',
      coordinates: { x: 70, y: 45 },
      projects: 28,
      population: '2.4M',
      area: '218 km²',
      specialization: 'Geographic Center & Logistics Hub',
      status: 'ongoing',
      description: 'Strategic logistics center with advanced transportation management and smart infrastructure.',
      achievements: ['Smart Traffic Signals', 'Digital Waste Management', 'GIS-based Planning', 'E-Tendering']
    },
    {
      id: 'nashik',
      name: 'Nashik',
      coordinates: { x: 45, y: 35 },
      projects: 22,
      population: '1.5M',
      area: '259 km²',
      specialization: 'Wine Capital & Religious Tourism',
      status: 'ongoing',
      description: 'Wine capital with tourism-focused digital services and cultural heritage management.',
      achievements: ['Tourism Portal', 'Digital Pilgrimage Services', 'Wine Industry GIS', 'Smart Water Management']
    },
    {
      id: 'aurangabad',
      name: 'Aurangabad',
      coordinates: { x: 55, y: 50 },
      projects: 18,
      population: '1.2M',
      area: '138 km²',
      specialization: 'Heritage City & Manufacturing',
      status: 'ongoing',
      description: 'UNESCO World Heritage site with digital heritage management and industrial automation.',
      achievements: ['Heritage Site Management', 'Industrial GIS', 'Smart Manufacturing', 'Tourism Analytics']
    }
  ];

  const indiaStates: IndiaState[] = [
    { id: 'karnataka', name: 'Karnataka', coordinates: { x: 50, y: 75 }, status: 'active', projects: 25 },
    { id: 'gujarat', name: 'Gujarat', coordinates: { x: 25, y: 40 }, status: 'active', projects: 18 },
    { id: 'rajasthan', name: 'Rajasthan', coordinates: { x: 35, y: 25 }, status: 'planned', projects: 12 },
    { id: 'madhya-pradesh', name: 'Madhya Pradesh', coordinates: { x: 55, y: 35 }, status: 'planned', projects: 15 },
    { id: 'telangana', name: 'Telangana', coordinates: { x: 60, y: 65 }, status: 'active', projects: 22 },
    { id: 'tamil-nadu', name: 'Tamil Nadu', coordinates: { x: 55, y: 85 }, status: 'target', projects: 8 },
    { id: 'kerala', name: 'Kerala', coordinates: { x: 50, y: 90 }, status: 'target', projects: 6 },
    { id: 'odisha', name: 'Odisha', coordinates: { x: 75, y: 55 }, status: 'planned', projects: 10 },
    { id: 'west-bengal', name: 'West Bengal', coordinates: { x: 80, y: 45 }, status: 'target', projects: 14 },
    { id: 'uttar-pradesh', name: 'Uttar Pradesh', coordinates: { x: 60, y: 20 }, status: 'planned', projects: 20 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#d8bea5';
      case 'ongoing': return '#e1d385';
      case 'planned': return '#ba7b72';
      case 'active': return '#d8bea5';
      case 'target': return '#ba7b72';
      default: return '#95231c';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'ongoing': return Activity;
      case 'planned': return Target;
      case 'active': return Star;
      case 'target': return ArrowRight;
      default: return MapPin;
    }
  };

  return (
    <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border/50 overflow-hidden">
      {/* Header with Enhanced Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Globe className="w-6 h-6 text-accent-foreground" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-medium text-foreground">
              {showIndiaExpansion ? 'Pan-India Expansion Strategy' : 'Maharashtra Operations Hub'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {showIndiaExpansion ? 'Scaling GIS solutions across India with proven Maharashtra success' : 'Comprehensive district-wise implementation and growth analytics'}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowIndiaExpansion(!showIndiaExpansion)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-500 flex items-center space-x-2 shadow-lg ${
              showIndiaExpansion 
                ? 'bg-accent text-accent-foreground border-2 border-accent' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary'
            }`}
          >
            {showIndiaExpansion ? (
              <>
                <Navigation className="w-4 h-4" />
                <span>View Maharashtra</span>
              </>
            ) : (
              <>
                <Expand className="w-4 h-4" />
                <span>Expand to India</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Enhanced Map Area */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-br from-secondary via-muted to-secondary rounded-2xl p-6 h-[500px] overflow-hidden border-2 border-border shadow-inner">
            {/* Enhanced Grid Background */}
            <div className="absolute inset-0 opacity-15">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`v-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showIndiaExpansion ? 0.3 : 0.2 }}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  className="absolute w-px bg-gradient-to-b from-accent/40 to-transparent"
                  style={{ left: `${i * 5}%`, height: '100%' }}
                />
              ))}
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showIndiaExpansion ? 0.3 : 0.2 }}
                  transition={{ delay: i * 0.03, duration: 0.5 }}
                  className="absolute h-px bg-gradient-to-r from-accent/40 to-transparent"
                  style={{ top: `${i * 6.67}%`, width: '100%' }}
                />
              ))}
            </div>

            {/* Satellite Animation Effect */}
            {animationPhase === 1 && (
              <motion.div
                animate={{ 
                  x: ['0%', '100%', '0%'],
                  y: ['0%', '30%', '0%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute w-4 h-4 bg-accent rounded-full shadow-lg"
              >
                <div className="absolute inset-0 bg-accent rounded-full animate-ping"></div>
              </motion.div>
            )}

            <AnimatePresence mode="wait">
              {!showIndiaExpansion ? (
                // Enhanced Maharashtra Map
                <motion.div
                  key="maharashtra"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Accurate Maharashtra Outline */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="maharashtraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(149, 35, 28, 0.1)" />
                        <stop offset="50%" stopColor="rgba(225, 211, 133, 0.1)" />
                        <stop offset="100%" stopColor="rgba(186, 123, 114, 0.1)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Maharashtra state boundary with more accurate geographical shape */}
                    <motion.path
                      initial={{ pathLength: 0, fill: "transparent" }}
                      animate={{ pathLength: 1, fill: "url(#maharashtraGradient)" }}
                      transition={{ duration: 2, delay: 0.5 }}
                      d="M20,20 L30,15 L40,12 L50,10 L60,15 L70,20 L80,30 L85,40 L88,50 L85,60 L80,70 L75,80 L65,85 L55,88 L45,90 L35,88 L25,85 L18,80 L15,70 L12,60 L10,50 L12,40 L15,30 Z"
                      stroke="#95231c"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      className="drop-shadow-lg"
                    />
                    
                    {/* Konkan Coast */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      d="M20,20 Q18,40 20,60 Q22,80 25,85"
                      fill="none"
                      stroke="#ba7b72"
                      strokeWidth="3"
                      strokeDasharray="3,3"
                    />
                    
                    {/* Western Ghats */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 1.5 }}
                      d="M25,20 Q30,35 35,50 Q40,65 45,80"
                      fill="none"
                      stroke="#d8bea5"
                      strokeWidth="2"
                      strokeDasharray="2,2"
                    />
                  </svg>

                  {/* Enhanced District Points */}
                  {maharashtraDistricts.map((district, index) => {
                    const StatusIcon = getStatusIcon(district.status);
                    
                    return (
                      <motion.div
                        key={district.id}
                        initial={{ scale: 0, opacity: 0, rotate: -180 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.3,
                          type: "spring",
                          stiffness: 150
                        }}
                        whileHover={{ scale: 1.4, zIndex: 50 }}
                        onHoverStart={() => setHoveredDistrict(district)}
                        onHoverEnd={() => setHoveredDistrict(null)}
                        onClick={() => setSelectedDistrict(district)}
                        className="absolute cursor-pointer group"
                        style={{ 
                          left: `${district.coordinates.x}%`, 
                          top: `${district.coordinates.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {/* Multi-layered Pulse Animations */}
                        <motion.div
                          animate={{ 
                            scale: [1, 2.5, 1],
                            opacity: [0.8, 0.1, 0.8]
                          }}
                          transition={{ 
                            duration: 4, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                          className="absolute inset-0 rounded-full w-14 h-14 border-2"
                          style={{ borderColor: getStatusColor(district.status) }}
                        />
                        
                        <motion.div
                          animate={{ 
                            scale: [1, 2, 1],
                            opacity: [0.6, 0.1, 0.6]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                          className="absolute inset-0 rounded-full w-14 h-14"
                          style={{ 
                            backgroundColor: getStatusColor(district.status),
                            opacity: 0.2
                          }}
                        />
                        
                        {/* Main District Icon */}
                        <div 
                          className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-xl z-10 border-3 border-white group-hover:border-accent transition-all duration-300"
                          style={{ backgroundColor: getStatusColor(district.status) }}
                        >
                          <StatusIcon className="w-5 h-5 text-white" />
                        </div>

                        {/* Enhanced Project Count Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.3 + 0.8, type: "spring" }}
                          className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium z-20 shadow-lg border-2 border-white"
                        >
                          {district.projects}
                        </motion.div>

                        {/* Status Indicator */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.3 + 1 }}
                          className="absolute -bottom-3 -left-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center z-20 shadow-lg border-2 border-white"
                        >
                          <div 
                            className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: getStatusColor(district.status) }}
                          />
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Enhanced Connection Networks */}
                  {animationPhase === 2 && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {[
                        ['mumbai', 'pune'],
                        ['pune', 'nashik'],
                        ['pune', 'aurangabad'],
                        ['aurangabad', 'nagpur']
                      ].map(([from, to], index) => {
                        const fromDistrict = maharashtraDistricts.find(d => d.id === from);
                        const toDistrict = maharashtraDistricts.find(d => d.id === to);
                        
                        if (!fromDistrict || !toDistrict) return null;
                        
                        return (
                          <g key={`${from}-${to}`}>
                            <motion.line
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 0.8 }}
                              transition={{ duration: 2, delay: index * 0.4 }}
                              x1={`${fromDistrict.coordinates.x}%`}
                              y1={`${fromDistrict.coordinates.y}%`}
                              x2={`${toDistrict.coordinates.x}%`}
                              y2={`${toDistrict.coordinates.y}%`}
                              stroke="url(#connectionGradient)"
                              strokeWidth="3"
                              strokeDasharray="6,6"
                            />
                            
                            {/* Data flow animation */}
                            <motion.circle
                              animate={{
                                cx: [`${fromDistrict.coordinates.x}%`, `${toDistrict.coordinates.x}%`],
                                cy: [`${fromDistrict.coordinates.y}%`, `${toDistrict.coordinates.y}%`]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5
                              }}
                              r="2"
                              fill="#e1d385"
                            />
                          </g>
                        );
                      })}
                      
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e1d385" />
                          <stop offset="50%" stopColor="#95231c" />
                          <stop offset="100%" stopColor="#e1d385" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </motion.div>
              ) : (
                // Enhanced India Expansion Map
                <motion.div
                  key="india"
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  {/* Accurate India Outline */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(149, 35, 28, 0.1)" />
                        <stop offset="100%" stopColor="rgba(225, 211, 133, 0.1)" />
                      </linearGradient>
                    </defs>
                    
                    {/* India geographical outline */}
                    <motion.path
                      initial={{ pathLength: 0, fill: "transparent" }}
                      animate={{ pathLength: 1, fill: "url(#indiaGradient)" }}
                      transition={{ duration: 3, delay: 0.5 }}
                      d="M30,10 L35,8 L45,5 L55,8 L65,12 L75,18 L85,25 L90,35 L88,45 L85,55 L80,65 L75,75 L70,85 L60,90 L50,92 L40,90 L30,85 L25,75 L20,65 L18,55 L20,45 L25,35 L28,25 Z"
                      stroke="#95231c"
                      strokeWidth="2"
                      strokeDasharray="10,5"
                      className="drop-shadow-lg"
                    />
                  </svg>

                  {/* Maharashtra Highlight in India Map */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute w-12 h-12 border-4 border-accent rounded-2xl bg-accent/20 shadow-xl"
                    style={{ 
                      left: '35%', 
                      top: '60%',
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-accent to-accent/60 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-accent-foreground" />
                    </div>
                    
                    {/* Maharashtra success indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center shadow-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-success-foreground" />
                    </motion.div>
                  </motion.div>

                  {/* Other States */}
                  {indiaStates.map((state, index) => {
                    const StatusIcon = getStatusIcon(state.status);
                    
                    return (
                      <motion.div
                        key={state.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 2 + index * 0.2,
                          type: "spring"
                        }}
                        whileHover={{ scale: 1.4 }}
                        className="absolute cursor-pointer group"
                        style={{ 
                          left: `${state.coordinates.x}%`, 
                          top: `${state.coordinates.y}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      >
                        {/* State expansion waves */}
                        <motion.div
                          animate={{ 
                            scale: [1, 2, 1],
                            opacity: [0.5, 0.1, 0.5]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                          className="absolute inset-0 rounded-full w-8 h-8 border-2"
                          style={{ borderColor: getStatusColor(state.status) }}
                        />
                        
                        {/* State Point */}
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white relative"
                          style={{ backgroundColor: getStatusColor(state.status) }}
                        >
                          <StatusIcon className="w-4 h-4 text-white" />
                        </div>

                        {/* Project count for active states */}
                        {state.status === 'active' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2.5 + index * 0.2 }}
                            className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground font-medium"
                          >
                            {state.projects}
                          </motion.div>
                        )}

                        {/* State Info on Hover */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap z-20"
                        >
                          <p className="text-xs font-medium text-foreground">{state.name}</p>
                          <p className="text-xs text-muted-foreground capitalize">{state.status}</p>
                          {state.projects > 0 && (
                            <p className="text-xs text-accent">{state.projects} projects</p>
                          )}
                        </motion.div>
                      </motion.div>
                    );
                  })}

                  {/* Expansion Visualization from Maharashtra */}
                  {animationPhase === 3 && (
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {indiaStates.filter(s => s.status === 'active').map((state, index) => (
                        <motion.line
                          key={state.id}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.6 }}
                          transition={{ duration: 2, delay: index * 0.5 }}
                          x1="35%"
                          y1="60%"
                          x2={`${state.coordinates.x}%`}
                          y2={`${state.coordinates.y}%`}
                          stroke="#e1d385"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                        />
                      ))}
                    </svg>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Enhanced Information Panel */}
        <div className="lg:col-span-1">
          <AnimatePresence mode="wait">
            {hoveredDistrict && !showIndiaExpansion && (
              <motion.div
                key={hoveredDistrict.id}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-secondary rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-medium text-foreground">{hoveredDistrict.name}</h4>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm"
                    style={{ backgroundColor: getStatusColor(hoveredDistrict.status) }}
                  >
                    {hoveredDistrict.status}
                  </span>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-muted-foreground">Population:</span>
                      <div className="font-medium text-foreground">{hoveredDistrict.population}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Area:</span>
                      <div className="font-medium text-foreground">{hoveredDistrict.area}</div>
                    </div>
                  </div>
                  
                  <div>
                    <span className="text-muted-foreground">Active Projects:</span>
                    <div className="font-medium text-accent text-lg">{hoveredDistrict.projects}</div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">Specialization:</p>
                  <p className="text-sm text-foreground font-medium">{hoveredDistrict.specialization}</p>
                </div>
              </motion.div>
            )}
            
            {showIndiaExpansion && (
              <motion.div
                key="expansion-info"
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="bg-secondary rounded-2xl p-6 shadow-lg"
              >
                <h4 className="text-lg font-medium text-foreground mb-6 flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-accent" />
                  <span>India Expansion Progress</span>
                </h4>
                
                <div className="space-y-4">
                  <div className="p-4 bg-card rounded-xl border border-success/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-success rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">Active Operations (4 States)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Maharashtra, Karnataka, Gujarat, Telangana</p>
                    <div className="text-lg font-medium text-success mt-2">89 Projects</div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-xl border border-warning/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-warning rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">In Planning (5 States)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rajasthan, MP, Odisha, UP, Others</p>
                    <div className="text-lg font-medium text-warning mt-2">57 Projects</div>
                  </div>
                  
                  <div className="p-4 bg-card rounded-xl border border-info/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-info rounded-full"></div>
                      <span className="text-sm font-medium text-foreground">Target States (4)</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Tamil Nadu, Kerala, West Bengal, Others</p>
                    <div className="text-lg font-medium text-info mt-2">28 Prospects</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Total Reach:</span>
                      <div className="font-medium text-foreground">13 States</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Growth Rate:</span>
                      <div className="font-medium text-success">+340%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}