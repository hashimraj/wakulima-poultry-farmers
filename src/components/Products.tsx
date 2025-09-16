import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageSquare, Phone, Star } from 'lucide-react';
import chicksImage from '@/assets/chicks-product.jpg';
import eggsImage from '@/assets/eggs-product.jpg';
import feedsImage from '@/assets/feeds-product.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Day-Old Chicks',
      description: 'Vaccinated, healthy chicks from premium breeds including Kienyeji, Kuroiler, and Rainbow Rooster.',
      image: chicksImage,
      rating: 4.9,
      features: ['Fully Vaccinated', '98% Survival Rate', 'Premium Breeds', 'Expert Care']
    },
    {
      id: 2,
      name: 'Fresh Table Eggs',
      description: 'Farm-fresh eggs from free-range chickens. Available in various sizes and quantities.',
      image: eggsImage,
      rating: 4.8,
      features: ['Farm Fresh', 'Free Range', 'Various Sizes', 'Daily Collection']
    },
    {
      id: 3,
      name: 'Poultry Feeds & Supplements',
      description: 'High-quality feeds and nutritional supplements for optimal growth and egg production.',
      image: feedsImage,
      rating: 4.9,
      features: ['Balanced Nutrition', 'Growth Enhancing', 'Quality Assured', 'Bulk Discounts']
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our premium range of poultry products, carefully selected and prepared to help your farming venture thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-lg overflow-hidden w-full">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold leading-tight">{product.name}</CardTitle>
                <CardDescription className="text-muted-foreground line-clamp-3">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-2 font-medium"
                    onClick={() => window.open('tel:+254798258111')}
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-primary hover:opacity-90 gap-2 font-medium"
                    onClick={() => window.open('https://wa.me/254798258111?text=Hi, I\'m interested in ' + product.name, '_blank')}
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 font-semibold border-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us for More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;