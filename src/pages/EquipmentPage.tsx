import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Phone, Star, Wrench, Zap, Settings } from 'lucide-react';
import automaticFeedersImage from '@/assets/automatic-feeders.jpg';
import nippleDrinkersImage from '@/assets/nipple-drinkers.jpg';
import batteryCagesImage from '@/assets/battery-cages.jpg';
import incubatorImage from '@/assets/incubator.jpg';
import broodersHeatLampsImage from '@/assets/brooders-heat-lamps.jpg';
import ventilationFansImage from '@/assets/ventilation-fans.jpg';
import eggCollectionTraysImage from '@/assets/egg-collection-trays.jpg';
import pigFeedersWaterersImage from '@/assets/pig-feeders-waterers.jpg';

const EquipmentPage = () => {
  const equipmentProducts = [
    {
      id: 1,
      name: 'Automatic Feeders',
      description: 'Efficient automatic feeding systems that reduce labor and ensure consistent feeding schedules.',
      rating: 4.9,
      features: ['Labor Saving', 'Consistent Feeding', 'Durable Build', 'Easy Maintenance'],
      category: 'Feeding Equipment',
      sizes: ['Small (50 birds)', 'Medium (100 birds)', 'Large (200+ birds)']
    },
    {
      id: 2,
      name: 'Chain Feeders',
      description: 'Heavy-duty chain feeding systems for large-scale poultry operations with precise feed distribution.',
      rating: 4.8,
      features: ['Heavy Duty', 'Large Capacity', 'Even Distribution', 'Commercial Grade'],
      category: 'Feeding Equipment',
      sizes: ['100m Chain', '200m Chain', '500m Chain']
    },
    {
      id: 3,
      name: 'Feed Hoppers',
      description: 'Large capacity feed storage and dispensing systems with automated portion control.',
      rating: 4.7,
      features: ['Large Storage', 'Weather Proof', 'Portion Control', 'Rodent Proof'],
      category: 'Feeding Equipment',
      sizes: ['500kg', '1000kg', '2000kg', '5000kg']
    },
    {
      id: 4,
      name: 'Nipple Drinkers',
      description: 'Hygienic water delivery system that keeps water clean and reduces waste.',
      rating: 4.8,
      features: ['Hygienic', 'Water Saving', 'Easy Installation', 'No Spillage'],
      category: 'Water Systems',
      sizes: ['Single Line', 'Double Line', 'Round System']
    },
    {
      id: 5,
      name: 'Water Pressure Regulators',
      description: 'Maintain optimal water pressure throughout your drinking line system.',
      rating: 4.6,
      features: ['Pressure Control', 'Consistent Flow', 'Easy Adjustment', 'Durable'],
      category: 'Water Systems',
      sizes: ['Low Pressure', 'Medium Pressure', 'High Pressure']
    },
    {
      id: 6,
      name: 'Water Tanks',
      description: 'High-quality water storage tanks with UV protection and easy cleaning access.',
      rating: 4.7,
      features: ['UV Protected', 'Easy Cleaning', 'Multiple Outlets', 'Food Grade'],
      category: 'Water Systems',
      sizes: ['500L', '1000L', '2000L', '5000L']
    },
    {
      id: 7,
      name: 'Battery Cages',
      description: 'Modern battery cage systems designed for optimal space utilization and bird welfare.',
      rating: 4.7,
      features: ['Space Efficient', 'Easy Cleaning', 'Good Ventilation', 'Sturdy Construction'],
      category: 'Housing',
      sizes: ['3-Tier', '4-Tier', '5-Tier']
    },
    {
      id: 8,
      name: 'Free Range Houses',
      description: 'Spacious housing structures for free-range poultry with natural ventilation systems.',
      rating: 4.8,
      features: ['Spacious Design', 'Natural Light', 'Good Ventilation', 'Easy Access'],
      category: 'Housing',
      sizes: ['50 Birds', '100 Birds', '200 Birds', '500+ Birds']
    },
    {
      id: 9,
      name: 'Broiler Pens',
      description: 'Specialized housing for broiler chickens with optimal growth conditions.',
      rating: 4.7,
      features: ['Growth Optimized', 'Easy Monitoring', 'Climate Control', 'Hygienic'],
      category: 'Housing',
      sizes: ['Commercial 1000', 'Commercial 2000', 'Commercial 5000']
    },
    {
      id: 10,
      name: 'Incubators',
      description: 'Professional-grade incubators for hatching with precise temperature and humidity control.',
      rating: 4.9,
      features: ['Auto Temperature', 'Humidity Control', 'Egg Turning', 'High Hatch Rate'],
      category: 'Hatchery Equipment',
      sizes: ['50 Eggs', '100 Eggs', '200 Eggs', '500+ Eggs']
    },
    {
      id: 11,
      name: 'Hatchers',
      description: 'Specialized hatching cabinets for the final stage of chick incubation.',
      rating: 4.8,
      features: ['Final Stage', 'Optimal Humidity', 'Chick Friendly', 'Easy Transfer'],
      category: 'Hatchery Equipment',
      sizes: ['Small Scale', 'Commercial', 'Industrial']
    },
    {
      id: 12,
      name: 'Egg Candlers',
      description: 'LED egg candling devices to check embryo development during incubation.',
      rating: 4.6,
      features: ['LED Light', 'Clear Viewing', 'Portable', 'Battery Powered'],
      category: 'Hatchery Equipment',
      sizes: ['Single Egg', 'Multi Egg', 'Professional']
    },
    {
      id: 13,
      name: 'Brooders & Heat Lamps',
      description: 'Essential heating equipment for chick brooding with adjustable temperature settings.',
      rating: 4.8,
      features: ['Adjustable Heat', 'Energy Efficient', 'Safe Design', 'Even Heat Distribution'],
      category: 'Brooding Equipment',
      sizes: ['Small (50 chicks)', 'Medium (100 chicks)', 'Large (200+ chicks)']
    },
    {
      id: 14,
      name: 'Radiant Heaters',
      description: 'Energy-efficient radiant heating systems for large brooding operations.',
      rating: 4.7,
      features: ['Energy Efficient', 'Large Coverage', 'Adjustable Height', 'Safe Operation'],
      category: 'Brooding Equipment',
      sizes: ['Standard', 'Large', 'Industrial']
    },
    {
      id: 15,
      name: 'Brooder Guards',
      description: 'Protective barriers to keep chicks in the optimal heating zone during brooding.',
      rating: 4.5,
      features: ['Chick Safety', 'Adjustable Size', 'Easy Setup', 'Reusable'],
      category: 'Brooding Equipment',
      sizes: ['Small Circle', 'Medium Circle', 'Large Circle']
    },
    {
      id: 16,
      name: 'Ventilation Fans',
      description: 'Industrial ventilation fans to maintain optimal air quality and temperature in poultry houses.',
      rating: 4.7,
      features: ['High Airflow', 'Energy Efficient', 'Quiet Operation', 'Weatherproof'],
      category: 'Ventilation',
      sizes: ['12 inch', '18 inch', '24 inch', '36 inch']
    },
    {
      id: 17,
      name: 'Tunnel Ventilation Systems',
      description: 'Complete tunnel ventilation solutions for modern poultry houses.',
      rating: 4.9,
      features: ['Complete System', 'Climate Control', 'Energy Savings', 'Professional Install'],
      category: 'Ventilation',
      sizes: ['Small House', 'Medium House', 'Large House']
    },
    {
      id: 18,
      name: 'Air Inlets',
      description: 'Adjustable air inlet systems for precise ventilation control.',
      rating: 4.6,
      features: ['Adjustable', 'Weather Seal', 'Easy Control', 'Uniform Airflow'],
      category: 'Ventilation',
      sizes: ['Standard', 'Large', 'Extra Large']
    },
    {
      id: 19,
      name: 'Egg Collection Trays',
      description: 'Durable plastic trays for safe egg collection and transport with stackable design.',
      rating: 4.6,
      features: ['Stackable', 'Easy to Clean', 'Shock Resistant', 'Standard Size'],
      category: 'Egg Handling',
      sizes: ['30 Eggs', '42 Eggs', '48 Eggs']
    },
    {
      id: 20,
      name: 'Egg Grading Machines',
      description: 'Automated egg sizing and grading equipment for commercial operations.',
      rating: 4.8,
      features: ['Automated Grading', 'Multiple Sizes', 'High Accuracy', 'Fast Processing'],
      category: 'Egg Handling',
      sizes: ['Small Scale', 'Commercial', 'Industrial']
    },
    {
      id: 21,
      name: 'Egg Washers',
      description: 'Commercial egg washing equipment for clean, sanitized eggs.',
      rating: 4.7,
      features: ['Automated Washing', 'Sanitizing', 'Gentle Process', 'High Capacity'],
      category: 'Egg Handling',
      sizes: ['Semi-Auto', 'Fully Auto', 'Industrial']
    },
    {
      id: 22,
      name: 'Pig Feeders & Waterers',
      description: 'Heavy-duty feeders and water systems designed specifically for pig farming operations.',
      rating: 4.8,
      features: ['Heavy Duty', 'Waste Reduction', 'Easy Refill', 'Corrosion Resistant'],
      category: 'Pig Equipment',
      sizes: ['Single Space', 'Double Space', 'Multi-Space']
    },
    {
      id: 23,
      name: 'Pig Housing Systems',
      description: 'Complete pig housing solutions with optimal ventilation and space utilization.',
      rating: 4.9,
      features: ['Complete System', 'Optimal Ventilation', 'Easy Cleaning', 'Durable Materials'],
      category: 'Pig Equipment',
      sizes: ['Weaner Pens', 'Grower Pens', 'Finisher Pens']
    },
    {
      id: 24,
      name: 'Farrowing Crates',
      description: 'Specialized farrowing equipment for safe pig birthing and piglet protection.',
      rating: 4.7,
      features: ['Piglet Safety', 'Easy Access', 'Adjustable', 'Hygienic Design'],
      category: 'Pig Equipment',
      sizes: ['Standard', 'Large Sow', 'Premium']
    }
  ];

  const feedingEquipment = equipmentProducts.filter(product => product.category === 'Feeding Equipment');
  const waterSystems = equipmentProducts.filter(product => product.category === 'Water Systems');
  const housingEquipment = equipmentProducts.filter(product => product.category === 'Housing');
  const hatcheryEquipment = equipmentProducts.filter(product => product.category === 'Hatchery Equipment');
  const broodingEquipment = equipmentProducts.filter(product => product.category === 'Brooding Equipment');
  const ventilationEquipment = equipmentProducts.filter(product => product.category === 'Ventilation');
  const eggEquipment = equipmentProducts.filter(product => product.category === 'Egg Handling');
  const pigEquipment = equipmentProducts.filter(product => product.category === 'Pig Equipment');

  const getProductImage = (productName: string) => {
    const imageMap: { [key: string]: string } = {
      'Automatic Feeders': automaticFeedersImage,
      'Chain Feeders': automaticFeedersImage,
      'Feed Hoppers': automaticFeedersImage,
      'Nipple Drinkers': nippleDrinkersImage,
      'Water Pressure Regulators': nippleDrinkersImage,
      'Water Tanks': nippleDrinkersImage,
      'Battery Cages': batteryCagesImage,
      'Free Range Houses': batteryCagesImage,
      'Broiler Pens': batteryCagesImage,
      'Incubators': incubatorImage,
      'Hatchers': incubatorImage,
      'Egg Candlers': incubatorImage,
      'Brooders & Heat Lamps': broodersHeatLampsImage,
      'Radiant Heaters': broodersHeatLampsImage,
      'Brooder Guards': broodersHeatLampsImage,
      'Ventilation Fans': ventilationFansImage,
      'Tunnel Ventilation Systems': ventilationFansImage,
      'Air Inlets': ventilationFansImage,
      'Egg Collection Trays': eggCollectionTraysImage,
      'Egg Grading Machines': eggCollectionTraysImage,
      'Egg Washers': eggCollectionTraysImage,
      'Pig Feeders & Waterers': pigFeedersWaterersImage,
      'Pig Housing Systems': pigFeedersWaterersImage,
      'Farrowing Crates': pigFeedersWaterersImage,
    };
    return imageMap[productName] || automaticFeedersImage;
  };

  const EquipmentSection = ({ title, products }: { title: string; products: any[] }) => {
    const [showAll, setShowAll] = useState(false);
    const [itemsPerRow, setItemsPerRow] = useState(2);
    const rowsToShow = 2;

    useEffect(() => {
      const update = () => {
        const w = window.innerWidth;
        if (w >= 1024) setItemsPerRow(4);
        else if (w >= 768) setItemsPerRow(3);
        else setItemsPerRow(2);
      };
      update();
      window.addEventListener('resize', update);
      return () => window.removeEventListener('resize', update);
    }, []);

    const itemsToShow = showAll ? products.length : rowsToShow * itemsPerRow;
    const displayProducts = products.slice(0, itemsToShow);
    const hasMore = products.length > itemsToShow;

    return (
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {displayProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={getProductImage(product.name)} alt={`${product.name} product image`} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <CardHeader className="pb-4 p-3 md:p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-sm md:text-lg font-bold mb-2">{product.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-3 w-3 md:h-4 md:w-4 fill-secondary text-secondary" />
                      <span className="text-xs md:text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground text-xs md:text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 p-3 md:p-6 pt-0">
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {product.features.slice(0, 2).map((feature: string, index: number) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="text-xs"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                <div>
                  <p className="text-xs md:text-sm font-medium mb-2">Available Options:</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {product.sizes.slice(0, 2).map((size: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-muted text-xs rounded-full"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 md:gap-3 pt-4 border-t">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 gap-1 md:gap-2 text-xs md:text-sm"
                    onClick={() => window.open('tel:0758905603')}
                  >
                    <Phone className="h-3 w-3 md:h-4 md:w-4" />
                    Call
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-primary text-background hover:opacity-90 gap-1 md:gap-2 text-xs md:text-sm"
                    onClick={() => window.open(`https://wa.me/254758905603?text=Hi, I'm interested in ${product.name}`, '_blank')}
                  >
                    <MessageSquare className="h-3 w-3 md:h-4 md:w-4" />
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(true)}
              className="font-semibold"
            >
              See More {title} ({products.length - itemsToShow} more items)
            </Button>
          </div>
        )}

        {showAll && (
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(false)}
              className="font-semibold"
            >
              Show Less
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-background">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Farm Equipment & Accessories
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-background/90 max-w-3xl mx-auto">
                Professional-grade equipment and accessories to modernize your farming operations and increase efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="gap-2"
                  onClick={() => window.open('tel:0758905603')}
                >
                  <Phone className="h-5 w-5" />
                  Call for Quote
                </Button>
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 gap-2"
                  onClick={() => window.open('https://wa.me/254758905603?text=Hi, I\'m interested in your equipment', '_blank')}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Invest in Quality Equipment</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Modern farming equipment that pays for itself through increased efficiency and productivity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Increased Efficiency</h3>
                <p className="text-muted-foreground">Automate routine tasks and reduce manual labor significantly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Better Management</h3>
                <p className="text-muted-foreground">Precise control over feeding, watering, and environmental conditions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Long-term Value</h3>
                <p className="text-muted-foreground">Durable equipment built to last with minimal maintenance required.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Complete Equipment Solutions
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From basic accessories to fully automated systems, we have everything you need for modern farming.
              </p>
            </div>

            <EquipmentSection title="Feeding Systems" products={feedingEquipment} />
            <EquipmentSection title="Water Systems" products={waterSystems} />
            <EquipmentSection title="Housing Solutions" products={housingEquipment} />
            <EquipmentSection title="Hatchery Equipment" products={hatcheryEquipment} />
            <EquipmentSection title="Brooding Equipment" products={broodingEquipment} />
            <EquipmentSection title="Ventilation Systems" products={ventilationEquipment} />
            <EquipmentSection title="Egg Handling" products={eggEquipment} />
            <EquipmentSection title="Pig Equipment" products={pigEquipment} />
          </div>
        </section>

        {/* Installation & Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Support Service</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                We don't just sell equipment - we provide complete installation, training, and ongoing support to ensure your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.open('tel:0758905603')}
                >
                  <Phone className="h-5 w-5" />
                  Schedule Consultation
                </Button>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-background hover:opacity-90 gap-2"
                  onClick={() => window.open('https://wa.me/254758905603?text=Hi, I need help with equipment installation', '_blank')}
                >
                  <MessageSquare className="h-5 w-5" />
                  Get Installation Quote
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

export default EquipmentPage;