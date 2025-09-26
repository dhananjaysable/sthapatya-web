import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map, 
  Layers, 
  Satellite, 
  Navigation, 
  Activity,
  TrendingUp,
  Users,
  Building,
  Eye,
  EyeOff,
  Globe,
  Target,
  Zap,
  BarChart3,
  MapPin,
  Radar
} from 'lucide-react';

interface MapLayer {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  visible: boolean;
  description: string;
}

interface District {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  projects: number;
  population: string;
  status: 'active' | 'developing' | 'planned';
}

export function LiveGISDashboard() {
  const [selectedLayers, setSelectedLayers] = useState<string[]>(['districts', 'infrastructure']);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [hoveredDistrict, setHoveredDistrict] = useState<District | null>(null);

  const mapLayers: MapLayer[] = [
    {
      id: 'districts',
      name: 'Administrative Districts',
      icon: Building,
      color: '#95231c',
      visible: true,
      description: 'Municipal boundaries and administrative divisions'
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure Projects',
      icon: TrendingUp,
      color: '#e1d385',
      visible: true,
      description: 'Ongoing and completed infrastructure developments'
    },
    {
      id: 'population',
      name: 'Population Density',
      icon: Users,
      color: '#ba7b72',
      visible: false,
      description: 'Real-time population distribution and density maps'
    },
    {
      id: 'traffic',
      name: 'Traffic Flow',
      icon: Navigation,
      color: '#d8bea5',
      visible: false,
      description: 'Live traffic monitoring and flow analytics'
    },
    {
      id: 'utilities',
      name: 'Utility Networks',
      icon: Zap,
      color: '#dddcdb',
      visible: false,
      description: 'Water, electricity, and telecommunications infrastructure'
    },
    {
      id: 'environmental',
      name: 'Environmental Data',
      icon: Activity,
      color: '#f3f3f3',
      visible: false,
      description: 'Air quality, noise levels, and environmental monitoring'
    }
  ];

  const maharashtraDistricts: District[] = [
    { id: 'mumbai', name: 'Mumbai', coordinates: { x: 25, y: 70 }, projects: 45, population: '12.4M', status: 'active' },
    { id: 'pune', name: 'Pune', coordinates: { x: 35, y: 65 }, projects: 38, population: '3.1M', status: 'active' },
    { id: 'nagpur', name: 'Nagpur', coordinates: { x: 65, y: 45 }, projects: 28, population: '2.4M', status: 'developing' },
    { id: 'nashik', name: 'Nashik', coordinates: { x: 40, y: 35 }, projects: 22, population: '1.5M', status: 'developing' },
    { id: 'aurangabad', name: 'Aurangabad', coordinates: { x: 50, y: 45 }, projects: 18, population: '1.2M', status: 'planned' },
    { id: 'solapur', name: 'Solapur', coordinates: { x: 55, y: 75 }, projects: 15, population: '0.95M', status: 'planned' },
    { id: 'kolhapur', name: 'Kolhapur', coordinates: { x: 30, y: 85 }, projects: 12, population: '0.55M', status: 'planned' },
    { id: 'amravati', name: 'Amravati', coordinates: { x: 70, y: 35 }, projects: 10, population: '0.65M', status: 'planned' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleLayer = (layerId: string) => {
    setSelectedLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#d8bea5';
      case 'developing': return '#e1d385';
      case 'planned': return '#ba7b72';
      default: return '#95231c';
    }
  };

  return (
    <div className="bg-card rounded-3xl p-8 shadow-2xl border border-border/50 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Radar className="w-6 h-6 text-primary-foreground" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-medium text-foreground">Live GIS Intelligence Dashboard</h3>
            <p className="text-sm text-muted-foreground">Real-time spatial data visualization and analytics</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center space-x-2 px-3 py-2 bg-success/20 rounded-lg"
          >
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm text-success font-medium">Live</span>
          </motion.div>
          <span className="text-sm text-muted-foreground">Last updated: Just now</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Layer Controls */}
        <div className="lg:col-span-1">
          <div className="bg-secondary rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Layers className="w-5 h-5 text-accent" />
              <h4 className="font-medium text-foreground">Map Layers</h4>
            </div>
            
            <div className="space-y-3">
              {mapLayers.map((layer, index) => (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    onClick={() => toggleLayer(layer.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      selectedLayers.includes(layer.id)
                        ? 'bg-accent/20 border border-accent'
                        : 'bg-card hover:bg-accent/10 border border-border'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: layer.color }}
                      />
                      <layer.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">{layer.name}</span>
                    </div>
                    {selectedLayers.includes(layer.id) ? (
                      <Eye className="w-4 h-4 text-accent" />
                    ) : (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                  
                  {selectedLayers.includes(layer.id) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-muted-foreground mt-2 px-3"
                    >
                      {layer.description}
                    </motion.p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Live Statistics */}
            <div className="mt-8 space-y-4">
              <h5 className="font-medium text-foreground flex items-center space-x-2">
                <BarChart3 className="w-4 h-4 text-accent" />
                <span>Live Statistics</span>
              </h5>
              
              {[
                { label: 'Active Projects', value: '248', change: '+12', icon: Target },
                { label: 'Data Points', value: '15.7K', change: '+2.3K', icon: Activity },
                { label: 'Coverage Area', value: '307K km²', change: '+5%', icon: Globe }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-card rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <stat.icon className="w-4 h-4 text-accent" />
                    <span className="text-sm text-foreground">{stat.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{stat.value}</div>
                    <div className="text-xs text-success">{stat.change}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Map Area */}
        <div className="lg:col-span-3">
          <div className="relative bg-gradient-to-br from-secondary to-muted rounded-2xl p-6 h-96 overflow-hidden border-2 border-border">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={`v-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedLayers.includes('districts') ? 0.3 : 0.1 }}
                  transition={{ delay: i * 0.02 }}
                  className="absolute w-px bg-accent/40"
                  style={{ left: `${i * 6.67}%`, height: '100%' }}
                />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: selectedLayers.includes('districts') ? 0.3 : 0.1 }}
                  transition={{ delay: i * 0.02 }}
                  className="absolute h-px bg-accent/40"
                  style={{ top: `${i * 8.33}%`, width: '100%' }}
                />
              ))}
            </div>

            {/* Scanning Effect */}
            {animationPhase === 1 && selectedLayers.includes('infrastructure') && (
              <motion.div
                animate={{ 
                  x: ['0%', '100%', '0%'],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-y-0 w-2 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60"
              />
            )}

            {/* Maharashtra Map with Accurate Shape */}
            <div className="absolute inset-0">
              {/* Maharashtra State Outline - More accurate shape */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  d="M15,25 L25,20 L35,18 L45,15 L55,20 L65,25 L75,30 L80,40 L85,50 L82,60 L78,70 L75,80 L70,85 L60,88 L50,90 L40,88 L30,85 L25,80 L20,70 L15,60 L12,50 L10,40 L12,30 Z"
                  fill="rgba(149, 35, 28, 0.1)"
                  stroke="#95231c"
                  strokeWidth="1.5"
                  strokeDasharray="4,2"
                  className="animate-pulse"
                />
                
                {/* Western Ghats mountain range indication */}
                {selectedLayers.includes('environmental') && (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    d="M20,25 Q25,40 30,55 Q35,70 40,85"
                    fill="none"
                    stroke="#ba7b72"
                    strokeWidth="2"
                    strokeDasharray="2,2"
                  />
                )}
              </svg>

              {/* District Points with Enhanced Visuals */}
              {maharashtraDistricts.map((district, index) => (
                <motion.div
                  key={district.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.5 }}
                  onHoverStart={() => setHoveredDistrict(district)}
                  onHoverEnd={() => setHoveredDistrict(null)}
                  className="absolute cursor-pointer group"
                  style={{ 
                    left: `${district.coordinates.x}%`, 
                    top: `${district.coordinates.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Multi-layer pulse effects */}
                  {selectedLayers.includes('infrastructure') && (
                    <motion.div
                      animate={{ 
                        scale: [1, 2.5, 1],
                        opacity: [0.8, 0.1, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                      className="absolute inset-0 rounded-full w-12 h-12 border-2 border-accent"
                    />
                  )}
                  
                  {selectedLayers.includes('population') && (
                    <motion.div
                      animate={{ 
                        scale: [1, 2, 1],
                        opacity: [0.6, 0.1, 0.6]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      className="absolute inset-0 rounded-full w-12 h-12"
                      style={{ backgroundColor: getStatusColor(district.status), opacity: 0.3 }}
                    />
                  )}
                  
                  {/* Main District Point */}
                  <div 
                    className="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-white transition-all duration-300"
                    style={{ backgroundColor: getStatusColor(district.status) }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  </div>

                  {/* Project Count Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium z-20"
                  >
                    {district.projects}
                  </motion.div>

                  {/* Hover Information */}
                  <AnimatePresence>
                    {hoveredDistrict?.id === district.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.8 }}
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-card border border-border rounded-lg shadow-xl whitespace-nowrap z-30"
                      >
                        <div className="text-sm">
                          <div className="font-medium text-foreground">{district.name}</div>
                          <div className="text-muted-foreground">Pop: {district.population}</div>
                          <div className="text-muted-foreground">Projects: {district.projects}</div>
                          <div className="flex items-center space-x-1 mt-1">
                            <div 
                              className="w-2 h-2 rounded-full" 
                              style={{ backgroundColor: getStatusColor(district.status) }}
                            />
                            <span className="text-xs text-muted-foreground capitalize">{district.status}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Connection Lines between major cities */}
              {selectedLayers.includes('infrastructure') && animationPhase === 2 && (
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
                      <motion.line
                        key={`${from}-${to}`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5, delay: index * 0.3 }}
                        x1={`${fromDistrict.coordinates.x}%`}
                        y1={`${fromDistrict.coordinates.y}%`}
                        x2={`${toDistrict.coordinates.x}%`}
                        y2={`${toDistrict.coordinates.y}%`}
                        stroke="#e1d385"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                      />
                    );
                  })}
                </svg>
              )}

              {/* Traffic Flow Animation */}
              {selectedLayers.includes('traffic') && (
                <div className="absolute inset-0">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={`traffic-${i}`}
                      animate={{
                        x: [0, 50, 100],
                        y: [0, -10, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4
                      }}
                      className="absolute w-2 h-2 bg-warning rounded-full"
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 20}%`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}