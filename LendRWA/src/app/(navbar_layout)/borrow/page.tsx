"use client";
import { useState } from "react";
import { MdSwapVert } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiArrowUpRight, FiInfo } from "react-icons/fi";

export default function Dashboard() {
  const [isSwapped, setIsSwapped] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const handleSwap = () => setIsSwapped(!isSwapped);

  const fromToken = isSwapped ? "USDC" : "SOL";
  const toToken = isSwapped ? "SOL" : "USDC";
  const fromImg = isSwapped ? "/usdc.png" : "/sol.png";
  const toImg = isSwapped ? "/sol.png" : "/usdc.png";
  const fromPrice = isSwapped ? "$1.00" : "$199";
  const toPrice = isSwapped ? "$199" : "$1.00";

  // Mock data
  const marketData = [
    {
      id: 1,
      title: "OnRe Market",
      collateral: "Onyc",
      apy: "10.24%",
      size: "$15.83M",
      img: "https://cdn.kamino.finance/assets/ONyc.webp",
      change: "+2.1%",
      volume: "$2.4M",
    },
    {
      id: 2,
      title: "Maple Market",
      collateral: "SyrupUSDC",
      apy: "5.01%",
      size: "$169.42M",
      img: "https://cdn.kamino.finance/assets/syrupusdc.svg",
      change: "+1.2%",
      volume: "$12.1M",
    },
    {
      id: 3,
      title: "Huma Market",
      collateral: "PST",
      apy: "5.75%",
      size: "$14.10M",
      img: "https://www.geckoterminal.com/_next/image?url=https%3A%2F%2Fassets.geckoterminal.com%2F65a9gxlgidoy7vmhxc07n5wyensx&w=64&q=75",
      change: "+3.4%",
      volume: "$1.8M",
    },
    {
      id: 4,
      title: "Solstice Market",
      collateral: "eUSX",
      apy: "3.81%",
      size: "$10.83M",
      img: "https://cdn.kamino.finance/assets/USX.png",
      change: "+0.8%",
      volume: "$0.9M",
    },
  ];

  const filteredMarkets = marketData.filter((market) =>
    market.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 pt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Real World Asset Lending
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access instant liquidity using your real-world assets as collateral
            with competitive rates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Swap Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Swap Assets
                </h2>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <FiInfo className="w-5 h-5" />
                </button>
              </div>

              {/* From Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 transition-all hover:border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-600">
                    Collateral
                  </label>
                  <span className="text-xs text-gray-500">Balance: 0.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="number"
                    placeholder="0.00"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-2xl font-semibold text-gray-900 placeholder-gray-400"
                  />
                  <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors min-w-24 justify-center">
                    <img
                      src={fromImg}
                      alt={fromToken}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-semibold">{fromToken}</span>
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2">≈ {fromPrice}</div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center my-2">
                <button
                  // onClick={handleSwap}
                  className="p-3 bg-white border border-gray-200 shadow-sm rounded-full hover:bg-gray-50 transition-all duration-200 hover:scale-105"
                >
                  <MdSwapVert className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              {/* To Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-6 transition-all hover:border-gray-300">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-600">
                    Get
                  </label>
                  <span className="text-xs text-gray-500">Balance: 0.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    placeholder="0.00"
                    value={toAmount}
                    className="flex-1 bg-transparent outline-none text-2xl font-semibold text-gray-400 placeholder-gray-400"
                  />
                  <button className="flex items-center gap-2 bg-white border border-gray-300 px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors min-w-24 justify-center">
                    <img
                      src={toImg}
                      alt={toToken}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-semibold">{toToken}</span>
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2">≈ {toPrice}</div>
              </div>

              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
                Connect Wallet
              </button>

              {/* Info Section */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-center gap-2 text-sm text-blue-800">
                  <FiInfo className="w-4 h-4" />
                  <span className="font-medium">Best Rates</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">
                  Get the best swapping rates across multiple DEX aggregators
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Markets */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Available Markets
                  </h2>
                  <p className="text-gray-600">
                    We are accepting these RWA tokens as collateral
                  </p>
                </div>

                {/* Search */}
                <div className="relative mt-4 sm:mt-0">
                  <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search markets..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors w-full sm:w-64"
                  />
                </div>
              </div>

              {/* Market Grid */}
              {filteredMarkets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredMarkets.map((market) => (
                    <div
                      key={market.id}
                      className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-xl p-5 hover:shadow-md transition-all duration-200 hover:border-gray-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={market.img}
                            alt={market.title}
                            className="w-12 h-12 rounded-2xl border-2 border-white shadow-sm"
                          />
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                              {market.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                                {market.change}
                              </span>
                              <span className="text-xs text-gray-500">24h</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <FiArrowUpRight className="w-5 h-5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">
                            Collateral
                          </div>
                          <div className="flex items-center justify-center gap-2 font-semibold text-gray-900">
                            <img
                              src={market.img}
                              alt=""
                              className="w-5 h-5 rounded-full"
                            />
                            {market.collateral}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-1">
                            Borrow APY
                          </div>
                          <div className="font-semibold text-green-600">
                            {market.apy}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div>
                          <div className="text-xs text-gray-500">
                            Market Size
                          </div>
                          <div className="font-semibold text-gray-900">
                            {market.size}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Volume</div>
                          <div className="font-semibold text-gray-900">
                            {market.volume}
                          </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Borrow
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IoIosSearch className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No markets found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search criteria
                  </p>
                </div>
              )}

              {/* Stats Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      $210.18M
                    </div>
                    <div className="text-sm text-gray-600">
                      Total Value Locked
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      24.2K
                    </div>
                    <div className="text-sm text-gray-600">Active Loans</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      6.15%
                    </div>
                    <div className="text-sm text-gray-600">Avg. APY</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      $45.2M
                    </div>
                    <div className="text-sm text-gray-600">Daily Volume</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
