import React, { useEffect, useState } from "react";

const policyData = [
  {
    title: "Performance Bonds",
    description: "Swiss Life HLDG offers robust performance bonds...",
    amount: 5000,
  },
  {
    title: "Morning Investor",
    description: "Our Morning Investor product is designed...",
    amount: 10000,
  },
  {
    title: "Comprehensive Medical Cover",
    description: "At Swiss Life, we prioritize your health...",
    amount: 7500,
  },
  {
    title: "Car Insurance",
    description: "Protect your vehicle with our tailored car insurance...",
    amount: 8500,
  },
  {
    title: "Advanced Payment Gurantees",
    description: "Our advance payment guarantees serve as...",
    amount: 7500,
  },
];

// Mock Users DB
const demoUsers = {
  1: {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  },
};

const Policies = () => {
  const currentUserId = 1;
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [showCardModal, setShowCardModal] = useState(false);
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const fetchUserDetails = () => {
      const user = demoUsers[currentUserId];
      if (user) {
        setFormData({ name: user.name, email: user.email });
      }
    };
    fetchUserDetails();
  }, []);

  const handlePolicyChange = (e) => {
    const selected = policyData.find((p) => p.title === e.target.value);
    setSelectedPolicy(selected);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCardInputChange = (e) => {
    setCardData({ ...cardData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedPolicy) {
      alert("Please select a policy.");
      return;
    }
    setShowCardModal(true);
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();

    console.log("✅ Purchase Complete", {
      user: formData,
      policy: selectedPolicy,
      payment: cardData,
    });

    alert(`✅ You purchased ${selectedPolicy.title} for KES.${selectedPolicy.amount}`);

    // Reset state
    setSelectedPolicy(null);
    setShowCardModal(false);
    setCardData({
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Buy a Policy</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full border border-gray-300 rounded px-3 py-2"
          onChange={handlePolicyChange}
          value={selectedPolicy?.title || ""}
          required
        >
          <option value="" disabled>
            -- Select a Policy --
          </option>
          {policyData.map((policy, index) => (
            <option key={index} value={policy.title}>
              {policy.title}
            </option>
          ))}
        </select>

        {selectedPolicy && (
          <div className="bg-gray-50 p-4 rounded border text-sm text-gray-600 space-y-2">
            <p>{selectedPolicy.description}</p>
            <p className="font-semibold text-yellow-600">
              Amount: KES.{selectedPolicy.amount}
            </p>
          </div>
        )}

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full border border-gray-300 px-3 py-2 rounded"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          className="w-full border border-gray-300 px-3 py-2 rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Purchase Policy
        </button>
      </form>

      {/* Modal Dialog */}
      {showCardModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md space-y-4 shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-700"
              onClick={() => setShowCardModal(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-semibold text-gray-800">
              Enter Card Details
            </h3>
            <form onSubmit={handleCardSubmit} className="space-y-4">
              <input
                type="text"
                name="cardName"
                placeholder="Cardholder Name"
                value={cardData.cardName}
                onChange={handleCardInputChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                value={cardData.cardNumber}
                onChange={handleCardInputChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
              <div className="flex gap-3">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={handleCardInputChange}
                  className="w-1/2 border border-gray-300 px-3 py-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={cardData.cvv}
                  onChange={handleCardInputChange}
                  className="w-1/2 border border-gray-300 px-3 py-2 rounded"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Confirm Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Policies;
