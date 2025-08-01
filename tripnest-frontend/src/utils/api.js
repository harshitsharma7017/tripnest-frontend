import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:5000/api";

// Public axios instance
const publicAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Authenticated axios instance
const authAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token to every protected request
authAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global 401 handler
authAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please log in again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Exported API methods
const API = {
  // Public
  login: (data) => publicAxios.post("/auth/login", data),
  register: (data) => publicAxios.post("/auth/register", data),

  // Protected (use these only after login)
  getProfile: () => authAxios.get("/user/me"),
  bookTrip: (tripId, data) => authAxios.post(`/trips/${tripId}/book`, data),
  getBookings: () => authAxios.get("/bookings"),
};

export default API;
