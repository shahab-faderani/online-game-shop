import { Grid, GridItem, HStack, Theme } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";

import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

import GameHeading from "./components/GameHeading";
import gameQueryStore from "./stateManagment/games/store";

const App = () => {
  const { colorMode } = useColorMode();
  const { gameQuery, setGenreId, setPlatformId, setSearchText, setSortOrder } =
    gameQueryStore();

  return (
    <Theme appearance={colorMode} colorPalette="blackAlpha">
      <Grid
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `"nav" "main"`,
        }}
        templateColumns={{
          lg: "18rem 1fr",
          base: "1fr",
        }}
      >
        <GridItem area="nav" paddingX={6}>
          <NavigationBar />
        </GridItem>
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

export default App;
