import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, Star, Shield, Heart, Award } from 'lucide-react';
import kienyejiChicksImage from '@/assets/kienyeji-chicks.jpg';
import kuroilerChicksImage from '@/assets/kuroiler-chicks.jpg';
import rainbowChicksImage from '@/assets/rainbow-chicks.jpg';

const ChicksPage = () => {
  const chickProducts = [
    {
      id: 1,
      name: 'Kienyeji Chicks',
      description: 'Indigenous Kenyan breed known for disease resistance and adaptability to local conditions.',
      image: kienyejiChicksImage,
      rating: 4.9,
      features: ['Disease Resistant', 'Hardy Breed', 'Local Adaptation', 'Good Egg Production'],
      ageOptions: ['Day-Old', '1 Week', '2 Weeks', '1 Month']
    },
    {
      id: 2,
      name: 'Kuroiler Chicks',
      description: 'Dual-purpose breed excellent for both meat and egg production with fast growth.',
      image: kuroilerChicksImage,
      rating: 4.8,
      features: ['Fast Growth', 'Dual Purpose', 'High Yield', 'Weather Tolerant'],
      ageOptions: ['Day-Old', '1 Week', '2 Weeks']
    },
    {
      id: 3,
      name: 'Rainbow Rooster Chicks',
      description: 'Premium meat breed with excellent feed conversion and rapid weight gain.',
      image: rainbowChicksImage,
      rating: 4.9,
      features: ['Premium Meat', 'Fast Weight Gain', 'Efficient Feed Use', 'High Quality'],
      ageOptions: ['Day-Old', '1 Week', '2 Weeks', '3 Weeks']
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Day-Old Chicks
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-3xl mx-auto">
                Healthy, vaccinated chicks from the finest breeds. Start your poultry farming journey with quality stock.
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
                  onClick={() => window.open('https://wa.me/254758905603?text=Hi, I\'m interested in your chicks', '_blank')}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality You Can Trust</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our chicks come with comprehensive health guarantees and expert care instructions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fully Vaccinated</h3>
                <p className="text-muted-foreground">All chicks receive complete vaccination schedule before delivery.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Health Guaranteed</h3>
                <p className="text-muted-foreground">98% survival rate with proper care instructions included.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Breeds</h3>
                <p className="text-muted-foreground">Carefully selected parent stock for superior genetics.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Available Breeds
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our selection of premium chicken breeds, each with unique characteristics for your farming needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chickProducts.map((product) => (
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
                      <p className="text-sm font-medium mb-2">Available Ages:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.ageOptions.map((age, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-muted text-xs rounded-full font-medium"
                          >
                            {age}
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChicksPage;