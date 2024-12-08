import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetDoctorAppointment = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "doctorAppointment"],
    queryFn: async () => {
      const { data, status } = await apiFetch("/appointments/doctor", {
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
