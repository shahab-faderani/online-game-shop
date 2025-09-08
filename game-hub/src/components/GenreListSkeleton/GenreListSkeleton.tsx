import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import styles from "./GenreListSkeleton.module.css";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton className={styles.skeleton}/>
      <SkeletonText/>
    </HStack>
  );
};

export default GenreListSkeleton;
