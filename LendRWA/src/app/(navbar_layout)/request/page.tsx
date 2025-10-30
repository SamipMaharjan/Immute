"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    router.push("/request/processing");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg border border-gray-100"
      >
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Collateral Request Form
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Country
            </label>
            <input
              type="text"
              name="country"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              City
            </label>
            <input
              type="text"
              name="city"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              What asset would you like to keep as collateral?
            </label>
            <select
              name="collateral"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="">Select an asset</option>
              <option value="art">Art</option>
              <option value="realstate">Real Estate</option>
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="movable">Movable Assets</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Proof that you own the asset
            </label>
            <input
              type="file"
              name="proof"
              accept=".jpg,.jpeg,.png,.pdf"
              required
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
