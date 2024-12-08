import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetListDoctor = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "doctor"],
    queryFn: async () => {
      const { data, status } = await apiFetch("/doctors/getAlldoctor", {
        method: "GET",
      });
      if (!status) return [];
      else return data;
    },
    enabled: true,
  });

  return query;
};
