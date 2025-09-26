import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of projects do you handle?",
      answer: "We handle a wide range of projects including residential buildings, commercial complexes, industrial facilities, hospitals, educational institutions, and infrastructure development. Our expertise covers structural engineering, MEP design, fire safety systems, and green building consultancy."
    },
    {
      question: "How long does a typical project consultation take?",
      answer: "Initial consultations typically take 1-2 hours depending on project complexity. For detailed project assessment and proposal development, we usually require 3-5 business days. Complex projects may take longer for thorough analysis and custom solution development."
    },
    {
      question: "Do you provide services outside Maharashtra?",
      answer: "While our primary focus is Maharashtra with offices in Amravati, Pune, Panvel, and Thane, we do undertake select projects in neighboring states. We evaluate each opportunity based on project scope, timeline, and our ability to provide quality service."
    },
    {
      question: "What certifications and licenses do you hold?",
      answer: "We are ISO 9001:2015 certified with licensed structural design consultancy. Our team includes IGBC accredited professionals, LEED certified design professionals, certified fire safety consultants, and members of Institution of Engineers (India)."
    },
    {
      question: "How do you ensure project quality and timelines?",
      answer: "We follow a rigorous quality management system with multiple review stages, regular progress monitoring, and dedicated project managers. All designs undergo thorough checks and we maintain detailed project timelines with milestone tracking."
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees are project-specific and depend on scope, complexity, timeline, and services required. We provide detailed cost estimates after initial consultation. We offer competitive rates with transparent pricing and no hidden charges."
    },
    {
      question: "Do you provide 3D modeling and visualization services?",
      answer: "Yes, we use advanced BIM (Building Information Modeling) software for 3D modeling, visualization, and clash detection. This helps clients better understand the design and identify potential issues before construction begins."
    },
    {
      question: "How do you handle changes during the project?",
      answer: "We understand that changes are sometimes necessary. We have a structured change management process where all modifications are documented, assessed for impact on timeline and cost, and approved before implementation."
    },
    {
      question: "What software and technology do you use?",
      answer: "We use industry-standard software including AutoCAD, Revit, STAAD Pro, ETABS, HAP for HVAC design, and various specialized engineering software. We also employ drone surveys and 3D scanning for existing building assessments."
    },
    {
      question: "Do you provide post-construction support?",
      answer: "Yes, we provide comprehensive post-construction support including site supervision during construction, design clarifications, modification approvals, and maintenance guidelines. We also offer annual maintenance contracts for building systems."
    },
    {
      question: "How do you incorporate sustainability in your designs?",
      answer: "Sustainability is integral to our design philosophy. We focus on energy-efficient systems, sustainable materials, water conservation, waste management, and indoor environmental quality. Many of our projects achieve LEED or IGBC certifications."
    },
    {
      question: "What is your typical project delivery timeline?",
      answer: "Timelines vary by project complexity. Simple residential projects: 2-4 weeks, commercial buildings: 6-12 weeks, complex industrial projects: 3-6 months. We provide detailed project schedules during the proposal phase."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20" style={{ backgroundColor: '#fefefe' }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4" style={{ color: '#95231c' }}>
            Frequently Asked Questions
          </h2>
          <p className="max-w-5xl mx-auto" style={{ color: '#ba7b72' }}>
            Find answers to common questions about our architectural and engineering consultancy services. 
            Can't find what you're looking for? 
           </p>
           <p>Contact us directly.</p>
          <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: '#e1d385' }}></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{ backgroundColor: '#f3f3f3' }}
            >
              {/* Question */}
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-opacity-80 transition-all duration-200"
                onClick={() => toggleFAQ(index)}
                style={{ backgroundColor: 'transparent' }}
              >
                <h3 className="pr-4" style={{ color: '#95231c' }}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" style={{ color: '#95231c' }} />
                  ) : (
                    <ChevronDown className="w-5 h-5" style={{ color: '#95231c' }} />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px mb-4" style={{ backgroundColor: '#e1d385' }}></div>
                  <p className="leading-relaxed" style={{ color: '#111111' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="rounded-2xl p-8" style={{ backgroundColor: '#f3f3f3' }}>
            <h3 className="mb-4" style={{ color: '#95231c' }}>
              Still Have Questions?
            </h3>
            <p className="mb-6" style={{ color: '#ba7b72' }}>
              Our team is here to help. Contact us for personalized assistance with your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact-form"
                className="px-6 py-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
                style={{ backgroundColor: '#95231c', color: '#fefefe' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ba7b72'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#95231c'}
              >
                Send Us a Message
              </a>
              <a 
                href="tel:+919876543210"
                className="px-6 py-3 rounded-lg border-2 transition-all duration-200 hover:transform hover:scale-105"
                style={{ 
                  borderColor: '#95231c', 
                  color: '#95231c',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#95231c';
                  e.target.style.color = '#fefefe';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#95231c';
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}