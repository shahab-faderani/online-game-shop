import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} className={styles.Logo} />
        <Text>Navigation Bar</Text>
      </HStack>
    </div>
  );
};

export default NavigationBar;
