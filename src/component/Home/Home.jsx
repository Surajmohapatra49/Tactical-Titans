import React from "react";
import MainContainer from "../MainContainer/MainContainer";
import { Trophy, Users, Newspaper } from "lucide-react";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <div className="pt-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black min-h-screen text-white font-sans">
        {/* Hero Section */}
        <MainContainer />

        {/* Featured Cards */}
        <section className="container mx-auto px-6 py-24">
          <h2 className="text-5xl font-extrabold text-center text-amber-400 mb-20 drop-shadow-2xl tracking-wide">
            What’s Hot in Titans Gaming
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Card 1: Tournaments */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-tr from-red-900/30 to-red-700/10 border border-red-500/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(255,0,0,0.2)] transition-transform transform hover:-translate-y-2 hover:shadow-red-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-red-500/20 rounded-full p-3 ring-2 ring-red-400 group-hover:ring-4 transition duration-300">
                  <Trophy className="w-8 h-8 text-red-300" />
                </div>
                <h3 className="text-2xl font-bold text-red-300">
                  Latest Tournaments
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Battle in our elite online arenas and face off with the world’s
                best. Weekly prizes, prestige, and bragging rights await in our
                epic showdowns.
              </p>
            </div>

            {/* Card 2: Top Players */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-tr from-indigo-900/30 to-indigo-700/10 border border-indigo-500/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(99,102,241,0.2)] transition-transform transform hover:-translate-y-2 hover:shadow-indigo-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-500/20 rounded-full p-3 ring-2 ring-indigo-400 group-hover:ring-4 transition duration-300">
                  <Users className="w-8 h-8 text-indigo-300" />
                </div>
                <h3 className="text-2xl font-bold text-indigo-300">
                  Top Players
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Meet the legends. Our leaderboard showcases elite gamers across
                genres. Track the champions and aim to climb the ranks yourself.
              </p>
            </div>

            {/* Card 3: Gaming News */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-tr from-emerald-900/30 to-emerald-700/10 border border-emerald-500/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(16,185,129,0.2)] transition-transform transform hover:-translate-y-2 hover:shadow-emerald-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-emerald-500/20 rounded-full p-3 ring-2 ring-emerald-400 group-hover:ring-4 transition duration-300">
                  <Newspaper className="w-8 h-8 text-emerald-300" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-300">
                  Gaming News
                </h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                Stay updated with the latest releases, esports announcements,
                patch updates, and trending community stories — all in one
                place.
              </p>
            </div>
          </div>
        </section>
      </div>
      <About />
    </div>
  );
};

export default Home;
