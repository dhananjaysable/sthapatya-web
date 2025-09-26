import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Zap, 
  Users, 
  Globe, 
  Shield, 
  Brain,
  Target,
  Clock,
  Database,
  Cpu,
  ArrowUp,
  ArrowDown,
  Pause,
  Play,
  RotateCcw,
  Download,
  Share,
  Maximize,
  Eye
} from 'lucide-react';

interface DataPoint {
  id: string;
  label: string;
  value: number;
  trend: number;
  icon: React.ComponentType<any>;
  color: string;
  category: string;
  details: {
    current: string;
    previous: string;
    change: string;
    forecast: string;
  };
}

interface ChartData {
  name: string;
  value: number;
  previousValue: number;
  color: string;
  details: string[];
}

export function InteractiveDataVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('performance');
  const [isAnimating, setIsAnimating] = useState(true);
  const [selectedDataPoint, setSelectedDataPoint] = useState<DataPoint | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'chart' | 'flow'>('grid');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const dataCategories = [
    { id: 'performance', label: 'Performance Metrics', icon: TrendingUp, color: 'from-blue-500 to-purple-600' },
    { id: 'security', label: 'Security Analytics', icon: Shield, color: 'from-green-500 to-emerald-600' },
    { id: 'intelligence', label: 'AI Intelligence', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'infrastructure', label: 'Infrastructure', icon: Database, color: 'from-orange-500 to-red-600' },
  ];

  const performanceData: DataPoint[] = [
    {
      id: 'response-time',
      label: 'Average Response Time',
      value: 2.3,
      trend: -23.5,
      icon: Clock,
      color: '#3b82f6',
      category: 'performance',
      details: {
        current: '2.3 seconds',
        previous: '3.0 seconds',
        change: '-23.5% faster',
        forecast: '1.8 seconds by Q2'
      }
    },
    {
      id: 'user-satisfaction',
      label: 'Citizen Satisfaction',
      value: 98.7,
      trend: 12.4,
      icon: Users,
      color: '#10b981',
      category: 'performance',
      details: {
        current: '98.7%',
        previous: '87.8%',
        change: '+12.4% improvement',
        forecast: '99.2% projected'
      }
    },
    {
      id: 'system-efficiency',
      label: 'System Efficiency',
      value: 94.2,
      trend: 8.7,
      icon: Zap,
      color: '#f59e0b',
      category: 'performance',
      details: {
        current: '94.2%',
        previous: '86.7%',
        change: '+8.7% optimization',
        forecast: '96.5% target'
      }
    },
    {
      id: 'processing-speed',
      label: 'Data Processing',
      value: 15.7,
      trend: 34.2,
      icon: Cpu,
      color: '#8b5cf6',
      category: 'performance',
      details: {
        current: '15.7M ops/sec',
        previous: '11.7M ops/sec',
        change: '+34.2% throughput',
        forecast: '20M ops/sec goal'
      }
    }
  ];

  const securityData: DataPoint[] = [
    {
      id: 'threat-detection',
      label: 'Threat Detection Rate',
      value: 99.95,
      trend: 2.1,
      icon: Shield,
      color: '#059669',
      category: 'security',
      details: {
        current: '99.95%',
        previous: '97.89%',
        change: '+2.1% detection',
        forecast: '99.98% achievable'
      }
    },
    {
      id: 'zero-incidents',
      label: 'Security Incidents',
      value: 0,
      trend: -100,
      icon: Target,
      color: '#dc2626',
      category: 'security',
      details: {
        current: '0 incidents',
        previous: '3 minor alerts',
        change: '-100% incidents',
        forecast: 'Zero-incident maintained'
      }
    },
    {
      id: 'encryption-strength',
      label: 'Quantum Encryption',
      value: 100,
      trend: 15.7,
      icon: Eye,
      color: '#7c3aed',
      category: 'security',
      details: {
        current: '100% quantum-safe',
        previous: '86.4% coverage',
        change: '+15.7% enhancement',
        forecast: 'Post-quantum ready'
      }
    }
  ];

  const getCurrentData = () => {
    switch (selectedCategory) {
      case 'performance': return performanceData;
      case 'security': return securityData;
      case 'intelligence': return performanceData.map(d => ({ ...d, category: 'intelligence' }));
      case 'infrastructure': return securityData.map(d => ({ ...d, category: 'infrastructure' }));
      default: return performanceData;
    }
  };

  const currentData = getCurrentData();

  // Animated chart rendering
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || viewMode !== 'flow') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    let animationId: number;
    let phase = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / 2, canvas.height / 2);
      
      // Draw flowing data streams
      currentData.forEach((dataPoint, index) => {
        const centerX = canvas.offsetWidth / 2;
        const centerY = canvas.offsetHeight / 2;
        const radius = 60 + index * 40;
        const angle = (index / currentData.length) * Math.PI * 2 + phase;
        
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;
        
        // Draw node
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = dataPoint.color;
        ctx.fill();
        
        // Draw connecting lines
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = dataPoint.color + '40';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw value
        ctx.fillStyle = dataPoint.color;
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(dataPoint.value.toString(), x, y - 15);
      });
      
      phase += 0.02;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [currentData, viewMode]);

  const DataPointCard = ({ dataPoint, index }: { dataPoint: DataPoint; index: number }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: "0 25px 50px rgba(0,0,0,0.1)"
      }}
      onClick={() => setSelectedDataPoint(dataPoint)}
      className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer group relative overflow-hidden"
    >
      {/* Background animation */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-2xl"
        style={{ backgroundColor: dataPoint.color }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
            style={{ backgroundColor: dataPoint.color }}
          >
            <dataPoint.icon className="w-6 h-6 text-white" />
          </motion.div>
          
          <div className="flex items-center space-x-1">
            {dataPoint.trend > 0 ? (
              <ArrowUp className="w-4 h-4 text-success" />
            ) : (
              <ArrowDown className="w-4 h-4 text-destructive" />
            )}
            <span className={`text-sm font-medium ${
              dataPoint.trend > 0 ? 'text-success' : 'text-destructive'
            }`}>
              {Math.abs(dataPoint.trend)}%
            </span>
          </div>
        </div>

        {/* Label */}
        <h3 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
          {dataPoint.label}
        </h3>

        {/* Value */}
        <div className="flex items-baseline space-x-2 mb-4">
          <motion.span
            key={dataPoint.value}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-3xl font-bold text-primary"
          >
            {dataPoint.value}
          </motion.span>
          <span className="text-muted-foreground text-sm">
            {dataPoint.id.includes('time') ? 's' : 
             dataPoint.id.includes('satisfaction') || dataPoint.id.includes('efficiency') || dataPoint.id.includes('detection') ? '%' : 
             dataPoint.id.includes('processing') ? 'M/s' : ''}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-secondary rounded-full h-2 mb-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(dataPoint.value, 100)}%` }}
            transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
            className="h-full rounded-full shadow-sm"
            style={{ backgroundColor: dataPoint.color }}
          />
        </div>

        {/* Trend indicator */}
        <div className="text-xs text-muted-foreground">
          {dataPoint.trend > 0 ? 'Improving' : 'Optimizing'} • Last 30 days
        </div>
      </div>
    </motion.div>
  );

  const ChartView = () => (
    <div className="space-y-6">
      {currentData.map((dataPoint, index) => (
        <motion.div
          key={dataPoint.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-xl p-4 border border-border"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-3">
              <dataPoint.icon className="w-5 h-5" style={{ color: dataPoint.color }} />
              <span className="font-medium text-foreground">{dataPoint.label}</span>
            </div>
            <span className="text-xl font-bold text-primary">{dataPoint.value}</span>
          </div>
          
          <div className="relative">
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(dataPoint.value, 100)}%` }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className="h-full rounded-full"
                style={{ backgroundColor: dataPoint.color }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-medium text-white"
            >
              {dataPoint.value > 50 && `${dataPoint.value}%`}
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const FlowView = () => (
    <div className="relative h-96 bg-secondary/20 rounded-2xl overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-foreground mb-2">Real-time Data Flow</div>
          <div className="text-muted-foreground">Live metrics visualization</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-background via-secondary to-background rounded-3xl p-8 shadow-2xl border border-border/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-accent/50 rounded-lg rotate-45" />
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/20 rounded-full" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-medium text-foreground mb-2">
              Live Analytics Dashboard
            </h2>
            <p className="text-muted-foreground">
              Real-time performance metrics and intelligence insights
            </p>
          </div>
          
          {/* Controls */}
          <div className="flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAnimating(!isAnimating)}
              className="p-2 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <Download className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <Share className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex space-x-2 mb-6">
          {dataCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-card border border-border text-muted-foreground hover:border-accent/50 hover:text-foreground'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          {[
            { id: 'grid', label: 'Grid', icon: BarChart3 },
            { id: 'chart', label: 'Chart', icon: Activity },
            { id: 'flow', label: 'Flow', icon: Globe }
          ].map((mode) => (
            <motion.button
              key={mode.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode(mode.id as any)}
              className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                viewMode === mode.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              <mode.icon className="w-3 h-3" />
              <span>{mode.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {viewMode === 'grid' && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {currentData.map((dataPoint, index) => (
                <DataPointCard key={dataPoint.id} dataPoint={dataPoint} index={index} />
              ))}
            </motion.div>
          )}
          
          {viewMode === 'chart' && (
            <motion.div
              key="chart"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <ChartView />
            </motion.div>
          )}
          
          {viewMode === 'flow' && (
            <motion.div
              key="flow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <FlowView />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDataPoint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDataPoint(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-8 max-w-lg w-full border border-border shadow-2xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: selectedDataPoint.color }}
                >
                  <selectedDataPoint.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground">{selectedDataPoint.label}</h3>
                  <p className="text-muted-foreground">Detailed Analytics</p>
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(selectedDataPoint.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground capitalize">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDataPoint(null)}
                className="w-full mt-6 bg-accent text-accent-foreground py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}