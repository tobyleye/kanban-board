import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BoardLayout } from "./components/BoardLayout";
import { NewBoard } from "./components/NewBoard";
import { NotFound } from "./components/NotFound";
import { theme } from "./theme";

function Index() {
  return (
    <Box w="full" h="full" display="grid" placeItems="center" textAlign="center">
      <Text color="grey.light" fontSize="sm">
        You are one board away from getting started!
      </Text>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BoardLayout />}>
              <Route index element={<Index />} />
              <Route path="new-board" element={<NewBoard />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
