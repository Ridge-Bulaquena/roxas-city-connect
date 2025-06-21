import React from 'react';

const GetStartedPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 text-center">
          <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
            Introduction to Roxas City Connect
          </span>
        </h1>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to Roxas City Connect, your digital gateway to civic engagement and transparent governance. 
            This platform empowers every citizen to participate in building our community.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">For Residents</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Access city services and programs</li>
                <li>• Submit feedback and report issues</li>
                <li>• Participate in community decisions</li>
                <li>• Track government projects and budgets</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">For Visitors</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Explore Roxas City culture and attractions</li>
                <li>• Discover business opportunities</li>
                <li>• Learn about local governance</li>
                <li>• Plan your visit to our city</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage; 