export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const setAccessToken = (accessToken) => {
  if (accessToken === "") {
    localStorage.removeItem("accessToken");
  }
  return localStorage.setItem("accessToken", accessToken);
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const setRole = (role) => {
  if (role === "") {
    localStorage.removeItem("role");
  }
  return localStorage.setItem("role", role);
};
