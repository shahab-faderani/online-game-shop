import { Heading } from "@chakra-ui/react";
import styles from "./GameHeading.module.css";
import { useGenre } from "@/hooks/useGenres";
import { usePlatform } from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stateManagment/games/store";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Heading className={styles.heading}>{heading}</Heading>;
};

export default GameHeading;
