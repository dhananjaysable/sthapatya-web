import { motion } from 'motion/react';
import { AnimatedCounter } from './animated-counter';

interface StatsCardProps {
  value: number;
  suffix: string;
  title: string;
  description: string;
  index: number;
}

export function StatsCard({ value, suffix, title, description, index }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
        className="space-y-3"
      >
        <div className="flex items-center justify-between">
          <motion.div
            className="text-3xl font-bold text-gray-900"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.4, type: "spring" }}
          >
            <AnimatedCounter 
              value={value} 
              suffix={suffix} 
              delay={index * 0.2 + 0.5} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.6, duration: 0.3 }}
            className="w-2 h-2 bg-blue-500 rounded-full"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.7, duration: 0.4 }}
        >
          <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}