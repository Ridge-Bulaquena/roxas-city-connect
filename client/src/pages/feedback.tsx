import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/Layout';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Feedback submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex items-center justify-center text-center px-4">
          <div>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-gray-600 mb-8">Your feedback has been submitted successfully.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              Submit Another Feedback
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-light text-slate-800 mb-6">
              Share Your Feedback
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Your voice matters! Help us improve Roxas City by sharing your thoughts, suggestions, and concerns.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Feedback Category *
              </label>
              <select
                id="category"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a category</option>
                <option value="general">General Feedback</option>
                <option value="services">City Services</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="environment">Environment</option>
                <option value="safety">Public Safety</option>
                <option value="education">Education</option>
                <option value="health">Healthcare</option>
                <option value="business">Business Support</option>
                <option value="tourism">Tourism</option>
                <option value="complaint">Complaint</option>
                <option value="suggestion">Suggestion</option>
              </select>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Brief description of your feedback"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Please provide detailed information about your feedback, suggestions, or concerns..."
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="anonymous"
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 text-sm text-gray-600">
                Submit anonymously (your name and email will not be shared)
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Feedback
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ways to Connect</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600">+63 36 621-0000</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">feedback@roxascity.gov.ph</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Office Hours</h4>
                <p className="text-gray-600">Mon-Fri: 8AM-5PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FeedbackPage; 