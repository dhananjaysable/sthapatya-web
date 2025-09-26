import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
    SlideOverlayStyle,
    FadeScaleOverlayStyle,
    FlipCardOverlayStyle,
    CurtainRevealOverlayStyle,
    SplitScreenOverlayStyle,
    SpotlightOverlayStyle,
    ModernCardOverlayStyle,
    LiquidWaveOverlayStyle
} from './OverlayStyles';

const overlayStyles = [
    { name: "Sliding Panels", component: SlideOverlayStyle, description: "Text slides in from different directions with gradient backgrounds" },
    { name: "Fade & Scale", component: FadeScaleOverlayStyle, description: "Smooth fade with blur background and scaling text" },
    { name: "Flip Card", component: FlipCardOverlayStyle, description: "3D flip effect with decorative elements and red gradient" },
    { name: "Curtain Reveal", component: CurtainRevealOverlayStyle, description: "Curtains open from center to reveal text" },
    { name: "Split Screen", component: SplitScreenOverlayStyle, description: "Top and bottom panels slide away with center line decoration" },
    { name: "Spotlight", component: SpotlightOverlayStyle, description: "Circular spotlight effect with glowing text" },
    { name: "Modern Card", component: ModernCardOverlayStyle, description: "Clean white card slides up from bottom with subtle gradients" },
    { name: "Liquid Wave", component: LiquidWaveOverlayStyle, description: "Organic wave animation flowing upward with layered colors" }
];

const sampleImage = 'https://images.unsplash.com/photo-1652173254238-38fb2aa89ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg3OTUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080';

export function OverlayStyleDemo() {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Image Overlay Animation Styles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from these different overlay animation styles for your image gallery. 
                        Hover over each image to see the animation in action.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {overlayStyles.map((style, index) => {
                        const OverlayComponent = style.component;
                        
                        return (
                            <motion.div
                                key={style.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                {/* Style Preview */}
                                <motion.div
                                    className="relative overflow-hidden rounded-xl cursor-pointer mb-4"
                                    style={{
                                        height: '200px',
                                        background: 'linear-gradient(135deg, rgba(251, 185, 182, 0.1) 0%, rgba(87, 0, 13, 0.1) 100%)',
                                        boxShadow: '0 8px 25px rgba(87, 0, 13, 0.15)',
                                        border: '2px solid rgba(251, 185, 182, 0.2)'
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    initial="initial"
                                    animate="initial"
                                    whileHover="hover"
                                >
                                    {/* Sample Image */}
                                    <ImageWithFallback
                                        src={sampleImage}
                                        alt="Sample architectural image"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Overlay Style Component */}
                                    <OverlayComponent index={index}>
                                        <motion.div className="text-center">
                                            <h3 
                                                className={`font-bold mb-2 ${style.name === 'Modern Card' ? 'text-gray-800' : 'text-white'}`}
                                                style={{ 
                                                    fontSize: '16px',
                                                    textShadow: style.name === 'Modern Card' ? 'none' : '2px 2px 4px rgba(0,0,0,0.7)'
                                                }}
                                            >
                                                Strategic Planning
                                            </h3>
                                            <p 
                                                className={`text-xs opacity-90 ${style.name === 'Modern Card' ? 'text-gray-600' : 'text-white'}`}
                                                style={{ 
                                                    textShadow: style.name === 'Modern Card' ? 'none' : '1px 1px 2px rgba(0,0,0,0.8)',
                                                    maxWidth: '150px',
                                                    margin: '0 auto'
                                                }}
                                            >
                                                Strategic architectural planning
                                            </p>
                                        </motion.div>
                                    </OverlayComponent>
                                </motion.div>
                                
                                {/* Style Information */}
                                <div className="text-center">
                                    <h4 className="font-semibold text-gray-800 mb-2">{style.name}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {style.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                
                {/* Instructions */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg border border-pink-100"
                >
                    <h3 className="mb-4 text-gray-800">How to Choose Your Style</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Elegant & Subtle</h4>
                            <p>Fade & Scale, Spotlight, Modern Card - for professional, clean looks</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Dynamic & Bold</h4>
                            <p>Flip Card, Split Screen, Liquid Wave - for eye-catching, modern designs</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Classic & Smooth</h4>
                            <p>Sliding Panels, Curtain Reveal - for traditional, smooth transitions</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}