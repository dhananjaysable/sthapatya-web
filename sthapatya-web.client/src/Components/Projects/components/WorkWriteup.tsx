import { CheckCircle, Target, Users, Zap, Shield, Globe, BarChart3, Cpu } from 'lucide-react';

export function WorkWriteup() {
  return (
    <div className="bg-white py-14 px-6">
          <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#95231c] mb-6">
            Transforming Municipal Governance Through Technology
          </h2>
                  <p className="text-xl text-[#ba7b72] max-w-[90rem] mx-auto leading-relaxed">
            At Sthapatya Consultants, we bridge the gap between traditional municipal operations and modern digital governance, 
            creating sustainable solutions that enhance transparency, efficiency, and citizen satisfaction.
          </p>
        </div>

        <div className="space-y-12">
          {/* Our Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-[#95231c]" />
                <h3 className="text-2xl font-bold text-[#95231c]">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-1">
                We are dedicated to revolutionizing municipal governance across India by implementing cutting-edge technology solutions 
                that streamline operations, increase revenue collection efficiency, and foster greater transparency between local 
                governments and citizens. Our mission extends beyond simple digitization—we create comprehensive ecosystems that 
                transform how municipal corporations interact with their communities.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through our work with over 15 municipal corporations across Maharashtra and neighboring states, we have consistently 
                demonstrated that thoughtful technology implementation can dramatically improve both operational efficiency and citizen 
                satisfaction while generating substantial additional revenue for local development projects.
              </p>
            </div>
            <div className="bg-[#f3f3f3] p-8 rounded-xl mt-4">
              <h4 className="font-bold text-[#95231c] mb-4">Impact by Numbers</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95231c]">₹450+ Cr</div>
                  <div className="text-sm text-gray-600">Additional Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95231c]">2M+</div>
                  <div className="text-sm text-gray-600">Citizens Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95231c]">75%</div>
                  <div className="text-sm text-gray-600">Avg. Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#95231c]">92%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-8 h-8 text-[#95231c]" />
              <h3 className="text-2xl font-bold text-[#95231c]">Our Core Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#e1d385] rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#95231c]" />
                </div>
                <h4 className="font-bold text-[#95231c] mb-3">Property Tax Management</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced GIS-based property assessment systems with automated valuation, transparent calculations, 
                  and integrated payment gateways that typically increase collection rates by 30-50%.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#e1d385] rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-[#95231c]" />
                </div>
                <h4 className="font-bold text-[#95231c] mb-3">Citizen Service Portals</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Comprehensive digital platforms enabling online applications for trade licenses, building permissions, 
                  birth/death certificates, and other municipal services with real-time tracking capabilities.
                </p>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#e1d385] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#95231c]" />
                </div>
                <h4 className="font-bold text-[#95231c] mb-3">Smart City Solutions</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Integrated municipal management platforms covering utilities, waste management, street lighting, 
                  and infrastructure monitoring with IoT integration and predictive analytics.
                </p>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-[#95231c]" />
              <h3 className="text-2xl font-bold text-[#95231c]">Our Proven Methodology</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our success stems from a carefully developed methodology that combines deep understanding of municipal operations 
              with cutting-edge technology implementation. We begin every project with comprehensive stakeholder consultations, 
              involving municipal officials, department heads, and citizen representatives to ensure our solutions address real-world needs.
            </p>
            
            <div className="bg-[#f3f3f3] p-8 rounded-xl mb-8">
              <h4 className="font-bold text-[#95231c] mb-6">Our Four-Phase Approach</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#95231c] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold text-[#95231c] mb-2">Assessment & Analysis</h5>
                    <p className="text-gray-600 text-sm">
                      Comprehensive evaluation of existing systems, processes, and pain points through stakeholder interviews and data analysis.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#95231c] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold text-[#95231c] mb-2">Solution Design</h5>
                    <p className="text-gray-600 text-sm">
                      Custom system architecture and user interface design tailored to specific municipal requirements and citizen needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#95231c] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold text-[#95231c] mb-2">Implementation</h5>
                    <p className="text-gray-600 text-sm">
                      Phased deployment with extensive testing, staff training, and continuous monitoring to ensure smooth transition.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#95231c] text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold text-[#95231c] mb-2">Support & Optimization</h5>
                    <p className="text-gray-600 text-sm">
                      Ongoing technical support, performance monitoring, and system optimization based on usage patterns and feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              This methodology has been refined through years of experience and has consistently delivered measurable improvements 
              in municipal operations. We pride ourselves on not just implementing technology, but ensuring its successful adoption 
              and long-term sustainability within the unique context of each municipal corporation we serve.
            </p>
          </div>

          {/* Technology Excellence Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle className="w-8 h-8 text-[#95231c]" />
              <h3 className="text-2xl font-bold text-[#95231c]">Technology Excellence & Innovation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our technical expertise spans the latest in web technologies, mobile applications, geographic information systems (GIS), 
              artificial intelligence, and cloud computing. We leverage modern frameworks and platforms to build scalable, secure, 
              and user-friendly solutions that can handle the complex requirements of municipal operations while remaining accessible 
              to citizens across all demographic segments.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-bold text-[#95231c] mb-4">Advanced GIS Integration</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our GIS-based property management systems represent a paradigm shift from traditional paper-based assessments. 
                  By integrating high-resolution satellite imagery, cadastral mapping, and machine learning algorithms, we create 
                  dynamic property databases that automatically detect changes, calculate fair assessments, and provide transparent 
                  justifications for all valuations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This technology has proven particularly effective in identifying previously unregistered properties and ensuring 
                  equitable taxation across all property types, contributing significantly to increased revenue collection rates.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#95231c] mb-4">AI-Powered Analytics</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We incorporate artificial intelligence and machine learning capabilities to provide predictive analytics, 
                  automated decision support, and intelligent process optimization. Our systems can predict revenue trends, 
                  identify potential compliance issues, and suggest operational improvements based on historical data patterns.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These capabilities enable municipal administrators to make data-driven decisions and proactively address 
                  challenges before they impact service delivery or revenue collection.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Security and data privacy are paramount in all our implementations. We employ enterprise-grade security measures, 
              including end-to-end encryption, multi-factor authentication, and role-based access controls to protect sensitive 
              municipal and citizen data. Our systems are designed to comply with all relevant data protection regulations while 
              maintaining the flexibility needed for effective municipal governance.
            </p>
          </div>

          {/* Citizen-Centric Approach */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-[#95231c]" />
              <h3 className="text-2xl font-bold text-[#95231c]">Citizen-Centric Digital Transformation</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Central to our approach is the recognition that effective municipal governance ultimately serves the citizens. 
              Our digital platforms are designed with extensive user research and testing to ensure they are accessible, 
              intuitive, and valuable to people from all backgrounds and technical skill levels. We implement multi-language 
              support, mobile-responsive designs, and offline capabilities to ensure no citizen is excluded from digital governance.
            </p>
            
            <div className="bg-[#e1d385]/20 border-l-4 border-[#e1d385] p-6 rounded-r-xl mb-6">
              <h4 className="font-bold text-[#95231c] mb-3">Real Impact Stories</h4>
              <p className="text-gray-700 leading-relaxed mb-3">
                In Amravati, our digital transformation enabled a 78-year-old citizen to apply for and receive a property tax 
                assessment correction entirely online, something that previously required multiple visits to municipal offices. 
                In Pune, our AI-powered assessment system identified and corrected over 15,000 property records that had been 
                systematically undervalued, resulting in fair taxation and a ₹64 crore increase in annual revenue.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These stories exemplify our commitment to creating technology that truly serves both administrators and citizens, 
                improving lives while strengthening municipal capabilities.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              We measure success not just in technical metrics, but in citizen satisfaction scores, reduced service delivery times, 
              and increased transparency indices. Our post-implementation surveys consistently show satisfaction rates above 90%, 
              with citizens particularly appreciating the convenience, transparency, and responsiveness of digitized municipal services.
            </p>
          </div>

          {/* Future Vision */}
          <div className="bg-[#95231c] text-white p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Looking Forward: The Future of Municipal Governance</h3>
            <p className="leading-relaxed mb-6">
              As we continue to expand our work across India, we envision a future where every municipal corporation operates 
              with the efficiency, transparency, and citizen-centricity that modern technology enables. Our ongoing research 
              and development efforts focus on emerging technologies like blockchain for secure record-keeping, IoT integration 
              for smart city infrastructure, and advanced analytics for predictive governance.
            </p>
            <p className="leading-relaxed">
              We are committed to staying at the forefront of municipal technology innovation, ensuring that the communities 
              we serve always have access to the most effective and efficient governance solutions available. Through continued 
              partnership with forward-thinking municipal leaders, we are building the foundation for India's digital governance future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}