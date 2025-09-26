import { Building2, Users, Trophy, MapPin } from 'lucide-react';

export function CompanyStats() {
  const stats = [
    {
      icon: Building2,
      number: "500+",
      label: "Projects Completed",
      description: "Across residential, commercial, and industrial sectors"
    },
    {
      icon: Users,
      number: "120+",
      label: "Expert Engineers",
      description: "Qualified professionals with decades of experience"
    },
    {
      icon: Trophy,
      number: "29",
      label: "Years of Excellence",
      description: "Trusted consultancy services since 1995"
    },
    {
      icon: MapPin,
      number: "4",
      label: "Office Locations",
      description: "Strategic presence across Maharashtra"
    }
  ];

  const achievements = [
    "ISO 9001:2015 Certified Quality Management",
    "IGBC Accredited Green Building Professionals",
    "Member of Institution of Engineers (India)",
    "Certified Fire Safety Consultants",
    "Licensed Structural Design Consultancy",
    "LEED Certified Design Professionals"
  ];

  return (
    <section className="py-20" style={{ backgroundColor: '#95231c' }}>
          <div className="max-w-[90rem] mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#fefefe' }}>
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-5xl mx-auto" style={{ color: '#d8bea5' }}>
            Three decades of excellence in architectural and engineering consultancy, 
            delivering innovative solutions that stand the test of time.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#ba7b72' }}
              >
                <stat.icon className="w-10 h-10" style={{ color: '#fefefe' }} />
              </div>
              
              <div className="mb-2" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#e1d385' }}>
                {stat.number}
              </div>
              
              <h3 className="mb-3" style={{ color: '#fefefe' }}>
                {stat.label}
              </h3>
              
              <p className="text-sm leading-relaxed" style={{ color: '#d8bea5' }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Achievement List */}
          <div>
            <h3 className="mb-6" style={{ color: '#fefefe' }}>
              Certifications & Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#e1d385' }}
                  ></div>
                  <p style={{ color: '#d8bea5' }}>{achievement}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Company Highlights */}
          <div className="space-y-6">
            <div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <h4 className="mb-3" style={{ color: '#e1d385' }}>
                Our Mission
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#d8bea5' }}>
                To provide innovative, sustainable, and cost-effective engineering solutions 
                that exceed client expectations while contributing to the built environment's 
                safety, functionality, and aesthetic appeal.
              </p>
            </div>

            <div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <h4 className="mb-3" style={{ color: '#e1d385' }}>
                Quality Commitment
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#d8bea5' }}>
                Every project undergoes rigorous quality checks and adheres to international 
                standards. Our commitment to excellence has earned us the trust of over 
                500 satisfied clients across Maharashtra.
              </p>
            </div>

            <div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            >
              <h4 className="mb-3" style={{ color: '#e1d385' }}>
                Innovation Focus
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: '#d8bea5' }}>
                We embrace cutting-edge technology and sustainable practices, incorporating 
                BIM modeling, green building principles, and smart engineering solutions 
                in all our projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}