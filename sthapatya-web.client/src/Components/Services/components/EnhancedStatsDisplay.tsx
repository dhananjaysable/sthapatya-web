import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Building, 
  Zap, 
  CheckCircle,
  Award,
  Clock,
  Shield
} from 'lucide-react';

export function EnhancedStatsDisplay() {
  const municipalStats = [
    {
      category: "Municipal Operations",
      stats: [
        { label: "Active Citizens Served", value: "47,250", trend: "+8.2%", icon: Users, color: "text-chart-1" },
        { label: "Properties Managed", value: "15,420", trend: "+5.1%", icon: Building, color: "text-chart-2" },
        { label: "Service Requests Completed", value: "3,847", trend: "+12.3%", icon: CheckCircle, color: "text-chart-3" },
        { label: "Citizen Satisfaction Rate", value: "97.2%", trend: "+2.1%", icon: Award, color: "text-success" }
      ]
    },
    {
      category: "Technology & Innovation",
      stats: [
        { label: "System Uptime Guarantee", value: "99.9%", trend: "Stable", icon: Zap, color: "text-chart-1" },
        { label: "Digital Services Available", value: "152", trend: "+18", icon: TrendingUp, color: "text-chart-2" },
        { label: "Average Response Time", value: "1.8min", trend: "-0.3min", icon: Clock, color: "text-chart-3" },
        { label: "Security Incidents", value: "0", trend: "Perfect Record", icon: Shield, color: "text-success" }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {municipalStats.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          className="bg-card rounded-2xl p-8 shadow-lg border border-border"
        >
          <h3 className="text-2xl font-medium text-foreground mb-8 text-center">
            {category.category}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-secondary rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                </motion.div>
                
                {/* Value */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 + index * 0.1 + 0.3 }}
                  className="relative z-10 text-3xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors"
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <p className="relative z-10 text-sm text-muted-foreground leading-relaxed mb-3">
                  {stat.label}
                </p>
                
                {/* Trend */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                  className={`relative z-10 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    stat.trend.includes('+') 
                      ? 'bg-success/10 text-success' 
                      : stat.trend.includes('-') 
                      ? 'bg-warning/10 text-warning'
                      : 'bg-info/10 text-info'
                  }`}
                >
                  {stat.trend.includes('+') && <TrendingUp className="w-3 h-3 mr-1" />}
                  {stat.trend}
                </motion.div>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-accent/20 transition-colors"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}