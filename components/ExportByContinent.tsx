"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ExportByContinent() {
  const data = {
    "North America": [
      "Seattle", "Vancouver BC", "Tacoma", "Portland", "Oakland", "Los Angeles",
      "Houston", "Miami", "Savannah", "Jacksonville", "Charleston", "Baltimore",
      "New Jersey", "Montreal", "Veracruz", "San Juan", "Cristobal", "Kingston",
    ],
    "South America": ["Santos", "Buenos Aires"],
    Europe: ["Hamburg", "Bremen", "Rotterdam", "Gothenburg", "Southern Port", "Barcelona", "Valencia"],
    "Middle East": ["Alexandria", "Jeddah", "Port Said", "Dubai", "Salalah", "Karachi"],
    Africa: ["Durban"],
    Asia: [
      "Tianjin", "Dalian", "Qingdao", "Shanghai", "Ningbo", "Xiamen", "Shenzhen",
      "Guangzhou", "Hong Kong", "Bangkok", "Manila", "Singapore", "Colombo",
      "Osaka", "Kobe", "Nagoya", "Tokyo",
    ],
  };

  const countryFlags: Record<string, string> = {
    Seattle: "🇺🇸", "Vancouver BC": "🇨🇦", Tacoma: "🇺🇸", Portland: "🇺🇸", Oakland: "🇺🇸",
    "Los Angeles": "🇺🇸", Houston: "🇺🇸", Miami: "🇺🇸", Savannah: "🇺🇸", Jacksonville: "🇺🇸",
    Charleston: "🇺🇸", Baltimore: "🇺🇸", "New Jersey": "🇺🇸", Montreal: "🇨🇦",
    Veracruz: "🇲🇽", "San Juan": "🇵🇷", Cristobal: "🇵🇦", Kingston: "🇯🇲",
    Santos: "🇧🇷", "Buenos Aires": "🇦🇷",
    Hamburg: "🇩🇪", Bremen: "🇩🇪", Rotterdam: "🇳🇱", Gothenburg: "🇸🇪", "Southern Port": "🇪🇺",
    Barcelona: "🇪🇸", Valencia: "🇪🇸",
    Alexandria: "🇪🇬", Jeddah: "🇸🇦", "Port Said": "🇪🇬", Dubai: "🇦🇪", Salalah: "🇴🇲", Karachi: "🇵🇰",
    Durban: "🇿🇦",
    Tianjin: "🇨🇳", Dalian: "🇨🇳", Qingdao: "🇨🇳", Shanghai: "🇨🇳", Ningbo: "🇨🇳", Xiamen: "🇨🇳",
    Shenzhen: "🇨🇳", Guangzhou: "🇨🇳", "Hong Kong": "🇭🇰", Bangkok: "🇹🇭", Manila: "🇵🇭",
    Singapore: "🇸🇬", Colombo: "🇱🇰", Osaka: "🇯🇵", Kobe: "🇯🇵", Nagoya: "🇯🇵", Tokyo: "🇯🇵",
  };

  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-12 relative z-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">
        Global Export Presence
      </h2>

      <div className="space-y-4">
        {Object.entries(data).map(([continent, places]) => {
          const isOpen = open === continent;

          return (
            <div
              key={continent}
              className="
                bg-white dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                hover:border-orange-500/60 dark:hover:border-orange-400/60
                rounded-xl shadow-md
                transition-colors
              "
            >
              {/* Header */}
              <button
                onClick={() => setOpen(isOpen ? null : continent)}
                className="
                  w-full px-4 sm:px-5 py-4 
                  flex justify-between items-center 
                  text-left touch-manipulation
                "
              >
                <span className="
                    text-lg sm:text-xl 
                    text-neutral-700 dark:text-neutral-200 
                    font-semibold flex items-center gap-3
                  "
                >
                  {/* orange dot */}
                  <span className="
                    w-2.5 h-2.5 sm:w-3 sm:h-3 
                    rounded-full bg-orange-500 
                    shadow-[0_0_8px_rgba(255,122,24,0.8)]
                  " />
                  {continent}
                </span>

                {isOpen ? (
                  <ChevronUp className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <ChevronDown className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>

              {/* Dropdown */}
              {isOpen && (
                <div
                  className="
                    px-4 sm:px-5 pb-5 
                    grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 
                    gap-3 animate-fadeIn
                  "
                >
                  {places.map((place) => (
                    <div
                      key={place}
                      className="
                        flex items-center gap-3 px-3 sm:px-4 py-2 rounded-lg
                        bg-neutral-50 dark:bg-neutral-800
                        border border-neutral-200 dark:border-neutral-700
                        hover:border-orange-500/60
                        transition-colors
                      "
                    >
                      <span className="text-lg sm:text-xl">
                        {countryFlags[place]}
                      </span>

                      <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">
                        {place}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* fade animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-4px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}
