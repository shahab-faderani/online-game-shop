import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { HStack, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import GenreListSkeleton from "../GenreListSkeleton";
import styles from "./GenreList.module.css";

const GenreList = () => {
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
              <Text className={styles.title}>{genre.name}</Text>
            </HStack>
          ))}
    </VStack>
  );
};

export default GenreList;
