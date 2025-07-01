
import { Settings, Users, Shield, Workflow, Database, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "IT Service Management",
      description: "Complete ITSM solutions including Incident, Problem, Change, and Knowledge Management modules."
    },
    {
      icon: Users,
      title: "HR Service Delivery",
      description: "Streamline HR processes with Employee Service Center, Case Management, and HR workflows."
    },
    {
      icon: Shield,
      title: "Security Operations",
      description: "Implement Security Incident Response, Vulnerability Response, and GRC modules for comprehensive security."
    },
    {
      icon: Workflow,
      title: "IT Operations Management",
      description: "Monitor and manage your IT infrastructure with Event Management, Discovery, and Service Mapping."
    },
    {
      icon: Database,
      title: "Customer Service Management",
      description: "Enhance customer experience with Customer Service, Field Service Management, and Telecommunications modules."
    },
    {
      icon: HeadphonesIcon,
      title: "Platform & Integration",
      description: "Custom app development, platform optimization, and seamless integrations with third-party systems."
    }
  ];

  return (
    <section id="services" className="py-20 bg-apnemy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            ServiceNow <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive ServiceNow solutions across all modules, 
            helping organizations optimize their processes and achieve digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-apnemy-100 rounded-lg mb-6 group-hover:bg-apnemy-600 transition-colors duration-300">
                <service.icon className="h-7 w-7 text-apnemy-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-semibold font-poppins mb-4 group-hover:text-apnemy-600 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Need a specific ServiceNow module implementation or custom solution? We've got you covered.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-apnemy-600 hover:bg-apnemy-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get ServiceNow Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
