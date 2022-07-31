import { Box, Button, Heading, Text, useColorMode } from "@chakra-ui/react";
export default function Page() {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      minHeight={`100vh`}
      display="grid"
      placeItems={"center"}
      alignItems="center"
    >
      <Box textAlign="center">
        <Heading mb={2}>Hello world, </Heading>
        <Text mb={2}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          consequuntur ipsa provident, voluptas corrupti sit dolorem est
          laboriosam minus itaque impedit facilis! Iste, illum modi! Unde
          debitis velit incidunt laborum!
        </Text>
        <Button onClick={toggleColorMode}>click me</Button>
      </Box>
    </Box>
  );
}
