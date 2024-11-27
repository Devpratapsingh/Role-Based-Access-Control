import React from 'react'
import {Link} from "react-router-dom"

export default function Contact() {
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
        </nav>
      </header>

      <main className="flex flex-col items-center text-center px-6 mt-16">
        <h2 className="text-5xl font-extrabold mb-6">Contact Us</h2>
        <p className="text-gray-300 max-w-xl text-lg mb-12">
          Have questions or need assistance? Feel free to reach out. We're here
          to help!
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-gray-400">
              <a
                href="mailto:0211csai133@niet.co.in"
                className="hover:text-purple-300 transition"
              >
                0211csai133@niet.co.in
              </a>
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Phone</h3>
            <p className="text-gray-400">
              <a
                href="tel:+918171867819"
                className="hover:text-purple-300 transition"
              >
                +91 8171867819
              </a>
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
            <p className="text-gray-400">
              <a
                href="https://linkedin.com/in/dev-pratap-singh-1a13a422a"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-300 transition"
              >
                linkedin.com/in/dev-pratap-singh-1a13a422a
              </a>
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full px-6 py-4 bg-black bg-opacity-60 text-center text-sm">
        <p className="text-gray-400">
          © 2024 RBAC. All rights reserved. |{" "}
          <Link to={"/PrivacyPolicy"} className="hover:text-purple-300">
            Privacy Policy
          </Link>
        </p>
      </footer>
    </div>
  );
}
