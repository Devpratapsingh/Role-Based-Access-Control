# Role-Based Access Control (RBAC) Management System
#### This is a Role-Based Access Control (RBAC) management system built using React.js. The application differentiates between user and admin roles, offering functionalities to manage users and their roles effectively. It leverages a mock API for CRUD operations, providing a real-world simulation of user and role management.

# Features
### User Features:
#### Users can Sign Up and Log In to the system.
#### After logging in, users can:
#### View their details (e.g., name, email, role, status).
#### Access limited functionalities as defined by their role.

### Admin Features:
#### Admins can:
#### View a list of all users.
#### Update the status (Active/Inactive) of any user.
#### Modify roles assigned to users.
#### Perform CRUD operations (Create, Read, Update, Delete) on user data.

# Backend Simulation:
#### The project uses Axios Mock Adapter and json-server for a simulated backend.
#### Enables CRUD operations like:
#### Adding new users.
#### Updating user roles and status.
#### Deleting users.

# Tech Stack
### Frontend:
#### React.js: Component-based UI development.
#### React Router DOM: For handling navigation and routing.
#### Tailwind CSS: For clean, responsive, and modern styling.

### Backend:
#### Axios Mock Adapter: Simulates API responses for CRUD operations.
#### json-server: Provides a mock REST API for testing.

# Installation
  #### npm install
  #### npm install react-router-dom
  #### npm install -g json-server
  #### npm install tailwindcss
  #### npm install react-icons

# Starting the Mock API Server
  #### json-server --watch db.json --port 3000

# Running the React Project
  #### npm run dev
