"use client";

export default function ProcessingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br p-6">
      <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-10 text-center max-w-md animate-fadeIn">
        {/* Loader */}
        <div className="flex items-center justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Your Request is Being Processed
        </h1>
        <p className="text-gray-600 mb-6">
          We've received your collateral submission. Our team is reviewing your
          details. Please hold on for a moment.
        </p>

        <div className="text-blue-600 font-medium animate-shimmer">
          Please wait...
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-shimmer {
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
