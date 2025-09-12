import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Youtube, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-4">
              Wakulima
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Empowering Kenyan farmers with premium livestock, expert knowledge, and comprehensive agricultural solutions for over 15 years.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-full border-background/30 text-background bg-transparent hover:bg-background hover:text-foreground">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-background/30 text-background bg-transparent hover:bg-background hover:text-foreground">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-background/30 text-background bg-transparent hover:bg-background hover:text-foreground">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-background/30 text-background bg-transparent hover:bg-background hover:text-foreground" onClick={() => window.open('https://wa.me/254758905603', '_blank')}>
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Offerings</h3>
            <ul className="space-y-3">
              {[
                'Day-Old Chicks',
                'Poultry Feeds',
                'Farm Equipment',
                'Fresh Eggs',
                'Hatchery Services',
                'Farmer Training'
              ].map((item) => (
                <li key={item}>
                  <span className="text-background/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>+254 758 905 603</p>
                  <p className="text-sm">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>hashimraj02@gmail.com</p>
                  <p className="text-sm">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Kiambu County, Kenya</p>
                  <p className="text-sm">Farm Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} Wakulima Poultry Farmers. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;