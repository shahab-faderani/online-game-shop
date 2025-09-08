import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { Button, HStack, Image, VStack } from "@chakra-ui/react";
import GenreListSkeleton from "../GenreListSkeleton";
import styles from "./GenreList.module.css";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  const skeletons = Array(20)
    .fill(0)
    .map((_, index) => index);

  if (error) return null;

  return (
    <VStack align="stretch">
      {isLoading
        ? skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)
        : genres.map((genre) => (
            <HStack key={genre.id} className={styles.listItem}>
              <Image
                className={styles.image}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                className={styles.title}
                variant="plain"
                color="ButtonText"
                _hover={{ textDecoration: "underline" }}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          ))}
    </VStack>
  );
};

export default GenreList;
