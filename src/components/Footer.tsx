import { Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl text-foreground mb-2">BROSKI</h3>
            <p className="text-muted-foreground">Epic ski trips for epic people.</p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-card/60 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-xl bg-card/60 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="mailto:hello@broski.ski" 
              className="w-10 h-10 rounded-xl bg-card/60 border border-border/50 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Broski. All rights reserved. 
            <span className="mx-2">|</span>
            Made with ❄️ for ski lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
