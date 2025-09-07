import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import styles from "./GameGrid.module.css";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

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
