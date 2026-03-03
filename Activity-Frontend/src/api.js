import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8881",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  const publicRoutes = ["/api/auth/login", "/api/auth/register"];

  const isPublic = publicRoutes.some((route) =>
    req.url.includes(route)
  );

  if (!isPublic && token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;