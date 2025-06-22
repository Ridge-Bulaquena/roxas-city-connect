import { Layout } from 'packages/ui';
import { BrainDashboard } from '../components/BrainDashboard';

export default function BrainPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4 text-[#3299CC]">Brain Trainer</h2>
        <BrainDashboard />
      </div>
    </Layout>
  );
} 