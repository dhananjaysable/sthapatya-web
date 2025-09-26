import { useState } from 'react';
import { motion } from 'motion/react';
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
  ArrowDown
} from 'lucide-react';

interface DataPoint {
  id: string;
  label: string;
  value: number;
  trend: number;
  icon: React.ComponentType<any>;
  color: string;
  details: {
    current: string;
    previous: string;
    change: string;
  };
}

export function SimpleDataVisualization() {
  const [selectedCategory, setSelectedCategory] = useState('performance');

  const dataCategories = [
    { id: 'performance', label: 'Performance', icon: TrendingUp, color: 'from-blue-500 to-purple-600' },
    { id: 'security', label: 'Security', icon: Shield, color: 'from-green-500 to-emerald-600' },
    { id: 'intelligence', label: 'AI Intelligence', icon: Brain, color: 'from-purple-500 to-pink-600' },
    { id: 'infrastructure', label: 'Infrastructure', icon: Database, color: 'from-orange-500 to-red-600' },
  ];

  const performanceData: DataPoint[] = [
    {
      id: 'response-time',
      label: 'Response Time',
      value: 2.3,
      trend: -23.5,
      icon: Clock,
      color: '#3b82f6',
      details: {
        current: '2.3 seconds',
        previous: '3.0 seconds',
        change: '-23.5% faster'
      }
    },
    {
      id: 'user-satisfaction',
      label: 'Citizen Satisfaction',
      value: 98.7,
      trend: 12.4,
      icon: Users,
      color: '#10b981',
      details: {
        current: '98.7%',
        previous: '87.8%',
        change: '+12.4% improvement'
      }
    },
    {
      id: 'system-efficiency',
      label: 'System Efficiency',
      value: 94.2,
      trend: 8.7,
      icon: Zap,
      color: '#f59e0b',
      details: {
        current: '94.2%',
        previous: '86.7%',
        change: '+8.7% optimization'
      }
    },
    {
      id: 'processing-speed',
      label: 'Data Processing',
      value: 15.7,
      trend: 34.2,
      icon: Cpu,
      color: '#8b5cf6',
      details: {
        current: '15.7M ops/sec',
        previous: '11.7M ops/sec',
        change: '+34.2% throughput'
      }
    }
  ];

  const securityData: DataPoint[] = [
    {
      id: 'threat-detection',
      label: 'Threat Detection',
      value: 99.95,
      trend: 2.1,
      icon: Shield,
      color: '#059669',
      details: {
        current: '99.95%',
        previous: '97.89%',
        change: '+2.1% detection'
      }
    },
    {
      id: 'zero-incidents',
      label: 'Security Incidents',
      value: 0,
      trend: -100,
      icon: Target,
      color: '#dc2626',
      details: {
        current: '0 incidents',
        previous: '3 minor alerts',
        change: '-100% incidents'
      }
    },
    {
      id: 'encryption-strength',
      label: 'Quantum Encryption',
      value: 100,
      trend: 15.7,
      icon: Globe,
      color: '#7c3aed',
      details: {
        current: '100% quantum-safe',
        previous: '86.4% coverage',
        change: '+15.7% enhancement'
      }
    },
    {
      id: 'uptime',
      label: 'System Uptime',
      value: 99.97,
      trend: 1.2,
      icon: Activity,
      color: '#16a34a',
      details: {
        current: '99.97%',
        previous: '98.81%',
        change: '+1.2% reliability'
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

  const DataPointCard = ({ dataPoint, index }: { dataPoint: DataPoint; index: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="bg-card rounded-2xl p-6 border border-border hover:border-accent/50 transition-all duration-300 group relative overflow-hidden"
    >
      {/* Simple background gradient */}
      <div
        className="absolute inset-0 opacity-5 rounded-2xl"
        style={{ backgroundColor: dataPoint.color }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow"
            style={{ backgroundColor: dataPoint.color }}
          >
            <dataPoint.icon className="w-6 h-6 text-white" />
          </div>
          
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
          <span className="text-3xl font-bold text-primary">
            {dataPoint.value}
          </span>
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
            transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{ backgroundColor: dataPoint.color }}
          />
        </div>

        {/* Details */}
        <div className="text-xs text-muted-foreground">
          {dataPoint.details.change} • Last 30 days
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gradient-to-br from-background via-secondary to-background rounded-3xl p-8 shadow-xl border border-border/50 relative overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent rounded-full" />
        <div className="absolute bottom-20 right-20 w-16 h-16 border border-accent/50 rounded-lg rotate-45" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-medium text-foreground mb-2">
            Live Analytics Dashboard
          </h2>
          <p className="text-muted-foreground">
            Real-time performance metrics and insights
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
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
      </div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {currentData.map((dataPoint, index) => (
            <DataPointCard key={dataPoint.id} dataPoint={dataPoint} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}