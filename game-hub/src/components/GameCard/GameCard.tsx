import { HStack, Image, Card } from "@chakra-ui/react";
import { Game } from "../../services/gameService";
import styles from "./GameCard.module.css";
import { useColorMode } from "../../components/ui/color-mode";
import PlatformIconList from "../PlatformIconList";
import CreditScore from "../CreditScore";
import getCroppedImageUrl from "../../services/image-url";
import Emoji from "../Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { colorMode } = useColorMode();

  const cardClass = colorMode === "light" ? styles.lightCard : styles.darkCard;

  return (
    <Card.Root className={`${styles.card} ${cardClass}`}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
        className={styles.image}
      />
      <Card.Body className={styles.body}>
        <HStack justifyContent={"space-between"} marginBottom="1rem">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreditScore score={game.metacritic} />
        </HStack>
        <h3 className={styles.heading}>
          {game.name} <Emoji rating={game.rating_top} />
        </h3>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
