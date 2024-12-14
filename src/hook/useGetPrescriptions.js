import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetPrescriptions = (appointmentId) => {
  const accessToken = getAccessToken();

  const query = useQuery({
    queryKey: [accessToken, "prescriptions", appointmentId],
    queryFn: async () => {
      const { data, status } = await apiFetch(
        "/prescriptions/" + appointmentId,
        {
          method: "GET",
        }
      );
      console.log(data)
      if (!status) return null;
      else return data;
    },
    enabled: true,
  });

  return query;
};
