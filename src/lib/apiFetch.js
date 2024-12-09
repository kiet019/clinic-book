import { getAccessToken } from "./token";
import { BACKEND_END_POINT } from "./config";

export const apiFetch = async (url, { method, body }) => {
  const accessToken = getAccessToken();

  const res = await fetch(BACKEND_END_POINT + url, {
    headers: {
      "Content-Type": "Application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
    method,
    body,
    // body: JSON.stringify(body),
  });

  let data = "";
  const contentType = res.headers.get("Content-Type");

  if (contentType && contentType.includes("application/json")) {
    data = await res.json();
  } else {
    data = await res.text();
  }

  return {
    data,
    status: res.ok,
  };
};
