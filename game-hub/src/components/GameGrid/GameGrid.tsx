import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "../GameCard";
import styles from "./GameGrid.module.css";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <div className={styles.container}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
