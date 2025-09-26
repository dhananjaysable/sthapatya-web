import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import exampleImage from "../assets/40484b9ba89dff64cfe4493fbc6790f5ae60c198.png";
import { ContactModal } from "./ContactModal";

export function HeroSection() {
  const [isContactModalOpen, setIsContactModalOpen] =
    useState(false);

  return (
    <>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <section className="relative py-20">
        <div>
            <div className="max-w-[90rem] mx-auto px-8 text-center">
            {/* Logo */}
            <div className="w-24 h-24 mx-auto mb-8">
              <img
                src={exampleImage}
                alt="Sthapatya Consultants Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Main Heading */}
            <div className="mb-8 max-w-6xl mx-auto">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight cursor-pointer transition-all duration-500 hover:transform hover:scale-105 hover:-translate-y-2 mb-4"
                style={{
                  color: "#95231c",
                  textShadow:
                    "0 4px 8px rgba(149, 35, 28, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ba7b72";
                  e.target.style.textShadow =
                    "0 12px 24px rgba(149, 35, 28, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#95231c";
                  e.target.style.textShadow =
                    "0 4px 8px rgba(149, 35, 28, 0.1)";
                }}
              >
                Connect with{" "}
                <span
                  className="inline-block transition-all duration-300 hover:animate-pulse"
                  style={{ color: "#e1d385" }}
                >
                  Sthapatya
                </span>{" "}
              </h1>

              {/* Animated underline */}
              <div
                className="w-32 h-2 mx-auto rounded-full transition-all duration-500 hover:w-48 hover:h-3"
                style={{ backgroundColor: "#e1d385" }}
              ></div>
            </div>

            {/* Subheading */}
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{ color: "#ba7b72" }}
            >
              Professional architectural and engineering
              consultancy services across Maharashtra. We're
              here to help bring your vision to life with
              expertise spanning decades.
            </p>

            {/* Quick Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[90rem] mx-auto mb-12">
              <div
                className="flex flex-col items-center p-6 rounded-xl"
                style={{ backgroundColor: "#f3f3f3" }}
              >
                <MapPin
                  className="w-8 h-8 mb-3"
                  style={{ color: "#95231c" }}
                />
                <h3
                  className="mb-2"
                  style={{ color: "#95231c" }}
                >
                  4 Offices
                </h3>
                <p
                  className="text-sm text-center"
                  style={{ color: "#dddcdb" }}
                >
                  Across Maharashtra
                </p>
              </div>

              <div
                className="flex flex-col items-center p-6 rounded-xl"
                style={{ backgroundColor: "#f3f3f3" }}
              >
                <Phone
                  className="w-8 h-8 mb-3"
                  style={{ color: "#95231c" }}
                />
                <h3
                  className="mb-2"
                  style={{ color: "#95231c" }}
                >
                  24/7 Support
                </h3>
                <p
                  className="text-sm text-center"
                  style={{ color: "#dddcdb" }}
                >
                  Always available
                </p>
              </div>

              <div
                className="flex flex-col items-center p-6 rounded-xl"
                style={{ backgroundColor: "#f3f3f3" }}
              >
                <Mail
                  className="w-8 h-8 mb-3"
                  style={{ color: "#95231c" }}
                />
                <h3
                  className="mb-2"
                  style={{ color: "#95231c" }}
                >
                  Quick Response
                </h3>
                <p
                  className="text-sm text-center"
                  style={{ color: "#dddcdb" }}
                >
                  Within 24 hours
                </p>
              </div>

              <div
                className="flex flex-col items-center p-6 rounded-xl"
                style={{ backgroundColor: "#f3f3f3" }}
              >
                <Clock
                  className="w-8 h-8 mb-3"
                  style={{ color: "#95231c" }}
                />
                <h3
                  className="mb-2"
                  style={{ color: "#95231c" }}
                >
                  Mon-Sat
                </h3>
                <p
                  className="text-sm text-center"
                  style={{ color: "#dddcdb" }}
                >
                  10 AM - 6 PM IST
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-3 rounded-lg transition-all duration-200 hover:transform hover:scale-105"
                style={{
                  backgroundColor: "#95231c",
                  color: "#fefefe",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#ba7b72")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#95231c")
                }
              >
                Start Your Project
              </button>
              <a
                href="#office-locations"
                className="px-8 py-3 rounded-lg border-2 transition-all duration-200 hover:transform hover:scale-105"
                style={{
                  borderColor: "#95231c",
                  color: "#95231c",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#95231c";
                  e.target.style.color = "#fefefe";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor =
                    "transparent";
                  e.target.style.color = "#95231c";
                }}
              >
                View Locations
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}