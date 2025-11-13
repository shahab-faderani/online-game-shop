import { GameQuery } from "@/services/gameService";
import { Heading } from "@chakra-ui/react";
import styles from "./GameHeading.module.css";
import { useGenre } from "@/hooks/useGenres";
import { usePlatform } from "@/hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading className={styles.heading}>{heading}</Heading>;
};

export default GameHeading;
