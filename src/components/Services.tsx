
import { Code, Smartphone, Cloud, BarChart, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience."
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile apps that engage users and drive business growth."
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services to optimize your business operations."
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics and reporting solutions."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to keep your systems running smoothly."
    }
  ];

  return (
    <section id="services" className="py-20 bg-apnemy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to meet your unique 
            business needs and drive sustainable growth.
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
            Don't see what you're looking for? We offer custom solutions tailored to your needs.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-apnemy-600 hover:bg-apnemy-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
