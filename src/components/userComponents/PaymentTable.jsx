import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentTable = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Status configuration
  const statusConfig = {
    PAID: { 
      className: "bg-green-100 text-green-800",
      label: "Paid"
    },
    PENDING: { 
      className: "bg-yellow-100 text-yellow-800",
      label: "Pending"
    },
    EXPIRED: { 
      className: "bg-red-100 text-red-800",
      label: "Expired"
    },
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Fetch payments from the server
  useEffect(() => {
    // Demo data moved inside useEffect to avoid dependency warning
    const demoPayments = [
      {
        id: 1,
        paymentDate: "2025-03-01",
        amount: 120.5,
        policyType: "Health",
        status: "PAID",
      },
      {
        id: 2,
        paymentDate: "2025-03-02",
        amount: 250.0,
        policyType: "Car",
        status: "PENDING",
      },
      {
        id: 3,
        paymentDate: "2025-03-03",
        amount: 80.75,
        policyType: "Home",
        status: "EXPIRED",
      },
    ];

    const fetchPayments = async () => {
      try {
        const response = await axios.get("http://192.168.100.2:5000/api/payments");
        setPayments(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching payments:", err);
        // setError(err.response?.data?.message || "Failed to fetch payments. Showing demo data instead.");
        setPayments(demoPayments);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32 sm:h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-200 h-8 w-8 sm:h-12 sm:w-12"></div>
        </div>
      </div>
    );
  }

  // Mobile card component
  const PaymentCard = ({ payment }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{payment.policyType}</p>
          <p className="text-xs text-gray-500">{formatDate(payment.paymentDate)}</p>
        </div>
        <span
          className={`px-2 py-1 text-xs font-semibold rounded-full ${
            statusConfig[payment.status]?.className || "bg-gray-100 text-gray-800"
          }`}
        >
          {statusConfig[payment.status]?.label || payment.status}
        </span>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold text-gray-900">{formatCurrency(payment.amount)}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {error && (
        <div className="mb-4 text-sm text-yellow-600 bg-yellow-50 px-3 py-2 rounded">
          {error}
        </div>
      )}
      
      {/* Mobile view - Cards */}
      <div className="block sm:hidden">
        {payments.length > 0 ? (
          <div className="space-y-3">
            {payments.map((payment) => (
              <PaymentCard key={payment.id} payment={payment} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-sm text-gray-500">
            No payment records found
          </div>
        )}
      </div>

      {/* Desktop view - Table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Policy
              </th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {payments.length > 0 ? (
              payments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(payment.paymentDate)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {formatCurrency(payment.amount)}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {payment.policyType}
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 sm:px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        statusConfig[payment.status]?.className || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {statusConfig[payment.status]?.label || payment.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 sm:px-6 py-8 text-center text-sm text-gray-500">
                  No payment records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentTable;