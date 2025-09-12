import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/#contact' },
  ];

  const products = [
    { name: 'Day-Old Chicks', href: '/chicks' },
    { name: 'Table Eggs', href: '/eggs' },
    { name: 'Fertilized Eggs', href: '/eggs' },
    { name: 'Poultry Feeds & Supplements', href: '/feeds' },
    { name: 'Farming Equipment', href: '/equipment' },
    { name: 'Piglets & Pork Products', href: '/pigs' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const hash = href.includes('#') ? href.split('#')[1] : '';
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Wakulima
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      if (item.href.includes('#')) {
                        e.preventDefault();
                        handleNavClick(e, item.href);
                      }
                    }}
                    className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium px-3 py-2"
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground/80 hover:text-primary font-medium">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-80 p-4 bg-card border border-border shadow-lg">
                    <div className="grid gap-3">
                      <div className="mb-2">
                        <h4 className="font-semibold text-card-foreground mb-2">Our Products</h4>
                      </div>
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          to={product.href}
                          className="block px-3 py-2 text-sm text-card-foreground hover:bg-muted rounded-md transition-colors"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => window.open('tel:0758905603')}
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Button>
            <Button 
              className="bg-gradient-primary text-background hover:opacity-90 gap-2"
              onClick={() => window.open('https://wa.me/254758905603', '_blank')}
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-2"
                    onClick={(e) => {
                      if (item.href.includes('#')) {
                        e.preventDefault();
                        handleNavClick(e, item.href);
                        setIsOpen(false);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Products Section */}
                <div className="pt-2">
                  <h4 className="text-foreground font-medium mb-3 px-2">Products</h4>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="text-foreground/80 hover:text-primary transition-colors duration-200 text-sm px-4 py-1 block"
                      onClick={() => setIsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                
                <div className="flex flex-col space-y-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => {
                      setIsOpen(false);
                      window.open('tel:0758905603');
                    }}
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </Button>
                  <Button 
                    className="bg-gradient-primary text-background hover:opacity-90 gap-2"
                    onClick={() => {
                      setIsOpen(false);
                      window.open('https://wa.me/254758905603', '_blank');
                    }}
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;