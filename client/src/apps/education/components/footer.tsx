import { Link } from "wouter";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-china-blue rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Education Access</h3>
                <p className="text-gray-400">Roxas City Connect</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md mb-4">
              Empowering every citizen with accessible learning opportunities, scholarships, and educational resources for a brighter future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/wizard" className="text-gray-300 hover:text-white transition-colors">
                  Scholarship Wizard
                </Link>
              </li>
              <li>
                <Link href="/map" className="text-gray-300 hover:text-white transition-colors">
                  Learning Centers
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-300 hover:text-white transition-colors">
                  Apply for Programs
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(036) 621-0769</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>education@roxascity.gov.ph</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Roxas City, Capiz, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Roxas City Connect - Education Access. All rights reserved.</p>
          <p className="text-sm mt-2">Compliant with DILG-CSIS standards for digital government services.</p>
        </div>
      </div>
    </footer>
  );
}
