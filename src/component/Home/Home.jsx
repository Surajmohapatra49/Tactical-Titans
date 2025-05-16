import React from "react";
import MainContainer from "../MainContainer/MainContainer";
import { Trophy, Users, Newspaper } from "lucide-react";

const Home = () => {
  return (
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
          <div className="bg-gradient-to-br from-red-900/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-500 transition-all duration-300 shadow-2xl hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-red-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-red-400">
                Latest Tournaments
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Battle in our elite online arenas and face off with the world’s
              best. Weekly prizes, prestige, and bragging rights await in our
              epic showdowns.
            </p>
          </div>

          {/* Card 2: Top Players */}
          <div className="bg-gradient-to-br from-red-900/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-500 transition-all duration-300 shadow-2xl hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-red-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-red-400">Top Players</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Meet the legends. Our leaderboard showcases elite gamers across
              genres. Track the champions and aim to climb the ranks yourself.
            </p>
          </div>

          {/* Card 3: Gaming News */}
          <div className="bg-gradient-to-br from-red-900/10 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-amber-500 transition-all duration-300 shadow-2xl hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <Newspaper className="text-red-500 w-8 h-8" />
              <h3 className="text-2xl font-bold text-red-400">Gaming News</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Stay updated with the latest releases, esports announcements,
              patch updates, and trending community stories — all in one place.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
