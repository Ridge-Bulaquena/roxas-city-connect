import { motion } from "framer-motion";
import ApplicationForm from "@/components/application-form";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users } from "lucide-react";

export default function Apply() {
  const programs = [
    {
      title: "Digital Literacy Program",
      description: "Learn essential computer skills, internet navigation, and digital communication tools.",
      category: "Technology",
      duration: "12 weeks",
      startDate: "March 15",
      categoryColor: "bg-blue-500",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "Adult Learning Program", 
      description: "Complete your high school education through our flexible adult learning curriculum.",
      category: "Academic",
      duration: "8 weeks",
      startDate: "April 1",
      categoryColor: "bg-green-500",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
    {
      title: "Vocational Training",
      description: "Develop practical skills in various trades including carpentry, electronics, and more.",
      category: "Skills",
      duration: "6 weeks", 
      startDate: "March 22",
      categoryColor: "bg-purple-500",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apply for Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your application for educational programs, training courses, and learning opportunities. 
            Your progress is automatically saved.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover">
                <div 
                  className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200"
                  style={{
                    backgroundImage: `url('${program.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${program.categoryColor} text-white`}>
                      {program.category}
                    </Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Starts {program.startDate}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <ApplicationForm />
      </div>
    </section>
  );
}
