import { Image } from "@chakra-ui/react";
import bullsEye from "../../assets/bulls-eye.webp";
import meh from "../../assets/meh.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import styles from "./Emoji.module.css";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  let imageConfig;
  switch (rating) {
    case 5:
      imageConfig = { src: bullsEye, alt: "exceptional", boxSize: "25px" };
      break;
    case 4:
      imageConfig = { src: thumbsUp, alt: "recommended", boxSize: "20px" };
      break;
    case 3:
      imageConfig = { src: meh, alt: "meh", boxSize: "20px" };
      break;

    default:
      break;
  }

  return imageConfig ? (
    <Image {...imageConfig} className={styles.emoji} />
  ) : null;
};

export default Emoji;
