import { motion } from 'motion/react';

// Style Option 1: Sliding Panels
export const SlideOverlayStyle = ({ index, children }) => {
    const getSlideDirection = (index) => {
        switch(index) {
            case 0: return { x: [-100, 0], background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)' };
            case 1: return { y: [100, 0], background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)' };
            case 2: return { x: [100, 0], background: 'linear-gradient(to left, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)' };
            case 3: return { y: [-100, 0], background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 100%)' };
            default: return { opacity: [0, 1], background: 'rgba(0, 0, 0, 0.6)' };
        }
    };

    const slideProps = getSlideDirection(index);

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
            style={{ background: slideProps.background }}
            initial={{ opacity: 0, ...slideProps }}
            variants={{
                hover: { opacity: 1, x: 0, y: 0 }
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

// Style Option 2: Fade & Scale with Blur Background
export const FadeScaleOverlayStyle = ({ index, children }) => {
    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0 }}
            variants={{
                hover: { opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Blur background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.3) 70%)',
                    backdropFilter: 'blur(2px)'
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                variants={{
                    hover: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Text container */}
            <motion.div
                className="relative z-10"
                initial={{ scale: 0.5, opacity: 0 }}
                variants={{
                    hover: { scale: 1, opacity: 1 }
                }}
                transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Style Option 3: Flip Card Effect
export const FlipCardOverlayStyle = ({ index, children }) => {
    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
            style={{
                background: 'linear-gradient(135deg, rgba(87, 0, 13, 0.9) 0%, rgba(139, 0, 0, 0.7) 100%)',
                transformOrigin: 'center',
                backfaceVisibility: 'hidden'
            }}
            initial={{ rotateY: 90, opacity: 0 }}
            variants={{
                hover: { rotateY: 0, opacity: 1 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Decorative corner elements */}
            <motion.div
                className="absolute top-4 left-4 w-8 h-1 bg-pink-300"
                initial={{ width: 0 }}
                variants={{ hover: { width: 32 } }}
                transition={{ duration: 0.4, delay: 0.2 }}
            />
            <motion.div
                className="absolute bottom-4 right-4 w-8 h-1 bg-pink-300"
                initial={{ width: 0 }}
                variants={{ hover: { width: 32 } }}
                transition={{ duration: 0.4, delay: 0.2 }}
            />
            
            {/* Text with typewriter effect */}
            <motion.div
                className="relative z-10 text-center"
                initial={{ y: 20, opacity: 0 }}
                variants={{
                    hover: { y: 0, opacity: 1 }
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Style Option 4: Curtain Reveal
export const CurtainRevealOverlayStyle = ({ index, children }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Left curtain */}
            <motion.div
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/80 to-black/60"
                initial={{ x: 0 }}
                variants={{
                    hover: { x: '-100%' }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            
            {/* Right curtain */}
            <motion.div
                className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/80 to-black/60"
                initial={{ x: 0 }}
                variants={{
                    hover: { x: '100%' }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            
            {/* Text content */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                variants={{
                    hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Style Option 5: Split Screen
export const SplitScreenOverlayStyle = ({ index, children }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top half */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-900/90 to-red-800/70"
                initial={{ y: 0 }}
                variants={{
                    hover: { y: '-100%' }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Bottom half */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-red-900/90 to-red-800/70"
                initial={{ y: 0 }}
                variants={{
                    hover: { y: '100%' }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            
            {/* Center line decoration */}
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0.5 bg-pink-300"
                initial={{ width: 0 }}
                variants={{
                    hover: { width: '80%' }
                }}
                transition={{ duration: 0.4, delay: 0.4 }}
            />
            
            {/* Text content */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ opacity: 0, rotateX: 90 }}
                variants={{
                    hover: { opacity: 1, rotateX: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Style Option 6: Spotlight Effect
export const SpotlightOverlayStyle = ({ index, children }) => {
    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none"
            style={{
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.9) 70%)'
            }}
            initial={{ 
                opacity: 0,
                background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.9) 20%)'
            }}
            variants={{
                hover: { 
                    opacity: 1,
                    background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.9) 70%)'
                }
            }}
            transition={{ duration: 0.5 }}
        >
            {/* Spotlight glow */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at center, rgba(251, 185, 182, 0.3) 0%, transparent 50%)'
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                variants={{
                    hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />
            
            {/* Text with glow effect */}
            <motion.div
                className="relative z-10 text-center"
                style={{
                    filter: 'drop-shadow(0 0 10px rgba(251, 185, 182, 0.8))'
                }}
                initial={{ opacity: 0, y: 30 }}
                variants={{
                    hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Style Option 7: Modern Card Overlay
export const ModernCardOverlayStyle = ({ index, children }) => {
    return (
        <motion.div
            className="absolute inset-0 flex items-end justify-center p-6 pointer-events-none"
            initial={{ opacity: 0 }}
            variants={{
                hover: { opacity: 1 }
            }}
            transition={{ duration: 0.3 }}
        >
            {/* Card background */}
            <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-pink-200"
                style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(251, 185, 182, 0.1) 100%)'
                }}
                initial={{ y: 100, scale: 0.8, opacity: 0 }}
                variants={{
                    hover: { y: 0, scale: 1, opacity: 1 }
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            >
                {/* Decorative top bar */}
                <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-red-600 to-pink-400 rounded-full mb-3 mx-auto"
                    initial={{ width: 0 }}
                    variants={{
                        hover: { width: 48 }
                    }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                />
                
                {/* Text content with dark text for contrast */}
                <div className="text-center">
                    <div className="text-gray-800">{children}</div>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Style Option 8: Liquid Wave Effect - Classic Black
export const LiquidWaveOverlayStyle = ({ index, children }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Wave layers */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, transparent 100%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
                }}
                initial={{ 
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
                }}
                variants={{
                    hover: { 
                        clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
                    }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            
            {/* Second wave */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(64, 64, 64, 0.6) 0%, transparent 80%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
                }}
                initial={{ 
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
                }}
                variants={{
                    hover: { 
                        clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
                    }
                }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
            
            {/* Text content */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 50 }}
                variants={{
                    hover: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

// Liquid Wave Variations with Different Dark Colors
export const LiquidWaveCharcoalStyle = ({ index, children }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(54, 54, 54, 0.9) 0%, transparent 100%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
                }}
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)' } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(128, 128, 128, 0.5) 0%, transparent 80%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
                }}
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)' } }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 50 }}
                variants={{ hover: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export const LiquidWaveSlateStyle = ({ index, children }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(71, 85, 105, 0.9) 0%, transparent 100%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
                }}
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)' } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(148, 163, 184, 0.6) 0%, transparent 80%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
                }}
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)' } }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 50 }}
                variants={{ hover: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export const LiquidWaveNavyStyle = ({ index, children }) => {
    return (
        <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(30, 41, 59, 0.9) 0%, transparent 100%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
                }}
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)' } }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.div
                className="absolute bottom-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(to top, rgba(100, 116, 139, 0.6) 0%, transparent 80%)',
                    clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
                }}
                initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
                variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)' } }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            />
            <motion.div
                className="absolute inset-0 flex items-center justify-center p-4"
                initial={{ opacity: 0, y: 50 }}
                variants={{ hover: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};


interface LiquidWaveGradientStyleProps {
  index: number;
  children: ReactNode;
}


export const LiquidWaveGradientStyle = ({ index, children }) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, transparent 100%)',
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
        }}
        initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
        variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)' } }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(to top, rgba(75, 85, 99, 0.6) 0%, transparent 80%)',
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
        }}
        initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
        variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)' } }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center p-4"
        initial={{ opacity: 0, y: 50 }}
        variants={{ hover: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
// export const LiquidWaveGradientStyle = ({ index, children }) => {
//     return (
//         <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
//             <motion.div
//                 className="absolute bottom-0 left-0 w-full h-full"
//                 style={{
//                     background: 'linear-gradient(to top, rgba(17, 24, 39, 0.9) 0%, transparent 100%)',
//                     clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)'
//                 }}
//                 initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
//                 variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 20%)' } }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//             />
//             <motion.div
//                 className="absolute bottom-0 left-0 w-full h-full"
//                 style={{
//                     background: 'linear-gradient(to top, rgba(75, 85, 99, 0.6) 0%, transparent 80%)',
//                     clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)'
//                 }}
//                 initial={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' }}
//                 variants={{ hover: { clipPath: 'polygon(0% 100%, 100% 100%, 100% 10%, 0% 30%)' } }}
//                 transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
//             />
//             <motion.div
//                 className="absolute inset-0 flex items-center justify-center p-4"
//                 initial={{ opacity: 0, y: 50 }}
//                 variants={{ hover: { opacity: 1, y: 0 } }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//             >
//                 {children}
//             </motion.div>
//         </motion.div>
//     );
// };