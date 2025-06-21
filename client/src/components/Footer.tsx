import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  ArrowRight,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Footer Content - Simplified Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-8">
          
          {/* Column 1: City Info & Social */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-xl">RC</span>
              </div>
              <div>
                <h3 className="font-bold text-2xl text-slate-900">Roxas City</h3>
                <p className="text-slate-500">Citizen Platform</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed max-w-sm mb-6">
              A modern hub for civic engagement, transparency, and community connection.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-500 hover:bg-slate-100 hover:text-slate-900">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-lg text-slate-900 mb-5">Navigate</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Feedback', href: '/share-feedback' },
                { name: 'Visitor Portal', href: '/visitor' },
                { name: 'City Official Portal', href: '/admin' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-600 hover:text-slate-900 hover:underline underline-offset-2 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:col-span-5">
            <h4 className="font-semibold text-lg text-slate-900 mb-5">Stay Connected</h4>
            <p className="text-slate-600 mb-4">
              Get city updates and news delivered to your inbox.
            </p>
            <div className="flex w-full max-w-md">
              <Input 
                placeholder="Email address"
                className="flex-1 bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-500 rounded-l-md focus:ring-slate-500 focus:border-slate-500"
                type="email"
              />
              <Button className="bg-slate-800 hover:bg-slate-900 text-white rounded-r-md px-5">
                <ArrowRight className="w-5 h-5" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-3">
              We care about your data. Read our{' '}
              <a href="#" className="underline hover:text-slate-800">privacy policy</a>.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Roxas City Government. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
