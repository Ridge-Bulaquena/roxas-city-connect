import { Layout } from 'packages/ui';
import { ScholarshipStep } from '../components/ScholarshipStep';
import { useAI } from '../hooks/useAI';

export default function WizardPage() {
  const { messages, sendMessage } = useAI();
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4 text-[#3299CC]">Scholarship Wizard</h2>
        <ScholarshipStep onSend={sendMessage} messages={messages} />
      </div>
    </Layout>
  );
} 