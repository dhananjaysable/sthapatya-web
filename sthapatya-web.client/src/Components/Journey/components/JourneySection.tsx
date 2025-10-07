// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Card, CardContent, CardHeader } from './ui/card';
// import { Badge } from './ui/badge';
// import { Button } from './ui/button';

// import { 
//   Building2, 
//   Users, 
//   TrendingUp, 
//   Globe, 
//   Award, 
//   Lightbulb, 
//   Target, 
//   Handshake, 
//   Rocket,
//   ChevronRight,
//   Calendar,
//   MapPin,
//   ArrowUp,
//   Play,
//   Pause,
//   BarChart3,
//   Activity,
//   Zap,
//   Star,
//   Trophy,
//   Briefcase,
//   ChevronLeft,
//   ChevronDown,
//   Menu,
//   X
// } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   ReferenceDot,
//   Cell,
//   RadialBarChart,
//   RadialBar,
//   PieChart,
//   Pie
// } from 'recharts';

// interface Milestone {
//   year: string;
//   yearNum: number;
//   title: string;
//   subtitle: string;
//   description: string;
//   achievements: string[];
//   teamSize: number;
//   projects: number;
//   states: number;
//   awards: number;
//   icon: any;
//   color: string;
// }

// const milestones: Milestone[] = [
//   {
//     year: "2001", yearNum: 2001,
//     title: "Foundation & Vision",
//     subtitle: "Establishing Excellence",
//     description: "Founded with a clear vision to revolutionize government services through innovative technology solutions.",
//     achievements: ["Company incorporated with strong foundation", "Assembled team of 5 expert professionals", "Launched first government technology projects"],
//     teamSize: 5, projects: 3, states: 1, awards: 0,
//     icon: Building2,
//     color: "from-[#95231c] to-[#ba7b72]"
//   },
//   {
//     year: "2003", yearNum: 2003,
//     title: "Strategic Expansion",
//     subtitle: "Building Capabilities",
//     description: "Strategically expanded our multidisciplinary team with domain experts and governance frameworks.",
//     achievements: ["Recruited specialized domain experts", "Established 3 core departments", "Implemented quality governance frameworks"],
//     teamSize: 15, projects: 12, states: 2, awards: 0,
//     icon: Users,
//     color: "from-[#ba7b72] to-[#d8bea5]"
//   },
//   {
//     year: "2005", yearNum: 2005,
//     title: "Technology Leadership",
//     subtitle: "GIS Innovation Pioneer",
//     description: "Became early adopters and leaders in Geographic Information Systems for municipal planning.",
//     achievements: ["First GIS implementation in region", "Advanced municipal planning systems", "Received technology innovation recognition"],
//     teamSize: 20, projects: 25, states: 3, awards: 2,
//     icon: Target,
//     color: "from-[#d8bea5] to-[#e1d385]"
//   },
//   {
//     year: "2008", yearNum: 2008,
//     title: "Regional Growth",
//     subtitle: "Multi-State Presence",
//     description: "Successfully expanded operations across multiple states with scalable service delivery models.",
//     achievements: ["Established multi-state operations", "Developed regional expertise", "Created scalable delivery frameworks"],
//     teamSize: 28, projects: 75, states: 5, awards: 3,
//     icon: Globe,
//     color: "from-[#e1d385] to-[#dddcdb]"
//   },
//   {
//     year: "2012", yearNum: 2012,
//     title: "Industry Recognition",
//     subtitle: "Excellence Validation",
//     description: "Received multiple prestigious awards recognizing our excellence in government technology consulting.",
//     achievements: ["Won 8 national excellence awards", "Achieved industry leadership recognition", "Reached significant client satisfaction milestones"],
//     teamSize: 35, projects: 150, states: 7, awards: 8,
//     icon: Award,
//     color: "from-[#dddcdb] to-[#f3f3f3]"
//   },
//   {
//     year: "2015", yearNum: 2015,
//     title: "Digital Transformation",
//     subtitle: "Innovation Leadership",
//     description: "Led digital transformation in government services with comprehensive city-wide solutions.",
//     achievements: ["Delivered comprehensive digital solutions", "Transformed 15 cities digitally", "Established innovation leadership position"],
//     teamSize: 42, projects: 250, states: 9, awards: 12,
//     icon: Lightbulb,
//     color: "from-[#f3f3f3] to-[#dddcdb]"
//   },
//   {
//     year: "2018", yearNum: 2018,
//     title: "R&D Excellence",
//     subtitle: "Innovation Hub",
//     description: "Established dedicated research wing focusing on emerging technologies and next-gen solutions.",
//     achievements: ["Established dedicated R&D wing", "Initiated emerging technology research", "Developed innovation hub infrastructure"],
//     teamSize: 46, projects: 350, states: 10, awards: 15,
//     icon: TrendingUp,
//     color: "from-[#dddcdb] to-[#ba7b72]"
//   },
//   {
//     year: "2020", yearNum: 2020,
//     title: "Strategic Partnerships",
//     subtitle: "Alliance Building",
//     description: "Forged strategic alliances with leading technology providers and government bodies.",
//     achievements: ["Formed 25+ strategic partnerships", "Built 12 government alliances", "Created collaborative solution frameworks"],
//     teamSize: 48, projects: 420, states: 11, awards: 18,
//     icon: Handshake,
//     color: "from-[#ba7b72] to-[#95231c]"
//   },
//   {
//     year: "2024", yearNum: 2024,
//     title: "Future Ready",
//     subtitle: "Next Generation Leadership",
//     description: "Positioned as the definitive leader in next-generation government technology solutions.",
//     achievements: ["Established next-gen solution leadership", "Set new industry benchmarks", "Integrated cutting-edge future technologies"],
//     teamSize: 50, projects: 500, states: 12, awards: 23,
//     icon: Rocket,
//     color: "from-[#95231c] to-[#ba7b72]"
//   }
// ];

// // Custom tooltip component
// const CustomTooltip = ({ active, payload}: any) => {
//   if (active && payload && payload.length) {
//     const data = payload[0].payload;
//     const IconComponent = data.icon;
    
//     return (
//       <Card className="bg-[#fefefe]/95 backdrop-blur-xl border-[#dddcdb]/50 shadow-2xl p-4 max-w-xs">
//         <div className="flex items-center gap-3 mb-3">
//           <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${data.color} flex items-center justify-center`}>
//             <IconComponent className="w-5 h-5 text-white" />
//           </div>
//           <div>
//             <Badge className="bg-[#95231c] text-white text-xs px-2 py-1">{data.year}</Badge>
//             <h4 className="font-bold text-[#95231c] text-sm mt-1">{data.title}</h4>
//           </div>
//         </div>
//         <div className="grid grid-cols-2 gap-2 text-xs">
//           <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
//             <div className="font-bold text-[#95231c]">{data.teamSize}</div>
//             <div className="text-[#95231c]/70">Team</div>
//           </div>
//           <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
//             <div className="font-bold text-[#95231c]">{data.projects}</div>
//             <div className="text-[#95231c]/70">Projects</div>
//           </div>
//           <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
//             <div className="font-bold text-[#95231c]">{data.states}</div>
//             <div className="text-[#95231c]/70">States</div>
//           </div>
//           <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
//             <div className="font-bold text-[#95231c]">{data.awards}</div>
//             <div className="text-[#95231c]/70">Awards</div>
//           </div>
//         </div>
//       </Card>
//     );
//   }
//   return null;
// };

// // Custom dot component for line chart
// const CustomDot = (props: any) => {
//   const { cx, cy, payload, index } = props;
//   const IconComponent = payload.icon;
  
//   return (
//     <g>
//       <motion.circle
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: index * 0.2, duration: 0.6 }}
//         cx={cx}
//         cy={cy}
//         r={8}
//         fill="url(#dotGradient)"
//         stroke="#95231c"
//         strokeWidth={2}
//         className="cursor-pointer hover:scale-110 transition-transform"
//       />
//       <motion.circle
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
//         cx={cx}
//         cy={cy}
//         r={4}
//         fill="#fefefe"
//       />
//     </g>
//   );
// };

// export default function JourneySection() {
//   const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
//   const [activeChart, setActiveChart] = useState<'growth' | 'projects' | 'expansion'>('growth');
//   const [currentMilestoneSet, setCurrentMilestoneSet] = useState(0);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const chartData = milestones.map((milestone, index) => ({
//     ...milestone,
//     index
//   }));

//   const getChartConfig = () => {
//     switch (activeChart) {
//       case 'projects':
//         return {
//           dataKey: 'projects',
//           color: '#ba7b72',
//           title: 'Projects Growth',
//           subtitle: 'Cumulative projects delivered over time'
//         };
//       case 'expansion':
//         return {
//           dataKey: 'states',
//           color: '#d8bea5',
//           title: 'Geographic Expansion',
//           subtitle: 'States covered across India'
//         };
//       default:
//         return {
//           dataKey: 'teamSize',
//           color: '#95231c',
//           title: 'Team Growth',
//           subtitle: 'Human capital expansion journey'
//         };
//     }
//   };

