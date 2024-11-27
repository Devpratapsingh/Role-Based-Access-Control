import React, { useEffect, useState } from "react";
import "./App.css";
import axiosInstance from "./mocks/mockService"; // Import the mock service with axios
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UserManagement from "./Components/UserManagement";
import Admin from "./Components/Admin"; // Assuming Admin is another component
import PrivateRoute from "./Components/PrivateRoute"; // Import your PrivateRoute
import UserDashboard from "./Components/UserDashboard";
import AdminHome from "./Components/AdminHome";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from the mock API using the axiosInstance
  useEffect(() => {
    axiosInstance
      .get("/users") // Making a GET request to the mock API
      .then((response) => {
        setUsers(response.data); // Set the mocked users in state
      })
      .catch((error) => {
        console.error("There was an error fetching users:", error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/adminhome" element={<AdminHome />} />

        {/* Private route for admin, only accessible by authorized users */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path="/admin" element={<Admin />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
