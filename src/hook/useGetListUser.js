import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../lib/token";
import { apiFetch } from "../lib/apiFetch";

export const useGetListUser = () => {
    const accessToken = getAccessToken();

    const query = useQuery({
      queryKey: [accessToken, "listUser"],
      queryFn: async () => {
        const { data, status } = await apiFetch(
          "/user/admin/all?pageSize=100",
          {
            method: "GET",
          }
        );
        console.log(data)
        if (!status) return null;
        else return data.users;
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
    });
  
    return query;
}