//   const config = getChartConfig();
//   const milestoneSets = [
//     milestones.slice(0, 3),
//     milestones.slice(3, 6),
//     milestones.slice(6, 9)
//   ];
//   const currentSet = milestoneSets[currentMilestoneSet];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f3f3f3] via-[#fefefe] to-[#dddcdb] relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-[#d8bea5]/10 to-[#e1d385]/10 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             x: [0, -80, 0],
//             y: [0, 60, 0],
//             rotate: [360, 180, 0],
//           }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-[#ba7b72]/10 to-[#95231c]/10 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="relative md:py-12 px-4">
//               <div className="max-w-[90rem] mx-auto">
//           {/* Enhanced Hero Section */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-12 md:mb-16"
//           >
//             {/* Company Name with Enhanced Visibility */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 1, ease: "easeOut" }}
//               className="relative mb-6 md:mb-8 py-6"
//             >
//               <div className="relative inline-block">
//                 {/* Background for better visibility */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#95231c]/20 via-[#ba7b72]/20 to-[#95231c]/20 rounded-2xl blur-xl" />
                
//                 <motion.h1
//                   className="relative text-4xl md:text-6xl lg:text-8xl font-black text-[#95231c] leading-tight tracking-tight px-4 py-2"
//                   style={{
//                     textShadow: '2px 2px 4px rgba(149, 35, 28, 0.1)',
//                   }}
//                 >
//                   Milestones That Matter
//                 </motion.h1>
                
//                 {/* Decorative elements */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                   className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-gradient-to-r from-[#e1d385] to-[#95231c] rounded-full opacity-60"
//                 />
//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                   className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-3 h-3 md:w-6 md:h-6 bg-gradient-to-r from-[#ba7b72] to-[#d8bea5] rounded-full opacity-40"
//                 />
//               </div>
//             </motion.div>

//             {/* Enhanced Badges */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//               className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-4"
//             >
//               <Badge className="bg-gradient-to-r from-[#95231c] to-[#ba7b72] text-white px-3 md:px-6 py-2 md:py-3 text-sm md:text-lg border-none shadow-lg">
//                 <Trophy className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
//                 Industry Leader
//               </Badge>
              
//               <div className="flex items-center gap-2 bg-[#fefefe]/90 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border border-[#dddcdb]/50 shadow-lg">
//                 <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-[#95231c]" />
//                 <span className="text-[#95231c] font-semibold text-sm md:text-base">Growth Analytics</span>
//               </div>
              
//               <div className="flex items-center gap-2 bg-[#fefefe]/90 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border border-[#dddcdb]/50 shadow-lg">
//                 <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#95231c]" />
//                 <span className="text-[#95231c] font-semibold text-sm md:text-base">23 Years Journey</span>
//               </div>
//             </motion.div>

//             {/* Mission Statement */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.8, duration: 1 }}
//               className="max-w-[90rem] mx-auto px-4 py-8"
//             >
//               <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#95231c] mb-3 md:mb-4 leading-tight">
//                 Transforming Government Services Through Innovation
//               </h2>
//               <p className="text-base md:text-lg lg:text-xl text-[#95231c]/80 leading-relaxed">
//                 From a visionary startup of 5 professionals to India's premier government technology consultancy, 
//                 serving 12 states with 500+ successful projects and unwavering commitment to digital governance excellence.
//               </p>
//             </motion.div>
//           </motion.section>

//           {/* Enhanced Milestone Explorer with Responsive Sidebar */}
//           <section className="mb-12 md:mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-8 md:mb-12 px-4 max-w-[90rem]"
//             >
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#95231c] mb-3 md:mb-4">Journey Milestones</h2>
//               <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#95231c] to-[#e1d385] mx-auto rounded-full mb-3 md:mb-4" />
//               <p className="text-base md:text-lg lg:text-xl text-[#95231c]/80 max-w-6xl mx-auto">
//                 Explore our transformative journey through interactive timeline showcasing key achievements and growth milestones
//               </p>
//             </motion.div>

//             <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
//               {/* Mobile Menu Button */}
//               <div className="lg:hidden mb-4">
//                 <Button
//                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                   className="w-full bg-gradient-to-r from-[#95231c] to-[#ba7b72] text-white"
//                 >
//                   {isMobileMenuOpen ? <X className="w-5 h-5 mr-2" /> : <Menu className="w-5 h-5 mr-2" />}
//                   Timeline Navigator
//                 </Button>
//               </div>

//               {/* Enhanced Sidebar */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.3, duration: 0.8 }}
//                 className={`w-full lg:w-80 flex-shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}
//               >
//                 <Card className="bg-gradient-to-br from-[#95231c] to-[#ba7b72] border-none shadow-2xl overflow-hidden h-[600px] flex flex-col">
//                   <CardHeader className="bg-[#fefefe]/10 backdrop-blur-md flex-shrink-0">
//                     <div className="flex items-center gap-3">
//                       <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#fefefe]/20 flex items-center justify-center">
//                         <Activity className="w-5 md:w-6 h-5 md:h-6 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="text-base md:text-lg font-bold text-white">Timeline Navigator</h3>
//                         <p className="text-white/80 text-sm">Journey Through Time</p>
//                       </div>
//                     </div>
//                   </CardHeader>
                  
//                   <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
//                     <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 flex-1">
//                       {milestoneSets.map((set, index) => {
//                         const yearRange = `${set[0].year} - ${set[set.length - 1].year}`;
//                         const isActive = currentMilestoneSet === index;
                        
//                         return (
//                           <motion.button
//                             key={index}
//                             onClick={() => {
//                               setCurrentMilestoneSet(index);
//                               setIsMobileMenuOpen(false);
//                             }}
//                             className={`w-full text-left p-3 md:p-4 rounded-lg transition-all duration-300 ${
//                               isActive 
//                                 ? 'bg-[#fefefe]/20 backdrop-blur-md border border-[#fefefe]/30' 
//                                 : 'bg-[#fefefe]/5 hover:bg-[#fefefe]/10'
//                             }`}
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                           >
//                             <div className="flex items-center justify-between">
//                               <div>
//                                 <div className="text-white font-semibold text-sm md:text-base">{yearRange}</div>
//                                 <div className="text-white/80 text-xs md:text-sm">
//                                   {index === 0 && "Foundation Era"}
//                                   {index === 1 && "Growth Era"}
//                                   {index === 2 && "Innovation Era"}
//                                 </div>
//                               </div>
//                               <ChevronRight className={`w-4 md:w-5 h-4 md:h-5 text-white/60 transition-transform ${isActive ? 'rotate-90' : ''}`} />
//                             </div>
                            
//                             {isActive && (
//                               <motion.div
//                                 initial={{ opacity: 0, height: 0 }}
//                                 animate={{ opacity: 1, height: 'auto' }}
//                                 className="mt-3 pt-3 border-t border-[#fefefe]/20"
//                               >
//                                 <div className="grid grid-cols-3 gap-2 text-xs">
//                                   {set.map((milestone) => (
//                                     <div key={milestone.year} className="text-center p-2 bg-[#fefefe]/10 rounded">
//                                       <div className="text-white font-semibold">{milestone.year}</div>
//                                       <div className="text-white/70">{milestone.projects} projects</div>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </motion.div>
//                             )}
//                           </motion.button>
//                         );
//                       })}
//                     </div>

//                     {/* Progress Indicator */}
//                     <div className="space-y-2 flex-shrink-0">
//                       <div className="flex justify-between text-sm text-white/80">
//                         <span>Progress</span>
//                         <span>{Math.round(((currentMilestoneSet + 1) / milestoneSets.length) * 100)}%</span>
//                       </div>
//                       <div className="w-full bg-[#fefefe]/20 rounded-full h-2">
//                         <motion.div
//                           className="bg-gradient-to-r from-[#e1d385] to-[#fefefe] h-2 rounded-full"
//                           initial={{ width: 0 }}
//                           animate={{ width: `${((currentMilestoneSet + 1) / milestoneSets.length) * 100}%` }}
//                           transition={{ duration: 0.5 }}
//                         />
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//               {/* Enhanced Cards Section with Equal Heights and Side Details */}
//               <div className="flex-1 relative">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentMilestoneSet}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -50 }}
//                     transition={{ duration: 0.6, ease: "easeInOut" }}
//                     className={`grid gap-4 md:gap-6 transition-all duration-500 ${
//                       selectedMilestone !== null 
//                         ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' 
//                         : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
//                     }`}
//                   >
//                     {currentSet.map((milestone, index) => {
//                       const IconComponent = milestone.icon;
//                       const isSelected = selectedMilestone === (currentMilestoneSet * 3 + index);
//                       const shouldHide = selectedMilestone !== null && !isSelected;
                      
