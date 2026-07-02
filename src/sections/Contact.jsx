// components/Contact.jsx
import React, { useState } from 'react';

const Contact = ({ 
  initialFormData = {},
  onSubmit,
  isLoading = false
}) => {
  // Local state management
  const [formData, setFormData] = useState({
    name: initialFormData.name || '',
    email: initialFormData.email || '',
    phone: initialFormData.phone || '',
    mcNumber: initialFormData.mcNumber || '',
    loadNumber: initialFormData.loadNumber || '',
    subject: initialFormData.subject || '',
    complaint: initialFormData.complaint || '',
    resolution: initialFormData.resolution || ''
  });

  const [complaintType, setComplaintType] = useState(initialFormData.complaintType || 'general');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const complaintTypes = [
    { value: 'dispatch', label: '🚛 Dispatch Issue' },
    { value: 'payment', label: '💰 Payment Problem' },
    { value: 'broker', label: '📋 Broker Issue' },
    { value: 'equipment', label: '🔧 Equipment Problem' },
    { value: 'general', label: '📝 General Complaint' }
  ];

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    if (!formData.complaint.trim()) {
      newErrors.complaint = 'Complaint details are required';
    } else if (formData.complaint.length < 20) {
      newErrors.complaint = 'Please provide at least 20 characters of detail';
    }

    // Optional phone validation
    if (formData.phone && !/^[\d\s()+-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for submission
      const submitData = {
        ...formData,
        complaintType,
        submittedAt: new Date().toISOString()
      };

      // Call the parent's onSubmit function if provided
      if (onSubmit) {
        await onSubmit(submitData);
      } else {
        // Default submission - log to console
        console.log('Complaint submitted:', submitData);
        // You can replace this with your API call
        // await fetch('/api/complaints', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(submitData)
        // });
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        mcNumber: '',
        loadNumber: '',
        subject: '',
        complaint: '',
        resolution: ''
      });
      setComplaintType('general');
      setErrors({});
      
      // Show success message (you can add a toast notification here)
      alert('Complaint submitted successfully! We will respond within 24 hours.');
      
    } catch (error) {
      console.error('Error submitting complaint:', error);
      setErrors({ submit: 'Failed to submit complaint. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/30 rounded-xl p-5 md:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
      <h3 className="text-white font-semibold mb-5 text-base md:text-lg flex items-center gap-2">
        <span className="text-red-500 text-xl">⚠️</span> File Your Complaint
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Complaint Type */}
        <div>
          <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Complaint Type *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {complaintTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setComplaintType(type.value)}
                className={`px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                  complaintType === type.value
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 scale-[1.02]'
                    : 'bg-gray-800/60 text-gray-400 hover:bg-gray-700/60 hover:text-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full bg-black/60 border ${errors.name ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full bg-black/60 border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        
        {/* Phone and MC Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 555-0123"
              className={`w-full bg-black/60 border ${errors.phone ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600`}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">MC Number (if applicable)</label>
            <input
              type="text"
              name="mcNumber"
              value={formData.mcNumber}
              onChange={handleChange}
              placeholder="MC-123456"
              className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600"
            />
          </div>
        </div>
        
        {/* Load Number and Subject */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <div>
            <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Load Number (if applicable)</label>
            <input
              type="text"
              name="loadNumber"
              value={formData.loadNumber}
              onChange={handleChange}
              placeholder="LOAD-12345"
              className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Subject / Brief Title *</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Brief description of issue"
              className={`w-full bg-black/60 border ${errors.subject ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-600`}
            />
            {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
          </div>
        </div>
        
        {/* Complaint Details */}
        <div>
          <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">Describe Your Complaint *</label>
          <textarea
            name="complaint"
            value={formData.complaint}
            onChange={handleChange}
            rows="5"
            placeholder="Please provide detailed information about your complaint (minimum 20 characters)..."
            className={`w-full bg-black/60 border ${errors.complaint ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors resize-none placeholder:text-gray-600`}
          ></textarea>
          {errors.complaint && <p className="text-red-400 text-xs mt-1">{errors.complaint}</p>}
          {formData.complaint && formData.complaint.length > 0 && formData.complaint.length < 20 && (
            <p className="text-yellow-400 text-xs mt-1">
              {20 - formData.complaint.length} more characters needed
            </p>
          )}
        </div>
        
        {/* Expected Resolution */}
        <div>
          <label className="block text-gray-400 text-xs md:text-sm font-medium mb-1.5">What resolution would you like?</label>
          <textarea
            name="resolution"
            value={formData.resolution}
            onChange={handleChange}
            rows="2"
            placeholder="How can we resolve this issue to your satisfaction?"
            className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors resize-none placeholder:text-gray-600"
          ></textarea>
        </div>
        
        {/* Global error message */}
        {errors.submit && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            <p className="text-red-400 text-sm">{errors.submit}</p>
          </div>
        )}
        
        {/* Disclaimer */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
          <p className="text-gray-400 text-[10px] md:text-xs flex items-start gap-2">
            <span className="text-red-500 text-sm mt-0.5">⚠️</span> 
            <span>By submitting this complaint, you agree that our team will investigate and respond within 24 hours. Please provide accurate information for faster resolution.</span>
          </p>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base hover:shadow-lg hover:shadow-red-600/20"
        >
          {isSubmitting || isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Complaint...
            </>
          ) : (
            <>
              <span className="text-lg">⚠️</span> Submit Complaint
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;