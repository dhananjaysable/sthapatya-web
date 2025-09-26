import { Target, Award, Lightbulb } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f8f8f8' }}>
          <div className="max-w-[90rem] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#95231c' }}>
            About Sthapatya Consultants
          </h2>
          <p className="max-w-4xl mx-auto" style={{ color: '#ba7b72' }}>
            Leading the future of architectural and engineering excellence with innovation, 
            quality, and sustainable solutions.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Our Mission */}
          <div className="rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#95231c' }}>
                <Target className="w-6 h-6" style={{ color: '#fefefe' }} />
              </div>
              <h3 style={{ color: '#95231c' }}>Our Mission</h3>
            </div>
            <p className="leading-relaxed" style={{ color: '#111111' }}>
              To provide innovative, sustainable, and cost-effective engineering solutions that exceed client expectations while contributing to the built environment's safety, functionality, and aesthetic appeal.
            </p>
          </div>

          {/* Quality Commitment */}
          <div className="rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#95231c' }}>
                <Award className="w-6 h-6" style={{ color: '#fefefe' }} />
              </div>
              <h3 style={{ color: '#95231c' }}>Quality Commitment</h3>
            </div>
            <p className="leading-relaxed" style={{ color: '#111111' }}>
              Every project undergoes rigorous quality checks and adheres to international standards. Our commitment to excellence has earned us the trust of over 500 satisfied clients across Maharashtra.
            </p>
          </div>

          {/* Innovation Focus */}
          <div className="rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#f3f3f3' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: '#95231c' }}>
                <Lightbulb className="w-6 h-6" style={{ color: '#fefefe' }} />
              </div>
              <h3 style={{ color: '#95231c' }}>Innovation Focus</h3>
            </div>
            <p className="leading-relaxed" style={{ color: '#111111' }}>
              We embrace cutting-edge technology and sustainable practices, incorporating BIM modeling, green building principles, and smart engineering solutions in all our projects.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#95231c' }}>
            <h3 className="mb-4" style={{ color: '#fefefe' }}>
              Ready to Transform Your Vision?
            </h3>
            <p className="mb-6 max-w-4xl mx-auto" style={{ color: '#d8bea5' }}>
              Partner with Maharashtra's leading architectural and engineering consultancy. 
              Let's create something extraordinary together.
            </p>
            <a 
              href="#contact-form"
              className="inline-block px-8 py-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
              style={{ backgroundColor: '#e1d385', color: '#95231c' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0e8a0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#e1d385'}
            >
              Start Your Project Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}