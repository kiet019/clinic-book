import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetUserAppointment = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "userAppointment"],
    queryFn: async () => {
      const { data, status } = await apiFetch("/user/appointments", {
        method: "GET",
      });
      console.log(data)
      if (!status) return [];
      else return data;
    },
    enabled: true,
  });

  return query;
};
