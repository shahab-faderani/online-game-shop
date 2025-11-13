import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "@/services/gameService";
import { GameQuery } from "@/services/gameService";
import { FetchResponse } from "@/services/api-client";
import { Game } from "@/services/gameService";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey:
      gameQuery.genre || gameQuery.platform ? ["games", gameQuery] : ["games"],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 60 * 1000, // 1 hour
  });

export default useGames;
