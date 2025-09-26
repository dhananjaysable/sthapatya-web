import { motion } from 'motion/react';
import { FileText, Droplets, Calculator, CreditCard } from 'lucide-react';
import "../styles/cards.css";

const workShowcases = [
    {
        id: 'property-survey',
        icon: <FileText className="w-8 h-8" />,
        title: "Door-to-door survey for Property Tax",
        description: "Comprehensive property assessment and documentation services",
        color: '#95231c'
    },
    {
        id: 'water-tax',
        icon: <Droplets className="w-8 h-8" />,
        title: "Water Tax collection/management",
        description: "Efficient water utility billing and management systems",
        color: '#ba7b72'
    },
    {
        id: 'calculations',
        icon: <Calculator className="w-8 h-8" />,
        title: "All Calculations",
        description: "Automated, technology-driven calculation solutions",
        color: '#e1d385'
    },
    {
        id: 'bill-payments',
        icon: <CreditCard className="w-8 h-8" />,
        title: "Bill Payments with Technology",
        description: "Modern digital payment processing solutions",
        color: '#d8bea5'
    }
];

export function AboutSection() {
    return (
        <section className="w-full bg-[#f3f3f3] py-12 md:py-16 flex items-center">
            <div className="max-w-[90rem] w-full mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="space-y-6">
                            {[
                                "Founded in Maharashtra, Sthapatya Consultants (India) Pvt. Ltd. has emerged as a leading architectural consultancy firm. We specialize in delivering innovative design solutions that blend traditional Indian architectural principles with contemporary functionality.",
                                "Our journey began with a vision to create spaces that honor cultural heritage while embracing modern design sensibilities. Today, we serve clients across major Indian states, transforming architectural visions into tangible realities.",
                                "With a team of expert architects, engineers, and design consultants, we create sustainable solutions that not only meet current spatial needs but also adapt to future growth and environmental challenges."
                            ].map((text, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-base md:text-lg text-gray-700 leading-relaxed font-normal"
                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-3 gap-4 md:gap-8 pt-6"
                        >
                            {[
                                { value: '150+', label: 'Projects Completed' },
                                { value: '8+', label: 'States Covered' },
                                { value: '25+', label: 'Team Members' }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                                        viewport={{ once: true }}
                                        className="text-3xl md:text-4xl mb-1 md:mb-2 font-bold"
                                        style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-sm md:text-base text-gray-600 font-normal" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Button */}
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.6 }}
                            viewport={{ once: true }}
                            className="mt-6 md:mt-8 px-8 py-4 rounded-full text-white text-lg hover:shadow-lg transition-all duration-300"
                            style={{ backgroundColor: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                            whileHover={{ scale: 1.05, backgroundColor: '#ba7b72' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Discover Our Approach
                        </motion.button>
                    </motion.div>

                    {/* Right Column - Work Showcase Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
                    >
                        {workShowcases.map((showcase, index) => (
                            <motion.div
                                key={showcase.id}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="card">
                                    {/* Icon */}
                                    <div className="icon-wrapper">{showcase.icon}</div>

                                    {/* Default text */}
                                    <div className="content-default">
                                        <span className="name">{showcase.title}</span>
                                        <span className="about-me">{showcase.description}</span>
                                    </div>

                                    {/* Hover Panel */}
                                    <div className="bottom">
                                        <div className="content-hover">
                                            <span className="name">{showcase.title}</span>
                                            <span className="about-me">{showcase.description}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
