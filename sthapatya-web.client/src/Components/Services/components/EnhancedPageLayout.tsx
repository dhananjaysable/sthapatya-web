import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  background?: 'primary' | 'secondary' | 'gradient' | 'card';
  spacing?: 'tight' | 'normal' | 'loose';
  animation?: boolean;
}

interface EnhancedPageLayoutProps {
  hero: ReactNode;
  sections: Section[];
}

export function EnhancedPageLayout({ hero, sections }: EnhancedPageLayoutProps) {
  const getSpacingClass = (spacing?: string) => {
    switch (spacing) {
      case 'tight': return 'py-12';
      case 'loose': return 'py-32';
      default: return 'py-20';
    }
  };

  const getBackgroundClass = (background?: string) => {
    switch (background) {
      case 'primary': return 'bg-primary text-primary-foreground';
      case 'secondary': return 'bg-secondary';
      case 'gradient': return 'bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground';
      case 'card': return 'bg-card border-t border-border/50';
      default: return 'bg-background';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {hero}
      </motion.div>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <motion.section
          key={section.id}
          initial={section.animation !== false ? { opacity: 0, y: 40 } : false}
          animate={section.animation !== false ? { opacity: 1, y: 0 } : false}
          transition={section.animation !== false ? { duration: 0.8, delay: index * 0.1 } : false}
          className={`${getSpacingClass(section.spacing)} ${getBackgroundClass(section.background)} relative overflow-hidden`}
          id={section.id}
        >
          {/* Background Effects for Special Sections */}
          {section.background === 'gradient' && (
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8 + i * 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3
                  }}
                  className="absolute w-3 h-3 border border-accent rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            {(section.title || section.subtitle) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-16"
              >
                {section.title && (
                  <h2 className="text-4xl md:text-5xl font-medium mb-6">
                    {section.title}
                  </h2>
                )}
                {section.subtitle && (
                  <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                    {section.subtitle}
                  </p>
                )}
              </motion.div>
            )}

            {/* Section Content */}
            <div className="max-w-7xl mx-auto">
              {section.children}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
}

// Reusable Grid Component for Consistent Layouts
interface GridItem {
  title: string;
  description: string;
  icon: LucideIcon;
  value?: string;
  color?: string;
  features?: string[];
  delay?: number;
}

interface ResponsiveGridProps {
  items: GridItem[];
  columns?: 2 | 3 | 4;
  variant?: 'cards' | 'metrics' | 'features';
}

export function ResponsiveGrid({ items, columns = 3, variant = 'cards' }: ResponsiveGridProps) {
  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 lg:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-2 md:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const renderCard = (item: GridItem, index: number) => {
    const delay = item.delay || index * 0.1;

    if (variant === 'metrics') {
      return (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
        >
          <item.icon className={`w-10 h-10 mx-auto mb-4 ${item.color || 'text-accent'} group-hover:scale-110 transition-transform`} />
          {item.value && (
            <div className="text-3xl font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
              {item.value}
            </div>
          )}
          <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ y: -8 }}
        className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group h-full"
      >
        <div className="flex items-start space-x-4 mb-4">
          <div className={`p-3 rounded-lg ${item.color || 'bg-accent/10'} group-hover:scale-110 transition-transform`}>
            <item.icon className={`w-6 h-6 ${item.color?.includes('bg-') ? 'text-white' : 'text-accent'}`} />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
          </div>
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>
        
        {item.features && (
          <ul className="space-y-2">
            {item.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-muted-foreground flex items-center">
                <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    );
  };

  return (
    <div className={`grid ${getGridCols()} gap-6`}>
      {items.map(renderCard)}
    </div>
  );
}

// Enhanced Call-to-Action Component
interface CTAProps {
  title: string;
  subtitle: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  background?: 'gradient' | 'primary' | 'secondary';
}

export function EnhancedCTA({ title, subtitle, primaryAction, secondaryAction, background = 'gradient' }: CTAProps) {
  const backgroundClass = background === 'gradient' 
    ? 'bg-gradient-to-r from-primary via-primary to-primary/90'
    : background === 'primary' 
    ? 'bg-primary'
    : 'bg-secondary';

  const textClass = background === 'secondary' ? 'text-foreground' : 'text-primary-foreground';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${backgroundClass} ${textClass} py-20 relative overflow-hidden`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-40 h-40 border-2 border-current rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 left-10 w-32 h-32 bg-current rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-5xl font-medium mb-6"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href={primaryAction.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {primaryAction.text}
          </motion.a>
          
          {secondaryAction && (
            <motion.a
              href={secondaryAction.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 border-2 border-current rounded-lg font-medium hover:bg-current hover:text-primary transition-all duration-300"
            >
              {secondaryAction.text}
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}