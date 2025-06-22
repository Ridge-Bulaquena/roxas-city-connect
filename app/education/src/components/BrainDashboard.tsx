import { GameCard } from './GameCard';
import { ScoreTracker } from './ScoreTracker';

export function BrainDashboard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-[#CCCCFF]">
      <div className="mb-4 text-lg font-semibold text-[#3299CC]">Brain Trainer</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <GameCard title="Memory Match" desc="Test your memory!" />
        <GameCard title="Civic Quiz" desc="Civic knowledge challenge." />
      </div>
      <ScoreTracker />
    </div>
  );
} 