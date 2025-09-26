import { StickySidebar } from "./components/Homesticky-sidebar"
import { HomeSection } from './components/home-section';
import { AboutSection } from './components/Homeabout';
import { ServicesSection } from './components/Homeservices-section';
import { OurProjectsSection } from './components/Homeprojects-section';
import { OurJourneySection } from './components/Homejourney-section';
import { FoundersSection } from './components/Homefounders';
import { OurClientsSection } from './components/Homeclients-section';
import { ContactUsSection } from './components/Homecontact-us';

//import "./styles/globals.css";
import "./styles/Home.css";
import Project from "./components/Project/Project"
import Founder from "./components/Founder/Founder"
import About from "./components/About/About"
export default function Home() {
    return (
        <div className="w-full">
            {/* Sticky Sidebar Navigation */}
            <StickySidebar />

            {/* Main Sections */}
            <main>
                <div id="home">
                    <HomeSection />
                </div>

                <div id="about">
                    {/*<AboutSection />*/}
                    <About/>
                </div>

                <div id="services">
                    <ServicesSection />
                </div>
                {/*our project section*/}
                <div id="projects">
                    <Project/>
                </div>

                {/*<div id="projects">*/}
                {/*    <OurProjectsSection/>*/}
                {/*</div>*/}

                <div id="founders">
                    <Founder/>
                </div>
                {/*<div id="journey">*/}
                {/*    <OurJourneySection />*/}
                {/*</div>*/}

                {/*<div id="founders">*/}
                {/*    <FoundersSection />*/}
                {/*</div>*/}
                {/*our client section*/}
                {/*<div id="clients">*/}
                {/*    <OurClientsSection />*/}
                {/*</div>*/}

                <div id="contact">
                    <ContactUsSection />
                </div>
            </main>
        </div>
    );
}