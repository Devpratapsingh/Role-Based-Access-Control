import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInstance = axios.create({
  baseURL: "https://rbdev.onrender.com", // Base URL for your real or mock server
  timeout: 10000,
});

// Use MockAdapter only in testing environments
if (process.env.NODE_ENV === "test") {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

  // Mock GET request for users
  mock.onGet("/users").reply(200, [
    { id: 1, name: "Dev Pratap", email: "dev@gmail.com", role: "Admin" },
    { id: 2, name: "Angad", email: "angad@gmail.com", role: "User" },
  ]);

  // Mock POST request to create a user
  mock.onPost("/users").reply(201, (config) => {
    const newUser = JSON.parse(config.data);
    return [201, newUser];
  });
}

export default axiosInstance;
