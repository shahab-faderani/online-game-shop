import { Skeleton, SkeletonText, Card } from "@chakra-ui/react";
import styles from "./GameCardSkeleton.module.css";

const GameCardSkeleton = () => {
  return (
    <Card.Root className={styles.card}>
      <Skeleton className={styles.skeleton}></Skeleton>
      <Card.Body>
        <SkeletonText/>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
