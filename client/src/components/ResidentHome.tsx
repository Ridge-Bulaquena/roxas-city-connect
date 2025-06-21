
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ComplaintSystem } from "@/components/ComplaintSystem";
import { LiveDashboards } from "@/components/LiveDashboards";
import { DigitalParticipation } from "@/components/DigitalParticipation";
import { OpenDataSpotlight } from "@/components/OpenDataSpotlight";
import { TourismFeed } from "@/components/TourismFeed";

interface ResidentHomeProps {
  userType: 'resident' | 'official' | 'visitor';
  hasVoted: boolean;
}

export default function ResidentHome({ userType, hasVoted }: ResidentHomeProps) {
  return (
    <>
      <HeroSection userType={userType} hasVoted={hasVoted} />
      <ServicesGrid />
      <ComplaintSystem />
      <LiveDashboards userType={userType} />
      <DigitalParticipation hasVoted={hasVoted} />
      <OpenDataSpotlight />
      <TourismFeed userType={userType} />
    </>
  );
}
