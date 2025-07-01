
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "200+", label: "Developers Empowered" },
    { number: "100+", label: "Enterprise Clients" },
    { number: "500+", label: "Solutions Delivered" },
    { number: "24/7", label: "Technical Support" }
  ];

  const features = [
    {
      icon: Target,
      title: "Expert Development",
      description: "Specialized ServiceNow development expertise with proven methodologies and best practices for scalable solutions."
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "We empower ServiceNow developers with advanced training, mentorship, and technical guidance to excel in their projects."
    },
    {
      icon: Award,
      title: "Architecture Solutions",
      description: "Comprehensive architecture consulting to design robust, scalable ServiceNow implementations that grow with your business."
    },
    {
      icon: Zap,
      title: "Technical Consultancy",
      description: "Unmatched technical consultancy providing strategic guidance and hands-on support throughout your ServiceNow journey."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Apnemy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are ServiceNow specialists dedicated to empowering developers and customers with expert development, 
            architecture solutions, and technical consultancy - providing unmatched support every step of the way.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-apnemy-100 rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-apnemy-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold font-poppins mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to elevate your ServiceNow development capabilities? Let's discuss how we can empower your team.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-apnemy-600 hover:bg-apnemy-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Start Your ServiceNow Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
