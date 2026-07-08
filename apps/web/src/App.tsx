import { CorridorNav } from './components/CorridorNav';
import { FocusAreasSection } from './components/FocusAreasSection';
import { Hero } from './components/Hero';
import { ImplementationSection } from './components/ImplementationSection';
import { ImprovementsSection } from './components/ImprovementsSection';
import { PageFooter } from './components/PageFooter';
import { ParksSection } from './components/ParksSection';
import { TodaySection } from './components/TodaySection';
import { VisionSection } from './components/VisionSection';
import { YourStreetSection } from './components/YourStreetSection';

export function App() {
  return (
    <div className="page">
      <CorridorNav />
      <main className="content">
        <Hero />
        <TodaySection />
        <VisionSection />
        <FocusAreasSection />
        <YourStreetSection />
        <ImprovementsSection />
        <ParksSection />
        <ImplementationSection />
        <PageFooter />
      </main>
    </div>
  );
}
