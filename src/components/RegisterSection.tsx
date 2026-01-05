import { MessageCircle, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegisterSection = () => {
  const whatsappNumber = "447483365531"; // +44 7483 365531 without + and spaces
  const whatsappMessage = "Hi! I'm interested in joining a Broski ski trip. Can you tell me more?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="register" className="py-24 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-medium tracking-widest uppercase mb-4">Join the Crew</p>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              REGISTER YOUR <span className="text-gradient-primary">INTEREST</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Spots fill up fast! Register now and be first to know when bookings open.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 space-y-6">
            <div className="text-center space-y-6">
              <p className="text-muted-foreground">
                Click the button below to message us on WhatsApp and we'll get back to you with all the details!
              </p>
              
              <Button 
                asChild
                variant="hero" 
                size="xl" 
                className="w-full"
              >
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Message Us on WhatsApp
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                By messaging us, you agree to receive updates about Broski ski trips. 
                No spam, just snow. <Snowflake className="w-4 h-4 inline" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
