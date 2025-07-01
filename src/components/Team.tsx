
import { Code, Users, Cloud, Palette, Settings } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Naman Kumar",
      role: "Founder & Lead Developer",
      description: "Visionary behind Apnemy, with deep expertise in ServiceNow and web technologies. Focused on scalable solutions and clean design.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Anjali Verma",
      role: "Salesforce Consultant",
      description: "Sales Cloud, Service Cloud & Marketing Cloud expert — helping clients deliver seamless customer experiences.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Rahul Singh",
      role: "Azure Cloud Architect",
      description: "Designs robust Azure solutions with a focus on infrastructure, automation, and cost efficiency.",
      icon: Cloud,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      description: "Delivers intuitive, clean, and responsive designs that enhance user engagement and satisfaction.",
      icon: Palette,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      name: "Amit Chauhan",
      role: "ServiceNow Specialist",
      description: "Builds advanced workflows, portals, and automations that boost productivity across departments.",
      icon: Settings,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our passionate team of experts brings together diverse skills and deep expertise 
            across ServiceNow, Salesforce, and Azure platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="inline-flex items-center justify-center w-12 h-12 bg-apnemy-100 rounded-lg mb-4 group-hover:bg-apnemy-600 transition-colors duration-300">
                  <member.icon className="h-6 w-6 text-apnemy-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold font-poppins mb-2 group-hover:text-apnemy-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-apnemy-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
