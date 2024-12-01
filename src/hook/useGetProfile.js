import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";

export const useGetProfile = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken],
    queryFn: apiFetch("/", {
      method: "POST",
      body: JSON.stringify(value),
    }),
    enabled: true,
  });

  return query
};
