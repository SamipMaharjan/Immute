"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  Mail,
  MapPin,
  Building,
  FileText,
  User,
  ChevronDown,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

interface Request {
  id: number;
  name: string;
  email: string;
  country: string;
  city: string;
  collateral: string;
  proof: string;
  status: "pending" | "approved" | "rejected";
  date: string;
  amount: string;
}

export default function AdminRequests() {
  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      country: "USA",
      city: "New York",
      collateral: "Gold",
      proof: "https://example.com/proof1.png",
      status: "pending",
      date: "2024-01-15",
      amount: "$15,000",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      country: "UK",
      city: "London",
      collateral: "Real Estate",
      proof: "https://example.com/proof2.png",
      status: "pending",
      date: "2024-01-14",
      amount: "$25,000",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      country: "Canada",
      city: "Toronto",
      collateral: "Stocks",
      proof: "https://example.com/proof3.jpg",
      status: "pending",
      date: "2024-01-13",
      amount: "$18,000",
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      country: "Australia",
      city: "Sydney",
      collateral: "Cryptocurrency",
      proof: "https://example.com/proof4.docx",
      status: "pending",
      date: "2024-01-12",
      amount: "$22,000",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const handleAccept = (request: Request) => {
    setSelectedRequest(request);
    setShowModal(true);
  };

  const handleReject = (id: number) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: "rejected" } : req))
    );
  };

  const handleSend = () => {
    if (selectedRequest) {
      setRequests((prev) =>
        prev.map((req) =>
          req.id === selectedRequest.id ? { ...req, status: "approved" } : req
        )
      );
    }
    console.log("Accepted Request:", selectedRequest);
    console.log("Message Sent:", inputValue);
    setShowModal(false);
    setInputValue("");
    setSelectedRequest(null);
  };

  const handleViewTransactions = (requestId: number) => {
    // Navigate to transactions page or open transactions modal
    console.log("View transactions for request:", requestId);
    // You can implement navigation or open a transactions modal here
    alert(`Navigating to transactions for request #${requestId}`);
  };

  const handleViewProof = (proofUrl: string) => {
    let url = proofUrl.trim();

    // if user provided "facebook.com", prepend https://
    if (!/^https?:\/\//i.test(url)) {
      url = "https://" + url;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "pdf":
        return <FileText className="w-4 h-4 text-red-500" />;
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
        return <Eye className="w-4 h-4 text-green-500" />;
      case "doc":
      case "docx":
        return <FileText className="w-4 h-4 text-blue-500" />;
      case "xls":
      case "xlsx":
        return <FileText className="w-4 h-4 text-green-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-500" />;
    }
  };

  const getFileType = (fileName: string) => {
    const extension = fileName.split(".").pop()?.toLowerCase();
    return extension ? extension.toUpperCase() : "FILE";
  };

  const filteredRequests = requests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || request.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium";
    switch (status) {
      case "approved":
        return `${baseClasses} bg-green-100 text-green-800`;
      case "rejected":
        return `${baseClasses} bg-red-100 text-red-800`;
      default:
        return `${baseClasses} bg-yellow-100 text-yellow-800`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Loan Requests
          </h1>
          <p className="text-gray-600">
            Review and manage incoming loan applications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Requests
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {requests.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {requests.filter((r) => r.status === "pending").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Approved</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {requests.filter((r) => r.status === "approved").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Rejected</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {requests.filter((r) => r.status === "rejected").length}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
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
                  placeholder="Search requests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-xl pl-4 pr-10 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-xl transition-colors duration-200 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Export
            </button>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Applicant
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Location
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Collateral
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Amount
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Proof
                  </th>
                  <th className="text-left p-6 text-sm font-semibold text-gray-700">
                    Date
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
                {filteredRequests.map((request) => (
                  <tr
                    key={request.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {request.name}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            {request.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="text-sm text-gray-900 flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {request.city}
                      </div>
                      <div className="text-sm text-gray-500">
                        {request.country}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-blue-500" />
                        <span className="font-medium text-gray-900">
                          {request.collateral}
                        </span>
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="font-semibold text-gray-900">
                        {request.amount}
                      </div>
                    </td>
                    <td className="p-6">
                      <button
                        onClick={() => handleViewProof(request.proof)}
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200 group"
                        title={`View ${request.proof.split("/").pop()}`}
                      >
                        {getFileIcon(request.proof)}
                        <span className="text-sm">
                          {getFileType(request.proof)}
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </td>
                    <td className="p-6">
                      <div className="text-sm text-gray-500">
                        {request.date}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className={getStatusBadge(request.status)}>
                        {request.status.charAt(0).toUpperCase() +
                          request.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        {request.status === "pending" ? (
                          <>
                            <button
                              onClick={() => handleAccept(request)}
                              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Accept
                            </button>
                            <button
                              onClick={() => handleReject(request.id)}
                              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
                            >
                              <XCircle className="w-4 h-4" />
                              Reject
                            </button>
                          </>
                        ) : request.status === "approved" ? (
                          <button
                            onClick={() => handleViewTransactions(request.id)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center gap-2 text-sm"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                            View Transactions
                          </button>
                        ) : (
                          <span className="text-sm text-gray-500 italic">
                            No actions available
                          </span>
                        )}
                        <button
                          className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg transition-colors duration-200"
                          onClick={() => handleViewProof(request.proof)}
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No requests found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Accept Action */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Accept Request
                </h2>
                <p className="text-gray-600 text-sm">
                  Send confirmation to {selectedRequest.name}
                </p>
              </div>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-2">Request Details</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount:</span>
                  <span className="font-medium">{selectedRequest.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Collateral:</span>
                  <span className="font-medium">
                    {selectedRequest.collateral}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium">
                    {selectedRequest.city}, {selectedRequest.country}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Proof:</span>
                  <button
                    onClick={() => handleViewProof(selectedRequest.proof)}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 text-sm"
                  >
                    View Document
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmation Message
              </label>
              <textarea
                placeholder="Enter your message or additional notes..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                rows={4}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-xl transition-colors duration-200 flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                Confirm Acceptance
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Clock icon component
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
