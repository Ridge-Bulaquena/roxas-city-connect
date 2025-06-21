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
    <footer className="section-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto footer-spacing">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-mobile text-center sm:text-left">
          {/* City Info */}
          <div className="space-y-6 sm:space-y-4 flex flex-col items-center sm:items-start">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-lg sm:text-base">RC</span>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="font-bold text-xl">Roxas City</h3>
                <p className="text-content text-sm">Citizen Platform</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed text-center sm:text-left max-w-sm">
              Empowering citizens, councilors, and visitors through data-driven engagement and transparent governance.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-3">
              <Button size="sm" variant="outline" className="btn-dark-secondary w-10 h-10 p-0">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="btn-dark-secondary w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="btn-dark-secondary w-10 h-10 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-content">Quick Links</h4>
            <ul className="text-spacing">
              <li>
                <a href="/visitor" className="text-muted hover:text-content transition-colors text-sm font-semibold block py-1">
                  Visitor Portal
                </a>
              </li>
              {[
                'Public Services',
                'Transparency Dashboard', 
                'Complaint System',
                'Budget Voting',
                'Town Hall Meetings',
                'Open Data Portal'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted hover:text-content transition-colors text-sm block py-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-content">Contact Us</h4>
            <ul className="text-spacing">
              <li className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 accent-highlight flex-shrink-0" />
                <div className="text-sm text-muted text-center sm:text-left">
                  <div className="font-medium">Roxas City Hall</div>
                  <div>Roxas City, Capiz 5800</div>
                </div>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-5 h-5 accent-highlight flex-shrink-0" />
                <span className="text-sm text-muted">(036) 621-0153</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-5 h-5 accent-highlight flex-shrink-0" />
                <span className="text-sm text-muted">info@roxascity.gov.ph</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-content">Stay Updated</h4>
            <p className="text-muted text-sm leading-relaxed max-w-sm mx-auto sm:mx-0 text-center sm:text-left">
              Get the latest news about city services, events, and government updates.
            </p>
            <div className="form-spacing">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                <Input 
                  placeholder="Your email address"
                  className="flex-1 bg-gray-800/50 border-gray-600 text-content placeholder-gray-400 rounded-full px-4 py-3"
                />
                <Button size="sm" className="btn-dark-primary rounded-full px-6 py-3 self-center sm:self-auto">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted text-center sm:text-left mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-700/30">
        <div className="max-w-7xl mx-auto section-spacing text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-content">Be Heard. Be Counted.</h3>
          <p className="text-muted mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Your participation shapes the future of Roxas City. Join thousands of citizens in building a better community.
          </p>
          <Button className="btn-dark-primary px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-600 to-yellow-500 hover:from-blue-700 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Get Involved Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/30 bg-gradient-to-r from-slate-900/80 to-blue-900/80">
        <div className="max-w-7xl mx-auto nav-spacing">
          <div className="flex flex-col sm:flex-row justify-between items-center text-spacing">
            <div className="text-sm text-muted text-center sm:text-left">
              © 2024 Roxas City Government. All rights reserved.
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for the people of Roxas City</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
