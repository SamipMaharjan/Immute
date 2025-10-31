"use client";
import { Line } from "react-chartjs-2";
import { useRouter } from "next/navigation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LoanDashboard() {
  const router = useRouter();
  // Sample data for Chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Loan Balance",
        data: [1200, 1000, 800, 600, 400, 0],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Collateral Value",
        data: [1500, 1550, 1600, 1580, 1620, 1650],
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions: import("chart.js").ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Loan Analytics Overview",
        font: {
          size: 16,
          weight: "bold" as const,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-20 px-20">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Loan Dashboard</h1>
        <p className="text-gray-600">Manage and track your loan performance</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Loan Summary Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Loan Summary
            </h2>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Approved
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Loan ID</span>
              <span className="font-medium">LN-12345</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-bold text-gray-900">$1,500</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Interest Rate</span>
              <span className="font-medium text-blue-600">10% APR</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Duration</span>
              <span className="font-medium">12 months</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Next Due Date</span>
              <span className="font-medium">Nov 1, 2025</span>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Repayment Progress
          </h2>

          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>2 of 12 installments paid</span>
              <span>$400 / $1,500</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: "33%" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">$400</div>
              <div className="text-sm text-gray-600">Paid</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">$1,100</div>
              <div className="text-sm text-gray-600">Remaining</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">$180</div>
              <div className="text-sm text-gray-600">Principal</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">$20</div>
              <div className="text-sm text-gray-600">Interest</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Collateral Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Collateral Details
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Asset Type</span>
              <span className="font-medium">Tokenized Real Estate</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Current Value</span>
              <span className="font-bold text-green-600">$2,200</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Collateral Ratio</span>
              <span className="font-medium text-blue-600">150%</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-gray-600">Liquidation Threshold</span>
              <span className="font-medium">120%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">On-chain</span>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                View Explorer →
              </a>
            </div>
          </div>
        </div>

        {/* Payment Schedule */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Payment Schedule
            </h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
              <div>
                <div className="font-medium text-gray-900">Installment #1</div>
                <div className="text-sm text-gray-600">Jan 1, 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">$250</div>
                <div className="text-green-600 text-sm font-medium">Paid</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
              <div>
                <div className="font-medium text-gray-900">Installment #2</div>
                <div className="text-sm text-gray-600">Feb 1, 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">$245</div>
                <div className="text-blue-600 text-sm font-medium">
                  Upcoming
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
              <div>
                <div className="font-medium text-gray-900">Installment #3</div>
                <div className="text-sm text-gray-600">Mar 1, 2025</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">$240</div>
                <div className="text-gray-600 text-sm">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Loan Analytics
        </h2>
        <div className="h-80">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm">
            Repay Installment
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm"
            onClick={() => router.push("/paymentHistory")}
          >
            Payment History
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm">
            View Contract
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm">
            Repay Full Loan
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm">
            Withdraw Collateral
          </button>
        </div>
      </div>
    </div>
  );
}