//                       return (
//                         <motion.div
//                           key={milestone.year}
//                           initial={{ opacity: 0, y: 50 }}
//                           animate={{ 
//                             opacity: shouldHide ? 0 : 1, 
//                             y: 0,
//                             scale: shouldHide ? 0.8 : 1
//                           }}
//                           transition={{ delay: index * 0.2, duration: 0.8 }}
//                           className={`relative transition-all duration-500 ${shouldHide ? 'hidden lg:hidden' : ''}`}
//                         >
//                           <Card 
//                             className={`cursor-pointer transition-all duration-500 overflow-hidden h-[600px] flex flex-col ${
//                               isSelected 
//                                 ? 'shadow-2xl bg-gradient-to-br from-[#95231c]/5 to-[#ba7b72]/5 border-[#95231c]/30 ring-2 ring-[#95231c]/20' 
//                                 : 'shadow-xl bg-[#fefefe]/90 border-[#dddcdb]/30 hover:shadow-2xl hover:scale-102'
//                             }`}
//                             onClick={() => setSelectedMilestone(isSelected ? null : (currentMilestoneSet * 3 + index))}
//                           >
//                             {/* Animated Header Bar */}
//                             <motion.div
//                               initial={{ width: 0 }}
//                               animate={{ width: "100%" }}
//                               transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
//                               className={`h-2 bg-gradient-to-r ${milestone.color} flex-shrink-0`}
//                             />
                            
//                             <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
//                               <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
//                                 <motion.div
//                                   whileHover={{ scale: 1.1, rotate: 5 }}
//                                   className={`w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg flex-shrink-0`}
//                                 >
//                                   <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-white" />
//                                 </motion.div>
                                
//                                 <div className="flex-1 min-w-0 overflow-hidden">
//                                   <div className="flex flex-col gap-1 mb-2">
//                                     <Badge className="bg-[#95231c] text-white px-2 md:px-3 py-1 text-xs md:text-sm w-fit">
//                                       {milestone.year}
//                                     </Badge>
//                                     <Badge variant="outline" className="border-[#e1d385]/50 text-[#95231c] text-xs w-fit">
//                                       <span className="block truncate max-w-full">{milestone.subtitle}</span>
//                                     </Badge>
//                                   </div>
//                                   <h3 className="text-base md:text-lg font-bold text-[#95231c] mb-2 leading-tight">
//                                     {milestone.title}
//                                   </h3>
//                                 </div>
//                               </div>
                              
//                               <p className="text-[#95231c]/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-1">
//                                 {milestone.description}
//                               </p>
                              
//                               {/* Enhanced Metrics Grid */}
//                               <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
//                                 {[
//                                   { label: "Team Size", value: milestone.teamSize, icon: Users },
//                                   { label: "Projects", value: milestone.projects, icon: Target },
//                                   { label: "States", value: milestone.states, icon: MapPin },
//                                   { label: "Awards", value: milestone.awards, icon: Award }
//                                 ].map((metric, i) => {
//                                   const MetricIcon = metric.icon;
//                                   return (
//                                     <motion.div
//                                       key={i}
//                                       initial={{ opacity: 0, scale: 0.8 }}
//                                       animate={{ opacity: 1, scale: 1 }}
//                                       transition={{ delay: index * 0.2 + i * 0.1 + 0.8 }}
//                                       className="text-center p-2 md:p-3 bg-gradient-to-br from-[#f3f3f3]/80 to-[#dddcdb]/30 rounded-lg border border-[#dddcdb]/20"
//                                     >
//                                       <MetricIcon className="w-3 md:w-4 h-3 md:h-4 text-[#95231c] mx-auto mb-1" />
//                                       <div className="text-lg md:text-2xl font-bold text-[#95231c]">{metric.value}</div>
//                                       <div className="text-xs text-[#95231c]/70 font-medium">{metric.label}</div>
//                                     </motion.div>
//                                   );
//                                 })}
//                               </div>
                              
//                               <Button 
//                                 variant="outline" 
//                                 className="w-full border-[#95231c]/20 text-[#95231c] hover:bg-[#95231c]/5 transition-all duration-300 text-sm md:text-base flex-shrink-0"
//                               >
//                                 {isSelected ? 'Hide Details' : 'View Details'}
//                                 <ChevronRight className={`w-4 h-4 ml-2 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
//                               </Button>
//                             </CardContent>
//                           </Card>
//                         </motion.div>
//                       );
//                     })}

//                     {/* Enhanced Side Details Panel */}
//                     <AnimatePresence>
//                       {selectedMilestone !== null && (
//                         <motion.div
//                           initial={{ opacity: 0, x: 100, scale: 0.9 }}
//                           animate={{ opacity: 1, x: 0, scale: 1 }}
//                           exit={{ opacity: 0, x: 100, scale: 0.9 }}
//                           transition={{ duration: 0.6, ease: "easeInOut" }}
//                           className="relative"
//                         >
//                           <Card className="bg-gradient-to-br from-[#fefefe] to-[#f3f3f3] border-[#95231c]/20 shadow-2xl h-[600px] flex flex-col overflow-hidden">
//                             {/* Details Header with Gradient Bar */}
//                             <div className={`h-2 bg-gradient-to-r ${currentSet[selectedMilestone % 3]?.color} flex-shrink-0`} />
                            
//                             {/* Fixed Header Section */}
//                             <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-[#95231c]/5 to-[#ba7b72]/5 border-b border-[#dddcdb]/30 flex-shrink-0">
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-3">
//                                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#95231c] to-[#ba7b72] flex items-center justify-center shadow-lg">
//                                     <Trophy className="w-5 h-5 text-white" />
//                                   </div>
//                                   <div>
//                                     <h4 className="text-lg md:text-xl font-bold text-[#95231c]">Key Achievements</h4>
//                                     <p className="text-sm text-[#95231c]/70">Detailed milestone information</p>
//                                   </div>
//                                 </div>
//                                 <Button
//                                   onClick={() => setSelectedMilestone(null)}
//                                   variant="ghost"
//                                   size="sm"
//                                   className="text-[#95231c]/60 hover:text-[#95231c] hover:bg-[#95231c]/10 rounded-full p-2"
//                                 >
//                                   <X className="w-5 h-5" />
//                                 </Button>
//                               </div>
//                             </div>
                            
//                             {/* Scrollable Content Area - ENTIRE CARD CONTENT */}
//                             <div className="flex-1 overflow-y-auto custom-scrollbar">
//                               {/* Milestone Header Info */}
//                               {selectedMilestone !== null && currentSet[selectedMilestone % 3] && (
//                                 <div className="px-4 md:px-6 py-4 bg-[#fefefe]/80 border-b border-[#dddcdb]/20">
//                                   <div className="flex items-center gap-4">
//                                     <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentSet[selectedMilestone % 3].color} flex items-center justify-center shadow-lg`}>
//                                       {React.createElement(currentSet[selectedMilestone % 3].icon, { className: "w-8 h-8 text-white" })}
//                                     </div>
//                                     <div className="flex-1">
//                                       <div className="flex items-center gap-2 mb-2">
//                                         <Badge className="bg-[#95231c] text-white px-3 py-1 text-sm font-semibold">
//                                           {currentSet[selectedMilestone % 3].year}
//                                         </Badge>
//                                         <Badge variant="outline" className="border-[#e1d385]/60 text-[#95231c] text-xs">
//                                           {currentSet[selectedMilestone % 3].subtitle}
//                                         </Badge>
//                                       </div>
//                                       <h5 className="font-bold text-[#95231c] text-lg md:text-xl leading-tight">
//                                         {currentSet[selectedMilestone % 3].title}
//                                       </h5>
//                                       <p className="text-[#95231c]/70 text-sm mt-1 leading-relaxed">
//                                         {currentSet[selectedMilestone % 3].description}
//                                       </p>
//                                     </div>
//                                   </div>
//                                 </div>
//                               )}

//                               {/* Metrics Summary */}
//                               {selectedMilestone !== null && currentSet[selectedMilestone % 3] && (
//                                 <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-[#f3f3f3]/50 to-[#dddcdb]/20 border-b border-[#dddcdb]/20">
//                                   <div className="grid grid-cols-4 gap-3">
//                                     {[
//                                       { label: "Team", value: currentSet[selectedMilestone % 3].teamSize, icon: Users, color: "from-[#95231c] to-[#ba7b72]" },
//                                       { label: "Projects", value: currentSet[selectedMilestone % 3].projects, icon: Target, color: "from-[#ba7b72] to-[#d8bea5]" },
//                                       { label: "States", value: currentSet[selectedMilestone % 3].states, icon: MapPin, color: "from-[#d8bea5] to-[#e1d385]" },
//                                       { label: "Awards", value: currentSet[selectedMilestone % 3].awards, icon: Award, color: "from-[#e1d385] to-[#95231c]" }
//                                     ].map((metric, i) => {
//                                       const MetricIcon = metric.icon;
//                                       return (
//                                         <motion.div
//                                           key={i}
//                                           initial={{ opacity: 0, y: 20 }}
//                                           animate={{ opacity: 1, y: 0 }}
//                                           transition={{ delay: i * 0.1 }}
//                                           className="text-center p-3 bg-[#fefefe]/90 rounded-lg border border-[#dddcdb]/30 shadow-sm hover:shadow-md transition-shadow"
//                                         >
//                                           <div className={`w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
//                                             <MetricIcon className="w-4 h-4 text-white" />
//                                           </div>
//                                           <div className="text-xl font-bold text-[#95231c]">{metric.value}</div>
//                                           <div className="text-xs text-[#95231c]/70 font-medium">{metric.label}</div>
//                                         </motion.div>
//                                       );
//                                     })}
//                                   </div>
//                                 </div>
//                               )}

