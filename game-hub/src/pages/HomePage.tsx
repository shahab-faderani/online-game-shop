import { Grid, GridItem, HStack, Theme } from "@chakra-ui/react";
import { useColorMode } from "../components/ui/color-mode";
import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

import GameHeading from "../components/GameHeading";

const HomePage = () => {
  const { colorMode } = useColorMode();
  return (
    <Theme appearance={colorMode} colorPalette="blackAlpha">
      <Grid
        templateAreas={{
          lg: `"aside main"`,
          base: `"main"`,
        }}
        templateColumns={{
          lg: "18rem 1fr",
          base: "1fr",
        }}
      >
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingX={8}
        >
          <GenreList />
        </GridItem>
        <GridItem area="main" paddingX={8} marginBottom={8}>
          <GameHeading />
          <HStack marginBottom={9} gap={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>

          <GameGrid />
        </GridItem>
      </Grid>
    </Theme>
  );
};

export default HomePage;
