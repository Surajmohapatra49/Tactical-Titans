import React from "react";
import { Users, ShieldCheck, Star } from "lucide-react";
import rajeshImg from "../../assets/a.jpg";
import surajImg from "../../assets/b.jpg";
import sandeepImg from "../../assets/c.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="pt-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-extrabold text-amber-400 mb-16 text-center drop-shadow-lg tracking-wide">
          <Users className="inline-block mr-3 mb-1 text-amber-500" size={40} />
          About Titans Gaming
        </h1>

        {/* Mission & Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Mission */}
          <div>
            <h2 className="text-3xl text-red-600 font-bold mb-4 flex items-center">
              <ShieldCheck className="mr-2 text-red-500" /> Our Mission
            </h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Titans Gaming was founded with a simple mission: to create the
              ultimate gaming community where players can compete, connect, and
              celebrate their passion for gaming.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Since our founding in 2015, we've grown from a small local
              community to a global network of gamers who share our values of
              fair play, continuous improvement, and gaming excellence.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-700">
            <h2 className="text-3xl text-red-600 font-bold mb-4 flex items-center">
              <Star className="mr-2 text-yellow-400" /> Core Values
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-base">
              <li>Fair competition and sportsmanship</li>
              <li>Community-first approach</li>
              <li>Innovation in gaming experiences</li>
              <li>Accessibility for all skill levels</li>
              <li>Continuous growth and learning</li>
            </ul>
          </div>
        </div>

        {/* Our Team */}
        <div>
          <h2 className="text-3xl text-red-600 font-bold mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Card */}
            {[
              { name: "john", role: "Founder & CEO", img: rajeshImg },
              { name: "john", role: "Tournament Director", img: surajImg },
              { name: "john", role: "Community Manager", img: sandeepImg },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-gray-900 p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-amber-400"
                />
                <h3 className="text-xl font-bold text-amber-400">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
