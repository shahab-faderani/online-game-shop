import { Text } from "@chakra-ui/react";
import useGames from "@/hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCardSkeleton";
import styles from "./GameGrid.module.css";
import { GameQuery } from "@/hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array(12)
    .fill(0)
    .map((_, index) => index);

  if (error) return <Text>{error.message}</Text>;

  return (
    <div className={styles.container}>
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {!isLoading &&
        data?.results.map((game) => <GameCard key={game.id} game={game} />)}
    </div>
  );
};

export default GameGrid;
