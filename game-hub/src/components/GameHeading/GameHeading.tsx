import { GameQuery } from "@/services/gameService";
import { Heading } from "@chakra-ui/react";
import styles from "./GameHeading.module.css";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const selectedGenre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  );
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return <Heading className={styles.heading}>{heading}</Heading>;
};

export default GameHeading;
