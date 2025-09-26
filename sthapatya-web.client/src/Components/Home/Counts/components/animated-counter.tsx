import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 2, delay = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest).toLocaleString());
    });

    return unsubscribe;
  }, [springValue]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, springValue, delay]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {displayValue}
      {suffix}
    </motion.span>
  );
}