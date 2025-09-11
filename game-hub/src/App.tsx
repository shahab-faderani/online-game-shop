import { Grid, GridItem, Theme } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const App = () => {
  const { colorMode } = useColorMode();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
        <GridItem area="main" paddingX={8}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
        </GridItem>
      </Grid>
    </Theme>
  );
};

export default App;
