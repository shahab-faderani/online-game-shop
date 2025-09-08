import { Grid, GridItem, Theme } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

const App = () => {
  const { colorMode } = useColorMode();
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }}
          paddingX={5}
        >
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
        <GridItem area="main" paddingX={5}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </Theme>
  );
};

export default App;
