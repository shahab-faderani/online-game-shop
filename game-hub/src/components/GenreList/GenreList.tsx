import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { Card, Image, VStack } from "@chakra-ui/react";
import { useColorMode } from "../../components/ui/color-mode";
import GenreListSkeleton from "../GenreListSkeleton";
import styles from "./GenreList.module.css";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const { colorMode } = useColorMode();

  const cardClass = colorMode === "light" ? styles.lightCard : styles.darkCard;

  const skeletons = Array(20)
    .fill(0)
    .map((_, index) => index);

  if (error) return null;

  return (
    <VStack align="stretch">
      {isLoading
        ? skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)
        : genres.map((genre) => (
            <Card.Root
              key={genre.id}
              className={`${styles.card} ${cardClass} ${
                genre.id === selectedGenre?.id ? styles.activeCard : ""
              }`}
              onClick={() => onSelectGenre(genre)}
              tabIndex={0}
            >
              <Image
                className={styles.image}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Card.Body className={styles.body}>
                <h3 className={styles.heading}>{genre.name}</h3>
              </Card.Body>
            </Card.Root>
          ))}
    </VStack>
  );
};

export default GenreList;
