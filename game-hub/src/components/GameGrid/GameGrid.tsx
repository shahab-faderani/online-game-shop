import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import styles from "./GameGrid.module.css";
import { GameQuery } from "@/services/gameService";
import { Menu, Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array(12)
    .fill(0)
    .map((_, index) => index);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
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
      {hasNextPage && (
        <div style={{ marginTop: "1rem" }}>
          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                variant="surface"
                size="lg"
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? "Loading..." : "Load More"}
              </Button>
            </Menu.Trigger>
          </Menu.Root>
        </div>
      )}
    </>
  );
};

export default GameGrid;
