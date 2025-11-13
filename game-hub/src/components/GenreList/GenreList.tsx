import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { Genre } from "@/services/genreService";
import { Card, Heading, Image, VStack } from "@chakra-ui/react";
import { useColorMode } from "../../components/ui/color-mode";
import GenreListSkeleton from "../GenreListSkeleton";
import styles from "./GenreList.module.css";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  const { colorMode } = useColorMode();

  const cardClass = colorMode === "light" ? styles.lightCard : styles.darkCard;

  const skeletons = Array(20)
    .fill(0)
    .map((_, index) => index);

  if (error) return null;

  return (
    <>
      <Heading className={styles.heading}>Genres</Heading>
      <VStack align="stretch">
        {isLoading
          ? skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)
          : data?.results.slice(0, 13).map((genre) => (
              <Card.Root
                key={genre.id}
                className={`${styles.card} ${cardClass} ${
                  genre.id === selectedGenreId ? styles.activeCard : ""
                }`}
                onClick={() => onSelectGenre(genre)}
                tabIndex={0}
              >
                <Image
                  className={styles.image}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Card.Body className={styles.body}>
                  <h3 className={styles.title}>{genre.name}</h3>
                </Card.Body>
              </Card.Root>
            ))}
      </VStack>{" "}
    </>
  );
};

export default GenreList;
