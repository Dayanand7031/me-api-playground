import axios from "axios";

const API = axios.create({
  baseURL: "https://me-api-playground-85ed.onrender.com", // FastAPI runs on port 8000
});

// ---- Profile CRUD ----
export const getProfile = () => API.get("/profile");
export const createProfile = (data) => API.post("/profile", data);
export const updateProfile = (data) => API.put("/profile", data);
export const deleteProfile = () => API.delete("/profile");

// ---- Queries ----
export const getProjectsBySkill = (skill) => API.get(`/projects?skill=${skill}`);
export const getTopSkills = () => API.get("/skills/top");
export const searchProfile = (q) => API.get(`/search?q=${q}`);
export const checkHealth = () => API.get("/health");
