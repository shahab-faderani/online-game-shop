import { HStack, Image, Box } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import styles from "./NavigationBar.module.css";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";

const NavigationBar = () => {
  return (
    <div>
      <Box padding={5}>
        <HStack className={styles.HSack} gap="4">
          <Image src={logo} className={styles.Logo} />
          <SearchInput />
          <ColorModeSwitch display={{ base: "none", md: "flex" }} />
        </HStack>
      </Box>
    </div>
  );
};

export default NavigationBar;
