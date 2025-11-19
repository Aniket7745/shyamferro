"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExportByContinent() {
  const data = {
    "North America": [
      "Seattle",
      "Vancouver BC",
      "Tacoma",
      "Portland",
      "Oakland",
      "Los Angeles",
      "Houston",
      "Miami",
      "Savannah",
      "Jacksonville",
      "Charleston",
      "Baltimore",
      "New Jersey",
      "Montreal",
      "Veracruz",
      "San Juan",
      "Cristobal",
      "Kingston",
    ],

    "South America": ["Santos", "Buenos Aires"],

    Europe: [
      "Hamburg",
      "Bremen",
      "Rotterdam",
      "Gothenburg",
      "Southern Port",
      "Barcelona",
      "Valencia",
    ],

    "Middle East": [
      "Alexandria",
      "Jeddah",
      "Port Said",
      "Dubai",
      "Salalah",
      "Karachi",
    ],

    Africa: ["Durban"],

    Asia: [
      "Tianjin",
      "Dalian",
      "Qingdao",
      "Shanghai",
      "Ningbo",
      "Xiamen",
      "Shenzhen",
      "Guangzhou",
      "Hong Kong",
      "Bangkok",
      "Manila",
      "Singapore",
      "Colombo",
      "Osaka",
      "Kobe",
      "Nagoya",
      "Tokyo",
    ],
  };

  // 🌍 COUNTRY FLAG MAP
  const countryFlags: Record<string, string> = {
    // North America
    Seattle: "🇺🇸",
    "Vancouver BC": "🇨🇦",
    Tacoma: "🇺🇸",
    Portland: "🇺🇸",
    Oakland: "🇺🇸",
    "Los Angeles": "🇺🇸",
    Houston: "🇺🇸",
    Miami: "🇺🇸",
    Savannah: "🇺🇸",
    Jacksonville: "🇺🇸",
    Charleston: "🇺🇸",
    Baltimore: "🇺🇸",
    "New Jersey": "🇺🇸",
    Montreal: "🇨🇦",
    Veracruz: "🇲🇽",
    "San Juan": "🇵🇷",
    Cristobal: "🇵🇦",
    Kingston: "🇯🇲",

    // South America
    Santos: "🇧🇷",
    "Buenos Aires": "🇦🇷",

    // Europe
    Hamburg: "🇩🇪",
    Bremen: "🇩🇪",
    Rotterdam: "🇳🇱",
    Gothenburg: "🇸🇪",
    "Southern Port": "🇪🇺",
    Barcelona: "🇪🇸",
    Valencia: "🇪🇸",

    // Middle East
    Alexandria: "🇪🇬",
    Jeddah: "🇸🇦",
    "Port Said": "🇪🇬",
    Dubai: "🇦🇪",
    Salalah: "🇴🇲",
    Karachi: "🇵🇰",

    // Africa
    Durban: "🇿🇦",

    // Asia
    Tianjin: "🇨🇳",
    Dalian: "🇨🇳",
    Qingdao: "🇨🇳",
    Shanghai: "🇨🇳",
    Ningbo: "🇨🇳",
    Xiamen: "🇨🇳",
    Shenzhen: "🇨🇳",
    Guangzhou: "🇨🇳",
    "Hong Kong": "🇭🇰",
    Bangkok: "🇹🇭",
    Manila: "🇵🇭",
    Singapore: "🇸🇬",
    Colombo: "🇱🇰",
    Osaka: "🇯🇵",
    Kobe: "🇯🇵",
    Nagoya: "🇯🇵",
    Tokyo: "🇯🇵",
  };

  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 relative z-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-8">
        Global Export Presence
      </h2>

      <div className="space-y-4">
        {Object.entries(data).map(([continent, places]) => {
          const isOpen = open === continent;

          return (
            <div
              key={continent}
              className="bg-[#0d0d0d] border border-orange-500/30 rounded-xl shadow-lg hover:border-orange-400/60 transition"
            >
              {/* Header */}
              <button
                onClick={() => setOpen(isOpen ? null : continent)}
                className="w-full px-5 py-4 flex justify-between items-center text-left"
              >
                <span className="text-xl text-gray-200 font-semibold flex items-center gap-3">
                  {/* 🔸 DOT FOR CONTINENT */}
                  <span className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_#ff7a18]" />
                  {continent}
                </span>

                {isOpen ? (
                  <ChevronUp className="text-orange-400" />
                ) : (
                  <ChevronDown className="text-orange-400" />
                )}
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div className="px-5 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-fadeIn">
                  {places.map((place) => (
                    <div
                      key={place}
                      className="flex items-center gap-3 px-4 py-2 rounded-lg 
                      bg-black/40 border border-orange-500/20 
                      hover:border-orange-400/60 transition"
                    >
                      {/* 🇨🇳 COUNTRY FLAG */}
                      <span className="text-xl">{countryFlags[place]}</span>

                      <span className="text-gray-300">{place}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
