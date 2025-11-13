import { Platform } from "../../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import styles from "./PlatformIconList.module.css";
import { useColorMode } from "../../components/ui/color-mode";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const { colorMode } = useColorMode();
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
    nintendo: SiNintendoswitch,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          className={
            colorMode === "light" ? styles.lightModeIcon : styles.darkModeIcon
          }
          key={platform.id}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
