import { Button } from '@/components/ui/button';
import { FaTiktok } from "react-icons/fa";
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
              Empowering farmers with premium livestock, expert knowledge, and comprehensive agricultural solutions for over 15 years.
            </p>
            <div className="flex gap-3 ">
              <a href="https://www.facebook.com/profile.php?id=100081068472342" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white/50 hover:bg-white/70 text-black border-none shadow-none">
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://youtube.com/@derrikwamboye7677?si=WRC5uqfi_scS6YBX" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white/50 hover:bg-white/70 text-black border-none shadow-none">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.tiktok.com/@wakulimapoultry?_t=ZM-8zmGIcLIDYM&_r=1" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full bg-white/50 hover:bg-white/70 text-black border-none shadow-none">
                  <FaTiktok className="h-5 w-5" />
                </Button>
              </a>
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
                  <p>+254 798 258111</p>
                  <p className="text-sm">24/7 Support</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>wamboye22@gmail.com</p>
                  <p className="text-sm">General Inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Nairobi, Kenya</p>
                  <p className="text-sm">Kalsi House R202 along Luthuli & Mfangano junction.</p>
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

            <div className="flex gap-6 text-sm text-background/60">
              <a href="https://wa.me/254798258111" target="_blank" rel="noopener noreferrer"></a>
              <p>@raj designs</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;