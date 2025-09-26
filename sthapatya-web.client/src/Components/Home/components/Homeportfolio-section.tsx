import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1726138388546-30955e45aaec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwc29sdXRpb258ZW58MXx8fHwxNzU3NzU3NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Modern e-commerce solution with advanced analytics and seamless user experience"
  },
  {
    title: "Business Analytics Dashboard",
    category: "Data Analytics",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1NzczNzMxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Real-time business intelligence platform for data-driven decision making"
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc1Nzc1NzQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Secure and intuitive mobile banking solution with advanced security features"
  },
  {
    title: "Supply Chain Management",
    category: "Enterprise Software",
    image: "https://images.unsplash.com/photo-1596649300028-340ad0ec6146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcG9ydGZvbGlvJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU3NzU3NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Comprehensive supply chain optimization platform for manufacturing industries"
  },
  {
    title: "Healthcare Management System",
    category: "Healthcare Technology",
    image: "https://images.unsplash.com/photo-1695891583421-3cbbf1c2e3bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NTc3NDIzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Digital health platform connecting patients, doctors, and healthcare providers"
  },
  {
    title: "Educational Portal",
    category: "EdTech Solutions",
    image: "https://images.unsplash.com/photo-1603202662706-62ead3176b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzU3NzAwNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Interactive learning management system with AI-powered personalization"
  }
];

export function PortfolioSection() {
  return (
    <section className="h-screen flex items-center py-20" style={{ backgroundColor: '#dddcdb' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl lg:text-6xl xl:text-7xl mb-6"
            style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
          >
            Featured Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#e1d385' }}></div>
          <p 
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Discover our latest innovations and successful implementations across various industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-h-[60vh] overflow-y-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div 
                  className="p-6 group-hover:bg-opacity-95 transition-all duration-300"
                  style={{ backgroundColor: '#fefefe' }}
                >
                  <div 
                    className="text-sm mb-2 inline-block px-3 py-1 rounded-full"
                    style={{ backgroundColor: '#e1d385', color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {project.category}
                  </div>
                  
                  <h3 
                    className="text-xl xl:text-2xl mb-3 group-hover:text-opacity-90"
                    style={{ color: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {project.title}
                  </h3>
                  
                  <p 
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div 
                    className="px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ backgroundColor: '#95231c', fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <span className="text-white">View Project</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}