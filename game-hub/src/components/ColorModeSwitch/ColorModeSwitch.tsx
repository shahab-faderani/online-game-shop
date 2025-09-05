import { ClientOnly, IconButton, Skeleton, Text, Flex } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex p={4} align="center" gap={3}>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
        <Text> {colorMode === "light" ? "Light Mode" : "Dark Mode"}</Text>
      </ClientOnly>
    </Flex>
  );
};

export default ColorModeSwitch;
