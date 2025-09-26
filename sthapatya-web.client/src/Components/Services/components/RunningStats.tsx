import { useState, useEffect } from 'react';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  delay?: number;
}

function RunningStatItem({ value, label, suffix = '', prefix = '', delay = 0 }: StatItemProps) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const newValue = Math.min(stepValue * currentStep, value);
        setCurrentValue(Math.floor(newValue));
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setCurrentValue(value);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div className={`flex items-center space-x-2 glass-effect px-6 py-4 rounded-full hover-lift transition-all duration-500 ${
      isVisible ? 'animate-counter-up' : 'opacity-0'
    }`}>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-medium text-primary-foreground animate-stat-highlight rounded-lg px-2">
          {prefix}{currentValue.toLocaleString()}{suffix}
        </div>
        <div className="text-sm text-primary-foreground/80">{label}</div>
      </div>
    </div>
  );
}

interface RunningStatsProps {
  stats: Array<{
    value: number;
    label: string;
    suffix?: string;
    prefix?: string;
  }>;
}

export function RunningStats({ stats }: RunningStatsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6 mb-8">
      {stats.map((stat, index) => (
        <RunningStatItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          suffix={stat.suffix}
          prefix={stat.prefix}
          delay={index * 200}
        />
      ))}
    </div>
  );
}