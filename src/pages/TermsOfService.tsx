import React from 'react';
import Layout from '../components/Layout';

const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By installing, accessing, or using Page Sniffer AI ("the Extension," "Service," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
              </p>
              <p className="text-gray-700 mb-4">
                These Terms constitute a legally binding agreement between you and Page Sniffer AI. We reserve the right to modify these Terms at any time, and your continued use of the Service constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                Page Sniffer AI is a Chrome browser extension that analyzes webpage content to detect AI-generated text using machine learning technology. The Service provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>AI content detection and analysis</li>
                <li>Percentage scores indicating likelihood of AI generation</li>
                <li>Highlighting of potentially AI-generated sentences</li>
                <li>Analysis history and usage tracking</li>
                <li>Optional user accounts with extended features</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">
                You may use the Extension as a guest with limited features or create an account for additional benefits. When creating an account, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Account Types and Limits</h3>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-gray-700 mb-2"><strong>Guest Users:</strong> 3 analyses per day</p>
                <p className="text-gray-700 mb-2"><strong>Free Account:</strong> 5 analyses per day</p>
                <p className="text-gray-700"><strong>Premium Account:</strong> Unlimited analyses</p>
              </div>
              <p className="text-gray-700 mb-4">
                Rate limits reset daily at midnight UTC. Attempts to circumvent these limits may result in service suspension.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">You agree NOT to:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Attempt to reverse engineer, decompile, or disassemble the Extension</li>
                <li>Circumvent rate limits or security measures</li>
                <li>Scrape, data mine, or harvest data from the Service</li>
                <li>Share your account credentials with others</li>
                <li>Use automated systems or bots to access the Service</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Transmit viruses, malware, or malicious code</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.1 Our Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                The Service, including all content, features, functionality, software code, designs, logos, and trademarks, is owned by Page Sniffer AI and is protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">5.2 Your Content</h3>
              <p className="text-gray-700 mb-4">
                You retain all rights to the webpage content you analyze. By using the Service, you grant us a limited license to process your submitted content solely for the purpose of providing AI detection analysis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimer of Warranties</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong>
                </p>
                <p className="text-gray-700 mb-4">We specifically disclaim:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                  <li>Guarantees of accuracy, reliability, or completeness of AI detection results</li>
                  <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                  <li>Any warranties regarding third-party content or services</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">
                AI detection technology is not perfect and should not be the sole basis for important decisions. Results are probabilistic estimates and may contain false positives or false negatives.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-gray-700 mb-4">
                  <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, PAGE SNIFFER AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or delays</li>
                  <li>Decisions made based on analysis results</li>
                  <li>Unauthorized access to your data</li>
                  <li>Errors or inaccuracies in detection results</li>
                </ul>
              </div>
              <p className="text-gray-700 mb-4">
                Our total liability shall not exceed the amount you paid for the Service in the past 12 months, or $100, whichever is less.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify, defend, and hold harmless Page Sniffer AI, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Your use or misuse of the Service</li>
                <li>Violation of these Terms</li>
                <li>Violation of any rights of third parties</li>
                <li>Your content or data submitted to the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our data practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Payment and Subscriptions</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.1 Premium Subscriptions</h3>
              <p className="text-gray-700 mb-4">
                Premium subscriptions are billed on a recurring basis. By subscribing, you authorize us to charge your payment method at the beginning of each billing cycle.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.2 Refunds</h3>
              <p className="text-gray-700 mb-4">
                Refunds are handled on a case-by-case basis. Contact support@page-sniffer-ai.com within 7 days of purchase to request a refund.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">10.3 Cancellation</h3>
              <p className="text-gray-700 mb-4">
                You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate your access to the Service at any time, with or without notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Abuse of the Service or other users</li>
                <li>Non-payment of fees</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Upon termination, your right to use the Service ceases immediately. Provisions that by their nature should survive termination shall survive.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to the Service</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                The Service may integrate with third-party services (e.g., Google OAuth, GitHub OAuth). Your use of such services is subject to their respective terms of service and privacy policies. We are not responsible for third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Governing Law and Dispute Resolution</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">14.1 Governing Law</h3>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Page Sniffer AI operates, without regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">14.2 Dispute Resolution</h3>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms or the Service shall be resolved through binding arbitration, except where prohibited by law. You waive your right to participate in class action lawsuits.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Miscellaneous</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.1 Entire Agreement</h3>
              <p className="text-gray-700 mb-4">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Page Sniffer AI regarding the Service.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.2 Severability</h3>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.3 Waiver</h3>
              <p className="text-gray-700 mb-4">
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">15.4 Assignment</h3>
              <p className="text-gray-700 mb-4">
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700"><strong>Email:</strong> legal@page-sniffer-ai.com</p>
                <p className="text-gray-700"><strong>Support:</strong> support@page-sniffer-ai.com</p>
                <p className="text-gray-700"><strong>Website:</strong> https://page-sniffer-ai.com</p>
              </div>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
              <p className="text-gray-700">
                <strong>By using Page Sniffer AI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfService;
