import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../mocks/mockService"; // Assuming axios instance for mock
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for the button
  const [error, setError] = useState(null); // Error message state
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Clear any previous errors

    try {
      // Fetch users from the mock API
      const response = await axiosInstance.get("/users");
      console.log("response", response);

      const users = response.data;

      // Check credentials
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        // Store user info in localStorage (or sessionStorage)
        localStorage.setItem("token", "dummy-token"); // Save JWT token if needed
        localStorage.setItem("role", user.role);

        // Redirect based on role
        if (user.role === "Admin") {
          navigate("/admin");
        } else {
          navigate("/userdashboard");
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Unable to login. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex flex-col justify-center items-center text-white font-sans">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form
        onSubmit={handleLogin}
        className="w-80 bg-black bg-opacity-60 p-6 rounded-lg shadow-lg"
      >
        {error && (
          <div className="mb-4 p-3 bg-red-600 rounded text-center text-white">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-lg">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-2 rounded bg-gray-700 text-white"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6 relative">
          <label className="block text-lg">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle input type
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-2 rounded bg-gray-700 text-white pr-10" // Adjust padding
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center py-7 text-gray-400 hover:text-gray-200"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className={`w-full px-8 py-3 bg-purple-600 rounded-lg text-white font-semibold shadow-md hover:bg-purple-700 transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
