import { useState } from 'react';
import { RunningStats } from './RunningStats';

// Use the existing MunicipalServices but with improved hero heading visibility
const HomeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

// Enhanced hero section with improved heading visibility
function ImprovedHeroSection() {
  return (
    <section className="relative bg-gradient-rainbow animate-gradient-shift text-primary-foreground py-20 overflow-hidden">
      {/* Reduced background opacity for better text visibility */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-36 h-36 bg-gradient-to-br from-accent/15 to-warning/10 rounded-full blur-xl animate-floating-orb"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-secondary/20 to-chart-4/15 rounded-full blur-lg animate-floating-orb" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-warning/15 to-accent/10 rounded-full blur-md animate-floating-orb" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 right-1/3 w-24 h-24 bg-gradient-to-br from-chart-2/15 to-chart-5/10 rounded-full blur-lg animate-floating-orb" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-xl hover-glow animate-bounce-in neon-border">
            <HomeIcon />
          </div>
          
          {/* Enhanced heading with backdrop for maximum visibility */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl transform scale-110"></div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold municipal-text animate-title-reveal max-w-7xl mx-auto leading-[1.1] relative z-10 py-8 px-6" 
                style={{
                  textShadow: '0 4px 8px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.7), 0 8px 16px rgba(0,0,0,0.3)',
                  color: '#fefefe'
                }}>
              <span className="relative inline-block">
                Municipal Services
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-text-shimmer pointer-events-none rounded-lg"></div>
              </span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-primary-foreground/95 leading-relaxed mb-8 animate-slide-up glass-effect p-6 rounded-xl backdrop-blur-sm">
            Comprehensive government services designed to serve our community with efficiency, 
            transparency, and unwavering commitment to citizen welfare and public service excellence.
          </p>
          
          <RunningStats stats={[
            { value: 45000, label: "Citizens Served", suffix: "+" },
            { value: 97, label: "Satisfaction Rate", suffix: "%" },
            { value: 24, label: "Online Services", suffix: "/7" },
            { value: 350, label: "Daily Requests", suffix: "+" }
          ]} />
        </div>
      </div>
    </section>
  );
}

export { ImprovedHeroSection };