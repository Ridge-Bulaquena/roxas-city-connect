import { Layout } from 'packages/ui';
import { EducationForm } from '../components/EducationForm';

export default function ApplyPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4 text-[#3299CC]">E-Learning Application</h2>
        <EducationForm />
      </div>
    </Layout>
  );
} 