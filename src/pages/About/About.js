import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  // Fixed image URLs
  const images = {
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    profile: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
  };
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Color Pattern Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Maria Chen",
      role: "Cultural Integration Expert",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
    },
    {
      name: "Samir Ahmed",
      role: "Global Solutions Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=300&q=80"
    }
  ];

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      
      <div className="pb-10 space-y-12">
        {/* Hero Section */}
        <section className="relative h-96 rounded-xl overflow-hidden mb-12">
          <img 
            src={images.hero}
            alt="Global Connection" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">
                Global Connection
              </h1>
              <p className="text-xl text-white opacity-90">
                Connecting Colors, Cultures & Communities
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <img 
              src={images.team}
              alt="Team working together" 
              className="rounded-lg shadow-xl w-full h-96 object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-primeColor">Who We Are</h2>
            <p className="text-lightText leading-relaxed text-lg">
              Leveraging our <span className="font-semibold text-primeColor">human recruitment matrix</span> and 
              <span className="font-semibold text-primeColor"> culture database</span>, we pioneer
              color-based role identification in global solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-primeColor/10 rounded-lg border border-primeColor/20">
                <h3 className="font-semibold mb-2 text-primeColor">Color Matrix</h3>
                <p className="text-sm text-lightText">Advanced role-color mapping technology</p>
              </div>
              <div className="p-4 bg-primeColor/10 rounded-lg border border-primeColor/20">
                <h3 className="font-semibold mb-2 text-primeColor">Global Network</h3>
                <p className="text-sm text-lightText">24/7 connectivity across 150+ nations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 bg-gray-50 rounded-xl">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primeColor text-center mb-8">
              Our Innovative Team
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
                />
                <p className="font-semibold text-primeColor">{member.name}</p>
                <p className="text-sm text-lightText">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
          </div>
        </section>

        {/* Profile Section */}
        <div className="flex items-center gap-6 p-6 bg-white rounded-xl shadow-md">
          <img 
            src={images.profile}
            alt="Harvey Spector" 
            className="w-24 h-24 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <p className="text-2xl font-bold text-primeColor">Harvey Spector</p>
            <p className="text-lightText">Chief Innovation Officer</p>
            <p className="text-sm text-lightText mt-2">
              "Connecting audio health solutions through color matrix technology"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;