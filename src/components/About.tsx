
import { Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering solutions that make a real impact on your business success."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships through exceptional service."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            About <span className="gradient-text">Apnemy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded on the principle of empowering businesses through technology, 
            Apnemy has been at the forefront of digital transformation for companies 
            across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold font-poppins mb-6">
              Transforming Ideas into Reality
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Apnemy, we believe that every business has unique challenges that require 
              tailored solutions. Our team of experts combines technical expertise with 
              business acumen to deliver results that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups to enterprise-level organizations, we've helped hundreds of 
              clients achieve their digital transformation goals through innovative 
              technology solutions and strategic consulting.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-apnemy-100 rounded-full mb-4">
                <value.icon className="h-8 w-8 text-apnemy-600" />
              </div>
              <h4 className="text-xl font-semibold font-poppins mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
