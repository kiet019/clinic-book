import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetDoctorRating = ({ id }) => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "rating", id],
    queryFn: async () => {
      const { data, status } = await apiFetch(`/doctors/${id}/ratings`, {
        method: "GET",
      });
      if (!status) return null;
      else return data;
    },
    enabled: !!id && !!accessToken,
    refetchOnWindowFocus: false,
  });

  return query;
};
