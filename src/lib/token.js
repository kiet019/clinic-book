export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
export const setAccessToken = (accessToken) => {
  if (accessToken === "") {
    localStorage.removeItem("accessToken");
  }
  return localStorage.setItem("accessToken", accessToken);
};
