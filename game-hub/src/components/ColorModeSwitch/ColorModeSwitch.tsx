import { useState, useEffect } from "react";
import { Flex, IconButton, Text, Skeleton, ClientOnly } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";
import styles from "./ColorModeSwitch.module.css";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const useDelayedValue = <T,>(value: T, delay: number): T => {
    const [delayed, setDelayed] = useState(value);

    useEffect(() => {
      const id = setTimeout(() => setDelayed(value), delay);
      return () => clearTimeout(id);
    }, [value, delay]);

    return delayed;
  };

  const delayedMode = useDelayedValue(colorMode, 100);

  return (
    <Flex p={4} align="center" gap={3}>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton
          onClick={toggleColorMode}
          variant="outline"
          size="sm"
          aria-label="Toggle color theme"
          className={colorMode === "light" ? styles.sunRise : styles.moonUp}
        >
          {delayedMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <Text>{colorMode === "light" ? "Light Mode" : "Dark Mode"}</Text>
      </ClientOnly>
    </Flex>
  );
};

export default ColorModeSwitch;
