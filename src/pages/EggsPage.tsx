import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, Star, Egg, CheckCircle, Clock } from 'lucide-react';
import kienyejiEggsImage from '@/assets/kienyeji-eggs.jpg';
import kuroilerEggsImage from '@/assets/kuroiler-eggs.jpg';
import fertilizedEggsImage from '@/assets/fertilized-eggs.jpg';

const EggsPage = () => {
  const eggProducts = [
    {
      id: 1,
      name: 'Kienyeji Table Eggs',
      description: 'Fresh, organic table eggs from free-range Kienyeji chickens with rich nutritional value.',
      image: kienyejiEggsImage,
      rating: 4.9,
      features: ['Free Range', 'Organic', 'Rich Nutrition', 'Daily Fresh'],
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
      type: 'Table Eggs'
    },
    {
      id: 2,
      name: 'Kuroiler Table Eggs',
      description: 'Premium table eggs from Kuroiler hens, known for consistent size and quality.',
      image: kuroilerEggsImage,
      rating: 4.8,
      features: ['Consistent Size', 'Premium Quality', 'High Protein', 'Fresh Daily'],
      sizes: ['Medium', 'Large', 'Extra Large'],
      type: 'Table Eggs'
    },
    {
      id: 3,
      name: 'Fertilized Eggs - Kienyeji',
      description: 'Fertile eggs for hatching from our premium Kienyeji breeding stock.',
      image: fertilizedEggsImage,
      rating: 4.9,
      features: ['High Fertility', 'Premium Stock', '85% Hatch Rate', 'Quality Assured'],
      sizes: ['Standard'],
      type: 'Fertilized Eggs'
    },
    {
      id: 4,
      name: 'Fertilized Eggs - Kuroiler',
      description: 'High-quality fertilized eggs from Kuroiler breeding birds for hatchery use.',
      image: fertilizedEggsImage,
      rating: 4.8,
      features: ['Fast Hatching', 'Strong Chicks', '88% Hatch Rate', 'Disease Free'],
      sizes: ['Standard'],
      type: 'Fertilized Eggs'
    },
    {
      id: 5,
      name: 'Rainbow Rooster Fertilized Eggs',
      description: 'Premium fertilized eggs from Rainbow Rooster breed for meat production.',
      image: fertilizedEggsImage,
      rating: 4.9,
      features: ['Meat Breed', 'Fast Growth', '90% Hatch Rate', 'Premium Quality'],
      sizes: ['Standard'],
      type: 'Fertilized Eggs'
    }
  ];

  const tableEggs = eggProducts.filter(product => product.type === 'Table Eggs');
  const fertilizedEggs = eggProducts.filter(product => product.type === 'Fertilized Eggs');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Fresh Farm Eggs
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-3xl mx-auto">
                From our farm to your table. Fresh, nutritious eggs and premium fertilized eggs for hatching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2"
                  onClick={() => window.open('tel:+254758905603')}
                >
                  <Phone className="h-5 w-5" />
                  Call for Orders
                </Button>
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 gap-2"
                  onClick={() => window.open('https://wa.me/254758905603?text=Hi, I\'m interested in your eggs', '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Order
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Eggs</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fresh, healthy eggs collected daily with the highest quality standards.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Daily Fresh</h3>
                <p className="text-muted-foreground">Eggs collected daily and delivered fresh to ensure maximum quality.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Tested</h3>
                <p className="text-muted-foreground">Each batch tested for freshness and quality before packaging.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Egg className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Range</h3>
                <p className="text-muted-foreground">From free-range chickens for better nutrition and taste.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Table Eggs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Fresh Table Eggs
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nutritious, fresh eggs for your daily consumption from our healthy, free-range chickens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
              {tableEggs.map((product) => (
                <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
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
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-2">Available Sizes:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-muted text-xs rounded-full font-medium"
                          >
                            {size}
                          </span>
                        ))}
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

            {/* Fertilized Eggs Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Fertilized Eggs for Hatching
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                High-quality fertilized eggs from our premium breeding stock for your hatchery needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fertilizedEggs.map((product) => (
                <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
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
                        <Badge 
                          key={index}
                          variant="secondary"
                          className="text-xs px-2 py-1"
                        >
                          {feature}
                        </Badge>
                      ))}
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EggsPage;