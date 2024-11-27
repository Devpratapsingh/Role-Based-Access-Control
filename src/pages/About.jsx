import React from "react";
import { useNavigate, Link } from "react-router-dom";
function about() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white font-sans">
      <header className="w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-60">
        <h1 className="text-3xl font-bold tracking-wide">RBAC</h1>
        <nav className="flex space-x-6">
          <Link to={"/"} className="hover:text-purple-300 transition">
            Home
          </Link>
          <Link to={"/Contact"} className="hover:text-purple-300 transition">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center text-center px-6 mt-16">
        <h2 className="text-5xl font-extrabold mb-6">About RBAC</h2>
        <p className="text-gray-300 max-w-2xl text-lg mb-8">
          RBAC (Role-Based Access Control) is a secure, efficient, and scalable
          solution for managing user permissions. Our platform ensures that
          users can access only the resources they are authorized for, improving
          security and reducing complexity in access management.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl w-full">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Why Choose RBAC?</h3>
            <p className="text-gray-400">
              RBAC simplifies the process of assigning and managing permissions,
              making your organization more secure and compliant with best
              practices.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To provide an intuitive and reliable access control system that
              empowers organizations to focus on growth while maintaining
              security.
            </p>
          </div>
        </section>
      </main>

      <footer className="w-full px-6 py-4 bg-black bg-opacity-60 text-center text-sm">
        <p className="text-gray-400">
          © 2024 RBAC. All rights reserved. |{" "}
          <Link to={"/PrivacyPolicy"} className="hover:text-purple-300">
            Privacy Policy
          </Link>{" "}
        </p>
      </footer>
    </div>
  );
}

export default about;
