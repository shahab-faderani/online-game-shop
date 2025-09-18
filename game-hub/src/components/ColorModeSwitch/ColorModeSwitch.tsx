import { useState, useEffect } from "react";
import { Flex, IconButton, Text, Skeleton, ClientOnly } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import styles from "./ColorModeSwitch.module.css";

interface Props {
  display?: {
    base?: "none" | "block" | "flex" | "inline" | "inline-block" | "inline-flex";
    sm?: "none" | "block" | "flex" | "inline" | "inline-block" | "inline-flex";
    md?: "none" | "block" | "flex" | "inline" | "inline-block" | "inline-flex";
    lg?: "none" | "block" | "flex" | "inline" | "inline-block" | "inline-flex";
    xl?: "none" | "block" | "flex" | "inline" | "inline-block" | "inline-flex";
    "2xl"?: "none" | "block" | "flex" | "inline" | "inline-block" | "inline-flex";
  };
}
const ColorModeSwitch = ({display}: Props) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const useDelayedValue = <T,>(value: T, delay: number): T => {
    const [delayed, setDelayed] = useState(value);

    useEffect(() => {
      const id = setTimeout(() => setDelayed(value), delay);
      return () => clearTimeout(id);
    }, [value, delay]);

    return delayed;
  };

  console.log(display)

  const delayedMode = useDelayedValue(colorMode, 100);

  return (
    <Flex p={4} align="center" gap={3} className={styles.wrapper} display={display}>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="outline"
          borderRadius="10px"
          size="2xl"
          aria-label="Toggle color theme"
          className={colorMode === "light" ? styles.sunRise : styles.moonUp}
        >
          {delayedMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <Text className={styles.text}>
          {colorMode === "light" ? "Light Mode" : "Dark Mode"}
        </Text>
      </ClientOnly>
    </Flex>
  );
};

export default ColorModeSwitch;
