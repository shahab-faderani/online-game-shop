import { Text } from "@chakra-ui/react";
import useGames, { Platform } from "@/hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import styles from "./GameGrid.module.css";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = Array(12)
    .fill(0)
    .map((_, index) => index);

  return (
    <>
      {error && <Text>{error}</Text>}
      <div className={styles.container}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {!isLoading &&
          games.map((game) => <GameCard key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default GameGrid;
