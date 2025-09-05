import { Grid, GridItem} from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"nav nav" "aside main"`,
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavigationBar/>
      </GridItem>
      <GridItem area="aside" background="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>
      <GridItem area="main" background="blue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
