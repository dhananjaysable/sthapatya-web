import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  expandedContent?: React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, expandedContent, delay = 0 }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-card rounded-xl shadow-lg border border-border overflow-hidden group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          {/* Animated Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center"
          >
            <Icon className="w-6 h-6 text-accent-foreground" />
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-card-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{description}</p>
          </div>

          {/* Expand indicator */}
          {expandedContent && (
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-muted-foreground"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          )}
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {isExpanded && expandedContent && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-border"
            >
              {expandedContent}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hover effect gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 pointer-events-none"
      />
    </motion.div>
  );
}