//                               {/* Achievements Section */}
//                               <div className="px-4 md:px-6 py-4">
//                                 <h6 className="text-sm font-semibold text-[#95231c]/80 uppercase tracking-wide mb-4">
//                                   Major Achievements
//                                 </h6>
                                
//                                 <div className="space-y-4">
//                                   {selectedMilestone !== null && currentSet[selectedMilestone % 3]?.achievements.map((achievement, i) => (
//                                     <motion.div
//                                       key={i}
//                                       initial={{ opacity: 0, x: -20 }}
//                                       animate={{ opacity: 1, x: 0 }}
//                                       transition={{ delay: i * 0.1 }}
//                                       className="group relative"
//                                     >
//                                       <div className="flex items-start gap-4 p-4 bg-[#fefefe]/80 rounded-lg border border-[#dddcdb]/30 hover:border-[#95231c]/20 hover:shadow-md transition-all duration-300">
//                                         <div className="flex-shrink-0 mt-1">
//                                           <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSet[selectedMilestone % 3]?.color} shadow-sm`} />
//                                         </div>
//                                         <div className="flex-1">
//                                           <p className="text-[#95231c]/90 leading-relaxed text-sm md:text-base group-hover:text-[#95231c] transition-colors">
//                                             {achievement}
//                                           </p>
//                                         </div>
//                                       </div>
//                                     </motion.div>
//                                   ))}
//                                 </div>

//                                 {/* Additional Content Sections for Scrolling */}
//                                 <div className="mt-8 space-y-6">
//                                   {/* Future Impact Section */}
//                                   <div className="p-4 bg-gradient-to-r from-[#95231c]/5 to-[#ba7b72]/5 rounded-lg border border-[#dddcdb]/20">
//                                     <h6 className="text-sm font-semibold text-[#95231c] uppercase tracking-wide mb-3 flex items-center gap-2">
//                                       <Star className="w-4 h-4" />
//                                       Future Impact
//                                     </h6>
//                                     <p className="text-[#95231c]/80 text-sm leading-relaxed">
//                                       This milestone continues to influence our strategic direction and serves as a foundation for upcoming innovations in government technology solutions.
//                                     </p>
//                                   </div>

//                                   {/* Key Learnings Section */}
//                                   <div className="p-4 bg-gradient-to-r from-[#d8bea5]/10 to-[#e1d385]/10 rounded-lg border border-[#dddcdb]/20">
//                                     <h6 className="text-sm font-semibold text-[#95231c] uppercase tracking-wide mb-3 flex items-center gap-2">
//                                       <Lightbulb className="w-4 h-4" />
//                                       Key Learnings
//                                     </h6>
//                                     <p className="text-[#95231c]/80 text-sm leading-relaxed">
//                                       Every challenge overcome during this period strengthened our expertise and refined our approach to delivering exceptional government technology consulting services.
//                                     </p>
//                                   </div>

//                                   {/* Strategic Importance */}
//                                   <div className="p-4 bg-gradient-to-r from-[#ba7b72]/10 to-[#95231c]/10 rounded-lg border border-[#dddcdb]/20">
//                                     <h6 className="text-sm font-semibold text-[#95231c] uppercase tracking-wide mb-3 flex items-center gap-2">
//                                       <Target className="w-4 h-4" />
//                                       Strategic Importance
//                                     </h6>
//                                     <p className="text-[#95231c]/80 text-sm leading-relaxed">
//                                       This milestone represents a crucial turning point in our company's evolution, setting the stage for sustained growth and industry leadership.
//                                     </p>
//                                   </div>

//                                   {/* Placeholder for Future Content */}
//                                   <div className="mt-8 p-6 bg-gradient-to-r from-[#f3f3f3]/30 to-[#dddcdb]/10 rounded-lg border border-dashed border-[#dddcdb]/50">
//                                     <div className="text-center text-[#95231c]/50">
//                                       <Zap className="w-8 h-8 mx-auto mb-3 opacity-40" />
//                                       <p className="text-base font-medium mb-2">Expanding Content Library</p>
//                                       <p className="text-sm mb-4">We're continuously adding more detailed information about each milestone</p>
//                                       <div className="grid grid-cols-2 gap-3 text-xs">
//                                         <div className="p-2 bg-[#fefefe]/50 rounded border border-[#dddcdb]/30">
//                                           <p className="font-medium">Coming Soon:</p>
//                                           <p>Detailed case studies</p>
//                                         </div>
//                                         <div className="p-2 bg-[#fefefe]/50 rounded border border-[#dddcdb]/30">
//                                           <p className="font-medium">Future Updates:</p>
//                                           <p>Client testimonials</p>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
                            
//                             {/* Fixed Footer Action */}
//                             <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-[#f3f3f3]/80 to-[#dddcdb]/30 border-t border-[#dddcdb]/30 flex-shrink-0">
//                               <Button
//                                 onClick={() => setSelectedMilestone(null)}
//                                 className="w-full bg-gradient-to-r from-[#95231c] to-[#ba7b72] text-white hover:from-[#ba7b72] hover:to-[#95231c] transition-all duration-300 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl"
//                               >
//                                 <ChevronLeft className="w-4 h-4 mr-2" />
//                                 Close Details
//                               </Button>
//                             </div>
//                           </Card>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>
//           </section>

//           {/* Growth Journey Visualization */}
//           <section className="mb-12 md:mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-8 md:mb-12 px-4 max-w-[90rem]"
//             >
//               <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#95231c] mb-3 md:mb-4">Growth Journey Visualization</h2>
//               <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#95231c] to-[#e1d385] mx-auto rounded-full mb-3 md:mb-4" />
//               <p className="text-base md:text-lg lg:text-xl text-[#95231c]/80 max-w-3xl mx-auto">
//                 Interactive charts showcasing our measurable growth across different dimensions
//               </p>
//             </motion.div>

//             {/* Chart Controls */}
//             <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 flex-wrap px-4">
//               {[
//                 { key: 'growth', label: 'Team Growth', icon: Users, color: '#95231c' },
//                 { key: 'projects', label: 'Projects', icon: Target, color: '#ba7b72' },
//                 { key: 'expansion', label: 'Geographic Reach', icon: Globe, color: '#d8bea5' }
//               ].map((chart) => {
//                 const IconComponent = chart.icon;
//                 return (
//                   <Button
//                     key={chart.key}
//                     variant={activeChart === chart.key ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setActiveChart(chart.key as any)}
//                     className={`${
//                       activeChart === chart.key 
//                         ? `bg-gradient-to-r from-[${chart.color}] to-[#ba7b72] text-white hover:from-[#ba7b72] hover:to-[${chart.color}]` 
//                         : `border-[${chart.color}]/30 text-[${chart.color}] hover:bg-[${chart.color}]/5`
//                     } transition-all duration-300 text-xs md:text-sm`}
//                   >
//                     <IconComponent className="w-3 md:w-5 h-3 md:h-5 mr-1 md:mr-2" />
//                     <span className="hidden sm:inline">{chart.label}</span>
//                     <span className="sm:hidden">{chart.label.split(' ')[0]}</span>
//                   </Button>
//                 );
//               })}
//             </div>

//             {/* Main Growth Chart */}
//             <motion.div
//               key={activeChart}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className=" max-w-[90rem]"
//             >
//               <Card className="bg-[#fefefe]/95 backdrop-blur-sm border-[#dddcdb]/30 shadow-2xl overflow-hidden">
//                 <CardContent className="p-4 md:p-8">
//                   <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
//                     <div className="mb-4 md:mb-0">
//                       <h3 className="text-xl md:text-2xl font-bold text-[#95231c] mb-1 md:mb-2">{config.title}</h3>
//                       <p className="text-[#95231c]/70 text-sm md:text-base">{config.subtitle}</p>
//                     </div>
//                     <div className="flex items-center gap-2 md:gap-3">
//                       <div className={`w-3 md:w-4 h-3 md:h-4 rounded-full bg-[${config.color}] shadow-lg`} />
//                       <span className="text-[#95231c]/70 font-medium text-sm md:text-base">Growth Trajectory</span>
//                     </div>
//                   </div>
                  
//                   <div className="h-64 md:h-96">
//                     <ResponsiveContainer width="100%" height="100%">
//                       <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//                         <defs>
//                           <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//                             <stop offset="0%" stopColor={config.color} stopOpacity={0.3} />
//                             <stop offset="100%" stopColor={config.color} stopOpacity={0.05} />
//                           </linearGradient>
//                           <linearGradient id="dotGradient" x1="0" y1="0" x2="1" y2="1">
//                             <stop offset="0%" stopColor="#95231c" />
//                             <stop offset="100%" stopColor="#ba7b72" />
//                           </linearGradient>
//                         </defs>
                        
