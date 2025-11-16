import NavigationBar from "@/components/NavigationBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavigationBar />
      <Box padding={5}>
        <Heading>Oops!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "Sorry, The page does not exist"
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
