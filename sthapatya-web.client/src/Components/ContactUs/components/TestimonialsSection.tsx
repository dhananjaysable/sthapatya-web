import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Project Director",
      company: "Sunrise Builders",
      rating: 5,
      text: "Sthapatya Consultants delivered exceptional structural engineering services for our 40-story residential tower. Their attention to detail and innovative solutions helped us complete the project ahead of schedule.",
      project: "Sunrise Heights, Pune"
    },
    {
      name: "Kavya Patel",
      role: "Facility Manager",
      company: "TechPark Industries",
      rating: 5,
      text: "The MEP design and fire safety systems implemented by their team are outstanding. We've had zero compliance issues and the energy efficiency has exceeded our expectations by 25%.",
      project: "TechPark Complex, Thane"
    },
    {
      name: "Dr. Rajesh Sharma",
      role: "Hospital Administrator",
      company: "City General Hospital",
      rating: 5,
      text: "Their expertise in healthcare facility design was evident throughout our hospital expansion project. The team understood our critical requirements and delivered a safe, efficient, and patient-friendly environment.",
      project: "Hospital Expansion, Amravati"
    },
    {
      name: "Priya Joshi",
      role: "Managing Director",
      company: "Green Spaces Ltd",
      rating: 5,
      text: "Working with Sthapatya on our LEED Platinum certified office building was a great experience. Their green building expertise and sustainable design approach helped us achieve our environmental goals.",
      project: "Eco Office Tower, Panvel"
    },
    {
      name: "Vikram Singh",
      role: "Infrastructure Head",
      company: "Maharashtra Housing Board",
      rating: 5,
      text: "Their urban planning and infrastructure design capabilities are remarkable. The township project they designed has become a model for sustainable urban development in the region.",
      project: "New Town Development, Nashik"
    },
    {
      name: "Anita Desai",
      role: "Resort Owner",
      company: "Serenity Resorts",
      rating: 5,
      text: "The architectural and structural design for our luxury resort perfectly balanced aesthetics with functionality. Their team's creativity and technical expertise created a truly unique destination.",
      project: "Serenity Resort, Lonavala"
    }
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#fefefe' }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#95231c' }}>
            What Our Clients Say
          </h2>
          <p className="max-w-3xl mx-auto" style={{ color: '#ba7b72' }}>
            Don't just take our word for it. Here's what industry leaders and satisfied clients 
            have to say about our engineering and architectural consultancy services.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative rounded-2xl p-8 group hover:transform hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#f3f3f3' }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#e1d385' }}
                >
                  <Quote className="w-4 h-4" style={{ color: '#95231c' }} />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-4 h-4 fill-current" 
                    style={{ color: '#e1d385' }} 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 text-sm leading-relaxed" style={{ color: '#dddcdb' }}>
                "{testimonial.text}"
              </p>

              {/* Project Info */}
              <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: '#fefefe' }}>
                <p className="text-xs" style={{ color: '#ba7b72' }}>
                  Project: <span style={{ color: '#95231c' }}>{testimonial.project}</span>
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t pt-4" style={{ borderColor: '#e1d385' }}>
                <h4 className="mb-1" style={{ color: '#95231c' }}>
                  {testimonial.name}
                </h4>
                <p className="text-sm" style={{ color: '#ba7b72' }}>
                  {testimonial.role}
                </p>
                <p className="text-xs" style={{ color: '#dddcdb' }}>
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>



        {/* CTA */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#f3f3f3' }}>
            <h3 className="mb-4" style={{ color: '#95231c' }}>
              Ready to Join Our Success Stories?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#ba7b72' }}>
              Let's discuss how our expertise can help bring your vision to life. 
              Contact us today for a consultation and project estimate.
            </p>
            <a 
              href="#contact-form"
              className="inline-block px-8 py-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
              style={{ backgroundColor: '#95231c', color: '#fefefe' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ba7b72'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#95231c'}
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}