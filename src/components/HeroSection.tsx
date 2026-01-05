import { Mountain, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountain.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Snowy mountain ski resort" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl float-animation" />
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary/20 blur-2xl float-animation-delayed" />
      <div className="absolute bottom-40 left-1/4 w-16 h-16 rounded-full bg-accent/20 blur-xl float-animation-slow" />
      
      {/* Snowflake decorations */}
      <Snowflake className="absolute top-32 right-1/4 w-8 h-8 text-primary/30 float-animation" />
      <Snowflake className="absolute top-1/3 left-20 w-6 h-6 text-secondary/40 float-animation-delayed" />
      <Mountain className="absolute bottom-1/4 right-16 w-12 h-12 text-primary/20 float-animation-slow" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Hit the Slopes with Your Squad
        </p>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground mb-6 leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
          THE ULTIMATE
          <br />
          <span className="text-gradient-primary">SKI EXPERIENCE</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Join Broski for unforgettable group ski trips to Borovets, Bulgaria. 
          Epic powder, good vibes, and memories that last forever.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>
            Choose Your Package
          </Button>
          <Button variant="glass" size="xl" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
