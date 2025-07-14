// /src/pages/user-portal/support.js
import React, { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
    priority: "medium",
    category: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Support ticket submitted:", formData);
    alert("Support ticket submitted successfully! We'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      subject: "",
      message: "",
      priority: "medium",
      category: "general"
    });
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Support Centre</h2>
        <p className="text-sm text-gray-600 mt-1">
          Need help? Contact our support team or submit a ticket below.
        </p>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center">
          <div className="text-2xl mb-3">📞</div>
          <h3 className="font-semibold text-gray-800 mb-2">Phone Support</h3>
          <p className="text-sm text-gray-600">+254 700 123 456</p>
          <p className="text-xs text-gray-500 mt-1">Mon-Fri, 8AM-6PM</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center">
          <div className="text-2xl mb-3">✉️</div>
          <h3 className="font-semibold text-gray-800 mb-2">Email Support</h3>
          <p className="text-sm text-gray-600">support@swisslife.com</p>
          <p className="text-xs text-gray-500 mt-1">24/7 Response</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4 sm:p-6 text-center">
          <div className="text-2xl mb-3">💬</div>
          <h3 className="font-semibold text-gray-800 mb-2">Live Chat</h3>
          <p className="text-sm text-gray-600">Available Now</p>
          <p className="text-xs text-gray-500 mt-1">Instant Support</p>
        </div>
      </div>

      {/* Support Form */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Submit a Support Ticket</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="general">General Inquiry</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Question</option>
                <option value="claim">Claim Support</option>
                <option value="policy">Policy Question</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Priority
              </label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Brief description of your issue"
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please provide detailed information about your issue..."
              rows={6}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-3 sm:space-y-0">
            <p className="text-xs text-gray-500">
              We typically respond within 24 hours during business days.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Ticket"}
            </button>
          </div>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow p-4 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">How do I file a claim?</h4>
            <p className="text-sm text-gray-600">
              Navigate to the Claims section in your dashboard and follow the step-by-step process to submit your claim with supporting documents.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">How can I update my payment method?</h4>
            <p className="text-sm text-gray-600">
              Go to your Profile section and update your payment information, or contact our billing department for assistance.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">What documents do I need for a claim?</h4>
            <p className="text-sm text-gray-600">
              Required documents vary by claim type. Common requirements include incident reports, medical records, and proof of ownership.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 mb-2">How long does claim processing take?</h4>
            <p className="text-sm text-gray-600">
              Most claims are processed within 5-10 business days. Complex claims may take longer, and we'll keep you updated throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;