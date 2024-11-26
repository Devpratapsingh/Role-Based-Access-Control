import React from 'react'
import {Link} from "react-router-dom"
function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
      <header className="w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-60">
        <h1 className="text-3xl font-bold tracking-wide">RBAC</h1>
        <nav className="flex space-x-6">
          <Link to={"/"} className="hover:text-purple-300 transition">
            Home
          </Link>
          <Link to={"/about"} className="hover:text-purple-300 transition">
            About
          </Link>
          <Link to={"/contact"} className="hover:text-purple-300 transition">
            Contact
          </Link>
        </nav>
      </header>

  
      <main className="px-8 py-16">
        <h2 className="text-5xl font-extrabold text-center mb-8">
          Privacy Policy
        </h2>
        <section className="max-w-4xl mx-auto text-gray-300 text-lg space-y-8">
          <p>
            At RBAC, we are committed to protecting your privacy and ensuring
            that your personal information is handled in a safe and responsible
            manner. This Privacy Policy outlines how we collect, use, and
            safeguard your information.
          </p>

          <h3 className="text-2xl font-bold text-purple-300">
            Information We Collect
          </h3>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Personal information such as your name, email address, and contact
              number when you sign up or contact us.
            </li>
            <li>
              Usage data such as IP address, browser type, and interaction with
              our website.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-purple-300">
            How We Use Your Information
          </h3>
          <p>The information we collect is used to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and improve our services.</li>
            <li>Respond to your inquiries and support requests.</li>
            <li>Enhance user experience and personalize content.</li>
          </ul>

          <h3 className="text-2xl font-bold text-purple-300">Data Security</h3>
          <p>
            We implement robust security measures to protect your data from
            unauthorized access, alteration, or disclosure. However, no system
            can be entirely secure, and we cannot guarantee the absolute
            security of your information.
          </p>

          <h3 className="text-2xl font-bold text-purple-300">
            Third-Party Services
          </h3>
          <p>
            We may share your information with trusted third-party services to
            provide features or improve functionality. These services are
            required to adhere to strict data protection policies.
          </p>

          <h3 className="text-2xl font-bold text-purple-300">Your Rights</h3>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. To exercise these rights, please contact us
            via the details provided on our contact page.
          </p>

          <h3 className="text-2xl font-bold text-purple-300">
            Changes to This Policy
          </h3>
          <p>
            We may update this Privacy Policy periodically. We encourage you to
            review it regularly to stay informed about how we are protecting
            your information.
          </p>

          <h3 className="text-2xl font-bold text-purple-300">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please feel
            free to contact us at:
          </p>
          <ul className="list-none space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:0211csai133@niet.co.in"
                className="text-purple-300 hover:underline"
              >
                0211csai133@niet.co.in
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+918171867819"
                className="text-purple-300 hover:underline"
              >
                +91 8171867819
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/dev-pratap-singh-1a13a422a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-300 hover:underline"
              >
                linkedin.com/in/dev-pratap-singh-1a13a422a
              </a>
            </li>
          </ul>
        </section>
      </main>


      <footer className="w-full px-6 py-4 bg-black bg-opacity-60 text-center text-sm">
        <p className="text-gray-400">© 2024 RBAC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default PrivacyPolicy