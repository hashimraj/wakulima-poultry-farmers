import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Egg, GraduationCap, Truck, Users, Wrench, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Egg,
      title: 'Hatchery Services',
      description: 'State-of-the-art incubation facilities ensuring high hatch rates and healthy chicks.',
      features: ['Modern Incubators', '95% Hatch Rate', 'Breed Selection', 'Quality Control']
    },
    {
      icon: GraduationCap,
      title: 'Farmer Training',
      description: 'Comprehensive training programs covering modern farming techniques and best practices.',
      features: ['Hands-on Training', 'Certified Courses', 'Follow-up Support', 'Group Sessions']
    },
    {
      icon: Users,
      title: 'Consultation Services',
      description: 'Expert advice on farm setup, disease management, nutrition, and business planning.',
      features: ['Farm Visits', 'Business Planning', 'Disease Prevention', 'Nutrition Guidance']
    },
    {
      icon: Truck,
      title: 'Delivery Services',
      description: 'Safe and timely delivery of livestock, feeds, and equipment globally .',
      features: ['Nationwide Coverage', 'Climate Controlled', 'Tracking System', 'Insurance Coverage']
    },
    {
      icon: Wrench,
      title: 'Equipment & Setup',
      description: 'Complete farm setup services including equipment installation and maintenance.',
      features: ['Farm Design', 'Equipment Supply', 'Installation', 'Maintenance Support']
    },
    {
      icon: Heart,
      title: 'Animal Health',
      description: 'Veterinary services, vaccination programs, and health monitoring for your livestock.',
      features: ['Vaccination Programs', 'Health Monitoring', 'Disease Treatment', 'Preventive Care']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond supplying quality livestock, we provide complete support services to ensure your farming success from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full mt-6 font-semibold">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 shadow-card bg-gradient-hero text-white max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Farming Journey?</h3>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of successful farmers who trust Wakulima for their agricultural needs. 
                Get started with a consultation and personalized farming plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                >
                  Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8"
                  onClick={() => window.open('tel:0798258111')}
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;