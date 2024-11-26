import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../mocks/mockService"; // Import the axios instance

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate(); // For programmatic navigation

  // Fetch users and roles (using axios mock API for now)
  useEffect(() => {
    // Fetching users from the mock API
    axiosInstance
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching users:", error));

    // Fetching roles from the mock API
    axiosInstance
      .get("/roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/"); // Redirect to login page
  };

  // Handle role change for a user
  const handleRoleChange = (userId, newRole) => {
    const userToUpdate = users.find((user) => user.id === userId);

    if (!userToUpdate) return;

    const updatedUser = { ...userToUpdate, role: newRole };

    // Update the state
    const updatedUsers = users.map((user) =>
      user.id === userId ? updatedUser : user
    );
    setUsers(updatedUsers);

    // Send the full user object to the backend
    axiosInstance
      .put(`/users/${userId}`, updatedUser)
      .catch((err) => console.error("Error updating role:", err));
  };

  // Handle user status change (Active/Inactive)
  const handleStatusChange = (userId, newStatus) => {
    const userToUpdate = users.find((user) => user.id === userId);

    if (!userToUpdate) return;

    const updatedUser = { ...userToUpdate, status: newStatus };

    // Update the state
    const updatedUsers = users.map((user) =>
      user.id === userId ? updatedUser : user
    );
    setUsers(updatedUsers);

    // Send the full user object to the backend
    axiosInstance
      .put(`/users/${userId}`, updatedUser)
      .catch((err) => console.error("Error updating status:", err));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/adminhome"
                className="hover:underline text-lg font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin" className="hover:underline text-lg font-medium">
                Admin
              </Link>
            </li>
            <li>
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="py-10 px-6">
        <section className="bg-white shadow-md rounded-lg p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Manage Users
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    ID
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Name
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Email
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Role
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Status
                  </th>
                  <th className="px-4 py-2 border border-gray-300 text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-2 border border-gray-300">
                      {user.id}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {user.name}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      {user.email}
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <select
                        className="bg-gray-100 rounded p-1"
                        value={user.role}
                        onChange={(e) =>
                          handleRoleChange(user.id, e.target.value)
                        }
                      >
                        {roles.map((role) => (
                          <option key={role.id} value={role.name}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <select
                        className="bg-gray-100 rounded p-1"
                        value={user.status}
                        onChange={(e) =>
                          handleStatusChange(user.id, e.target.value)
                        }
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 border border-gray-300">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                        onClick={() => {
                          const confirmDelete = window.confirm(
                            `Are you sure you want to delete ${user.name}?`
                          );
                          if (confirmDelete) {
                            axiosInstance
                              .delete(`/users/${user.id}`)
                              .then(() =>
                                setUsers(users.filter((u) => u.id !== user.id))
                              )
                              .catch((err) =>
                                console.error("Error deleting user:", err)
                              );
                          }
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Roles</h2>
          <ul className="space-y-2">
            {roles.map((role) => (
              <li
                key={role.id}
                className="flex justify-between bg-gray-100 p-3 rounded shadow"
              >
                <span className="font-medium">{role.name}</span>
                <span className="text-gray-600">
                  Permissions: {role.permissions.join(", ")}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Admin;
