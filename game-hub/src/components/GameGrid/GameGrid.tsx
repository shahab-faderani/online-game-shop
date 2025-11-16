import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import styles from "./GameGrid.module.css";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGameQueryStore from "@/stateManagment/games/store";

const GameGrid = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = Array(12)
    .fill(0)
    .map((_, index) => index);

  if (error) return <Text>{error.message}</Text>;

  const fetchGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Text>Loading...</Text>}
    >
      <div className={styles.container}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => {
                return <GameCard key={game.id} game={game} />;
              })}
            </React.Fragment>
          ))}
      </div>
    </InfiniteScroll>
  );
};

export default GameGrid;
