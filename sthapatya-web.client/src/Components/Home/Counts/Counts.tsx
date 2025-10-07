import { motion } from 'motion/react';
import { AnimatedCounter } from './components/animated-counter';
//import "./styles/globals.css"
//import "./styles/Counts.css"
const statsData = [
    {
        value: 110,
        suffix: '+',
        title: 'ULBs',
        description: 'Urban Local Bodies successfully integrated into the system'
    },
    {
        value: 12,
        suffix: '+',
        title: 'Certified Software',
        description: 'Copyright ReadyTo use CERT-IN Certified Software solutions'
    },
    {
        value: 5000,
        suffix: ' Cr',
        title: 'Tax Revenue',
        description: 'Municipal Property Tax Revenue Generated'
    },
    {
        value: 45,
        suffix: ' Lakhs',
        title: 'Property Assessed',
        description: 'Total properties assessed and evaluated'
    }
];

export default function Counts() {
    return (
        <div className="min-h-[20rem] flex items-center justify-center p-4 md:p-8">
              <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center flex flex-col items-center justify-center"
                >
                </motion.div>
            {/* <div className="max-w-7xl mx-auto"> */}
              

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.3 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.6 + index * 0.15,
                                duration: 0.7,
                                type: "spring",
                                bounce: 0.5,
                                stiffness: 100
                            }}
                            className="text-center"
                        >
                            <motion.div
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
                                initial={{ scale: 0.2 }}
                                animate={{ scale: 1 }}
                                transition={{
                                    delay: 0.8 + index * 0.15,
                                    duration: 0.8,
                                    type: "spring",
                                    bounce: 0.6
                                }}
                            >
                                <AnimatedCounter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    delay={1 + index * 0.2}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    delay: 1.2 + index * 0.15,
                                    duration: 0.5,
                                    ease: "easeOut"
                                }}
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white uppercase tracking-wide">
                                    {stat.title}
                                </h3>
                                <p className="text-sm text-white mt-1 max-w-xs mx-auto">
                                    {stat.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div> */}

               
            {/* </div> */}
        </div>
    );
}