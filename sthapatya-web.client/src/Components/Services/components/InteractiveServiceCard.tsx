import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronDown, ArrowRight, Zap } from 'lucide-react';

interface InteractiveServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  stats: { label: string; value: string; icon?: LucideIcon }[];
  color: string;
  delay?: number;
  isActive?: boolean;
  onClick?: () => void;
}

export function InteractiveServiceCard({ 
  title, 
  subtitle, 
  description, 
  icon: Icon, 
  features, 
  stats, 
  color, 
  delay = 0, 
  isActive = false,
  onClick 
}: InteractiveServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer group ${
        isActive 
          ? 'border-accent shadow-2xl bg-gradient-to-br from-card to-secondary' 
          : 'border-border hover:border-accent/50 bg-card hover:shadow-xl'
      }`}
      onClick={onClick}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>
            <div>
              <h3 className="text-xl font-medium text-foreground mb-1">{title}</h3>
              <p className="text-sm text-accent font-medium">{subtitle}</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="p-2 rounded-lg bg-secondary hover:bg-accent/10 transition-colors"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.button>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon || Zap;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: delay + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className="text-center p-3 rounded-lg bg-secondary/50 hover:bg-accent/10 transition-all duration-300 group/stat"
              >
                <motion.div
                  animate={{ 
                    scale: hoveredStat === index ? 1.2 : 1,
                    rotate: hoveredStat === index ? 360 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 mx-auto mb-2 text-accent"
                >
                  <StatIcon className="w-full h-full" />
                </motion.div>
                <div className="text-lg font-medium text-foreground group-hover/stat:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Features */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="border-t border-border pt-6"
            >
              <h4 className="font-medium text-foreground mb-4 flex items-center">
                <Zap className="w-4 h-4 text-accent mr-2" />
                Key Features
              </h4>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-accent/5 transition-colors group/feature"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0"
                    >
                      <ArrowRight className="w-3 h-3 text-accent" />
                    </motion.div>
                    <span className="text-sm text-foreground group-hover/feature:text-primary transition-colors">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
          className="mt-6"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
              isActive
                ? 'bg-accent text-accent-foreground shadow-lg'
                : 'bg-secondary hover:bg-accent/10 text-foreground hover:text-accent'
            }`}
          >
            <span>Learn More</span>
            <motion.div
              animate={{ x: isActive ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Active Indicator */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full shadow-lg"
          />
        )}
      </AnimatePresence>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
}