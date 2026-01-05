import { Calendar, Star, Sparkles, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Ski Blast",
    dates: "7–9 February",
    price: "From £499",
    featured: false,
    icon: Sparkles,
    highlights: [
      "3 days / 2 nights",
      "Accommodation",
      "1-day lift pass",
      "Airport transfers"
    ],
    description: "Perfect for a quick powder fix"
  },
  {
    name: "Standard",
    dates: "8–12 February",
    price: "From £749",
    featured: true,
    icon: Star,
    highlights: [
      "5 days / 4 nights",
      "Accommodation",
      "3-day lift pass", 
      "Airport transfers",
    ],
    description: "Our most popular package"
  },
  {
    name: "Luxury",
    dates: "8–12 February",
    price: "From £999",
    featured: false,
    icon: Crown,
    highlights: [
      "5 days / 4 nights",
      "4★ hotel with spa",
      "3-day lift pass",
      "Private transfers",
    ],
    description: "The ultimate ski experience"
  }
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">Packages</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            CHOOSE YOUR <span className="text-gradient-primary">ADVENTURE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three epic packages designed for different vibes and budgets. 
            All include the essentials, you just bring the stoke.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name}
              variant={pkg.featured ? "packageFeatured" : "package"}
              className={`relative overflow-hidden ${pkg.featured ? 'md:-translate-y-4' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-secondary to-secondary/50" />
              )}
              
              <CardHeader className="text-center pb-4">
                {pkg.featured && (
                  <span className="inline-block px-4 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4 mx-auto">
                    Most Popular
                  </span>
                )}
                <div className={`w-14 h-14 rounded-2xl ${pkg.featured ? 'bg-secondary/20' : 'bg-primary/10'} flex items-center justify-center mx-auto mb-4`}>
                  <pkg.icon className={`w-7 h-7 ${pkg.featured ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <CardTitle className={`text-3xl ${pkg.featured ? 'text-secondary' : 'text-foreground'}`}>
                  {pkg.name}
                </CardTitle>
                <CardDescription className="flex items-center justify-center gap-2 mt-2">
                  <Calendar className="w-4 h-4" />
                  {pkg.dates}
                </CardDescription>
                <p className="font-display text-4xl text-foreground mt-4">{pkg.price}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-center mb-6">{pkg.description}</p>
                <ul className="space-y-3 flex flex-col items-center">
                  {pkg.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center justify-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${pkg.featured ? 'bg-secondary/20' : 'bg-primary/20'} flex items-center justify-center flex-shrink-0`}>
                        <div className={`w-2 h-2 rounded-full ${pkg.featured ? 'bg-secondary' : 'bg-primary'}`} />
                      </div>
                      <span className="text-muted-foreground text-center">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={pkg.featured ? "gold" : "hero"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
