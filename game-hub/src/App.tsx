import { Grid, GridItem, HStack, Theme } from "@chakra-ui/react";
import { useColorMode } from "./components/ui/color-mode";

import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

const App = () => {
  const { colorMode } = useColorMode();
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Theme appearance={colorMode} colorPalette="teal">
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
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
        <GridItem area="main" paddingX={8}>
          <HStack marginBottom={9} gap={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector />
          </HStack>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Theme>
  );
};

export default App;
