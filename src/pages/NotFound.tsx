import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Snowflake, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-secondary/10 blur-3xl" />
      <Snowflake className="absolute top-32 right-1/4 w-12 h-12 text-primary/20 float-animation" />
      <Snowflake className="absolute bottom-32 left-1/4 w-8 h-8 text-secondary/20 float-animation-delayed" />
      
      <div className="text-center relative z-10">
        <h1 className="font-display text-8xl md:text-9xl text-foreground mb-4">404</h1>
        <p className="text-2xl text-muted-foreground mb-8">Oops! Looks like you skied off the trail.</p>
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <Home className="w-5 h-5" />
            Back to Base
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
