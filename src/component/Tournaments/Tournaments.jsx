import React from "react";
import { CalendarCheck, Gamepad2, Info } from "lucide-react";
import Winners from "../Winners/Winners";

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
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-amber-400 tracking-wide drop-shadow-lg flex justify-center items-center gap-4">
          <Gamepad2 size={48} className="text-amber-500 animate-pulse" />
          Tournaments
        </h1>

        {/* Upcoming Tournaments */}
        <section className="mb-24">
          <h2 className="text-4xl md:text-3xl font-bold text-red-500 mb-10 flex items-center justify-center md:justify-start gap-3 drop-shadow-md">
            <CalendarCheck size={28} className="text-red-600" />
            Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="bg-gradient-to-tr from-gray-800 to-gray-900 p-8 rounded-3xl border-l-8 border-red-600 shadow-2xl hover:shadow-amber-400 transform hover:scale-105 transition duration-300 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl md:text-3xl text-amber-300 font-extrabold tracking-wide">
                    {tournament.title}
                  </h3>
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-semibold
                      ${
                        tournament.status === "Registration Open"
                          ? "bg-green-600 text-green-100"
                          : "bg-red-600 text-white"
                      }`}
                  >
                    {tournament.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-2 text-lg">
                  <span className="text-red-400 font-semibold">Game:</span>{" "}
                  {tournament.game}
                </p>
                <p className="text-gray-300 mb-2 text-lg">
                  <span className="text-red-400 font-semibold">Date:</span>{" "}
                  {tournament.date}
                </p>
                <p className="text-gray-300 mb-6 text-lg">
                  <span className="text-red-400 font-semibold">
                    Prize Pool:
                  </span>{" "}
                  {tournament.prize}
                </p>

                {tournament.status === "Registration Open" && (
                  <div className="flex gap-4">
                    <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-3 rounded-xl w-full shadow-md transition duration-200">
                      View Details
                    </button>
                    <button
                      onClick={() =>
                        window.open(
                          "https://forms.gle/9ZuikgzASMkxK9ov8",
                          "_blank"
                        )
                      }
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-xl w-full shadow-md transition duration-200"
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
          <h2 className="text-4xl md:text-3xl font-bold text-red-500 mb-8 flex items-center gap-3 justify-center md:justify-start drop-shadow-md">
            <Info size={28} className="text-yellow-400" />
            Tournament Rules
          </h2>
          <div className="bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-700 max-w-4xl mx-auto">
            <ul className="list-disc list-inside text-gray-300 space-y-4 text-lg leading-relaxed">
              <li>
                All participants must be registered members of Warrior Gaming.
              </li>
              <li>
                Team registration deadlines are 48 hours before tournament
                start.
              </li>
              <li>All players must use approved gaming peripherals.</li>
              <li>Streaming rights are reserved by Warrior Gaming.</li>
              <li>
                Prize distribution will occur within 30 days of tournament
                completion.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Winners />
    </div>
  );
};

export default Tournaments;
