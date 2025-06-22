import { Layout } from 'packages/ui';
import { MapView } from '../components/MapView';

export default function MapPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4 text-[#3299CC]">Barangay Knowledge Map</h2>
        <MapView />
      </div>
    </Layout>
  );
} 