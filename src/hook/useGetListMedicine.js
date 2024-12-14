import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetListMedichine = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "ListMedichine", 1],
    queryFn: async () => {
      const { data, status } = await apiFetch(
        "/medicines?pageNo=0&pageSize=100&sortBy=medicineId&sortDir=asc",
        {
          method: "GET",
        }
      );
      console.log(data)
      if (!status) return null;
      else return data.medicines;
    },
    enabled: true,
  });

  return query;
};
