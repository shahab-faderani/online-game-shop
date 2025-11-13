import { useInfiniteQuery } from "@tanstack/react-query";
import gameService from "@/services/gameService";
import { GameQuery } from "@/services/gameService";
import { FetchResponse } from "@/services/api-client";
import { Game } from "@/services/gameService";

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey:
      gameQuery.genreId || gameQuery.platformId
        ? ["games", gameQuery]
        : ["games"],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getAll({
        params: {
          genres: gameQuery.genreId || "51",
          parent_platforms: gameQuery.platformId,
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
