import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, Star, Heart, Award, Shield } from 'lucide-react';
import largeWhiteImage from '@/assets/large-white-piglets.jpg';
import landraceImage from '@/assets/landrace-piglets.jpg';
import crossbredImage from '@/assets/crossbred-piglets.jpg';
import breedingBoarImage from '@/assets/breeding-boar.jpg';
import breedingSowImage from '@/assets/breeding-sow.jpg';
import freshPorkImage from '@/assets/fresh-pork.jpg';

const PigsPage = () => {
  const pigProducts = [
    {
      id: 1,
      name: 'Large White Piglets',
      description: 'Premium Large White breed piglets known for fast growth, excellent meat quality, and high feed conversion efficiency.',
      image: largeWhiteImage,
      rating: 4.9,
      features: ['Fast Growth', 'High Feed Conversion', 'Premium Meat Quality', 'Disease Resistant'],
      category: 'Piglets',
      ages: ['8 weeks', '10 weeks', '12 weeks', '16 weeks'],
      weight: '15-25kg'
    },
    {
      id: 2,
      name: 'Landrace Piglets',
      description: 'Landrace breed piglets with excellent mothering ability, high prolificacy, and good growth rates.',
      image: landraceImage,
      rating: 4.8,
      features: ['High Prolificacy', 'Good Mothers', 'Lean Meat', 'Adaptable'],
      category: 'Piglets',
      ages: ['8 weeks', '10 weeks', '12 weeks'],
      weight: '15-22kg'
    },
    {
      id: 3,
      name: 'Crossbred Piglets',
      description: 'Hardy crossbred piglets combining the best traits of multiple breeds for local conditions.',
      image: crossbredImage,
      rating: 4.7,
      features: ['Hardy', 'Local Adaptation', 'Good Growth', 'Cost Effective'],
      category: 'Piglets',
      ages: ['8 weeks', '10 weeks', '12 weeks', '14 weeks'],
      weight: '12-20kg'
    },
    {
      id: 4,
      name: 'Breeding Boars',
      description: 'High-quality breeding boars from proven genetic lines for superior offspring production.',
      image: breedingBoarImage,
      rating: 4.9,
      features: ['Proven Genetics', 'High Fertility', 'Good Temperament', 'Health Tested'],
      category: 'Breeding Stock',
      ages: ['8 months', '12 months', '18 months'],
      weight: '80-150kg'
    },
    {
      id: 5,
      name: 'Breeding Sows',
      description: 'Productive breeding sows with excellent mothering instincts and high litter sizes.',
      image: breedingSowImage,
      rating: 4.8,
      features: ['High Litter Size', 'Good Mothers', 'Proven Fertility', 'Healthy Stock'],
      category: 'Breeding Stock',
      ages: ['8 months', '12 months', '15 months'],
      weight: '70-120kg'
    },
    {
      id: 6,
      name: 'Fresh Pork Products',
      description: 'High-quality fresh pork cuts from our own farm-raised pigs, processed under strict hygiene standards.',
      image: freshPorkImage,
      rating: 4.9,
      features: ['Farm Fresh', 'Hygienically Processed', 'No Additives', 'Premium Quality'],
      category: 'Pork Products',
      ages: ['Ready to Cook'],
      weight: 'Various cuts available'
    }
  ];

  const piglets = pigProducts.filter(product => product.category === 'Piglets');
  const breedingStock = pigProducts.filter(product => product.category === 'Breeding Stock');
  const porkProducts = pigProducts.filter(product => product.category === 'Pork Products');

  const ProductSection = ({ title, products, description }: { title: string; products: any[]; description: string }) => (
    <div className="mb-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </span>
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-lg overflow-hidden">
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
                {product.features.map((feature: string, index: number) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="text-xs px-2 py-1"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-2">Available Ages:</p>
                  <div className="space-y-1">
                    {product.ages.map((age: string, index: number) => (
                      <span 
                        key={index}
                        className="block px-2 py-1 bg-muted text-xs rounded-full font-medium"
                      >
                        {age}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Weight Range:</p>
                  <span className="px-2 py-1 bg-muted text-xs rounded-full font-medium block">{product.weight}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 gap-2 font-medium"
                  onClick={() => window.open('tel:+254758905603')}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
                <Button 
                  className="flex-1 bg-gradient-primary hover:opacity-90 gap-2 font-medium"
                  onClick={() => window.open(`https://wa.me/254758905603?text=Hi, I'm interested in ${product.name}`, '_blank')}
                >
                  <MessageSquare className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Pigs & Pork Products
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-3xl mx-auto">
                Quality piglets, breeding stock, and fresh pork products from our certified pig farming operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2"
                  onClick={() => window.open('tel:+254758905603')}
                >
                  <Phone className="h-5 w-5" />
                  Call for Availability
                </Button>
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 gap-2"
                  onClick={() => window.open('https://wa.me/254758905603?text=Hi, I\'m interested in your pigs', '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pig Farming Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Years of expertise in pig farming with a focus on health, genetics, and sustainable practices.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Health First</h3>
                <p className="text-muted-foreground">Regular health monitoring and vaccination programs for all our pigs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Superior Genetics</h3>
                <p className="text-muted-foreground">Carefully selected breeding stock for optimal growth and meat quality.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Operation</h3>
                <p className="text-muted-foreground">Licensed and certified pig farming operation meeting all regulatory standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Complete Pig Farming Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From starter piglets to breeding stock and fresh pork products - everything you need for successful pig farming.
              </p>
            </div>

            <ProductSection 
              title="Quality Piglets" 
              products={piglets} 
              description="Healthy, well-socialized piglets from premium breeds ready for your farm."
            />
            
            <ProductSection 
              title="Breeding Stock" 
              products={breedingStock} 
              description="Superior breeding animals to establish or improve your pig breeding program."
            />
            
            <ProductSection 
              title="Fresh Pork Products" 
              products={porkProducts} 
              description="Farm-fresh pork products processed to the highest standards of quality and hygiene."
            />
          </div>
        </section>

        {/* Training & Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pig Farming Training & Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We provide comprehensive training and ongoing support to help you succeed in pig farming, from setup to marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open('tel:+254758905603')}
                >
                  <Phone className="h-5 w-5" />
                  Book Training Session
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 gap-2"
                  onClick={() => window.open('https://wa.me/254758905603?text=Hi, I need pig farming consultation', '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PigsPage;