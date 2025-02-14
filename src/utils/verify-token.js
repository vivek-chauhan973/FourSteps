import jwtDecode from "jwt-decode";

const isTokenExpired = (token) => {
  if (!token) return true;
  const decoded = jwtDecode(token);
  return decoded.exp * 1000 < Date.now();
};

const refreshAccessToken = async () => {
  const res = await fetch("/api/auth/refresh-token", { method: "POST", credentials: "include" });

  if (!res.ok) {
    return null;
  }

  const { accessToken } = await res.json();
  localStorage.setItem("accessToken", accessToken);
  return accessToken;
};

export const fetchWithAuth = async (url, options = {}) => {
  let token = localStorage.getItem("accessToken");

  if (isTokenExpired(token)) {
    token = await refreshAccessToken();
    if (!token) {
      window.location.href = "/admin/login"; // Redirect to login if refresh fails
      return null;
    }
  }

  return fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${token}` },
  }).then((res) => res.json());
};
