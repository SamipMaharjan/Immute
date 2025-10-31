"use client";
import { useState } from "react";
import {
  Search,
  Download,
  Filter,
  ExternalLink,
  Calendar,
  Clock,
  Hash,
  Signature,
} from "lucide-react";

interface Transaction {
  id: number;
  signature: string;
  time: string;
  date: string;
  block: number;
  amount: string;
  status: "completed" | "pending" | "failed";
  type: "repayment" | "interest" | "fee";
}

export default function PaymentHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const transactions: Transaction[] = [
    {
      id: 1,
      signature: "5gY8dNc3...kL9pX2wM",
      time: "14:23:45",
      date: "2024-01-15",
      block: 24567890,
      amount: "$200.00",
      status: "completed",
      type: "repayment",
    },
    {
      id: 2,
      signature: "7hZ9eOd4...mL0qY3xN",
      time: "09:15:22",
      date: "2024-01-14",
      block: 24567745,
      amount: "$20.50",
      status: "completed",
      type: "interest",
    },
    {
      id: 3,
      signature: "3fX6bMa1...jK8nW9vP",
      time: "16:45:33",
      date: "2024-01-10",
      block: 24567321,
      amount: "$200.00",
      status: "completed",
      type: "repayment",
    },
    {
      id: 4,
      signature: "8gY7cNb2...lL1pX0wO",
      time: "11:30:15",
      date: "2024-01-05",
      block: 24566987,
      amount: "$15.75",
      status: "completed",
      type: "fee",
    },
    {
      id: 5,
      signature: "2eW5aLa9...iJ7mV8uQ",
      time: "13:20:18",
      date: "2024-01-01",
      block: 24566543,
      amount: "$200.00",
      status: "completed",
      type: "repayment",
    },
    {
      id: 6,
      signature: "9hZ8dOc4...nM2qY1xP",
      time: "10:05:29",
      date: "2023-12-28",
      block: 24566129,
      amount: "$18.25",
      status: "completed",
      type: "interest",
    },
    {
      id: 7,
      signature: "4gX7bNa3...kK9nW8vR",
      time: "15:40:12",
      date: "2023-12-25",
      block: 24565876,
      amount: "$200.00",
      status: "completed",
      type: "repayment",
    },
    {
      id: 8,
      signature: "1dW4aKa8...hJ6lU7tP",
      time: "08:55:47",
      date: "2023-12-20",
      block: 24565432,
      amount: "$12.50",
      status: "pending",
      type: "fee",
    },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.signature.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || transaction.status === statusFilter;
    const matchesType = typeFilter === "all" || transaction.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "completed":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "pending":
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
      case "failed":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const getTypeBadge = (type: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (type) {
      case "repayment":
        return `${baseClasses} bg-blue-100 text-blue-800`;
      case "interest":
        return `${baseClasses} bg-purple-100 text-purple-800`;
      case "fee":
        return `${baseClasses} bg-orange-100 text-orange-800`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-800`;
    }
  };

  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  const handleViewOnExplorer = (signature: string) => {
    // In a real app, this would open the transaction in a blockchain explorer
    console.log("View transaction:", signature);
    alert(`Opening transaction ${signature} in explorer...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6 pt-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Payment History
              </h1>
              <p className="text-gray-600">
                Track all your loan payments and transactions
              </p>
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Payments
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {transactions.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Signature className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Amount
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">$866.00</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Hash className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {transactions.filter((t) => t.status === "completed").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {transactions.filter((t) => t.status === "pending").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by signature or amount..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="all">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="all">All Types</option>
                    <option value="repayment">Repayment</option>
                    <option value="interest">Interest</option>
                    <option value="fee">Fee</option>
                  </select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Signature
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Date & Time
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Block
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Type
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <Signature className="w-4 h-4 text-gray-400" />
                        <code className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                          {transaction.signature}
                        </code>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex flex-col">
                        <div className="text-sm text-gray-900">
                          {transaction.date}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {transaction.time}
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-900">
                        <Hash className="w-4 h-4 text-gray-400" />
                        {transaction.block.toLocaleString()}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="font-semibold text-gray-900">
                        {transaction.amount}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={getTypeBadge(transaction.type)}>
                        {formatType(transaction.type)}
                      </span>
                    </td>
                    <td className="p-6">
                      <span className={getStatusBadge(transaction.status)}>
                        {formatType(transaction.status)}
                      </span>
                    </td>
                    <td className="p-6">
                      <button
                        onClick={() =>
                          handleViewOnExplorer(transaction.signature)
                        }
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No transactions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-600">
            Showing {filteredTransactions.length} of {transactions.length}{" "}
            transactions
          </div>
          <div className="flex gap-2">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              1
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              2
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
