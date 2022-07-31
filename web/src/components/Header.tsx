import { Box, Button, Heading } from "@chakra-ui/react";
import { Link, useMatch } from "react-router-dom";

export const Header = () => {
  const match = useMatch("/boards/:id/*");
  return (
    <Box
      borderBottom="1px solid"
      borderColor="grey.2xlight"
      display="flex"
      width="full"
      h="full"
      px={6}
      alignItems="center"
      bg="white"
      color="grey.4xdark"
    >
      {match ? (
        <>
          <Heading size="md">Platform Launch</Heading>
          <Box ml="auto">
            <Link to={match.pathname + "tasks/new"}>
              <Button colorScheme="purple" size="sm">
                Add New Task
              </Button>
            </Link>
          </Box>
        </>
      ) : null}
    </Box>
  );
};
