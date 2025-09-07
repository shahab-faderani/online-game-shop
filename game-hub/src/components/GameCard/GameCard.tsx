import { Text } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import styles from "./GameCard.module.css";
import { useColorMode } from "../../components/ui/color-mode";
import PlatformIconList from "../PlatformIconList"

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  const cardClass = colorMode === "light" ? styles.lightCard : styles.darkCard;
  const bodyClass = colorMode === "light" ? styles.lightBody : styles.darkBody;
  const headingClass =
    colorMode === "light" ? styles.lightHeading : styles.darkHeading;

  return (
    <div className={`${styles.card} ${cardClass}`} tabIndex={0}>
      <img
        src={game.background_image}
        alt={game.name}
        className={styles.image}
      />
      <div className={bodyClass}>
        <h3 className={headingClass}>{game.name}</h3>
        <PlatformIconList platforms={game.parent_platforms.map( p => p.platform)} />
      </div>
    </div>
  );
};

export default GameCard;
