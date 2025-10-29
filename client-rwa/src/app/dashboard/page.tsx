"use client";
import { useState } from "react";
import { MdSwapVert } from "react-icons/md";

export default function Dashboard() {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => setIsSwapped(!isSwapped);

  const fromToken = isSwapped ? "USDC" : "SOL";
  const toToken = isSwapped ? "SOL" : "USDC";
  const fromImg = isSwapped ? "/usdc.png" : "/sol.png";
  const toImg = isSwapped ? "/sol.png" : "/usdc.png";
  const fromPrice = isSwapped ? "$1.00" : "$199";
  const toPrice = isSwapped ? "$199" : "$1.00";
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-2 bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Market</h2>
        </div>

        <div className="mb-4 items-center bg-gray-50 border border-gray-200 rounded-2xl p-3">
          <label className="text-sm text-gray-600 mb-2 block">
            {isSwapped ? "Buying" : "Selling"}
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

        <div className="flex justify-center mb-4">
          <button
            onClick={handleSwap}
            className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full shadow-sm transition transform active:rotate-180"
          >
            <MdSwapVert />
          </button>
        </div>

        <div className="mb-6 items-center bg-gray-50 border border-gray-200 rounded-2xl p-3">
          <label className="text-sm text-gray-600 mb-2 block">
            {isSwapped ? "Selling" : "Buying"}
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

      <div className="w-full max-w-md grid grid-cols-2 gap-2">
        <div className="flex items-center justify-between bg-white border border-gray-100 shadow-lg rounded-xl p-3">
          <div className="flex items-center gap-2">
            <img src={fromImg} className="w-6 h-6" />
            <span className="text-gray-800 font-medium">{fromToken}</span>
          </div>
          <span className="text-gray-600 font-semibold">{fromPrice}</span>
        </div>

        <div className="flex items-center justify-between bg-white border border-gray-100 shadow-lg rounded-xl p-3">
          <div className="flex items-center gap-2">
            <img src={toImg} alt="USDC" className="w-6 h-6" />
            <span className="text-gray-800 font-medium">{toToken}</span>
          </div>
          <span className="text-gray-600 font-semibold">{toPrice}</span>
        </div>
      </div>
    </div>
  );
}
