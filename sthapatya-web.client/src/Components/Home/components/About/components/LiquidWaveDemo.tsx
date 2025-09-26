import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
    LiquidWaveOverlayStyle,
    LiquidWaveCharcoalStyle,
    LiquidWaveSlateStyle,
    LiquidWaveNavyStyle,
    LiquidWaveGradientStyle
} from './OverlayStyles';

const liquidWaveStyles = [
    { 
        name: "Classic Black", 
        component: LiquidWaveOverlayStyle, 
        description: "Pure black with grey accents - professional and clean",
        colors: "Black & Grey"
    },
    { 
        name: "Charcoal Wave", 
        component: LiquidWaveCharcoalStyle, 
        description: "Charcoal dark with silver highlights - modern elegance",
        colors: "Charcoal & Silver"
    },
    { 
        name: "Slate Wave", 
        component: LiquidWaveSlateStyle, 
        description: "Slate blue-grey tones - sophisticated and balanced",
        colors: "Slate & Light Slate"
    },
    { 
        name: "Navy Wave", 
        component: LiquidWaveNavyStyle, 
        description: "Deep navy with muted blue accents - professional depth",
        colors: "Navy & Muted Blue"
    },
    { 
        name: "Gradient Dark", 
        component: LiquidWaveGradientStyle, 
        description: "Dark grey gradient with subtle layering - premium feel",
        colors: "Dark Grey Gradient"
    }
];

const sampleImages = [
    'https://images.unsplash.com/photo-1652173254238-38fb2aa89ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg3OTUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1603891345603-7163d3ee559e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxhcmNoaXRlY3R1cmFsJTIwZW5naW5lZXJpbmclMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzU4ODA3MzM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1758574697284-8e84046a45ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlcHJpbnQlMjBhcmNoaXRlY3R1cmFsJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU4ODA3MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1668749543729-9fbd709751ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGluZGlhbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NTg4MDczNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1652173254238-38fb2aa89ffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3NTg3OTUzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
];

export function LiquidWaveDemo() {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="mb-4">Liquid Wave - Dark Color Variations</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose from these dark color variations of the liquid wave effect. 
                        Each style uses sophisticated dark tones instead of red colors.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {liquidWaveStyles.map((style, index) => {
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
                                        src={sampleImages[index]}
                                        alt="Sample architectural image"
                                        className="w-full h-full object-cover"
                                    />
                                    
                                    {/* Overlay Style Component */}
                                    <OverlayComponent index={index}>
                                        <motion.div className="text-center">
                                            <h3 
                                                className="text-white font-bold mb-2"
                                                style={{ 
                                                    fontSize: '16px',
                                                    textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                                                }}
                                            >
                                                Strategic Planning
                                            </h3>
                                            <p 
                                                className="text-white text-xs opacity-90"
                                                style={{ 
                                                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
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
                                    <h4 className="font-semibold text-gray-800 mb-1">{style.name}</h4>
                                    <p className="text-xs text-gray-500 mb-2 font-medium">{style.colors}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {style.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
                
                {/* Color Information */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-pink-100"
                >
                    <h3 className="text-center mb-6 text-gray-800">Dark Color Palette Guide</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
                        <div className="text-center">
                            <div className="w-full h-12 rounded-lg mb-3" style={{ background: 'linear-gradient(to right, #000000, #404040)' }}></div>
                            <h4 className="font-semibold text-gray-800 mb-1">Classic Black</h4>
                            <p className="text-gray-600">Timeless, professional choice</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-12 rounded-lg mb-3" style={{ background: 'linear-gradient(to right, #363636, #808080)' }}></div>
                            <h4 className="font-semibold text-gray-800 mb-1">Charcoal</h4>
                            <p className="text-gray-600">Modern, sophisticated tone</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-12 rounded-lg mb-3" style={{ background: 'linear-gradient(to right, #475569, #94a3b8)' }}></div>
                            <h4 className="font-semibold text-gray-800 mb-1">Slate</h4>
                            <p className="text-gray-600">Blue-grey, balanced feel</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-12 rounded-lg mb-3" style={{ background: 'linear-gradient(to right, #1e293b, #64748b)' }}></div>
                            <h4 className="font-semibold text-gray-800 mb-1">Navy</h4>
                            <p className="text-gray-600">Deep, corporate elegance</p>
                        </div>
                        <div className="text-center">
                            <div className="w-full h-12 rounded-lg mb-3" style={{ background: 'linear-gradient(to right, #111827, #4b5563)' }}></div>
                            <h4 className="font-semibold text-gray-800 mb-1">Gradient Dark</h4>
                            <p className="text-gray-600">Premium, layered depth</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}