//                         <CartesianGrid strokeDasharray="3 3" stroke="#dddcdb" opacity={0.4} />
//                         <XAxis 
//                           dataKey="year" 
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fontSize: 12, fill: '#95231c', fontWeight: 500 }}
//                         />
//                         <YAxis 
//                           axisLine={false}
//                           tickLine={false}
//                           tick={{ fontSize: 12, fill: '#95231c', fontWeight: 500 }}
//                         />
//                         <Tooltip content={<CustomTooltip />} />
                        
//                         <Area
//                           type="monotone"
//                           dataKey={config.dataKey}
//                           stroke={config.color}
//                           strokeWidth={3}
//                           fill="url(#areaGradient)"
//                           animationDuration={2500}
//                         />
                        
//                         <Line
//                           type="monotone"
//                           dataKey={config.dataKey}
//                           stroke={config.color}
//                           strokeWidth={3}
//                           dot={<CustomDot />}
//                           activeDot={{ r: 8, fill: config.color, stroke: '#fefefe', strokeWidth: 2 }}
//                         />
//                       </AreaChart>
//                     </ResponsiveContainer>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </section>

//           {/* Enhanced Call to Action */}
//           <motion.section
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center px-4"
//           >
//               <Card className="max-w-[90rem] mx-auto bg-gradient-to-br from-[#95231c] via-[#ba7b72] to-[#95231c] border-none shadow-2xl overflow-hidden relative">
//               <CardContent className="p-6 md:p-12 relative z-10">
//                 {/* Decorative Elements */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                   className="absolute top-3 right-3 md:top-6 md:right-6 w-12 md:w-20 h-12 md:h-20 bg-[#fefefe]/10 rounded-full flex items-center justify-center"
//                 >
//                   <Zap className="w-6 md:w-10 h-6 md:h-10 text-[#fefefe]/40" />
//                 </motion.div>
                
//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                   className="absolute bottom-3 left-3 md:bottom-6 md:left-6 w-10 md:w-16 h-10 md:h-16 bg-[#e1d385]/20 rounded-full flex items-center justify-center"
//                 >
//                   <Star className="w-5 md:w-8 h-5 md:h-8 text-[#fefefe]/30" />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fefefe] mb-3 md:mb-4">
//                     Ready to Transform Your Vision?
//                   </h3>
//                   <p className="text-base md:text-xl text-[#fefefe]/90 mb-6 md:mb-8 max-w-7xl mx-auto leading-relaxed">
//                     Join us in shaping the future of digital governance. Let's create innovative solutions that make a difference in millions of lives.
//                   </p>
                  
//                   <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
//                     <Button 
//                       size="lg"
//                       className="w-full sm:w-auto bg-[#fefefe] text-[#95231c] hover:bg-[#f3f3f3] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <Briefcase className="w-4 md:w-5 h-4 md:h-5 mr-2" />
//                       Start Your Project
//                       <ChevronRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
//                     </Button>
                    
//                     <Button 
//                       size="lg"
//                       className="w-full sm:w-auto bg-[#fefefe]/20 backdrop-blur-md text-[#fefefe] hover:bg-[#fefefe]/30 border-2 border-[#fefefe]/50 hover:border-[#fefefe]/70 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//                     >
//                       <BarChart3 className="w-4 md:w-5 h-4 md:h-5 mr-2" />
//                       View Portfolio
//                       <ArrowUp className="w-4 md:w-5 h-4 md:h-5 ml-2" />
//                     </Button>
//                   </div>
//                 </motion.div>
//               </CardContent>
//             </Card>
//           </motion.section>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  Award, 
  Lightbulb, 
  Target, 
  Handshake, 
  Rocket,
  ChevronRight,
  Calendar,
  MapPin,
  ArrowUp,
  Play,
  Pause,
  BarChart3,
  Activity,
  Zap,
  Star,
  Trophy,
  Briefcase,
  ChevronLeft,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  Cell,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie
} from 'recharts';

interface Milestone {
  year: string;
  yearNum: number;
  title: string;
  subtitle: string;
  description: string;
  achievements: string[];
  teamSize: number;
  projects: number;
  states: number;
  awards: number;
  icon: any;
  color: string;
}

const milestones: Milestone[] = [
  {
    year: "2001", yearNum: 2001,
    title: "Foundation & Vision",
    subtitle: "Establishing Excellence",
    description: "Founded with a clear vision to revolutionize government services through innovative technology solutions.",
    achievements: ["Company incorporated with strong foundation", "Assembled team of 5 expert professionals", "Launched first government technology projects"],
    teamSize: 5, projects: 3, states: 1, awards: 0,
    icon: Building2,
    color: "from-[#95231c] to-[#ba7b72]"
  },
  {
    year: "2003", yearNum: 2003,
    title: "Strategic Expansion",
    subtitle: "Building Capabilities",
    description: "Strategically expanded our multidisciplinary team with domain experts and governance frameworks.",
    achievements: ["Recruited specialized domain experts", "Established 3 core departments", "Implemented quality governance frameworks"],
    teamSize: 15, projects: 12, states: 2, awards: 0,
    icon: Users,
    color: "from-[#ba7b72] to-[#d8bea5]"
  },
  {
    year: "2005", yearNum: 2005,
    title: "Technology Leadership",
    subtitle: "GIS Innovation Pioneer",
    description: "Became early adopters and leaders in Geographic Information Systems for municipal planning.",
    achievements: ["First GIS implementation in region", "Advanced municipal planning systems", "Received technology innovation recognition"],
    teamSize: 20, projects: 25, states: 3, awards: 2,
    icon: Target,
    color: "from-[#d8bea5] to-[#e1d385]"
  },
  {
    year: "2008", yearNum: 2008,
    title: "Regional Growth",
    subtitle: "Multi-State Presence",
    description: "Successfully expanded operations across multiple states with scalable service delivery models.",
    achievements: ["Established multi-state operations", "Developed regional expertise", "Created scalable delivery frameworks"],
    teamSize: 28, projects: 75, states: 5, awards: 3,
    icon: Globe,
    color: "from-[#e1d385] to-[#dddcdb]"
  },
  {
    year: "2012", yearNum: 2012,
    title: "Industry Recognition",
    subtitle: "Excellence Validation",
    description: "Received multiple prestigious awards recognizing our excellence in government technology consulting.",
    achievements: ["Won 8 national excellence awards", "Achieved industry leadership recognition", "Reached significant client satisfaction milestones"],
    teamSize: 35, projects: 150, states: 7, awards: 8,
    icon: Award,
    color: "from-[#dddcdb] to-[#f3f3f3]"
  },
  {
    year: "2015", yearNum: 2015,
    title: "Digital Transformation",
    subtitle: "Innovation Leadership",
    description: "Led digital transformation in government services with comprehensive city-wide solutions.",
    achievements: ["Delivered comprehensive digital solutions", "Transformed 15 cities digitally", "Established innovation leadership position"],
    teamSize: 42, projects: 250, states: 9, awards: 12,
    icon: Lightbulb,
    color: "from-[#f3f3f3] to-[#dddcdb]"
  },
  {
    year: "2018", yearNum: 2018,
    title: "R&D Excellence",
    subtitle: "Innovation Hub",
    description: "Established dedicated research wing focusing on emerging technologies and next-gen solutions.",
    achievements: ["Established dedicated R&D wing", "Initiated emerging technology research", "Developed innovation hub infrastructure"],
    teamSize: 46, projects: 350, states: 10, awards: 15,
    icon: TrendingUp,
    color: "from-[#dddcdb] to-[#ba7b72]"
  },
  {
    year: "2020", yearNum: 2020,
    title: "Strategic Partnerships",
    subtitle: "Alliance Building",
    description: "Forged strategic alliances with leading technology providers and government bodies.",
    achievements: ["Formed 25+ strategic partnerships", "Built 12 government alliances", "Created collaborative solution frameworks"],
    teamSize: 48, projects: 420, states: 11, awards: 18,
    icon: Handshake,
    color: "from-[#ba7b72] to-[#95231c]"
  },
  {
    year: "2024", yearNum: 2024,
    title: "Future Ready",
    subtitle: "Next Generation Leadership",
    description: "Positioned as the definitive leader in next-generation government technology solutions.",
    achievements: ["Established next-gen solution leadership", "Set new industry benchmarks", "Integrated cutting-edge future technologies"],
    teamSize: 50, projects: 500, states: 12, awards: 23,
    icon: Rocket,
    color: "from-[#95231c] to-[#ba7b72]"
  }
];

