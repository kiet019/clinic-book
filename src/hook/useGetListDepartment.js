import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetListDepartment = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "departments"],
    queryFn: async () => {
      const { data, status } = await apiFetch("/departments", {
        method: "GET",
      });
      if (!status) return [];
      else return data;
    },
    enabled: true,
  });

  return query;
};
