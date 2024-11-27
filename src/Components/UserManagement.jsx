import React, { useState, useEffect } from "react";

// This component will manage the users
function UserManagement() {
  const [users, setUsers] = useState([]);

  // Fetch users from the API (or mock data)
  useEffect(() => {
    fetch("/api/users") // Adjust to your actual API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Edit user
  const editUser = (userId) => {
    // Navigate to edit user page or open a modal (you can implement this)
    console.log(`Editing user with ID: ${userId}`);
  };

  // Delete user
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);

    // Optionally, make an API call to delete the user on the server
    fetch(`/users/${userId}`, {
      method: "DELETE",
    }).catch((error) => console.error("Error deleting user:", error));
  };

  // Toggle user status
  const toggleStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: !user.status } : user
    );
    setUsers(updatedUsers);

    // Optionally, make an API call to update user status on the server
    fetch(`/users/${userId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: updatedUsers.find((user) => user.id === userId).status,
      }),
    }).catch((error) => console.error("Error updating user status:", error));
  };

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status ? "Active" : "Inactive"}</td>
              <td>
                <button onClick={() => editUser(user.id)}>Edit</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
                <button onClick={() => toggleStatus(user.id)}>
                  {user.status ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
