import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import styles from "./NavigationBar.module.css";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";

interface Props{
  onSearch: (searchText: string) => void;
}

const NavigationBar = ({onSearch}: Props) => {
  return (
    <div>
      <HStack className={styles.HSack} gap="4">
        <Image src={logo} className={styles.Logo} />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavigationBar;
