
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-apnemy-50 to-white"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-apnemy-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-apnemy-300 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-apnemy-400 rounded-full opacity-15 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
              Empowering ServiceNow 
              <span className="block gradient-text">Developers & Customers</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We specialize in empowering ServiceNow developers and customers with expert development, 
              architecture solutions, and technical consultancy - providing unmatched support every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-apnemy-600 hover:bg-apnemy-700 text-white px-8 py-3 text-lg font-semibold group"
              >
                Get Expert Guidance 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold border-apnemy-600 text-apnemy-600 hover:bg-apnemy-50"
              >
                <Play className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="animate-slide-in-right delay-300">
            <div className="relative max-w-3xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"
                alt="ServiceNow development and architecture solutions"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-apnemy-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
