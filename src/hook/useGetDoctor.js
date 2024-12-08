import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetDoctor = ({ id }) => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "getDoctor", id],
    queryFn: async () => {
      const { data, status } = await apiFetch(`/doctors/${id}`, {
        method: "GET",
      });
      console.log(data);
      if (!status) return null;
      else return data;
    },
    enabled: !!id && !!accessToken,
    refetchOnWindowFocus: false,
  });

  return query;
};
