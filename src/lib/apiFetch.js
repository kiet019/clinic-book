import { getAccessToken } from "./token";
import { BACKEND_END_POINT } from "./config";

export const apiFetch = async (url, { method, body }) => {
  const accessToken = getAccessToken();

  const res = await fetch(BACKEND_END_POINT + url, {
    headers: {
      "Content-Type": "Application/json",
    //   Authorization: accessToken,
    },
    method,
    body
    // body: JSON.stringify(body),
  });

  const data = await res.json();
  return {
    data,
    status: res.ok,
  };
};
