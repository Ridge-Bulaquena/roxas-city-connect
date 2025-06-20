
import { FileText, Search, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ComplaintSystem = () => {
  return (
    <section className="py-20 section-dark">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Voice Your Concerns
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Report issues, track progress, and see real solutions. Your complaints drive positive change in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* File Complaint Card */}
          <Card className="card-dark hover-lift">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4 mx-auto">
                <FileText className="w-8 h-8 text-blue-400" />
              </div>
              <CardTitle className="text-content">File a Complaint</CardTitle>
              <CardDescription className="text-muted">
                Report issues that matter to your community
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Start Filing
              </Button>
            </CardContent>
          </Card>

          {/* Track Complaint Card */}
          <Card className="card-dark hover-lift">
            <CardHeader className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4 mx-auto">
                <Search className="w-8 h-8 text-green-400" />
              </div>
              <CardTitle className="text-content">Track Progress</CardTitle>
              <CardDescription className="text-muted">
                Monitor the status of your submitted complaints
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 px-8">
                Track Complaint
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500/20 mb-4">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,247</div>
            <div className="text-gray-400">Active Cases</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3,891</div>
            <div className="text-gray-400">Resolved</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">7.2 days</div>
            <div className="text-gray-400">Avg. Response</div>
          </div>
        </div>
      </div>
    </section>
  );
};
