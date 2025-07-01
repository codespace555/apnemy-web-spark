
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@apnemy.com",
      link: "mailto:contact@apnemy.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91-XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "India",
      link: "#"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.apnemy.com",
      link: "https://www.apnemy.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-apnemy-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to work together? Let's connect. Have a project, idea, or problem you'd like 
            solved with technology? We're just an email away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold font-poppins mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-apnemy-600 hover:bg-apnemy-700 text-white py-3 text-lg font-semibold group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-6">Let's start a conversation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you have a specific project in mind or just want to explore 
                  possibilities, we're here to help. Reach out to us through any of 
                  the channels below.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-apnemy-100 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-apnemy-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-poppins mb-1">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-apnemy-600 transition-colors duration-200"
                      >
                        {info.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border">
                <h4 className="font-semibold font-poppins mb-2">Quick Response Guarantee</h4>
                <p className="text-muted-foreground">
                  We typically respond to all inquiries within 2-4 hours during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
