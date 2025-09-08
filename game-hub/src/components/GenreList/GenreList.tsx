import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";
import { HStack, Image, Text, VStack } from "@chakra-ui/react";
import styles from "./GenreList.module.css";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();
  return (
    <VStack align="stretch">
      {genres.map((genre) => (
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
