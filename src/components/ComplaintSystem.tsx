
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Search, 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight 
} from "lucide-react";
import { usePersonalization } from "@/hooks/usePersonalization";

export const ComplaintSystem = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showQuickFile, setShowQuickFile] = useState(false);
  const { openComplaints, addComplaint } = usePersonalization();

  const mockComplaints = [
    { id: 'RXC-2024-001', title: 'Streetlight Repair', status: 'in-progress', date: '2024-01-15' },
    { id: 'RXC-2024-002', title: 'Road Pothole', status: 'resolved', date: '2024-01-10' },
    { id: 'RXC-2024-003', title: 'Garbage Collection', status: 'submitted', date: '2024-01-20' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-gray-100 text-gray-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'submitted': return <Clock className="w-4 h-4" />;
      case 'in-progress': return <AlertCircle className="w-4 h-4" />;
      case 'resolved': return <CheckCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complaint Management System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Report issues, track progress, and see real-time updates on complaint resolution.
            Your voice drives positive change in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* File New Complaint */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">File a Complaint</h3>
                <p className="text-gray-600">Quick and easy reporting system</p>
              </div>
            </div>

            {!showQuickFile ? (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Report infrastructure issues, service problems, or any concerns affecting your community. 
                  Our multi-step wizard guides you through the process with automatic categorization.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">24h</div>
                    <div className="text-sm text-gray-600">Average Response</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600">89%</div>
                    <div className="text-sm text-gray-600">Resolution Rate</div>
                  </div>
                </div>

                <Button 
                  onClick={() => setShowQuickFile(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Start Filing Complaint
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Input 
                  placeholder="Brief description of the issue"
                  className="bg-white"
                />
                <Textarea 
                  placeholder="Provide detailed information about the complaint..."
                  className="bg-white min-h-[100px]"
                />
                <div className="flex space-x-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                    Submit Complaint
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setShowQuickFile(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Track Complaint */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Track Complaint</h3>
                <p className="text-gray-600">Real-time status updates</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-3">
                <Input 
                  placeholder="Enter tracking number (e.g., RXC-2024-001)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="bg-white"
                />
                <Button className="bg-green-600 hover:bg-green-700">
                  <Search className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-gray-700">Recent Complaints:</div>
                {mockComplaints.slice(0, 3).map((complaint) => (
                  <div key={complaint.id} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{complaint.id}</span>
                      <Badge className={getStatusColor(complaint.status)}>
                        <span className="flex items-center">
                          {getStatusIcon(complaint.status)}
                          <span className="ml-1 capitalize">{complaint.status.replace('-', ' ')}</span>
                        </span>
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-600">{complaint.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{complaint.date}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">2,847</div>
            <div className="text-gray-600">Total Complaints</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">156</div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">2,541</div>
            <div className="text-gray-600">Resolved</div>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <AlertCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-gray-900">24h</div>
            <div className="text-gray-600">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};
