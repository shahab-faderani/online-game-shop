import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import styles from "./NavigationBar.module.css";
import ColorModeSwitch from "../ColorModeSwitch";

const NavigationBar = () => {
  return (
    <div>
      <HStack className={styles.HSack}>
        <Image src={logo} className={styles.Logo} />
        <Text>Navigation Bar</Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavigationBar;
