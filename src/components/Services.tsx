
import { Code, Building2, Users, Lightbulb, Wrench, GraduationCap, Zap, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Expert Development",
      description: "Specialized development services for ServiceNow, Salesforce, and Azure using best practices and modern tools for scalable and secure solutions."
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "We offer hands-on guidance and mentoring for your internal developers, helping them grow with real-world techniques and architecture exposure."
    },
    {
      icon: Building2,
      title: "Architecture Solutions",
      description: "Design and implement scalable architectures for enterprise cloud environments — from Azure microservices to integrated Salesforce-ServiceNow systems."
    },
    {
      icon: Lightbulb,
      title: "Technical Consultancy",
      description: "Strategic consulting for planning, implementation, and optimization across platforms, ensuring you get the most from your cloud investment."
    },
    {
      icon: GraduationCap,
      title: "Platform Advisory",
      description: "Not sure where to start? We evaluate your goals and recommend the best technology stack — from ServiceNow workflows to Azure infrastructure."
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Automate and improve business processes with low-code tools, integrations, and workflow engines that reduce errors and increase efficiency."
    },
    {
      icon: Wrench,
      title: "Cloud Modernization",
      description: "Seamlessly migrate legacy systems to Azure or Salesforce Cloud with a smooth, secure, and future-proof plan."
    },
    {
      icon: Zap,
      title: "Solution Design & Strategy",
      description: "We co-create digital solutions tailored to your business objectives — with a sharp focus on ROI, speed, and innovation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-apnemy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Services <span className="gradient-text">We Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive cloud solutions across ServiceNow, Salesforce, and Microsoft Azure 
            to help your business modernize, automate, and scale effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-apnemy-100 rounded-lg mb-4 group-hover:bg-apnemy-600 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-apnemy-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-lg font-semibold font-poppins mb-3 group-hover:text-apnemy-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with our comprehensive cloud solutions?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-apnemy-600 hover:bg-apnemy-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Let's Build Something Great Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
