import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Layers, 
  Zap, 
  Activity, 
  Target,
  Building,
  TreePine,
  Route,
  Satellite,
  Eye,
  Navigation,
  Home,
  Car,
  Shield,
  Settings,
  Wifi
} from 'lucide-react';

interface MapLayer {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  active: boolean;
  data: MapPoint[];
}

interface MapPoint {
  id: string;
  x: number;
  y: number;
  type: string;
  label: string;
  status: 'active' | 'warning' | 'inactive';
}

export function AnimatedGISMap() {
  const [activeLayers, setActiveLayers] = useState<string[]>(['buildings', 'roads']);
  const [selectedPoint, setSelectedPoint] = useState<MapPoint | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mapLayers: MapLayer[] = [
    {
      id: 'buildings',
      name: 'Buildings & Infrastructure',
      icon: Building,
      color: '#95231c',
      active: true,
      data: [
        { id: 'b1', x: 20, y: 30, type: 'building', label: 'City Hall', status: 'active' },
        { id: 'b2', x: 60, y: 25, type: 'building', label: 'Public Library', status: 'active' },
        { id: 'b3', x: 75, y: 60, type: 'building', label: 'Fire Station', status: 'active' },
        { id: 'b4', x: 30, y: 70, type: 'building', label: 'Police HQ', status: 'active' },
        { id: 'b5', x: 85, y: 40, type: 'building', label: 'School District', status: 'warning' }
      ]
    },
    {
      id: 'roads',
      name: 'Transportation Network',
      icon: Route,
      color: '#ba7b72',
      active: true,
      data: [
        { id: 'r1', x: 10, y: 50, type: 'road', label: 'Main Street', status: 'active' },
        { id: 'r2', x: 50, y: 20, type: 'road', label: 'Oak Avenue', status: 'active' },
        { id: 'r3', x: 80, y: 50, type: 'road', label: 'Pine Boulevard', status: 'warning' },
        { id: 'r4', x: 40, y: 80, type: 'road', label: 'Civic Center Drive', status: 'active' }
      ]
    },
    {
      id: 'utilities',
      name: 'Utility Infrastructure',
      icon: Zap,
      color: '#e1d385',
      active: false,
      data: [
        { id: 'u1', x: 25, y: 45, type: 'utility', label: 'Power Substation', status: 'active' },
        { id: 'u2', x: 65, y: 35, type: 'utility', label: 'Water Treatment', status: 'active' },
        { id: 'u3', x: 45, y: 65, type: 'utility', label: 'Telecom Hub', status: 'inactive' },
        { id: 'u4', x: 80, y: 75, type: 'utility', label: 'Gas Station', status: 'warning' }
      ]
    },
    {
      id: 'environment',
      name: 'Environmental Features',
      icon: TreePine,
      color: '#d8bea5',
      active: false,
      data: [
        { id: 'e1', x: 15, y: 20, type: 'park', label: 'Central Park', status: 'active' },
        { id: 'e2', x: 70, y: 15, type: 'park', label: 'Riverside Park', status: 'active' },
        { id: 'e3', x: 35, y: 85, type: 'park', label: 'Community Garden', status: 'active' },
        { id: 'e4', x: 90, y: 30, type: 'park', label: 'Nature Reserve', status: 'active' }
      ]
    },
    {
      id: 'emergency',
      name: 'Emergency Services',
      icon: Shield,
      color: '#95231c',
      active: false,
      data: [
        { id: 'em1', x: 40, y: 40, type: 'emergency', label: 'Emergency Center', status: 'active' },
        { id: 'em2', x: 60, y: 70, type: 'emergency', label: 'Hospital', status: 'active' },
        { id: 'em3', x: 20, y: 60, type: 'emergency', label: 'Fire Station', status: 'active' }
      ]
    }
  ];

  // Auto-cycle animation phases
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const toggleLayer = (layerId: string) => {
    setActiveLayers(prev => 
      prev.includes(layerId) 
        ? prev.filter(id => id !== layerId)
        : [...prev, layerId]
    );
  };

  const startAnalysis = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 4000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#d8bea5';
      case 'warning': return '#e1d385';
      case 'inactive': return '#ba7b72';
      default: return '#95231c';
    }
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'building': return Building;
      case 'road': return Route;
      case 'utility': return Zap;
      case 'park': return TreePine;
      case 'emergency': return Shield;
      default: return MapPin;
    }
  };

  return (
    <div className="relative bg-card rounded-2xl p-8 shadow-xl overflow-hidden">
      {/* Scanning Animation Overlay */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-primary/5 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border-4 border-accent border-t-transparent rounded-full"
            />
            <div className="absolute text-center">
              <Satellite className="w-8 h-8 text-accent mx-auto mb-2" />
              <p className="text-sm font-medium text-foreground">Analyzing Spatial Data...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Controls */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg"
          >
            <Navigation className="w-6 h-6 text-accent-foreground" />
          </motion.div>
          <div>
            <h3 className="text-xl font-medium text-foreground">Municipal GIS Analysis</h3>
            <p className="text-sm text-muted-foreground">Real-time spatial intelligence dashboard</p>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={startAnalysis}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
        >
          <Eye className="w-4 h-4" />
          <span>Run Analysis</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Layer Controls */}
        <div className="lg:col-span-1">
          <h4 className="font-medium text-foreground mb-4 flex items-center">
            <Layers className="w-4 h-4 mr-2 text-accent" />
            Map Layers
          </h4>
          <div className="space-y-3">
            {mapLayers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayers.includes(layer.id);
              
              return (
                <motion.button
                  key={layer.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => toggleLayer(layer.id)}
                  className={`w-full p-3 rounded-lg border transition-all duration-300 text-left group ${
                    isActive 
                      ? 'bg-accent/10 border-accent text-accent' 
                      : 'bg-secondary border-border hover:border-accent/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ scale: isActive ? 1.1 : 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    <span className="text-sm font-medium">{layer.name}</span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Analysis Tools */}
          <div className="mt-8">
            <h4 className="font-medium text-foreground mb-4 flex items-center">
              <Target className="w-4 h-4 mr-2 text-accent" />
              Analysis Tools
            </h4>
            <div className="space-y-2">
              {[
                { icon: Activity, label: 'Network Analysis' },
                { icon: Settings, label: 'Spatial Query' },
                { icon: Wifi, label: 'Proximity Search' }
              ].map((tool, index) => (
                <motion.button
                  key={tool.label}
                  whileHover={{ x: 5 }}
                  className="w-full p-2 text-left text-sm text-muted-foreground hover:text-accent transition-colors flex items-center space-x-2"
                >
                  <tool.icon className="w-4 h-4" />
                  <span>{tool.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="lg:col-span-3">
          <div className="relative bg-gradient-to-br from-secondary to-muted rounded-xl p-6 h-96 overflow-hidden border-2 border-border">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-20">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={`v-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute w-px bg-accent"
                  style={{ left: `${i * 10}%`, height: '100%' }}
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`h-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="absolute h-px bg-accent"
                  style={{ top: `${i * 12.5}%`, width: '100%' }}
                />
              ))}
            </div>

            {/* Scanning Effect */}
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
              className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-accent to-transparent"
            />

            {/* Map Points */}
            {mapLayers.map(layer => 
              activeLayers.includes(layer.id) && layer.data.map((point, index) => {
                const Icon = getIconForType(point.type);
                
                return (
                  <motion.div
                    key={point.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.3 }}
                    onClick={() => setSelectedPoint(point)}
                    className="absolute cursor-pointer group"
                    style={{ 
                      left: `${point.x}%`, 
                      top: `${point.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Pulse Animation */}
                    <motion.div
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.3, 0.7]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: getStatusColor(point.status) }}
                    />
                    
                    {/* Icon */}
                    <div 
                      className="relative w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10"
                      style={{ backgroundColor: layer.color }}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-card border border-border rounded-lg shadow-lg whitespace-nowrap z-20"
                    >
                      <p className="text-xs font-medium text-foreground">{point.label}</p>
                      <p className="text-xs text-muted-foreground capitalize">{point.status}</p>
                    </motion.div>
                  </motion.div>
                );
              })
            )}

            {/* Connection Lines Animation */}
            {animationPhase === 1 && (
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {mapLayers.find(l => l.id === 'roads')?.data.map((point, index) => (
                  <motion.line
                    key={`line-${index}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    x1={`${point.x}%`}
                    y1={`${point.y}%`}
                    x2={`${mapLayers.find(l => l.id === 'roads')?.data[(index + 1) % mapLayers.find(l => l.id === 'roads')!.data.length]?.x}%`}
                    y2={`${mapLayers.find(l => l.id === 'roads')?.data[(index + 1) % mapLayers.find(l => l.id === 'roads')!.data.length]?.y}%`}
                    stroke="#ba7b72"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                ))}
              </svg>
            )}

            {/* Heat Map Overlay */}
            {animationPhase === 2 && (
              <div className="absolute inset-0">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={`heat-${i}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.3 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="absolute w-16 h-16 rounded-full bg-gradient-radial from-accent/40 to-transparent"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 70 + 15}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
              </div>
            )}

            {/* Coverage Zones */}
            {animationPhase === 3 && activeLayers.includes('emergency') && (
              <div className="absolute inset-0">
                {mapLayers.find(l => l.id === 'emergency')?.data.map((point, index) => (
                  <motion.div
                    key={`coverage-${point.id}`}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.2 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    className="absolute border-2 border-primary rounded-full"
                    style={{
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      width: '120px',
                      height: '120px',
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Map Statistics */}
          <div className="mt-6 grid grid-cols-4 gap-4">
            {[
              { label: 'Active Points', value: `${mapLayers.reduce((acc, layer) => acc + (activeLayers.includes(layer.id) ? layer.data.length : 0), 0)}`, icon: Target },
              { label: 'Coverage Area', value: '2.4 km²', icon: Navigation },
              { label: 'Data Accuracy', value: '99.8%', icon: Activity },
              { label: 'Last Update', value: '2 min ago', icon: Satellite }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 bg-secondary rounded-lg"
              >
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-lg font-medium text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Point Details */}
      <AnimatePresence>
        {selectedPoint && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-xl min-w-64"
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">{selectedPoint.label}</h4>
              <button 
                onClick={() => setSelectedPoint(null)}
                className="text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Type:</span>
                <span className="text-foreground capitalize">{selectedPoint.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span 
                  className="capitalize font-medium"
                  style={{ color: getStatusColor(selectedPoint.status) }}
                >
                  {selectedPoint.status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Coordinates:</span>
                <span className="text-foreground">{selectedPoint.x}, {selectedPoint.y}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}