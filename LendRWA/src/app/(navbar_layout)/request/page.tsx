"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  MapPin,
  Building,
  FileText,
  Upload,
  ArrowRight,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function RequestForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    collateral: "",
    proof: null as File | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, proof: file }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    router.push("/request/processing");
  };

  const collateralOptions = [
    { value: "art", label: "Art & Collectibles", icon: "🎨" },
    { value: "realstate", label: "Real Estate", icon: "🏠" },
    { value: "gold", label: "Gold", icon: "💰" },
    { value: "silver", label: "Silver", icon: "⚪" },
    { value: "movable", label: "Movable Assets", icon: "🚗" },
    { value: "crypto", label: "Cryptocurrency", icon: "🔗" },
    { value: "stocks", label: "Stocks & Bonds", icon: "📈" },
    { value: "jewelry", label: "Jewelry", icon: "💎" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 pt-32">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">
        {/* Left Side - Information */}
        <div className="lg:w-2/5">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 h-full">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Collateral Request
              </h1>
              <p className="text-gray-600">
                Secure your loan with valuable assets
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Fast Approval</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Get your collateral approved within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Secure Process
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Your data is encrypted and secure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Multiple Assets
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Support for various asset types
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">
                Required Documents
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Proof of ownership</li>
                <li>• Asset valuation certificate</li>
                <li>• Government-issued ID</li>
                <li>• Recent photographs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-3/5">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="country"
                    required
                    onChange={handleChange}
                    placeholder="Your country"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="city"
                    required
                    onChange={handleChange}
                    placeholder="Your city"
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Collateral Type */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Collateral Asset Type
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <select
                    name="collateral"
                    required
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none bg-white"
                  >
                    <option value="">Select asset type</option>
                    {collateralOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.icon} {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* File Upload */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Proof of Ownership
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                  <input
                    type="file"
                    name="proof"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <div className="text-gray-600">
                      <span className="text-blue-600 font-medium">
                        Click to upload
                      </span>{" "}
                      or drag and drop
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      PNG, JPG, PDF up to 10MB
                    </p>
                    {formData.proof && (
                      <div className="mt-3 flex items-center justify-center gap-2 text-green-600">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {formData.proof.name}
                        </span>
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100 flex items-center justify-center gap-2"
            >
              Submit Request
              {/* {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                 
                  <ArrowRight className="w-5 h-5" />
                </>
              )} */}
            </button>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting, you agree to our{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Terms of Service
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
