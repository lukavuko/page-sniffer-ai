import React from 'react';
import Layout from '../components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Page Sniffer AI ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Chrome extension and related services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Email address (when creating an account)</li>
                <li>Authentication credentials (when signing in with third-party providers)</li>
                <li>Account preferences and settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Usage statistics (number of analyses performed)</li>
                <li>Extension version and browser information</li>
                <li>Webpage URLs analyzed (stored locally only)</li>
                <li>Analysis results and timestamps</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.3 Content Information</h3>
              <p className="text-gray-700 mb-4">
                When you analyze a webpage, we temporarily process the text content to provide AI detection results. This content is not permanently stored on our servers unless you explicitly save results to your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>To provide and maintain our AI content detection service</li>
                <li>To authenticate users and manage accounts</li>
                <li>To track usage limits and enforce rate limiting</li>
                <li>To improve our machine learning models and detection accuracy</li>
                <li>To send service-related notifications and updates</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To prevent fraud and ensure service security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Storage and Security</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Local Storage</h3>
              <p className="text-gray-700 mb-4">
                Most of your data, including analysis history and preferences, is stored locally in your browser using Chrome's storage API. This data never leaves your device unless you choose to sync it with your account.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Cloud Storage</h3>
              <p className="text-gray-700 mb-4">
                If you create an account, certain information (email, usage counts, account status) is stored securely on our servers using industry-standard encryption and security practices.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Security Measures</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>End-to-end encryption for data transmission</li>
                <li>Secure authentication via OAuth 2.0</li>
                <li>Regular security audits and updates</li>
                <li>Limited data retention policies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Services</h2>
              <p className="text-gray-700 mb-4">We use the following third-party services:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Supabase:</strong> For user authentication and database services</li>
                <li><strong>ZeroGPT API:</strong> For AI content detection analysis</li>
                <li><strong>Google/GitHub OAuth:</strong> For third-party authentication (optional)</li>
              </ul>
              <p className="text-gray-700 mb-4">
                These services have their own privacy policies. We recommend reviewing them to understand how your data is handled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or valid legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Opt-out:</strong> Disable auto-analysis or specific features</li>
                <li><strong>Data Portability:</strong> Export your data in a machine-readable format</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise these rights, contact us at privacy@page-sniffer-ai.com or use the "Clear Data" feature in the extension settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">
                Our extension uses browser storage mechanisms (localStorage, chrome.storage) to maintain your preferences and session state. We do not use traditional cookies or third-party tracking pixels.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of the service after changes indicates acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700"><strong>Email:</strong> privacy@page-sniffer-ai.com</p>
                <p className="text-gray-700"><strong>Support:</strong> support@page-sniffer-ai.com</p>
                <p className="text-gray-700"><strong>Website:</strong> https://page-sniffer-ai.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
