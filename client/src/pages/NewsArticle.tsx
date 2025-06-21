import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { usePersonalization } from "@/hooks/usePersonalization";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const newsArticles = {
  "budget-2024": {
    title: "2024 City Budget Approved - ₱2.1B for Infrastructure & Social Programs",
    date: "December 15, 2024",
    content: `The Roxas City Council has unanimously approved the 2024 annual budget of ₱2.1 billion, marking a 15% increase from the previous year. The budget prioritizes infrastructure development, social welfare programs, and digital transformation initiatives.

Key allocations include:
• ₱800M for infrastructure projects including road improvements and public facilities
• ₱500M for social services including health, education, and welfare programs  
• ₱300M for government operations and personnel services
• ₱200M for digital transformation and smart city initiatives
• ₱300M for contingency and development funds

Mayor [Name] emphasized that this budget reflects the city's commitment to sustainable development and improved quality of life for all residents.`,
    image: "/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png"
  },
  "infrastructure-updates": {
    title: "Major Infrastructure Projects Update - Roads, Bridges & Public Facilities",
    date: "December 12, 2024", 
    content: `Several major infrastructure projects across Roxas City are progressing ahead of schedule, bringing improved connectivity and modern facilities to residents.

Current project status:
• Central Bridge Rehabilitation - 85% complete, expected completion February 2024
• Downtown Road Widening Project - 70% complete, improving traffic flow
• New Public Market Complex - Construction beginning January 2024
• Waterfront Development Phase 2 - Environmental assessments completed
• Smart Traffic Light System - Installation ongoing in 5 key intersections

These projects represent a total investment of ₱450 million and will significantly enhance the city's infrastructure capacity and economic opportunities.`,
    image: "/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png"
  },
  "community-programs": {
    title: "New Community Programs Launch - Supporting Local Families & Entrepreneurs",
    date: "December 10, 2024",
    content: `Roxas City launches comprehensive community support programs aimed at strengthening local families and fostering entrepreneurship throughout the city.

New programs include:
• Family Development Program - Financial literacy and skills training for 500 families
• Young Entrepreneur Incubator - Business mentorship and micro-loans for youth startups
• Senior Citizens Wellness Initiative - Health services and recreational activities
• Skills Training Center - Technical and vocational courses for job seekers
• Community Garden Project - Sustainable agriculture training in 10 barangays

Registration is now open at all barangay offices and the City Hall community services desk. These programs are part of the city's commitment to inclusive growth and community empowerment.`,
    image: "/lovable-uploads/e8142eed-99fa-4dc3-acd3-0d372b04ae75.png"
  }
};

export default function NewsArticlePage() {
  const { userType, setUserType } = usePersonalization();
  const { slug } = useParams<{ slug: string }>();
  
  const article = slug ? newsArticles[slug as keyof typeof newsArticles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navigation userType={userType} setUserType={setUserType} />
        <main className="flex-1 pt-24 md:pt-16 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Article Not Found</h1>
            <p className="text-xl text-slate-600 mb-8">The news article you're looking for doesn't exist.</p>
            <a href="/" className="text-blue-600 hover:text-blue-800 underline">Return to Homepage</a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation userType={userType} setUserType={setUserType} />
      <main className="flex-1 pt-24 md:pt-16">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <header className="mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {article.title}
              </motion.h1>
              <motion.p 
                className="text-lg text-slate-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Published on {article.date}
              </motion.p>
            </header>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>

            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div 
              className="mt-12 pt-8 border-t border-slate-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a 
                href="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Back to Homepage
              </a>
            </motion.div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
}