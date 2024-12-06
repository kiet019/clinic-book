import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetCurrentDoctorTimeslots = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "timeslots"],
    queryFn: async () => {
      const { data, status } = await apiFetch(`/doctors/timeslots`, {
        method: "GET",
      });
      if (!status) return null;
      else return data;
    },
    enabled: !!accessToken,
    refetchOnWindowFocus: false,
  });

  return query;
};
