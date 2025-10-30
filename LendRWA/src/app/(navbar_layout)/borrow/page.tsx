"use client";
import { useState } from "react";
import { MdSwapVert } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Dashboard() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // const handleSwap = () => setIsSwapped(!isSwapped);

  const fromToken = isSwapped ? "USDC" : "SOL";
  const toToken = isSwapped ? "SOL" : "USDC";
  const fromImg = isSwapped ? "/usdc.png" : "/sol.png";
  const toImg = isSwapped ? "/sol.png" : "/usdc.png";
  const fromPrice = isSwapped ? "$1.00" : "$199";
  const toPrice = isSwapped ? "$199" : "$1.00";

  // Mock data (the repeating market cards)
  const marketData = [
    {
      id: 1,
      title: "OnRe Market",
      collateral: "Onyc",
      apy: "10.24%",
      size: "$15.83M",
      img: "https://cdn.kamino.finance/assets/ONyc.webp",
    },
    {
      id: 2,
      title: "Maple Market",
      collateral: "SyrupUSDC",
      apy: "5.01%",
      size: "$169.42M",
      img: "https://cdn.kamino.finance/assets/syrupusdc.svg",
    },
    {
      id: 3,
      title: "Huma Market",
      collateral: "PST",
      apy: "5.75%",
      size: "$14.10M",
      img: "https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2F65a9gxlgidoy7vmhxc07n5wyensx&w=64&q=75",
    },
    {
      id: 4,
      title: "Solstice Market",
      collateral: "eUSX",
      apy: "3.81%",
      size: "$10.83M",
      img: "https://cdn.kamino.finance/assets/USX.png",
    },
  ];

  // Filter logic
  const filteredMarkets = marketData.filter((market) =>
    market.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-start space-y-2 mt-36 mb-10">
      {/* Main card */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Market</h2>
        </div>

        {/* Collateral input */}
        <div className="mb-4 items-center bg-gray-50 border border-gray-200 rounded-2xl p-3">
          <label className="text-sm text-gray-600 mb-2 block">
            {isSwapped ? "Get" : "Collateral"}
          </label>
          <div className="flex">
            <input
              type="number"
              placeholder="0.00"
              className="flex-1 bg-transparent outline-none text-lg text-gray-800"
            />
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1 rounded-xl text-gray-700 font-medium hover:bg-gray-100">
              <img src={fromImg} alt={fromToken} className="w-5 h-5" />
              {fromToken} ▼
            </button>
          </div>
        </div>

        {/* Swap button */}
        <div className="flex justify-center mb-4">
          <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm transition transform active:rotate-180">
            <MdSwapVert />
          </button>
        </div>

        {/* Get input */}
        <div className="mb-6 items-center bg-gray-50 border border-gray-200 rounded-2xl p-3">
          <label className="text-sm text-gray-600 mb-2 block">
            {isSwapped ? "Collateral" : "Get"}
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="0.00"
              disabled
              className="flex-1 bg-transparent outline-none text-lg text-gray-400"
            />
            <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-1 rounded-xl text-gray-700 font-medium hover:bg-gray-100">
              <img src={toImg} alt={toToken} className="w-5 h-5" />
              {toToken} ▼
            </button>
          </div>
        </div>

        <button className="w-full bg-[#C7F284] hover:bg-[#83A15C] text-black font-medium py-3 rounded-2xl transition">
          Connect
        </button>
      </div>

      {/* Market Cards Section */}
      <div className="w-full max-w-4xl flex flex-col gap-3 mt-10 p-2">
        {/* Search bar */}
        <div className="flex justify-end mt-10">
          <div className="flex items-center border border-gray-200 rounded-2xl px-3 py-2 max-w-xs bg-white shadow-sm">
            <IoIosSearch className="text-gray-500 text-lg" />
            <input
              type="text"
              placeholder="Search Assets..."
              className="w-full px-2 py-1 text-gray-700 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full border-b-2 "></div>
        <h1 className="font-semibold text-gray-800 mt-3">
          We are accepting these RWA tokens
        </h1>

        {/* Filtered results */}
        {filteredMarkets.length > 0 ? (
          filteredMarkets.map((market) => (
            <div
              key={market.id}
              className="flex justify-between items-center bg-white border border-gray-100 shadow-sm rounded-xl p-3"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={market.img}
                  alt=""
                  width={35}
                  className="rounded-3xl"
                />
                <span className="title font-medium">{market.title}</span>
              </div>

              <div className="flex gap-3">
                <div className="flex gap-2 bg-white border border-gray-200 shadow-sm rounded-xl p-2">
                  <span>Collateral</span>
                  <img
                    src={market.img}
                    alt=""
                    width={22}
                    className="rounded-xl"
                  />
                  <span>{market.collateral}</span>
                </div>

                <div className="flex gap-2 bg-white border border-gray-200 shadow-sm rounded-xl p-2">
                  <span>Borrow APY</span>
                  <span>{market.apy}</span>
                </div>

                <div className="flex gap-2 bg-white border border-gray-200 shadow-sm rounded-xl p-2">
                  <span>Market Size</span>
                  <span>{market.size}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm mt-2 text-center">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}
