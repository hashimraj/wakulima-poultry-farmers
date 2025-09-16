import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Truck, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Knowledge',
      description: 'Over 15 years of experience in poultry and pig farming with certified professionals.'
    },
    {
      icon: Users,
      title: 'Farmer Community',
      description: 'Supporting over 10,000 farmers globally with training and ongoing consultation.'
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Swift and safe delivery services to ensure your livestock reaches you in perfect condition.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'All our products undergo strict quality control and health checks for your peace of mind.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Wakulima?
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Wakulima Poultry Farmers, we're more than just suppliers – we're your partners in agricultural success. 
              From our modern hatchery to comprehensive farmer training programs, we provide everything you need to build 
              a thriving poultry and pig farming business.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Modern Facilities</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art facilities equipped with the latest technology for optimal livestock production.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-warm rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Support</h3>
                  <p className="text-muted-foreground">
                    From initial setup to ongoing consultation, we're with you every step of your farming journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-green transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-card bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed opacity-90">
                To empower farmers with high-quality livestock, expert knowledge, and sustainable farming solutions 
                that enhance food security and improve livelihoods across our communities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-card bg-gradient-warm text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed opacity-90">
                To be the leading agricultural partner, fostering innovation in poultry and pig farming while 
                building resilient farming communities that thrive for generations to come.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;