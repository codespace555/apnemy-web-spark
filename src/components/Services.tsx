
import { Code, Architecture, Users, Lightbulb, Wrench, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Expert Development",
      description: "Advanced ServiceNow development services with custom applications, workflows, and integrations tailored to your business needs."
    },
    {
      icon: Architecture,
      title: "Architecture Solutions",
      description: "Comprehensive architecture consulting and design for scalable, robust ServiceNow implementations that support enterprise growth."
    },
    {
      icon: Users,
      title: "Developer Empowerment",
      description: "Empower your ServiceNow developers with mentorship, code reviews, and best practices to enhance their skills and productivity."
    },
    {
      icon: Lightbulb,
      title: "Technical Consultancy",
      description: "Strategic technical guidance and consulting services to optimize your ServiceNow platform and maximize business value."
    },
    {
      icon: Wrench,
      title: "Platform Optimization",
      description: "Performance tuning, configuration optimization, and platform enhancement services to ensure peak ServiceNow performance."
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support to build internal ServiceNow expertise within your organization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-apnemy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Our <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide expert ServiceNow development, architecture solutions, and technical consultancy 
            to empower developers and customers with unmatched support at every step.
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
            Need specialized ServiceNow development or architecture guidance? We're here to empower your success.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-apnemy-600 hover:bg-apnemy-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get Expert Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
