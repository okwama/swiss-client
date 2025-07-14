import React from "react";

const demoPayments = [
  {
    policy: "Performance Bonds",
    amount: 5000,
    date: "2025-04-01 10:30 AM",
  },
  {
    policy: "Morning Investor",
    amount: 10000,
    date: "2025-04-03 2:15 PM",
  },
  {
    policy: "Comprehensive Medical Cover",
    amount: 7500,
    date: "2025-04-04 9:00 AM",
  },
];

const Payments = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-4 sm:p-6 space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Payments & Billing</h2>

      {/* 🧾 Payment History */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">🧾 Payment History</h3>
        {demoPayments.length > 0 ? (
          <div className="space-y-4">
            {demoPayments.map((payment, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Mobile view */}
                <div className="block sm:hidden">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{payment.policy}</p>
                      <p className="text-sm text-gray-500">Date: {payment.date}</p>
                    </div>
                    <span className="text-green-600 font-bold text-lg">KES. {payment.amount}</span>
                  </div>
                </div>
                
                {/* Desktop view */}
                <div className="hidden sm:flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">{payment.policy}</p>
                    <p className="text-sm text-gray-500">Date: {payment.date}</p>
                  </div>
                  <span className="text-green-600 font-bold text-xl">KES. {payment.amount}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No payments have been made yet.</p>
        )}
      </div>

      {/* 💳 Make a Payment */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">💳 Make a Payment</h3>
        <p className="text-sm text-gray-600 mb-4">
          Go to the policy purchase page to make a new payment.
        </p>
        <a
          href="/user/add"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
        >
          Purchase Policy
        </a>
      </div>

      {/* 📄 Billing Details */}
      <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">📄 Billing Information</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Billing Address:</strong> 123 Insurance Street, Nairobi, Kenya</p>
          <p><strong>Tax ID:</strong> KE-123456789</p>
          <p><strong>Payment Terms:</strong> Net 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
