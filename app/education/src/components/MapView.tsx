import { centers } from '../data/centers';

export function MapView() {
  return (
    <div className="bg-white rounded-xl shadow p-6 border border-[#CCCCFF]">
      <div className="mb-4 text-lg font-semibold text-[#3299CC]">Learning Sites</div>
      <ul>
        {centers.map((c) => (
          <li key={c.name} className="mb-2 p-2 rounded hover:bg-[#CCCCFF]/30 transition">
            <div className="font-bold">{c.name}</div>
            <div className="text-sm text-gray-600">{c.barangay} – {c.programs.join(', ')}</div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xs text-gray-400">(Map pins and interactivity coming soon!)</div>
    </div>
  );
} 