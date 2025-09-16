import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, Star, Leaf, Zap, Shield } from 'lucide-react';
import starterFeedImage from '@/assets/starter-feed.jpg';
import growerFeedImage from '@/assets/grower-feed.jpg';
import layerFeedImage from '@/assets/layer-feed.jpg';
import broilerFeedImage from '@/assets/broiler-feed.jpg';
import pigStarterFeedImage from '@/assets/pig-starter-feed.jpg';
import pigGrowerFeedImage from '@/assets/pig-grower-feed.jpg';
import multivitaminSupplementImage from '@/assets/multivitamin-supplement.jpg';
import calciumSupplementImage from '@/assets/calcium-supplement.jpg';

const FeedsPage = () => {
  const feedProducts = [
    {
      id: 1,
      name: 'Starter Feed (0-8 weeks)',
      description: 'High-protein starter feed for chicks from day-old to 8 weeks with essential nutrients for healthy growth.',
      image: starterFeedImage,
      rating: 4.9,
      features: ['22% Protein', 'Vitamin Enriched', 'Easy Digestion', 'Growth Boost'],
      category: 'Chicken Feed',
      packaging: ['5kg', '10kg', '25kg', '50kg']
    },
    {
      id: 2,
      name: 'Grower Feed (8-18 weeks)',
      description: 'Balanced nutrition for growing chickens to support healthy development and strong bone formation.',
      image: growerFeedImage,
      rating: 4.8,
      features: ['18% Protein', 'Calcium Rich', 'Bone Development', 'Weight Gain'],
      category: 'Chicken Feed',
      packaging: ['10kg', '25kg', '50kg', '70kg']
    },
    {
      id: 3,
      name: 'Layer Feed (18+ weeks)',
      description: 'Premium layer feed designed to maximize egg production and maintain hen health.',
      image: layerFeedImage,
      rating: 4.9,
      features: ['16% Protein', 'High Calcium', 'Shell Strength', 'Egg Production'],
      category: 'Chicken Feed',
      packaging: ['10kg', '25kg', '50kg', '70kg']
    },
    {
      id: 4,
      name: 'Broiler Finisher Feed',
      description: 'High-energy feed for meat chickens to achieve rapid weight gain and optimal feed conversion.',
      image: broilerFeedImage,
      rating: 4.8,
      features: ['20% Protein', 'Fast Growth', 'Feed Conversion', 'Meat Quality'],
      category: 'Chicken Feed',
      packaging: ['25kg', '50kg', '70kg']
    },
    {
      id: 5,
      name: 'Pig Starter Feed',
      description: 'Complete nutrition for piglets from weaning to 30kg with digestible ingredients.',
      image: pigStarterFeedImage,
      rating: 4.7,
      features: ['18% Protein', 'Digestible', 'Immune Support', 'Healthy Growth'],
      category: 'Pig Feed',
      packaging: ['25kg', '50kg']
    },
    {
      id: 6,
      name: 'Pig Grower Feed',
      description: 'Balanced feed for growing pigs from 30-60kg to support steady weight gain.',
      image: pigGrowerFeedImage,
      rating: 4.8,
      features: ['16% Protein', 'Weight Gain', 'Muscle Development', 'Cost Effective'],
      category: 'Pig Feed',
      packaging: ['25kg', '50kg', '70kg']
    },
    {
      id: 7,
      name: 'Multivitamin Supplement',
      description: 'Essential vitamin and mineral supplement to boost immunity and overall health.',
      image: multivitaminSupplementImage,
      rating: 4.9,
      features: ['Immune Boost', 'Essential Vitamins', 'Disease Prevention', 'Health Support'],
      category: 'Supplements',
      packaging: ['1kg', '5kg', '10kg']
    },
    {
      id: 8,
      name: 'Calcium Supplement',
      description: 'High-quality calcium supplement for strong eggshells and bone development.',
      image: calciumSupplementImage,
      rating: 4.8,
      features: ['Pure Calcium', 'Shell Strength', 'Bone Health', 'Easy Absorption'],
      category: 'Supplements',
      packaging: ['5kg', '10kg', '25kg']
    }
  ];

  const chickenFeeds = feedProducts.filter(product => product.category === 'Chicken Feed');
  const pigFeeds = feedProducts.filter(product => product.category === 'Pig Feed');
  const supplements = feedProducts.filter(product => product.category === 'Supplements');

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Feeds & Supplements
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-3xl mx-auto">
                Nutritionally balanced feeds and supplements to maximize growth, production, and animal health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2"
                  onClick={() => window.open('tel:+254798258111')}
                >
                  <Phone className="h-5 w-5" />
                  Call for Pricing
                </Button>
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 gap-2"
                  onClick={() => window.open('https://wa.me/254798258111?text=Hi, I\'m interested in your feeds', '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Inquiry
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Our Feeds Make a Difference</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scientifically formulated feeds that deliver superior results for your livestock.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
                <p className="text-muted-foreground">Made from high-quality natural ingredients without harmful additives.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
                <p className="text-muted-foreground">Optimized formulations for faster growth and better feed conversion.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">Every batch tested for quality and nutritional consistency.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chicken Feeds Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Chicken Feeds
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Complete nutrition for every stage of chicken development, from chicks to laying hens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
              {chickenFeeds.map((product) => (
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
                    <CardTitle className="text-lg md:text-xl font-bold leading-tight">{product.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3">
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
                        {product.packaging.map((size, index) => (
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
                        className="flex-1 gap-2 text-xs font-medium"
                        onClick={() => window.open('tel:+254798258111')}
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-primary hover:opacity-90 gap-2 text-xs font-medium"
                        onClick={() => window.open(`https://wa.me/254798258111?text=Hi, I'm interested in ${product.name}`, '_blank')}
                      >
                        <MessageSquare className="h-4 w-4" />
                        Chat
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pig Feeds Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Pig Feeds
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Specially formulated feeds for optimal pig growth and development at every stage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
              {pigFeeds.map((product) => (
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
                        {product.packaging.map((size, index) => (
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
                        onClick={() => window.open('tel:+254798258111')}
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-primary hover:opacity-90 gap-2 font-medium"
                        onClick={() => window.open(`https://wa.me/254798258111?text=Hi, I'm interested in ${product.name}`, '_blank')}
                      >
                        <MessageSquare className="h-4 w-4" />
                        WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Supplements Section */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Nutritional Supplements
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Essential supplements to boost immunity, health, and productivity of your livestock.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {supplements.map((product) => (
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
                        {product.packaging.map((size, index) => (
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
                        onClick={() => window.open('tel:+254798258111')}
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-primary hover:opacity-90 gap-2 font-medium"
                        onClick={() => window.open(`https://wa.me/254798258111?text=Hi, I'm interested in ${product.name}`, '_blank')}
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

export default FeedsPage;