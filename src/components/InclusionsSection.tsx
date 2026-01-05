import { Map, CheckCircle, Plane, Car, Hotel, Snowflake, Ticket, MessageSquare } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Register & choose your vibe",
    description: "You fill in the form, pick the package that suits you Standard, Ski Blast or Luxury."
  },
  {
    number: 2,
    title: "Quick call / meeting",
    description: "We schedule a short call or meeting to walk you through: dates, flights, room options, add-ons and any questions. This is your chance to get a full debrief before you commit."
  },
  {
    number: 3,
    title: "Lock in your spot",
    description: "Once you're happy, you pay for your chosen package (deposit or full amount depending on timings). We send over a clear confirmation with everything you've booked."
  },
  {
    number: 4,
    title: "Trip prep",
    description: "We share a pre-trip checklist, group chat link and final timings so you know exactly what to bring, where to be and when."
  }
];

const whatWeSort = [
  { icon: Plane, text: "Flights – return flights for your chosen dates" },
  { icon: Car, text: "Airport transfers – to and from the ski resort" },
  { icon: Hotel, text: "Accommodation – selected hotel/apartment" },
  { icon: Snowflake, text: "Ski / snowboard hire – gear ready for you in resort" },
  { icon: Ticket, text: "Lift passes – arranged so you're ready to hit the slopes" },
  { icon: MessageSquare, text: "Trip coordination – group chat, schedule and support before & during the trip" }
];

const InclusionsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">THE DETAILS</p>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">
            HOW <span className="text-gradient-primary">BROSKI</span> WORKS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From first message to first chairlift – here's what happens.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Your Broski roadmap */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Map className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">Your Broski roadmap</h3>
            </div>
            <div className="space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display text-lg text-foreground mb-2">Step {step.number} – {step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - What we sort for you */}
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">What we sort for you</h3>
            </div>
            <ul className="space-y-4 mb-8">
              {whatWeSort.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic border-t border-border pt-6">
              You focus on studying hard and skiing harder – we handle the logistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InclusionsSection;
