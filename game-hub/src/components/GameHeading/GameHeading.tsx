import { GameQuery } from "@/hooks/useGames";
import { Heading } from "@chakra-ui/react";
import styles from "./GameHeading.module.css";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <Heading className={styles.heading}>{heading}</Heading>;
};

export default GameHeading;
