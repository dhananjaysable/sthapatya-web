import { FoundersSection } from "./components/FoundersSection";
import { OurJourneySection } from "./components/OurJourneySection";
import './styles/globals.css'
import './styles/Founder.css'
export default function Founder() {
    return (
        <div className="size-full">
            <FoundersSection />
            <OurJourneySection />
        </div>
    );
} 
