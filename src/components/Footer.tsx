
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Heart
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* City Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white">RC</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">Roxas City</h3>
                <p className="text-gray-300 text-sm">Citizen Platform</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering citizens, councilors, and visitors through data-driven engagement and transparent governance.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                'Public Services',
                'Transparency Dashboard', 
                'Complaint System',
                'Budget Voting',
                'Town Hall Meetings',
                'Open Data Portal'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <div className="text-sm text-gray-300">
                  <div>Roxas City Hall</div>
                  <div>Roxas City, Capiz 5800</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">(036) 621-0153</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">info@roxascity.gov.ph</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news about city services, events, and government updates.
            </p>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Be Heard. Be Counted.</h3>
          <p className="text-gray-300 mb-6">
            Your participation shapes the future of Roxas City. Join thousands of citizens in building a better community.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white px-8 py-3">
            Get Involved Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Roxas City Government. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for the people of Roxas City</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
