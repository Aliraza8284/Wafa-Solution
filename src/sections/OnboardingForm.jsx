// sections/OnboardingForm.jsx

import React, { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from '@emailjs/browser';

import {
  FaCheck,
  FaUser,
  FaTruck,
  FaFileAlt,
  FaUpload,
  FaBuilding,
  FaArrowLeft,
} from "react-icons/fa";

// ✅ EMAILJS CREDENTIALS
const EMAILJS_SERVICE_ID = "service_k4xwtvj";
const EMAILJS_TEMPLATE_ID = "template_u6na777";
const EMAILJS_PUBLIC_KEY = "rKyQbRPUIfxtVQVjp";

// ✅ TO EMAIL (Admin email)
const TO_EMAIL = "aligill18284@gmail.com";

const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [selectedTruck, setSelectedTruck] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Ref to anchor the form container locally (Prevents jumping to Hero section)
  const formSectionRef = useRef(null);

  const [countUp, setCountUp] = useState({
    drivers: 0,
    loads: 0,
    states: 0,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    mcNumber: "",
    authorityFile: null,
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Count Up Animation
  useEffect(() => {
    const targets = { drivers: 500, loads: 5000, states: 48 };
    const duration = 2000;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountUp({
        drivers: Math.floor(targets.drivers * ease),
        loads: Math.floor(targets.loads * ease),
        states: Math.floor(targets.states * ease),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // Handle Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type.includes('image'))) {
      setFormData({ ...formData, authorityFile: file });
    } else {
      toast.error('Please upload PDF, JPG, or PNG file only');
    }
  };

  // ✅ EMAIL VALIDATION - Gmail, Yahoo, Outlook, Hotmail, custom domains, sab accept karega
  // Accept Gmail, Yahoo, Outlook, company emails, and all valid domains
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email.trim());
  }

  // ✅ PHONE VALIDATION - Accepts any input/characters without standard length limits
  const isValidPhone = (phone) => {
    return phone.trim().length > 0;
  };

  // Validation Step 1
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name required";

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@domain.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number required";
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation Step 2
  const validateStep2 = () => {
    const newErrors = {};
    if (!selectedTruck) newErrors.truck = "Please select your equipment";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validation Step 3
  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.mcNumber.trim()) newErrors.mcNumber = "MC Authority number required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Helper method to scroll smoothly into the form itself instead of the global window top
  const scrollToFormAnchor = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ✅ Next Step
  const nextStep = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      setTimeout(scrollToFormAnchor, 40);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
      setTimeout(scrollToFormAnchor, 40);
    }
  };

  // ✅ Previous Step
  const prevStep = () => {
    if (step === 1) {
      window.location.href = '/';
    } else {
      setStep(step - 1);
      setTimeout(scrollToFormAnchor, 40);
    }
  };

  // Go Home
  const goHome = () => {
    window.location.href = '/';
  };

  // Send Email Function
  const sendEmail = async () => {
    const templateParams = {
      to_email: TO_EMAIL,
      application_id: `APP-${Date.now()}`,
      submitted_date: new Date().toLocaleString(),
      from_name: formData.fullName,
      company_name: formData.companyName || 'Not provided',
      from_email: formData.email,
      phone: formData.phone,
      mc_number: formData.mcNumber,
      equipment_type: selectedTruck,
      notes: formData.notes || 'No notes provided',
    };

    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    toast.loading('Submitting application...', { id: 'submit' });

    const emailSent = await sendEmail();

    if (emailSent) {
      toast.success('Application submitted! We will contact you soon.', {
        id: 'submit',
        duration: 5000,
        style: { background: 'black', color: '#D4A64A', border: '1px solid #D4A64A' }
      });

      const applicationData = {
        id: Date.now(),
        ...formData,
        equipment: selectedTruck,
        submittedAt: new Date().toLocaleString()
      };
      const existingApps = JSON.parse(localStorage.getItem('applications') || '[]');
      existingApps.push(applicationData);
      localStorage.setItem('applications', JSON.stringify(existingApps));

      setFormData({
        fullName: "", companyName: "", email: "", phone: "",
        mcNumber: "", authorityFile: null, notes: "",
      });
      setSelectedTruck("");
      setStep(1);

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);
    } else {
      toast.error('Failed to submit. Please try again.', {
        id: 'submit',
        style: { background: 'black', color: '#D4A64A', border: '1px solid #D4A64A' }
      });
    }

    setIsSubmitting(false);
  };

  // Trucks Data
 const trucks = [
  { name: "Dry Van", image: "pexels-photo-27508769.avif" },
  { name: "Reefer", image: "pexels-photo-8865029.avif" },
  { name: "Flatbed", image: "pexels-photo-29399463.avif" },
  { name: "Step Deck", image: "pexels-photo-stepdeck-02.avif" },
  { name: "Hotshot", image: "pexels-photo-hotshot-03.avif" },
  { name: "Box Truck", image: "pexels-photo-9703050.avif" },
  { name: "Power Only", image: "pexels-photo-8865029.avif" },
  { name: "Lowboy", image: "pexels-photo-lowboy-06.avif" },
];

  return (
    <section ref={formSectionRef} className="bg-gray-900 py-12 min-h-screen select-none">
      <Toaster
        position="top-center"
        toastOptions={{
          style: { background: 'black', color: '#D4A64A', border: '1px solid #D4A64A' },
          duration: 3000
        }}
      />

      <div className="max-w-5xl mx-auto px-4">

        {/* Header with Back Button */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={goHome}
            className="text-gray-400 hover:text-[#D4A64A] transition-colors duration-300"
            title="Go to Home"
          >
            <FaArrowLeft size={20} />
          </button>
          <div className="text-center flex-1">
            <p className="uppercase tracking-[3px] text-[#D4A64A] text-[10px] font-semibold">Carrier Onboarding</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Join Our <span className="text-[#D4A64A]">Dispatch Fleet</span>
            </h2>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-[#141A22] border border-[#252D38] rounded-xl p-2 text-center hover:border-[#D4A64A] transition-all duration-300">
            <div className="text-xl font-bold text-[#D4A64A]">{countUp.drivers}+</div>
            <p className="text-gray-500 text-[10px] mt-0.5">Active Drivers</p>
          </div>
          <div className="bg-[#141A22] border border-[#252D38] rounded-xl p-2 text-center hover:border-[#D4A64A] transition-all duration-300">
            <div className="text-xl font-bold text-[#D4A64A]">{countUp.loads}+</div>
            <p className="text-gray-500 text-[10px] mt-0.5">Weekly Loads</p>
          </div>
          <div className="bg-[#141A22] border border-[#252D38] rounded-xl p-2 text-center hover:border-[#D4A64A] transition-all duration-300">
            <div className="text-xl font-bold text-[#D4A64A]">{countUp.states}</div>
            <p className="text-gray-500 text-[10px] mt-0.5">States Covered</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#141A22] border border-[#252D38] rounded-2xl overflow-hidden shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="p-5 md:p-6">

              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[
                  { icon: <FaUser size={14} />, label: "Info" },
                  { icon: <FaTruck size={14} />, label: "Truck" },
                  { icon: <FaFileAlt size={14} />, label: "MC" }
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all duration-300 text-sm
                          ${step >= index + 1
                            ? "bg-[#D4A64A] border-[#D4A64A] text-black"
                            : "bg-[#141A22] border-[#313A46] text-gray-500"
                          }`}
                      >
                        {step > index + 1 ? <FaCheck size={12} /> : item.icon}
                      </div>
                      <span className="text-[10px] text-gray-500 mt-1 hidden sm:block">{item.label}</span>
                    </div>
                    {index !== 2 && (
                      <div className="flex-1 h-[2px] bg-[#252D38] mx-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-[#D4A64A] transition-all duration-500
                            ${step > index + 1 ? "w-full" : "w-0"}`}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* STEP 1 - Your Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FaBuilding className="text-[#D4A64A] text-sm" />
                    <h3 className="text-lg font-semibold text-white">Your Info</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Full Name*</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-black text-white border border-[#252D38] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#D4A64A] transition-all duration-300 hover:border-[#D4A64A]/50"
                      />
                      {errors.fullName && <p className="text-red-400 text-[10px] mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Company / DBA</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="ABC Logistics"
                        className="w-full bg-black text-white border border-[#252D38] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#D4A64A] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-black text-white border border-[#252D38] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#D4A64A] transition-all duration-300"
                      />
                      {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1">Phone* (International)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="📞 (201) 252-7402 "
                        className="w-full bg-black text-white border border-[#252D38] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#D4A64A] transition-all duration-300"
                      />
                      {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 - Equipment */}
              {step === 2 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FaTruck className="text-[#D4A64A] text-sm" />
                    <h3 className="text-lg font-semibold text-white">Select Your Equipment</h3>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {trucks.map((truck) => (
                      <button
                        key={truck.name}
                        type="button"
                        onClick={() => setSelectedTruck(truck.name)}
                        className={`relative overflow-hidden rounded-xl border transition-all duration-300 hover:scale-105
                          ${selectedTruck === truck.name ? "border-[#D4A64A] ring-1 ring-[#D4A64A]/50" : "border-[#252D38]"}`}
                      >
                        {selectedTruck === truck.name && (
                          <div className="absolute top-1 left-1 z-20 bg-[#D4A64A] text-black w-5 h-5 rounded-full flex items-center justify-center">
                            <FaCheck size={10} />
                          </div>
                        )}

                        <img src={truck.image} alt={truck.name} className="w-full h-28 object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                        <div className="absolute bottom-2 left-2 z-10 text-left">
                          <h4 className="text-white text-xs font-semibold">{truck.name}</h4>
                          <p className="text-[#D4A64A] text-[8px] mt-0.5">Tap</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.truck && <p className="text-red-400 text-[10px] mt-2">{errors.truck}</p>}
                </div>
              )}

              {/* STEP 3 - MC Authority */}
              {step === 3 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-3">
                    <FaFileAlt className="text-[#D4A64A] text-sm" />
                    <h3 className="text-lg font-semibold text-white">MC Authority</h3>
                  </div>

                  <div>
                    <label className="block text-gray-400 text-xs mb-1">MC Authority Number*</label>
                    <input
                      type="text"
                      name="mcNumber"
                      value={formData.mcNumber}
                      onChange={handleChange}
                      placeholder="MC-123456"
                      className="w-full bg-black text-white border border-[#252D38] rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#D4A64A] transition-all duration-300"
                    />
                    {errors.mcNumber && <p className="text-red-400 text-[10px] mt-1">{errors.mcNumber}</p>}
                  </div>

                  {/* Upload */}
                  <div>
                    <label className="block text-gray-400 text-xs mb-1">Upload MC Authority (PDF, JPG, PNG)</label>
                    <label className="w-full bg-black border border-dashed border-[#3A4350] rounded-xl px-3 py-2.5 flex items-center justify-between cursor-pointer hover:border-[#D4A64A] transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <FaUpload className="text-[#D4A64A] text-xs" />
                        <span className="text-gray-400 text-xs">
                          {formData.authorityFile ? formData.authorityFile.name : "Browse →"}
                        </span>
                      </div>
                      <input
                        type="file"
                        hidden
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-gray-400 text-xs mb-1">Notes for our team</label>
                    <textarea
                      rows="3"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Add extra details..."
                      className="w-full bg-black text-white border border-[#252D38] rounded-xl px-3 py-2 text-sm resize-none focus:outline-none focus:border-[#D4A64A] transition-all duration-300"
                    ></textarea>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="border-t border-[#252D38] bg-[#11161D] px-5 md:px-6 py-3 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-1.5 rounded-xl border border-[#2E3743] text-gray-300 text-sm hover:bg-[#1B222B] hover:border-[#D4A64A] transition-all duration-300 flex items-center gap-2"
              >
                <FaArrowLeft size={12} />
                {step === 1 ? "Home" : "Prev"}
              </button>

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#D4A64A] hover:bg-[#C4973C] text-black font-semibold px-5 py-1.5 rounded-xl text-sm transition-all duration-300"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#D4A64A] hover:bg-[#C4973C] text-black font-semibold px-5 py-1.5 rounded-xl text-sm transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OnboardingForm;