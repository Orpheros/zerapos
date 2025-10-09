// services/menuService.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const createHeaders = (additionalHeaders: Record<string, string> = {}) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...additionalHeaders,
  };

  if (API_KEY) {
    headers["x-api-key"] = API_KEY;
  }

  return headers;
};

export const fetchAllMenu = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/menu/allMenu`, {
      method: "GET",
      headers: createHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching menu:", error);
    throw error;
  }
};
