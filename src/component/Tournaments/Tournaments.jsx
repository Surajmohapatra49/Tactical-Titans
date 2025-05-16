import React from "react";
import { CalendarCheck, Gamepad2, Info } from "lucide-react";

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Battle Royale Championship",
      game: "Apex Legends",
      date: "June 15, 2025",
      prize: "$10,000",
      status: "Registration Open",
    },
    {
      id: 2,
      title: "Tactical Showdown",
      game: "Valorant",
      date: "July 1, 2025",
      prize: "$7,500",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "MOBA Masters",
      game: "League of Legends",
      date: "July 22, 2025",
      prize: "$15,000",
      status: "Upcoming",
    },
  ];

  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-amber-400 tracking-wide drop-shadow-lg">
          <Gamepad2
            className="inline-block mr-3 mb-1 text-amber-500"
            size={40}
          />
          Tournaments
        </h1>

        {/* Upcoming Tournaments */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-red-500 mb-8 flex items-center">
            <CalendarCheck className="mr-2 text-red-600" /> Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-gradient-to-tr from-gray-800 to-gray-900 p-6 rounded-xl border-l-4 border-red-600 shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl text-amber-300 font-bold">
                    {tournament.title}
                  </h3>
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {tournament.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-1">
                  <span className="text-red-400 font-medium">Game:</span>{" "}
                  {tournament.game}
                </p>
                <p className="text-gray-300 mb-1">
                  <span className="text-red-400 font-medium">Date:</span>{" "}
                  {tournament.date}
                </p>
                <p className="text-gray-300 mb-4">
                  <span className="text-red-400 font-medium">Prize Pool:</span>{" "}
                  {tournament.prize}
                </p>

                {tournament.id === 1 && (
                  <div className="flex gap-3">
                    <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded w-full">
                      View Details
                    </button>
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded w-full"
                      onClick={() =>
                        window.open(
                          "https://forms.gle/9ZuikgzASMkxK9ov8",
                          "_blank"
                        )
                      }
                    >
                      Register Now
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tournament Rules */}
        <section>
          <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center">
            <Info className="mr-2 text-yellow-400" /> Tournament Rules
          </h2>
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
              <li>
                All participants must be registered members of Warrior Gaming
              </li>
              <li>
                Team registration deadlines are 48 hours before tournament start
              </li>
              <li>All players must use approved gaming peripherals</li>
              <li>Streaming rights are reserved by Warrior Gaming</li>
              <li>
                Prize distribution will occur within 30 days of tournament
                completion
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tournaments;
