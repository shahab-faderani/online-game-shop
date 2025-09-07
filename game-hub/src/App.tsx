import { Grid, GridItem, Theme } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import { useColorMode } from "./components/ui/color-mode";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const App = () => {
  const { colorMode } = useColorMode();

  return (
    <Theme appearance={colorMode} colorPalette="teal">
      <Grid
        templateAreas={{
          lg: `"nav nav" "aside main"`,
          base: `"nav" "main"`,
        }}
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
        <GridItem area="aside" display={{ base: "none", lg: "block" }}>
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </Theme>
  );
};

export default App;
