import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetDoctorProfile = () => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "getDoctorProfile"],
    queryFn: async () => {
      const { data, status } = await apiFetch(`/doctors/doctorinfo`, {
        method: "GET",
      });
      console.log(data);
      if (!status) return null;
      else return data;
    },
    enabled: !!accessToken,
  });

  return query;
};
