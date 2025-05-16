import React from "react";
import { Trophy, Star, Users } from "lucide-react";

const Winners = () => {
  const recentWinners = [
    {
      id: 1,
      tournament: "Battle Royale Championship 2024",
      team: "Alpha Squad",
      prize: "$12,000",
      date: "December 15, 2024",
    },
    {
      id: 2,
      tournament: "Tactical Showdown Fall 2024",
      team: "Phoenix Fire",
      prize: "$8,500",
      date: "October 30, 2024",
    },
    {
      id: 3,
      tournament: "MOBA Masters 2024",
      team: "Nexus Warriors",
      prize: "$20,000",
      date: "September 22, 2024",
    },
  ];

  const hallOfFame = [
    {
      id: 1,
      name: 'Michael "DeathBringer" Rodriguez',
      achievements: "3x Champion, Most Valuable Player 2024",
      games: "Valorant, CS:GO",
      inducted: "2024",
    },
    {
      id: 2,
      name: 'Sarah "Quantum" Park',
      achievements: "World Record Holder, 5x Tournament Winner",
      games: "League of Legends, Dota 2",
      inducted: "2023",
    },
    {
      id: 3,
      name: "Team Dominance",
      achievements: "Undefeated 2023 Season, International Champions",
      games: "Multiple Titles",
      inducted: "2024",
    },
  ];

  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-amber-400 tracking-wide drop-shadow-lg">
          <Trophy className="inline-block mr-3 mb-1 text-amber-500" size={40} />
          Winners Circle
        </h1>

        {/* Recent Winners Table */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
            <Users className="mr-2 text-red-600" /> Recent Tournament Winners
          </h2>
          <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-700">
            <table className="min-w-full bg-gray-800 text-sm text-left">
              <thead className="bg-gray-700 text-amber-400 uppercase text-xs">
                <tr>
                  <th className="py-4 px-6">Tournament</th>
                  <th className="py-4 px-6">Team</th>
                  <th className="py-4 px-6">Prize</th>
                  <th className="py-4 px-6">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {recentWinners.map((winner) => (
                  <tr
                    key={winner.id}
                    className="hover:bg-gray-700/80 transition duration-200"
                  >
                    <td className="py-4 px-6">{winner.tournament}</td>
                    <td className="py-4 px-6 text-blue-300">{winner.team}</td>
                    <td className="py-4 px-6 text-green-400 font-bold">
                      {winner.prize}
                    </td>
                    <td className="py-4 px-6 text-gray-400">{winner.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Hall of Fame */}
        <section>
          <h2 className="text-3xl font-bold text-red-500 mb-8 flex items-center">
            <Star className="mr-2 text-yellow-400" /> Hall of Fame
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hallOfFame.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl border-t-4 border-amber-500 shadow-lg transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-2xl font-semibold text-amber-300 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300 mb-2">
                  <span className="text-red-500 font-medium">
                    Achievements:
                  </span>{" "}
                  {member.achievements}
                </p>
                <p className="text-gray-300 mb-2">
                  <span className="text-red-500 font-medium">Games:</span>{" "}
                  {member.games}
                </p>
                <p className="text-gray-300">
                  <span className="text-red-500 font-medium">Inducted:</span>{" "}
                  {member.inducted}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Winners;
