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
    <div className="max-w-3xl mx-auto bg-white rounded shadow p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Payments & Billing</h2>

      {/* 🧾 Payment History */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">🧾 Payment History</h3>
        {demoPayments.length > 0 ? (
          <ul className="space-y-4">
            {demoPayments.map((payment, index) => (
              <li
                key={index}
                className="p-4 border rounded shadow-sm flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{payment.policy}</p>
                  <p className="text-sm text-gray-500">Date: {payment.date}</p>
                </div>
                <span className="text-green-600 font-bold">KES. {payment.amount}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No payments have been made yet.</p>
        )}
      </div>

      {/* 💳 Make a Payment */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">💳 Make a Payment</h3>
        <p className="text-sm text-gray-500">Go to the policy purchase page to make a new payment.</p>
        <a
          href="/user/add"
          className="inline-block mt-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Purchase Policy
        </a>
      </div>

      {/* 📄 Billing Details */}
      </div>
  );
};

export default Payments;
