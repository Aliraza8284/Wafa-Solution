// sections/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = ({ setCurrentSection }) => {
  return (
    <section className="py-20 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => setCurrentSection('home')}
          className="text-[#D4A64A] hover:text-white mb-8 inline-flex items-center gap-2 transition-colors"
        >
          ← Back to Home
        </button>
        
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="border-b border-gray-800 p-6 bg-gradient-to-r from-[#D4A64A]/5 to-transparent">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="text-gray-500 text-xs mt-2">Wafa Solutions LLC - Protecting Your Privacy Since 2020</p>
          </div>
          
          <div className="p-6 md:p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                At Wafa Solutions LLC ("we," "our," or "us"), we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our dispatch services, website, and mobile applications. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </div>
            
            {/* Information We Collect */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">2. Information We Collect</h2>
              <p className="text-gray-400 leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Personal Identification Information:</span> Name, email address, phone number, mailing address</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Business Information:</span> Company name, MC number, DOT number, operating authority</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Equipment Information:</span> Truck type, trailer type, equipment specifications</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Financial Information:</span> Payment details, factoring information, insurance details</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Usage Data:</span> How you interact with our website and services</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Location Data:</span> Real-time tracking for dispatch purposes (with your consent)</li>
              </ul>
            </div>
            
            {/* How We Use Your Information */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">3. How We Use Your Information</h2>
              <p className="text-gray-400 leading-relaxed mb-3">We use the information we collect to:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">• Provide, operate, and maintain our dispatch services</li>
                <li className="flex items-start gap-2">• Process your onboarding and carrier applications</li>
                <li className="flex items-start gap-2">• Match you with appropriate loads and brokers</li>
                <li className="flex items-start gap-2">• Communicate with you about your loads, payments, and account status</li>
                <li className="flex items-start gap-2">• Process payments and manage billing</li>
                <li className="flex items-start gap-2">• Improve our services and develop new features</li>
                <li className="flex items-start gap-2">• Comply with legal obligations and FMCSA regulations</li>
                <li className="flex items-start gap-2">• Protect against fraud and unauthorized transactions</li>
              </ul>
            </div>
            
            {/* Information Sharing */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">4. Information Sharing & Disclosure</h2>
              <p className="text-gray-400 leading-relaxed mb-3">We do not sell your personal information. We may share your information in the following situations:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">• <span className="text-white font-medium">With Brokers & Shippers:</span> To facilitate load assignments and rate negotiations</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">With Service Providers:</span> Payment processors, factoring companies, and insurance providers</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">For Legal Reasons:</span> To comply with FMCSA regulations, court orders, or legal processes</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">Business Transfers:</span> In connection with a merger, sale, or acquisition</li>
                <li className="flex items-start gap-2">• <span className="text-white font-medium">With Your Consent:</span> When you authorize us to share your information</li>
              </ul>
            </div>
            
            {/* Data Security */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">5. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement industry-standard security measures to protect your personal information, including:
              </p>
              <ul className="space-y-2 text-gray-400 mt-3">
                <li className="flex items-start gap-2">• 🔒 <span className="text-white">SSL/TLS encryption</span> for data transmission</li>
                <li className="flex items-start gap-2">• 🔐 <span className="text-white">Secure servers</span> with firewall protection</li>
                <li className="flex items-start gap-2">• 👤 <span className="text-white">Access controls</span> and authentication protocols</li>
                <li className="flex items-start gap-2">• 📋 <span className="text-white">Regular security audits</span> and vulnerability assessments</li>
                <li className="flex items-start gap-2">• 🛡️ <span className="text-white">Employee training</span> on data protection practices</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-3">
                While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>
            
            {/* Data Retention */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">6. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. 
                FMCSA regulations require us to maintain certain records for up to 3 years. After this period, we will securely delete or anonymize your information.
              </p>
            </div>
            
            {/* Your Rights */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">7. Your Rights & Choices</h2>
              <p className="text-gray-400 leading-relaxed mb-3">Depending on your location, you may have the following rights:</p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">• <span className="text-white">Access:</span> Request a copy of your personal information</li>
                <li className="flex items-start gap-2">• <span className="text-white">Correction:</span> Correct inaccurate or incomplete information</li>
                <li className="flex items-start gap-2">• <span className="text-white">Deletion:</span> Request deletion of your personal information</li>
                <li className="flex items-start gap-2">• <span className="text-white">Opt-Out:</span> Unsubscribe from marketing communications</li>
                <li className="flex items-start gap-2">• <span className="text-white">Portability:</span> Receive your data in a portable format</li>
              </ul>
              <p className="text-gray-400 leading-relaxed mt-3">
                To exercise these rights, please contact us at <a href="mailto:privacy@wafasolutions.com" className="text-[#D4A64A] hover:underline">privacy@wafasolutions.com</a>
              </p>
            </div>
            
            {/* Cookies & Tracking */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">8. Cookies & Tracking Technologies</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie preferences through your browser settings. Third-party services we use may include 
                Google Analytics for website analytics and load board integrations for dispatch services.
              </p>
            </div>
            
            {/* Children's Privacy */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">9. Children's Privacy</h2>
              <p className="text-gray-400 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. 
                If you become aware that a child has provided us with personal information, please contact us immediately.
              </p>
            </div>
            
            {/* International Users */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">10. International Users</h2>
              <p className="text-gray-400 leading-relaxed">
                Our services are primarily for US-based carriers. If you are accessing our website from outside the United States, 
                please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.
              </p>
            </div>
            
            {/* Policy Updates */}
            <div>
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">11. Updates to This Privacy Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. 
                We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
              </p>
            </div>
            
            {/* Contact Us */}
            <div className="bg-gray-800/50 rounded-xl p-6 border border-[#D4A64A]/20">
              <h2 className="text-xl font-bold text-[#D4A64A] mb-3">12. Contact Us</h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-[#D4A64A]">📧 Email:</span> <a href="mailto:privacy@wafasolutions.com" className="hover:text-[#D4A64A] transition-colors">info@wafasolutions.com</a></p>
                <p><span className="text-[#D4A64A]">📞 Phone:</span> <a href="tel:7133671310" className="hover:text-[#D4A64A] transition-colors">📞 (201) 252-7402 </a></p>
                <p><span className="text-[#D4A64A]">📍 Mail:</span> Dispatch HQ · Hoboken, NJ · Brooklyn, NY · Dallas, TX</p>
              </div>
            </div>
            
            {/* Footer Note */}
            <div className="text-center pt-4 border-t border-gray-800">
              <p className="text-gray-500 text-xs">
                By using our services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;