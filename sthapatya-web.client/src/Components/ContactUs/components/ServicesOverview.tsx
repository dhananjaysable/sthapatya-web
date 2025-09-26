import { Building, Cog, Zap, TreePine, Shield, Ruler } from 'lucide-react';

export function ServicesOverview() {
  const services = [
    {
      icon: Building,
      title: "Structural Engineering",
      description: "Complete structural design and analysis for residential, commercial, and industrial projects.",
      features: ["Earthquake-resistant design", "Foundation engineering", "Steel & concrete structures"]
    },
    {
      icon: Cog,
      title: "MEP Services",
      description: "Mechanical, Electrical, and Plumbing design with cutting-edge technology integration.",
      features: ["HVAC systems", "Electrical distribution", "Plumbing & drainage"]
    },
    {
      icon: Zap,
      title: "Fire Safety",
      description: "Comprehensive fire safety consulting and system design for maximum protection.",
      features: ["Fire detection systems", "Emergency evacuation", "Safety compliance"]
    },
    {
      icon: TreePine,
      title: "Green Building",
      description: "Sustainable design solutions for LEED and IGBC certified green buildings.",
      features: ["Energy efficiency", "Sustainable materials", "Environmental compliance"]
    },
    {
      icon: Shield,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality control.",
      features: ["Timeline management", "Quality assurance", "Cost optimization"]
    },
    {
      icon: Ruler,
      title: "Urban Planning",
      description: "Strategic urban planning and infrastructure development solutions.",
      features: ["Master planning", "Infrastructure design", "Smart city solutions"]
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#95231c' }}>Our Expertise</h2>
          <p className="max-w-3xl mx-auto" style={{ color: '#ba7b72' }}>
            From conceptual design to project completion, we offer comprehensive architectural and 
            engineering consultancy services across multiple disciplines.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#fefefe' }}
            >
              {/* Service Icon */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#f3f3f3' }}
              >
                <service.icon className="w-8 h-8" style={{ color: '#95231c' }} />
              </div>

              {/* Service Content */}
              <h3 className="mb-4 group-hover:text-opacity-80 transition-all duration-300" style={{ color: '#95231c' }}>
                {service.title}
              </h3>
              
              <p className="mb-6 text-sm leading-relaxed" style={{ color: '#dddcdb' }}>
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#e1d385' }}
                    ></div>
                    <span style={{ color: '#ba7b72' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-6 border-t" style={{ borderColor: '#f3f3f3' }}>
                <a 
                  href="#contact-form"
                  className="text-sm inline-flex items-center gap-2 transition-colors duration-200 group-hover:gap-3"
                  style={{ color: '#95231c' }}
                  onMouseEnter={(e) => e.target.style.color = '#ba7b72'}
                  onMouseLeave={(e) => e.target.style.color = '#95231c'}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#fefefe' }}>
            <h3 className="mb-4" style={{ color: '#95231c' }}>
              Need a Custom Solution?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#ba7b72' }}>
              Every project is unique. Our team of experienced engineers and architects 
              work closely with you to develop tailored solutions that meet your specific requirements.
            </p>
            <a 
              href="#contact-form"
              className="inline-block px-8 py-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
              style={{ backgroundColor: '#95231c', color: '#fefefe' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ba7b72'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#95231c'}
            >
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}