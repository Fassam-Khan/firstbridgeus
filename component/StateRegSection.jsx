"use client";
import { useState } from "react";

const states = [
  { flag: "🤠", name: "Texas", maxGross: "80,000 lbs", dieselTax: "20¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Trucker-friendly", notes: "No state income tax. Oversize permits easy online.", tags: ["high-freight", "low-tax"] },
  { flag: "🌟", name: "California", maxGross: "80,000 lbs", dieselTax: "92.7¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "permit", badgeText: "Strict emissions", notes: "CARB compliance required. Clean truck requirements for drayage.", tags: ["high-freight", "high-tax"] },
  { flag: "🏙️", name: "Illinois", maxGross: "80,000 lbs", dieselTax: "47.1¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "note", badgeText: "Toll roads", notes: "Chicago metro has significant toll costs. I-80 corridor heavily used.", tags: ["high-freight", "high-tax"] },
  { flag: "🍑", name: "Georgia", maxGross: "80,000 lbs", dieselTax: "32.6¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Trucker-friendly", notes: "Atlanta is major distribution hub. I-75/I-85 heavy freight corridor.", tags: ["high-freight", "low-tax"] },
  { flag: "🎸", name: "Tennessee", maxGross: "80,000 lbs", dieselTax: "27.4¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Low cost", notes: "No state income tax. Nashville and Memphis are major freight hubs.", tags: ["high-freight", "low-tax"] },
  { flag: "🌊", name: "Florida", maxGross: "80,000 lbs", dieselTax: "36.7¢/gal", singleAxle: "22,000 lbs", tandemAxle: "44,000 lbs", badgeType: "ok", badgeText: "Higher axle limits", notes: "Axle limits exceed federal standard. Strong produce season freight.", tags: ["high-freight"] },
  { flag: "🌾", name: "Ohio", maxGross: "80,000 lbs", dieselTax: "38.5¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "note", badgeText: "Spring limits", notes: "Major I-70/I-71/I-75 hub. Heavy manufacturing freight. Seasonal weight limits apply.", tags: ["high-freight"] },
  { flag: "🎰", name: "Nevada", maxGross: "80,000 lbs", dieselTax: "23.6¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Low tax", notes: "I-80 and I-15 corridors. Las Vegas distribution hub. Easy oversize permits.", tags: ["high-freight", "low-tax"] },
  { flag: "🏔️", name: "Colorado", maxGross: "80,000 lbs", dieselTax: "22¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "permit", badgeText: "Mountain permits", notes: "Winter chain laws. Eisenhower Tunnel restrictions. Seasonal road bans in spring.", tags: ["permit-heavy"] },
  { flag: "🏛️", name: "New York", maxGross: "80,000 lbs", dieselTax: "44.9¢/gal", singleAxle: "22,400 lbs", tandemAxle: "36,000 lbs", badgeType: "permit", badgeText: "HUT + Tolls", notes: "Highway Use Tax required. NYC has additional restrictions. Heavy toll roads.", tags: ["permit-heavy", "high-tax"] },
  { flag: "🦞", name: "Pennsylvania", maxGross: "80,000 lbs", dieselTax: "57.6¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "permit", badgeText: "High tax state", notes: "Highest diesel tax in US. PA Turnpike tolls significant. Online permits required.", tags: ["permit-heavy", "high-tax"] },
  { flag: "🌵", name: "Arizona", maxGross: "80,000 lbs", dieselTax: "18¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Low fuel tax", notes: "Major I-10/I-40 corridor. Phoenix distribution hub. Simple permitting.", tags: ["high-freight", "low-tax"] },
  { flag: "🌽", name: "Indiana", maxGross: "80,000 lbs", dieselTax: "53.3¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "note", badgeText: "Spring restrictions", notes: "Major crossroads state. I-65/I-70/I-94 hub. Spring weight restrictions on local roads.", tags: ["high-freight"] },
  { flag: "🌲", name: "Oregon", maxGross: "80,000 lbs", dieselTax: "38¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "permit", badgeText: "Weight-Mile Tax", notes: "Oregon WMT required on top of fuel tax. Most complex permit system in US.", tags: ["permit-heavy"] },
  { flag: "🎷", name: "Louisiana", maxGross: "88,000 lbs*", dieselTax: "20¢/gal", singleAxle: "22,000 lbs", tandemAxle: "44,000 lbs", badgeType: "ok", badgeText: "Higher weight limits", notes: "*State roads allow higher weights. Industrial/chemical freight hub.", tags: ["low-tax"] },
  { flag: "🎭", name: "Missouri", maxGross: "80,000 lbs", dieselTax: "17.3¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Low fuel tax", notes: "I-70 corridor. Kansas City and St. Louis distribution hubs.", tags: ["high-freight", "low-tax"] },
  { flag: "🌲", name: "Washington", maxGross: "80,000 lbs", dieselTax: "49.4¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "permit", badgeText: "Emissions strict", notes: "Seattle port freight. Strict emissions enforcement in urban areas.", tags: ["high-tax", "permit-heavy"] },
  { flag: "🎺", name: "Kentucky", maxGross: "80,000 lbs", dieselTax: "24.6¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "note", badgeText: "KYU required", notes: "Kentucky Weight Distance Tax required. UPS Worldport hub in Louisville.", tags: ["high-freight", "low-tax"] },
  { flag: "🏈", name: "Oklahoma", maxGross: "90,000 lbs*", dieselTax: "17¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "ok", badgeText: "Oilfield friendly", notes: "*Non-interstate roads allow higher weights. Lowest fuel tax in US. Hotshot hub.", tags: ["low-tax"] },
  { flag: "🌙", name: "N. Carolina", maxGross: "80,000 lbs", dieselTax: "38.5¢/gal", singleAxle: "20,000 lbs", tandemAxle: "38,000 lbs", badgeType: "note", badgeText: "Higher tandem", notes: "Tandem axle limit higher than federal. Charlotte logistics hub. I-85/I-40/I-77.", tags: ["high-freight"] },
  { flag: "⚓", name: "Michigan", maxGross: "80,000 lbs*", dieselTax: "27.2¢/gal", singleAxle: "20,000 lbs", tandemAxle: "34,000 lbs", badgeType: "permit", badgeText: "Spring weight limits", notes: "Strict spring restrictions Mar-Apr. Auto parts freight hub.", tags: ["high-freight", "permit-heavy"] },
];

const filters = [
  { label: "All States", value: "all" },
  { label: "High Freight Volume", value: "high-freight" },
  { label: "Permit-Heavy", value: "permit-heavy" },
  { label: "Low Fuel Tax", value: "low-tax" },
  { label: "High Fuel Tax", value: "high-tax" },
];

const badgeClasses = {
  ok: "bg-[#e6f4ea] text-[#1a7f37] border border-[#b7e4c7]",
  permit: "bg-[#fff3cd] text-[#856404] border border-[#ffc107]",
  note: "bg-[#e8f0fe] text-[#1a56db] border border-[#93c5fd]",
};

export default function StateRegSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = states.filter(
    (s) => activeFilter === "all" || s.tags.includes(activeFilter)
  );

  return (
    <section
      id="state-regulations"
      className="w-full bg-[#f8fafc] py-14 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2744] mb-2 flex items-center gap-2">
            🗺️ State Regulation Quick Reference
          </h2>
          <p className="text-[#4a5568] text-sm sm:text-base">
            Key trucking regulations by state — weight limits, fuel tax rates, and permit requirements
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                activeFilter === f.value
                  ? "bg-[#004E89] text-white border-[#004E89] shadow-sm"
                  : "bg-white text-[#4a5568] border-[#d1d5db] hover:border-[#004E89] hover:text-[#004E89]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Table — desktop */}
        <div className="hidden md:block overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-sm">
          <table className="w-full text-sm text-left bg-white">
            <colgroup>
              <col className="w-[160px]" />
              <col className="w-[130px]" />
              <col className="w-[110px]" />
              <col className="w-[120px]" />
              <col className="w-[120px]" />
              <col />
            </colgroup>
            <thead>
              <tr className="bg-[#004E89] text-white text-xs uppercase tracking-wide">
                <th className="px-4 py-3 font-semibold">State</th>
                <th className="px-4 py-3 font-semibold">Max Gross Wt.</th>
                <th className="px-4 py-3 font-semibold">Diesel Tax</th>
                <th className="px-4 py-3 font-semibold">Single Axle</th>
                <th className="px-4 py-3 font-semibold">Tandem Axle</th>
                <th className="px-4 py-3 font-semibold">Special Notes / Permits</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.name}
                  className={`border-t border-[#e2e8f0] transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-[#f8fafc]"
                  } hover:bg-[#eef4fb]`}
                >
                  <td className="px-4 py-3 font-semibold text-[#1a2744] whitespace-nowrap">
                    <span className="mr-1.5">{row.flag}</span>
                    {row.name}
                  </td>
                  <td className="px-4 py-3 text-[#374151] tabular-nums">{row.maxGross}</td>
                  <td className="px-4 py-3 text-[#374151] tabular-nums font-medium">{row.dieselTax}</td>
                  <td className="px-4 py-3 text-[#374151] tabular-nums">{row.singleAxle}</td>
                  <td className="px-4 py-3 text-[#374151] tabular-nums">{row.tandemAxle}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mr-2 whitespace-nowrap ${badgeClasses[row.badgeType]}`}
                    >
                      {row.badgeText}
                    </span>
                    <span className="text-[#6b7280] text-xs">{row.notes}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards — mobile */}
        <div className="md:hidden space-y-3">
          {filtered.map((row) => (
            <div
              key={row.name}
              className="bg-white border border-[#e2e8f0] rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-[#1a2744]">
                  {row.flag} {row.name}
                </span>
                <span
                  className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeClasses[row.badgeType]}`}
                >
                  {row.badgeText}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                <div>
                  <p className="text-[#9ca3af] text-xs font-medium uppercase tracking-wide">Max Gross Wt.</p>
                  <p className="text-[#1a2744] font-semibold">{row.maxGross}</p>
                </div>
                <div>
                  <p className="text-[#9ca3af] text-xs font-medium uppercase tracking-wide">Diesel Tax</p>
                  <p className="text-[#1a2744] font-semibold">{row.dieselTax}</p>
                </div>
                <div>
                  <p className="text-[#9ca3af] text-xs font-medium uppercase tracking-wide">Single Axle</p>
                  <p className="text-[#374151]">{row.singleAxle}</p>
                </div>
                <div>
                  <p className="text-[#9ca3af] text-xs font-medium uppercase tracking-wide">Tandem Axle</p>
                  <p className="text-[#374151]">{row.tandemAxle}</p>
                </div>
              </div>

              <p className="text-xs text-[#6b7280] leading-relaxed border-t border-[#f3f4f6] pt-2">
                {row.notes}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-6 flex gap-2 bg-[#fffbeb] border border-[#fcd34d] rounded-lg px-4 py-3 text-xs text-[#78350f] leading-relaxed">
          <span className="text-base shrink-0">⚠️</span>
          <p>
            <strong>Disclaimer:</strong> Weight limits and tax rates shown are based on standard interstate/US highway
            operations as of early 2026. State and local road limits may differ. Always verify current permit
            requirements and axle weight limits with your state DOT before hauling oversized or overweight loads. Fuel
            tax rates are subject to change — verify current rates with your IFTA administrator.
          </p>
        </div>
      </div>
    </section>
  );
}