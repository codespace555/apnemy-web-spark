
import { Target, Users, Award, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "3", label: "Platform Expertise" },
    { number: "100+", label: "Enterprise Clients" },
    { number: "500+", label: "Solutions Delivered" },
    { number: "24/7", label: "Technical Support" }
  ];

  const features = [
    {
      icon: Target,
      title: "Platform Experts",
      description: "Certified developers & architects across ServiceNow, Salesforce & Azure with deep industry expertise."
    },
    {
      icon: Users,
      title: "Consultative Approach",
      description: "We don't sell – we collaborate, advise, and deliver solutions that truly fit your business needs."
    },
    {
      icon: Award,
      title: "Agile & Scalable Delivery",
      description: "Fast results with long-term maintainability, ensuring your solutions grow with your business."
    },
    {
      icon: Zap,
      title: "Value-Driven Solutions",
      description: "Transparent, cost-effective, and outcome-focused approach with security and compliance baked into every solution."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Apnemy</span>
          </h2>
          <div className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              At Apnemy, we are passionate about solving real business problems through technology. 
              We specialize in delivering enterprise-grade solutions using ServiceNow, Salesforce, and Microsoft Azure, 
              backed by deep industry expertise and a consultative approach.
            </p>
            <p>
              Our mission is to bridge the gap between business goals and technical execution, offering tailored services 
              that bring clarity, speed, and value to every project.
            </p>
            <p>
              Whether you're starting your digital journey or scaling to the next level, Apnemy is your trusted technology partner.
            </p>
          </div>
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
            Ready to modernize your business with smart cloud solutions? Let's discuss how we can help you achieve your goals.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-apnemy-600 hover:bg-apnemy-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Start Your Digital Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
