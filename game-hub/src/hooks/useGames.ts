import { useQuery } from "@tanstack/react-query";
import gameService from "@/services/gameService";
import { GameQuery } from "@/services/gameService";
import { FetchResponse } from "@/services/api-client";
import { Game } from "@/services/gameService";

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey:
      gameQuery.genre || gameQuery.platform ? ["games", gameQuery] : ["games"],
    queryFn: () =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 60 * 60 * 1000, // 1 hour
  });

export default useGames;
