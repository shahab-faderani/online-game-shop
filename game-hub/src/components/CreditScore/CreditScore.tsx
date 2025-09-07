import { Badge } from "@chakra-ui/react";
import styles from "./CreditScore.module.css";

interface Props {
  score: number;
}

const CreditScore = ({ score }: Props) => {
    let color = "green";
    if (score < 50) {
        color = "red";
    } else if (score < 75) {
        color = "yellow";
    }
    
  return <Badge colorPalette={color} className={styles.Badge}>{score}</Badge>;
};

export default CreditScore;
