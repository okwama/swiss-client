import React, { useEffect, useState } from "react";

// Mock policies (assumed purchased)
const purchasedPolicies = [
  {
    title: "Performance Bonds",
    policyNumber: "PB-00123",
  },
  {
    title: "Morning Investor",
    policyNumber: "MI-00456",
  },
  {
    title: "Comprehensive Medical Cover",
    policyNumber: "CMC-00789",
  },
];

// 👤 Mock user database
const demoUsers = {
  1: {
    name: "Benjamin Okwama",
    email: "Benjamin.Okwama@example.com",
  },
  2: {
    name: "Bob Smith",
    email: "bob.smith@example.com",
  },
};

const Claim = () => {
  const currentUserId = 1;
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    policyNumber: "",
    claimDescription: "",
    attachment: null,
  });

  useEffect(() => {
    const fetchUser = () => {
      const user = demoUsers[currentUserId];
      if (user) {
        setFormData((prev) => ({
          ...prev,
          name: user.name,
          email: user.email,
        }));
      }
    };
    fetchUser();
  }, [currentUserId]);

  const handlePolicyChange = (e) => {
    const selected = purchasedPolicies.find(p => p.title === e.target.value);
    setSelectedPolicy(selected);
    setFormData((prev) => ({
      ...prev,
      policyNumber: selected?.policyNumber || "",
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPolicy || !formData.claimDescription) {
      alert("Please fill all required fields.");
      return;
    }

    const claimPayload = {
      ...formData,
      policy: selectedPolicy.title,
    };

    console.log("📨 Submitting Claim:", claimPayload);
    alert("✅ Insurance claim submitted successfully!");

    // Reset form
    setSelectedPolicy(null);
    setFormData({
      name: formData.name,
      email: formData.email,
      policyNumber: "",
      claimDescription: "",
      attachment: null,
    });
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-4 sm:p-6 space-y-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800">File an Insurance Claim</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Your Policy
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={handlePolicyChange}
            value={selectedPolicy?.title || ""}
            required
          >
            <option value="" disabled>-- Select Your Policy --</option>
            {purchasedPolicies.map((policy, index) => (
              <option key={index} value={policy.title}>
                {policy.title}
              </option>
            ))}
          </select>
        </div>

        {selectedPolicy && (
          <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
            <p><span className="font-semibold">Policy Number:</span> {selectedPolicy.policyNumber}</p>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full border border-gray-300 px-3 py-2 rounded-lg bg-gray-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Claim Description
          </label>
          <textarea
            name="claimDescription"
            placeholder="Describe your claim..."
            value={formData.claimDescription}
            onChange={handleInputChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attach Documents (Optional)
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            accept="image/*,application/pdf"
          />
          <p className="text-xs text-gray-500 mt-1">
            Accepted formats: Images (JPG, PNG) and PDF documents
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          Submit Claim
        </button>
      </form>
    </div>
  );
};

export default Claim;
