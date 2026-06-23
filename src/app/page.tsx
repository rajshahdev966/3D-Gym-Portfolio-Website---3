import { Navbar } from '../components/shared/Navbar';
import { Hero } from '../components/sections/Hero';
import { MetricsGrid } from '../components/sections/MetricsGrid';
import { FacilityExplorer } from '../components/sections/FacilityExplorer';
import { CoachSelector } from '../components/sections/CoachSelector';
import { TransformationSimulator } from '../components/sections/TransformationSimulator';
import { AchievementWall } from '../components/sections/AchievementWall';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { CommitmentCTA } from '../components/sections/CommitmentCTA';
import { Footer } from '../components/shared/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MetricsGrid />
      <FacilityExplorer />
      <CoachSelector />
      <TransformationSimulator />
      <AchievementWall />
      <MembershipPlans />
      <CommitmentCTA />
      <Footer />
    </main>
  );
}
