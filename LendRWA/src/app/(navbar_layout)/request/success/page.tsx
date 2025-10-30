"use client";
export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-10 text-center max-w-md">
        {/* Animated Tick */}
        <div className="flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20 text-green-600"
            viewBox="0 0 52 52"
          >
            <circle
              className="text-green-100"
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 27l7 7 17-17"
              className="animate-draw"
            />
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Request Submitted Successfully!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your submission. Your collateral details have been
          received successfully. We’ll contact you soon after verification.
        </p>

        <div className="text-green-600 font-medium animate-pulse">
          ✔ Verified and Recorded
        </div>

        {/* Optional Button */}
        <a
          href="/"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition"
        >
          Back to Home
        </a>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes draw {
          from {
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
          }
          to {
            stroke-dasharray: 48;
            stroke-dashoffset: 0;
          }
        }

        .animate-draw {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: draw 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}
