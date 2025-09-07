import { Skeleton, SkeletonText } from "@chakra-ui/react";
import styles from "./GameCardSkeleton.module.css";

const GameCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <Skeleton className={styles.skeleton}></Skeleton>
      <div>
        <SkeletonText className={styles.skeletonText}></SkeletonText>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
