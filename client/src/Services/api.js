import axios from "axios";

const API_URL = "http://localhost:8080/api";

const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

const createResume = async (resumeData, token) => {
  const response = await axios.post(`${API_URL}/resumes`, resumeData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const getResumes = async (token) => {
  const response = await axios.get(`${API_URL}/resumes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export { registerUser, loginUser, createResume, getResumes };
