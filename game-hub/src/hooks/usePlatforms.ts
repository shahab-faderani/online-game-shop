import { useQuery } from "@tanstack/react-query";
import platformService from "@/services/platformService";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 12 * 60 * 60 * 1000, // 12 hours
  });
};

export default usePlatforms;
