import { Facebook, Twitter, Instagram, Phone, Hospital, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-blue-700 font-bold text-lg">RC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-main">Roxas City</h3>
                <p className="text-blue-200 text-sm font-small">Health Services Portal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 font-main">
              Bringing government services closer to every citizen. Access health services, book appointments, and get medical guidance from the comfort of your home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-main">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/locator" className="hover:text-white transition-colors duration-200 font-small">Find Clinics</Link>
              </li>
              <li>
                <Link href="/scheduler" className="hover:text-white transition-colors duration-200 font-small">Book Vaccination</Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-white transition-colors duration-200 font-small">AI Nurse Maria</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white transition-colors duration-200 font-small">Health Dashboard</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Emergency Contacts</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span>Emergency: 911</span>
              </li>
              <li className="flex items-center space-x-2">
                <Hospital className="w-4 h-4 text-blue-500" />
                <span>Health Center: (036) 621-0153</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span>health@roxascity.gov.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Roxas City Government. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
