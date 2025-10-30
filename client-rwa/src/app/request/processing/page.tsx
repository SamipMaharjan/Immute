export default function ProcessingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-10 text-center max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 mb-3">
          Your Request is Being Processed
        </h1>
        <p className="text-gray-600 mb-6">
          We've received your collateral submission. Our team will review your
          details and get back to you shortly.
        </p>
        <div className="animate-pulse text-blue-600 font-medium">
          Please wait...
        </div>
      </div>
    </div>
  );
}