// Custom tooltip component
const CustomTooltip = ({ active, payload}: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const IconComponent = data.icon;
    
    return (
      <Card className="bg-[#fefefe]/95 backdrop-blur-xl border-[#dddcdb]/50 shadow-2xl p-4 max-w-xs">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${data.color} flex items-center justify-center`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <div>
            <Badge className="bg-[#95231c] text-white text-xs px-2 py-1">{data.year}</Badge>
            <h4 className="font-bold text-[#95231c] text-sm mt-1">{data.title}</h4>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
            <div className="font-bold text-[#95231c]">{data.teamSize}</div>
            <div className="text-[#95231c]/70">Team</div>
          </div>
          <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
            <div className="font-bold text-[#95231c]">{data.projects}</div>
            <div className="text-[#95231c]/70">Projects</div>
          </div>
          <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
            <div className="font-bold text-[#95231c]">{data.states}</div>
            <div className="text-[#95231c]/70">States</div>
          </div>
          <div className="text-center p-2 bg-[#f3f3f3]/50 rounded">
            <div className="font-bold text-[#95231c]">{data.awards}</div>
            <div className="text-[#95231c]/70">Awards</div>
          </div>
        </div>
      </Card>
    );
  }
  return null;
};

// Custom dot component for line chart
const CustomDot = (props: any) => {
  const { cx, cy, payload, index } = props;
  const IconComponent = payload.icon;
  
  return (
    <g>
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        cx={cx}
        cy={cy}
        r={8}
        fill="url(#dotGradient)"
        stroke="#95231c"
        strokeWidth={2}
        className="cursor-pointer hover:scale-110 transition-transform"
      />
      <motion.circle
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        cx={cx}
        cy={cy}
        r={4}
        fill="#fefefe"
      />
    </g>
  );
};

export default function JourneySection() {
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);
  const [activeChart, setActiveChart] = useState<'growth' | 'projects' | 'expansion'>('growth');
  const [currentMilestoneSet, setCurrentMilestoneSet] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const chartData = milestones.map((milestone, index) => ({
    ...milestone,
    index
  }));

  const getChartConfig = () => {
    switch (activeChart) {
      case 'projects':
        return {
          dataKey: 'projects',
          color: '#ba7b72',
          title: 'Projects Growth',
          subtitle: 'Cumulative projects delivered over time'
        };
      case 'expansion':
        return {
          dataKey: 'states',
          color: '#d8bea5',
          title: 'Geographic Expansion',
          subtitle: 'States covered across India'
        };
      default:
        return {
          dataKey: 'teamSize',
          color: '#95231c',
          title: 'Team Growth',
          subtitle: 'Human capital expansion journey'
        };
    }
  };

  const config = getChartConfig();
  const milestoneSets = [
    milestones.slice(0, 3),
    milestones.slice(3, 6),
    milestones.slice(6, 9)
  ];
  const currentSet = milestoneSets[currentMilestoneSet];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f3f3] via-[#fefefe] to-[#dddcdb] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-[#d8bea5]/10 to-[#e1d385]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-gradient-to-r from-[#ba7b72]/10 to-[#95231c]/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative md:py-12 px-4">
              <div className="max-w-[90rem] mx-auto">
          {/* Enhanced Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Company Name with Enhanced Visibility */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative mb-6 md:mb-8 py-6"
            >
              <div className="relative inline-block">
                {/* Background for better visibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#95231c]/20 via-[#ba7b72]/20 to-[#95231c]/20 rounded-2xl blur-xl" />
                
                <motion.h1
                  className="relative text-4xl md:text-6xl lg:text-8xl font-black text-[#95231c] leading-tight tracking-tight px-4 py-2"
                  style={{
                    textShadow: '2px 2px 4px rgba(149, 35, 28, 0.1)',
                  }}
                >
                  Milestones That Matter
                </motion.h1>
                
                {/* Decorative elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-gradient-to-r from-[#e1d385] to-[#95231c] rounded-full opacity-60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 w-3 h-3 md:w-6 md:h-6 bg-gradient-to-r from-[#ba7b72] to-[#d8bea5] rounded-full opacity-40"
                />
              </div>
            </motion.div>

            {/* Enhanced Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8 px-4"
            >
              <Badge className="bg-gradient-to-r from-[#95231c] to-[#ba7b72] text-white px-3 md:px-6 py-2 md:py-3 text-sm md:text-lg border-none shadow-lg">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                Industry Leader
              </Badge>
              
              <div className="flex items-center gap-2 bg-[#fefefe]/90 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border border-[#dddcdb]/50 shadow-lg">
                <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-[#95231c]" />
                <span className="text-[#95231c] font-semibold text-sm md:text-base">Growth Analytics</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#fefefe]/90 backdrop-blur-md px-3 md:px-6 py-2 md:py-3 rounded-full border border-[#dddcdb]/50 shadow-lg">
                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-[#95231c]" />
                <span className="text-[#95231c] font-semibold text-sm md:text-base">23 Years Journey</span>
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-[90rem] mx-auto px-4 py-8"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#95231c] mb-3 md:mb-4 leading-tight">
                Transforming Government Services Through Innovation
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-[#95231c]/80 leading-relaxed">
                From a visionary startup of 5 professionals to India's premier government technology consultancy, 
                serving 12 states with 500+ successful projects and unwavering commitment to digital governance excellence.
              </p>
            </motion.div>
          </motion.section>

          {/* Enhanced Milestone Explorer with Responsive Sidebar */}
          <section className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12 px-4 max-w-[90rem]"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#95231c] mb-3 md:mb-4">Journey Milestones</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#95231c] to-[#e1d385] mx-auto rounded-full mb-3 md:mb-4" />
              <p className="text-base md:text-lg lg:text-xl text-[#95231c]/80 max-w-6xl mx-auto">
                Explore our transformative journey through interactive timeline showcasing key achievements and growth milestones
              </p>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
              {/* Mobile Menu Button */}
              <div className="lg:hidden mb-4">
                <Button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-full bg-gradient-to-r from-[#95231c] to-[#ba7b72] text-white"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5 mr-2" /> : <Menu className="w-5 h-5 mr-2" />}
                  Timeline Navigator
                </Button>
              </div>

              {/* Enhanced Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className={`w-full lg:w-80 flex-shrink-0 ${isMobileMenuOpen ? 'block' : 'hidden lg:block'}`}
              >
                <Card className="bg-gradient-to-br from-[#95231c] to-[#ba7b72] border-none shadow-2xl overflow-hidden h-[600px] flex flex-col">
                  <CardHeader className="bg-[#fefefe]/10 backdrop-blur-md flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-[#fefefe]/20 flex items-center justify-center">
                        <Activity className="w-5 md:w-6 h-5 md:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white">Timeline Navigator</h3>
                        <p className="text-white/80 text-sm">Journey Through Time</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                    <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 flex-1">
                      {milestoneSets.map((set, index) => {
                        const yearRange = `${set[0].year} - ${set[set.length - 1].year}`;
                        const isActive = currentMilestoneSet === index;
                        
                        return (
                          <motion.button
                            key={index}
                            onClick={() => {
                              setCurrentMilestoneSet(index);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full text-left p-3 md:p-4 rounded-lg transition-all duration-300 ${
                              isActive 
                                ? 'bg-[#fefefe]/20 backdrop-blur-md border border-[#fefefe]/30' 
                                : 'bg-[#fefefe]/5 hover:bg-[#fefefe]/10'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-white font-semibold text-sm md:text-base">{yearRange}</div>
                                <div className="text-white/80 text-xs md:text-sm">
                                  {index === 0 && "Foundation Era"}
                                  {index === 1 && "Growth Era"}
                                  {index === 2 && "Innovation Era"}
                                </div>
                              </div>
                              <ChevronRight className={`w-4 md:w-5 h-4 md:h-5 text-white/60 transition-transform ${isActive ? 'rotate-90' : ''}`} />
                            </div>
                            
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-3 pt-3 border-t border-[#fefefe]/20"
                              >
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                  {set.map((milestone) => (
                                    <div key={milestone.year} className="text-center p-2 bg-[#fefefe]/10 rounded">
                                      <div className="text-white font-semibold">{milestone.year}</div>
                                      <div className="text-white/70">{milestone.projects} projects</div>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Progress Indicator */}
                    <div className="space-y-2 flex-shrink-0">
                      <div className="flex justify-between text-sm text-white/80">
                        <span>Progress</span>
                        <span>{Math.round(((currentMilestoneSet + 1) / milestoneSets.length) * 100)}%</span>
                      </div>
                      <div className="w-full bg-[#fefefe]/20 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-[#e1d385] to-[#fefefe] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${((currentMilestoneSet + 1) / milestoneSets.length) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Enhanced Cards Section with Equal Heights and Side Details */}
              <div className="flex-1 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentMilestoneSet}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`grid gap-4 md:gap-6 transition-all duration-500 ${
                      selectedMilestone !== null 
                        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' 
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                    }`}
                  >
                    {currentSet.map((milestone, index) => {
                      const IconComponent = milestone.icon;
                      const isSelected = selectedMilestone === (currentMilestoneSet * 3 + index);
                      const shouldHide = selectedMilestone !== null && !isSelected;
                      
                      return (
                        <motion.div
                          key={milestone.year}
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ 
                            opacity: shouldHide ? 0 : 1, 
                            y: 0,
                            scale: shouldHide ? 0.8 : 1
                          }}
                          transition={{ delay: index * 0.2, duration: 0.8 }}
                          className={`relative transition-all duration-500 ${shouldHide ? 'hidden lg:hidden' : ''}`}
                        >
                          <Card 
                            className={`cursor-pointer transition-all duration-500 overflow-hidden h-[600px] flex flex-col ${
                              isSelected 
                                ? 'shadow-2xl bg-gradient-to-br from-[#95231c]/5 to-[#ba7b72]/5 border-[#95231c]/30 ring-2 ring-[#95231c]/20' 
                                : 'shadow-xl bg-[#fefefe]/90 border-[#dddcdb]/30 hover:shadow-2xl hover:scale-102'
                            }`}
                            onClick={() => setSelectedMilestone(isSelected ? null : (currentMilestoneSet * 3 + index))}
                          >
                            {/* Animated Header Bar */}
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "100%" }}
                              transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                              className={`h-2 bg-gradient-to-r ${milestone.color} flex-shrink-0`}
                            />
                            
                            <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  className={`w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                                >
                                  <IconComponent className="w-6 md:w-8 h-6 md:h-8 text-white" />
                                </motion.div>
                                
                                <div className="flex-1 min-w-0 overflow-hidden">
                                  <div className="flex flex-col gap-1 mb-2">
                                    <Badge className="bg-[#95231c] text-white px-2 md:px-3 py-1 text-xs md:text-sm w-fit">
                                      {milestone.year}
                                    </Badge>
                                    <Badge variant="outline" className="border-[#e1d385]/50 text-[#95231c] text-xs w-fit">
                                      <span className="block truncate max-w-full">{milestone.subtitle}</span>
                                    </Badge>
                                  </div>
                                  <h3 className="text-base md:text-lg font-bold text-[#95231c] mb-2 leading-tight">
                                    {milestone.title}
                                  </h3>
                                </div>
                              </div>
                              
                              <p className="text-[#95231c]/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base flex-1">
                                {milestone.description}
                              </p>
                              
                              {/* Enhanced Metrics Grid */}
                              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                                {[
                                  { label: "Team Size", value: milestone.teamSize, icon: Users },
                                  { label: "Projects", value: milestone.projects, icon: Target },
                                  { label: "States", value: milestone.states, icon: MapPin },
                                  { label: "Awards", value: milestone.awards, icon: Award }
                                ].map((metric, i) => {
                                  const MetricIcon = metric.icon;
                                  return (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, scale: 0.8 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: index * 0.2 + i * 0.1 + 0.8 }}
                                      className="text-center p-2 md:p-3 bg-gradient-to-br from-[#f3f3f3]/80 to-[#dddcdb]/30 rounded-lg border border-[#dddcdb]/20"
                                    >
                                      <MetricIcon className="w-3 md:w-4 h-3 md:h-4 text-[#95231c] mx-auto mb-1" />
                                      <div className="text-lg md:text-2xl font-bold text-[#95231c]">{metric.value}</div>
                                      <div className="text-xs text-[#95231c]/70 font-medium">{metric.label}</div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                              
                              <Button 
                                variant="outline" 
                                className="w-full border-[#95231c]/20 text-[#95231c] hover:bg-[#95231c]/5 transition-all duration-300 text-sm md:text-base flex-shrink-0"
                              >
                                {isSelected ? 'Hide Details' : 'View Details'}
                                <ChevronRight className={`w-4 h-4 ml-2 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
                              </Button>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}

                    {/* Enhanced Side Details Panel */}
                    <AnimatePresence>
                      {selectedMilestone !== null && (
                        <motion.div
                          initial={{ opacity: 0, x: 100, scale: 0.9 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 100, scale: 0.9 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                          className="relative"
                        >
                          <Card className="bg-gradient-to-br from-[#fefefe] to-[#f3f3f3] border-[#95231c]/20 shadow-2xl h-[600px] flex flex-col overflow-hidden">
                            {/* Details Header with Gradient Bar */}
                            <div className={`h-2 bg-gradient-to-r ${currentSet[selectedMilestone % 3]?.color} flex-shrink-0`} />
                            
                            {/* Fixed Header Section */}
                            <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-[#95231c]/5 to-[#ba7b72]/5 border-b border-[#dddcdb]/30 flex-shrink-0">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#95231c] to-[#ba7b72] flex items-center justify-center shadow-lg">
                                    <Trophy className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <h4 className="text-lg md:text-xl font-bold text-[#95231c]">Key Achievements</h4>
                                    <p className="text-sm text-[#95231c]/70">Detailed milestone information</p>
                                  </div>
                                </div>
                                <Button
                                  onClick={() => setSelectedMilestone(null)}
                                  variant="ghost"
                                  size="sm"
                                  className="text-[#95231c]/60 hover:text-[#95231c] hover:bg-[#95231c]/10 rounded-full p-2"
                                >
                                  <X className="w-5 h-5" />
                                </Button>
                              </div>
                            </div>
                            
                            {/* Scrollable Content Area - ENTIRE CARD CONTENT */}
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                              {/* Milestone Header Info */}
                              {selectedMilestone !== null && currentSet[selectedMilestone % 3] && (
                                <div className="px-4 md:px-6 py-4 bg-[#fefefe]/80 border-b border-[#dddcdb]/20">
                                  <div className="flex items-center gap-4">
                                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentSet[selectedMilestone % 3].color} flex items-center justify-center shadow-lg`}>
                                      {React.createElement(currentSet[selectedMilestone % 3].icon, { className: "w-8 h-8 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-2">
                                        <Badge className="bg-[#95231c] text-white px-3 py-1 text-sm font-semibold">
                                          {currentSet[selectedMilestone % 3].year}
                                        </Badge>
                                        <Badge variant="outline" className="border-[#e1d385]/60 text-[#95231c] text-xs">
                                          {currentSet[selectedMilestone % 3].subtitle}
                                        </Badge>
                                      </div>
                                      <h5 className="font-bold text-[#95231c] text-lg md:text-xl leading-tight">
                                        {currentSet[selectedMilestone % 3].title}
                                      </h5>
                                      <p className="text-[#95231c]/70 text-sm mt-1 leading-relaxed">
                                        {currentSet[selectedMilestone % 3].description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Metrics Summary */}
                              {selectedMilestone !== null && currentSet[selectedMilestone % 3] && (
                                <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-[#f3f3f3]/50 to-[#dddcdb]/20 border-b border-[#dddcdb]/20">
                                  <div className="grid grid-cols-4 gap-3">
                                    {[
                                      { label: "Team", value: currentSet[selectedMilestone % 3].teamSize, icon: Users, color: "from-[#95231c] to-[#ba7b72]" },
                                      { label: "Projects", value: currentSet[selectedMilestone % 3].projects, icon: Target, color: "from-[#ba7b72] to-[#d8bea5]" },
                                      { label: "States", value: currentSet[selectedMilestone % 3].states, icon: MapPin, color: "from-[#d8bea5] to-[#e1d385]" },
                                      { label: "Awards", value: currentSet[selectedMilestone % 3].awards, icon: Award, color: "from-[#e1d385] to-[#95231c]" }
                                    ].map((metric, i) => {
                                      const MetricIcon = metric.icon;
                                      return (
                                        <motion.div
                                          key={i}
                                          initial={{ opacity: 0, y: 20 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          transition={{ delay: i * 0.1 }}
                                          className="text-center p-3 bg-[#fefefe]/90 rounded-lg border border-[#dddcdb]/30 shadow-sm hover:shadow-md transition-shadow"
                                        >
                                          <div className={`w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                                            <MetricIcon className="w-4 h-4 text-white" />
                                          </div>
                                          <div className="text-xl font-bold text-[#95231c]">{metric.value}</div>
                                          <div className="text-xs text-[#95231c]/70 font-medium">{metric.label}</div>
                                        </motion.div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* Achievements Section */}
                              <div className="px-4 md:px-6 py-4">
                                <h6 className="text-sm font-semibold text-[#95231c]/80 uppercase tracking-wide mb-4">
                                  Major Achievements
                                </h6>
                                
                                <div className="space-y-4">
                                  {selectedMilestone !== null && currentSet[selectedMilestone % 3]?.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="group relative"
                                    >
                                      <div className="flex items-start gap-4 p-4 bg-[#fefefe]/80 rounded-lg border border-[#dddcdb]/30 hover:border-[#95231c]/20 hover:shadow-md transition-all duration-300">
                                        <div className="flex-shrink-0 mt-1">
                                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSet[selectedMilestone % 3]?.color} shadow-sm`} />
                                        </div>
                                        <div className="flex-1">
                                          <p className="text-[#95231c]/90 leading-relaxed text-sm md:text-base group-hover:text-[#95231c] transition-colors">
                                            {achievement}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>

                                {/* Additional Content Sections for Scrolling */}
                                <div className="mt-8 space-y-6">
                                  {/* Future Impact Section */}
                                  <div className="p-4 bg-gradient-to-r from-[#95231c]/5 to-[#ba7b72]/5 rounded-lg border border-[#dddcdb]/20">
                                    <h6 className="text-sm font-semibold text-[#95231c] uppercase tracking-wide mb-3 flex items-center gap-2">
                                      <Star className="w-4 h-4" />
                                      Future Impact
                                    </h6>
                                    <p className="text-[#95231c]/80 text-sm leading-relaxed">
                                      This milestone continues to influence our strategic direction and serves as a foundation for upcoming innovations in government technology solutions.
                                    </p>
                                  </div>

                                  {/* Key Learnings Section */}
                                  <div className="p-4 bg-gradient-to-r from-[#d8bea5]/10 to-[#e1d385]/10 rounded-lg border border-[#dddcdb]/20">
                                    <h6 className="text-sm font-semibold text-[#95231c] uppercase tracking-wide mb-3 flex items-center gap-2">
                                      <Lightbulb className="w-4 h-4" />
                                      Key Learnings
                                    </h6>
                                    <p className="text-[#95231c]/80 text-sm leading-relaxed">
                                      Every challenge overcome during this period strengthened our expertise and refined our approach to delivering exceptional government technology consulting services.
                                    </p>
                                  </div>

                                  {/* Strategic Importance */}
                                  <div className="p-4 bg-gradient-to-r from-[#ba7b72]/10 to-[#95231c]/10 rounded-lg border border-[#dddcdb]/20">
                                    <h6 className="text-sm font-semibold text-[#95231c] uppercase tracking-wide mb-3 flex items-center gap-2">
                                      <Target className="w-4 h-4" />
                                      Strategic Importance
                                    </h6>
                                    <p className="text-[#95231c]/80 text-sm leading-relaxed">
                                      This milestone represents a crucial turning point in our company's evolution, setting the stage for sustained growth and industry leadership.
                                    </p>
                                  </div>

                                  {/* Placeholder for Future Content */}
                                  <div className="mt-8 p-6 bg-gradient-to-r from-[#f3f3f3]/30 to-[#dddcdb]/10 rounded-lg border border-dashed border-[#dddcdb]/50">
                                    <div className="text-center text-[#95231c]/50">
                                      <Zap className="w-8 h-8 mx-auto mb-3 opacity-40" />
                                      <p className="text-base font-medium mb-2">Expanding Content Library</p>
                                      <p className="text-sm mb-4">We're continuously adding more detailed information about each milestone</p>
                                      <div className="grid grid-cols-2 gap-3 text-xs">
                                        <div className="p-2 bg-[#fefefe]/50 rounded border border-[#dddcdb]/30">
                                          <p className="font-medium">Coming Soon:</p>
                                          <p>Detailed case studies</p>
                                        </div>
                                        <div className="p-2 bg-[#fefefe]/50 rounded border border-[#dddcdb]/30">
                                          <p className="font-medium">Future Updates:</p>
                                          <p>Client testimonials</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {/* Fixed Footer Action */}
                            <div className="px-4 md:px-6 py-4 bg-gradient-to-r from-[#f3f3f3]/80 to-[#dddcdb]/30 border-t border-[#dddcdb]/30 flex-shrink-0">
                              <Button
                                onClick={() => setSelectedMilestone(null)}
                                className="w-full bg-gradient-to-r from-[#95231c] to-[#ba7b72] text-white hover:from-[#ba7b72] hover:to-[#95231c] transition-all duration-300 text-sm md:text-base font-semibold shadow-lg hover:shadow-xl"
                              >
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Close Details
                              </Button>
                            </div>
                          </Card>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Growth Journey Visualization */}
          <section className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 md:mb-12 px-4 max-w-[90rem]"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#95231c] mb-3 md:mb-4">Growth Journey Visualization</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#95231c] to-[#e1d385] mx-auto rounded-full mb-3 md:mb-4" />
              <p className="text-base md:text-lg lg:text-xl text-[#95231c]/80 max-w-3xl mx-auto">
                Interactive charts showcasing our measurable growth across different dimensions
              </p>
            </motion.div>

            {/* Chart Controls */}
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 flex-wrap px-4">
              {[
                { key: 'growth', label: 'Team Growth', icon: Users, color: '#95231c' },
                { key: 'projects', label: 'Projects', icon: Target, color: '#ba7b72' },
                { key: 'expansion', label: 'Geographic Reach', icon: Globe, color: '#d8bea5' }
              ].map((chart) => {
                const IconComponent = chart.icon;
                return (
                  <Button
                    key={chart.key}
                    variant={activeChart === chart.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveChart(chart.key as any)}
                    className={`${
                      activeChart === chart.key 
                        ? `bg-gradient-to-r from-[${chart.color}] to-[#ba7b72] text-white hover:from-[#ba7b72] hover:to-[${chart.color}]` 
                        : `border-[${chart.color}]/30 text-[${chart.color}] hover:bg-[${chart.color}]/5`
                    } transition-all duration-300 text-xs md:text-sm`}
                  >
                    <IconComponent className="w-3 md:w-5 h-3 md:h-5 mr-1 md:mr-2" />
                    <span className="hidden sm:inline">{chart.label}</span>
                    <span className="sm:hidden">{chart.label.split(' ')[0]}</span>
                  </Button>
                );
              })}
            </div>

            {/* Main Growth Chart */}
            <motion.div
              key={activeChart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" max-w-[90rem]"
            >
              <Card className="bg-[#fefefe]/95 backdrop-blur-sm border-[#dddcdb]/30 shadow-2xl overflow-hidden">
                <CardContent className="p-4 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl md:text-2xl font-bold text-[#95231c] mb-1 md:mb-2">{config.title}</h3>
                      <p className="text-[#95231c]/70 text-sm md:text-base">{config.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`w-3 md:w-4 h-3 md:h-4 rounded-full bg-[${config.color}] shadow-lg`} />
                      <span className="text-[#95231c]/70 font-medium text-sm md:text-base">Growth Trajectory</span>
                    </div>
                  </div>
                  
                  <div className="h-64 md:h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <defs>
                          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={config.color} stopOpacity={0.3} />
                            <stop offset="100%" stopColor={config.color} stopOpacity={0.05} />
                          </linearGradient>
                          <linearGradient id="dotGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#95231c" />
                            <stop offset="100%" stopColor="#ba7b72" />
                          </linearGradient>
                        </defs>
                        
                        <CartesianGrid strokeDasharray="3 3" stroke="#dddcdb" opacity={0.4} />
                        <XAxis 
                          dataKey="year" 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#95231c', fontWeight: 500 }}
                        />
                        <YAxis 
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 12, fill: '#95231c', fontWeight: 500 }}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        
                        <Area
                          type="monotone"
                          dataKey={config.dataKey}
                          stroke={config.color}
                          strokeWidth={3}
                          fill="url(#areaGradient)"
                          animationDuration={2500}
                        />
                        
                        <Line
                          type="monotone"
                          dataKey={config.dataKey}
                          stroke={config.color}
                          strokeWidth={3}
                          dot={<CustomDot />}
                          activeDot={{ r: 8, fill: config.color, stroke: '#fefefe', strokeWidth: 2 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* Enhanced Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
              <Card className="max-w-[90rem] mx-auto bg-gradient-to-br from-[#95231c] via-[#ba7b72] to-[#95231c] border-none shadow-2xl overflow-hidden relative">
              <CardContent className="p-6 md:p-12 relative z-10">
                {/* Decorative Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute top-3 right-3 md:top-6 md:right-6 w-12 md:w-20 h-12 md:h-20 bg-[#fefefe]/10 rounded-full flex items-center justify-center"
                >
                  <Zap className="w-6 md:w-10 h-6 md:h-10 text-[#fefefe]/40" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-3 left-3 md:bottom-6 md:left-6 w-10 md:w-16 h-10 md:h-16 bg-[#e1d385]/20 rounded-full flex items-center justify-center"
                >
                  <Star className="w-5 md:w-8 h-5 md:h-8 text-[#fefefe]/30" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#fefefe] mb-3 md:mb-4">
                    Ready to Transform Your Vision?
                  </h3>
                  <p className="text-base md:text-xl text-[#fefefe]/90 mb-6 md:mb-8 max-w-7xl mx-auto leading-relaxed">
                    Join us in shaping the future of digital governance. Let's create innovative solutions that make a difference in millions of lives.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                    <Button 
                      size="lg"
                      className="w-full sm:w-auto bg-[#fefefe] text-[#95231c] hover:bg-[#f3f3f3] px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Briefcase className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      Start Your Project
                      <ChevronRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                    </Button>
                    
                    <Button 
                      size="lg"
                      className="w-full sm:w-auto bg-[#fefefe]/20 backdrop-blur-md text-[#fefefe] hover:bg-[#fefefe]/30 border-2 border-[#fefefe]/50 hover:border-[#fefefe]/70 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <BarChart3 className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                      View Portfolio
                      <ArrowUp className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
}