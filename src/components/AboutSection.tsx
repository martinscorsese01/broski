import { Users, Mountain, PartyPopper, Snowflake } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">About Us</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
            WHO IS <span className="text-gradient-gold">BROSKI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a crew of ski-obsessed students and young professionals who believe that the best adventures 
            happen when you hit the mountains with your mates. No boring tours, no stuffy hotells, 
            just pure snow, and good times.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {[
              {
                icon: Mountain,
                title: "Epic Slopes",
                description: "Borovets offers incredible terrain for all skill levels"
              },
              {
                icon: Users,
                title: "Squad Goals",
                description: "Travel with like-minded people from top universities"
              },
              {
                icon: Snowflake,
                title: "Fresh Powder",
                description: "February = prime time for the best snow conditions"
              }
            ].map((feature, index) => (
            <div 
              key={feature.title}
              className="glass rounded-2xl p-8 text-center hover:translate-y-[-8px] transition-all duration-300 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
